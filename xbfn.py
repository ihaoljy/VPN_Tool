import time
import hashlib
import base64
import pyaes
import requests
from urllib.parse import quote
import random
import string
import os

def random_client_model():
    prefix = 'V'
    random_digits = ''.join(random.choices(string.digits, k=4))
    random_letter = random.choice(string.ascii_uppercase)
    return prefix + random_digits + random_letter

def get_request_key(t, i, k):
    ts = str(t)
    r = [5, 11, 11, 8, 27, 12, 9, 21] if t & 1 != 0 else [16, 8, 10, 12, 26, 11, 2, 18]
    key = i[r[0]] + i[r[1]] + ts[r[2]] + i[r[3]] + i[r[4]] + ts[r[5]] + i[r[6]] + i[r[7]]
    key += k[int(ts[11])] if len(k) else i[int(ts[11])]
    return key

def get_decrypt_key(t, i, k):
    ts = str(t)
    r = [5, 11, 11, 8, 27, 12, 9, 21] if t & 1 != 0 else [16, 8, 10, 12, 26, 11, 2, 18]
    key = i[r[0]] + i[r[1]] + ts[r[2]] + i[r[3]] + i[r[4]] + ts[r[5]] + i[r[6]] + i[r[7]]
    key += k[r[0]] + k[r[1]] + ts[r[2]] + k[r[3]] + k[r[4]] + ts[r[5]] + k[r[6]] + k[r[7]]
    return key

def timestamp():
    return int(time.time() * 1000)

def gen_req_id():
    t = int(time.time() / 1000)
    return hashlib.md5(f'req_id_{t}'.encode()).hexdigest()

def gen_serial_num():
    t = int(time.time() * 1800)
    return hashlib.md5(f'serial_num_{t}'.encode()).hexdigest()

def aes_decrypt(key, text):
    textbytes = base64.b64decode(text)
    decrypter = pyaes.Decrypter(pyaes.AESModeOfOperationCBC(key.encode(), b'A-16-Byte-String'))
    plainbytes = decrypter.feed(textbytes)
    plainbytes += decrypter.feed()
    return plainbytes.decode('utf-8')

def prepare_params(params):
    params['clientModel'] = random_client_model()
    params['clientType'] = 'Android'
    params['promoteChannel'] = 'S100'
    params['rankVersion'] = '10'
    params['version'] = 'v2.0.4'
    params = dict(sorted(params.items()))
    param_str = '&'.join([f'{k}={params[k]}' for k in params.keys()])
    sign_key = get_request_key(params['requestTimestamp'], params['requestId'], params.get('token', ''))
    params['sign'] = hashlib.md5(f'{param_str}{sign_key}'.encode()).hexdigest()
    return params

session = requests.Session()
session.trust_env = False

headers = {
    'Accept-Language': 'zh-CN,zh;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Linux; U; Android 7.1.2; zh-cn; V1936A Build/N2G47O) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
    'Content-Type': 'application/x-www-form-urlencoded'
}

def get_file_content(repo, folder, filename, token):
    url = f"https://api.github.com/repos/{repo}/contents/{folder}/{filename}"
    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }
    response = requests.get(url, headers=headers)
    if response.status_code == 200:
        return base64.b64decode(response.json().get('content')).decode('utf-8'), response.json().get('sha')
    return None, None

def upload_to_github(content, repo, folder, filename="node_data.txt", branch="main", token=None):
    if not token:
        return False

    current_content, sha = get_file_content(repo, folder, filename, token)

    if current_content == content:
        print("文件内容一致，不需要上传。")
        print(f"原始文件链接: https://raw.githubusercontent.com/{repo}/{branch}/{folder}/{filename}")
        return True

    url = f"https://api.github.com/repos/{repo}/contents/{folder}/{filename}"
    content_b64 = base64.b64encode(content.encode()).decode()

    data = {
        "message": "上传节点数据",
        "branch": branch,
        "content": content_b64
    }

    if sha:
        data["sha"] = sha  # 如果存在，添加 sha

    headers = {
        "Authorization": f"token {token}",
        "Accept": "application/vnd.github.v3+json"
    }

    response = requests.put(url, json=data, headers=headers)

    if response.status_code in [201, 200]:
        print(f"🎉文件成功上传到 GitHub！链接: https://raw.githubusercontent.com/{repo}/{branch}/{folder}/{filename}")
        return True
    else:
        print(f"上传文件失败：{response.status_code} {response.text}")
        return False

def login(serial):
    try:
        params = prepare_params({
            'requestId': gen_req_id(),
            'requestTimestamp': timestamp(),
            'serialNumber': serial
        })
        response = session.post('https://api.go01.top/proxy/user/auto/login', headers=headers, data=params)
        response.raise_for_status()
        return response.json().get('data').get('token')
    except Exception as e:
        print(f'登录失败：{e}')

def node_list(serial, token):
    try:
        params = prepare_params({
            'requestId': gen_req_id(),
            'requestTimestamp': timestamp(),
            'serialNumber': serial,
            'token': token,
            'vipType': 'vip'
        })
        response = session.post('https://api.go01.top/proxy/user/fetch/node/list', headers=headers, data=params)
        response.raise_for_status()
        return response.json().get('data')
    except Exception as e:
        print(f'获取节点列表失败：{e}')

def node_detail(serial, token, node_id):
    try:
        t = timestamp()
        rid = gen_req_id()
        params = prepare_params({
            'requestId': rid,
            'requestTimestamp': t,
            'serialNumber': serial,
            'token': token,
            'nodeId': node_id
        })
        response = session.post('https://api.go01.top/proxy/user/fetch/node/detail', headers=headers, data=params)
        response.raise_for_status()
        data = response.json().get('data')
        if data and 'content' in data:
            key = get_decrypt_key(t, rid, token)
            info = aes_decrypt(key, data['content']).split(',')
            trojan = f'trojan://{info[3]}@{info[1]}:{info[2]}?security=tls&type=tcp&headerType=none&allowInsecure=1#{quote(data.get("name"))}'
            return trojan
        else:
            print("节点信息不完整。")
            return None
    except Exception as e:
        print(f'获取节点信息失败：{e}')
        return None

def main():
    serial = gen_serial_num()
    token = login(serial)

    if token:
        nodes = node_list(serial, token)
        if nodes:
            all_trojan_links = []
            for node in nodes:
                trojan_link = node_detail(serial, token, node.get('id'))
                if trojan_link:
                    all_trojan_links.append(trojan_link)

            content = "\n".join(all_trojan_links)

            # GitHub 信息
            repo = "ihaoljy/VPN_Tool"  # 替换为你的 GitHub 用户名和仓库名
            folder = "sub"  # 替换为你希望上传到的文件夹名
            branch = "main"  # 或者你要上传到的其他分支
            token = "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"  # 替换为你的 GitHub 访问令牌

            # 判断是否提供 GitHub 信息
            if repo and folder and token:
                if upload_to_github(content, repo, folder, "nodes.txt", branch, token):
                    print("🎉恭喜您通过 GitHub 上传获取节点！")
                else:
                    print("上传到 GitHub 失败。")
            else:
                print("🎉恭喜您通过本地获取节点！")
        else:
            print("未找到节点。")
    else:
        print("登录失败，无法获取节点。")

if __name__ == "__main__":
    main()
