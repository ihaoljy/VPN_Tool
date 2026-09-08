/*
脚本作者：R·E
转载自：https://raw.githubusercontent.com/I-am-R-E/QuantumultX/main/JavaScript/Grow.js
*/

// This script was previously distributed by jsjiami.com.v5 in heavily
// obfuscated form (hex/base64 string tables, RC4 string decryption and
// anti-debugging/console-hijacking traps). It has been de-obfuscated below
// so its actual behaviour is fully auditable: it returns a static,
// hard-coded RevenueCat-style subscription payload for the "Grow" app.
// No functional logic has been changed.
;var subscriptionPayload = {
  'Congratulation on grabbing subscription data': '恭喜您抓取到订阅源数据',
  'You own the right to use it, no doubt about it but not to share': '您拥有使用权这是毋庸置疑的且不可以分享',
  'But you may not use this data without attribution': '但你不可以使用本数据却不注明出处',
  'You can join the group for help': 'https://t.me/yqc_777',
  '你可以加入群组获取帮助': 'https://t.me/yqc_777',
  'Author R_E': '作者 R_E',
  'Commercial use prohibited': '禁止商业用途',
  'For learning reference only': '仅供学习参考',
  'request_date_ms': 1642659888888,
  'request_date': '2022-01-10T06:13:40Z',
  'subscriber': {
    'non_subscriptions': {},
    'first_seen': '2022-01-10T04:16:35Z',
    'original_application_version': '631',
    'other_purchases': {},
    'management_url': 'itms-apps://apps.apple.com/account/subscriptions',
    'subscriptions': {
      'grow_299_1m': {
        'is_sandbox': false,
        'ownership_type': 'PURCHASED',
        'billing_issues_detected_at': null,
        'period_type': 'trial',
        'expires_date': '2090-01-01T00:00:00Z',
        'grace_period_expires_date': null,
        'unsubscribe_detected_at': null,
        'original_purchase_date': '2022-01-10T06:12:56Z',
        'purchase_date': '2022-01-10T06:12:55Z',
        'store': 'app_store'
      }
    },
    'entitlements': {
      'grow.pro': {
        'grace_period_expires_date': null,
        'purchase_date': '2022-01-10T06:12:55Z',
        'product_identifier': 'grow_299_1m',
        'expires_date': '2090-01-01T00:00:00Z'
      }
    },
    'original_purchase_date': '2022-01-10T01:08:16Z',
    'original_app_user_id': '$RCAnonymousID:64de6719695a4fc2a06afa24898888e3',
    'last_seen': '2022-01-10T04:16:35Z'
  }
};
$done({ 'body': JSON.stringify(subscriptionPayload) });
