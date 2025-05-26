# 什么是 Clash?
> 欢迎访问 Clash 内核项目的官方说明文档.
> Clash是一个跨平台的基于规则的代理工具, 在网络和应用层运行, 它已被互联网用户广泛采用. 无论如何, 任何想要改善其 Internet 体验的人都可以使用 Clash.

### 官网：https://clash.wiki/

虽然这个 Wiki 涵盖了上述两个版本的内容, 然而对于普通用户来说, Clash 的使用可能仍是一种挑战. 而对于考虑使用 GUI 客户端的用户, 我们确实有一些建议:

[Clash for Windows](https://downloads.clash.wiki/clash_for_windows_pkg) [Premium 功能] (经 SHA256 验证的下载)
[Clash for iOS](https://apps.apple.com/app/stash/id1596063349) [Premium 功能] (Stash)
[Clash for Android](https://downloads.clash.wiki/ClashForAndroid) [Premium 功能] (经 SHA256 验证的下载)
[Clash for macOS](https://stash.ws/) [Premium 功能] (Stash for macOS)
[ClashX Pro](https://install.appcenter.ms/users/clashx/apps/clashx-pro/distribution_groups/public) [Premium 功能] (macOS)
[Clash for OpenWrt](https://github.com/vernesong/OpenClash/releases) (OpenClash)

## 一、 Clash For Windows与v2rayN 下载+汉化

### 客户端下载地址：

1.v2rayN官方软件永久更新地址:https://github.com/2dust/v2rayN/releases

2.Clash官方软件永久更新地址：https://github.com/MetaCubeX/ClashMetaForAndroid/releases

3.Clash汉化官方软件永久更新地址：https://github.com/Z-Siqi/Clash-for-Windows_Chinese/releases/

4.clash verge官方软件永久更新地址：https://github.com/zzzgydi/clash-verge/releases 

5.nekoray官方软件永久更新地址：https://github.com/MatsuriDayo/nekoray/releases

6.Hiddify-Next官方软件永久更新地址：https://github.com/hiddify/hiddify-next/blob/main/README_cn.md

### 内核下载地址：

1.Clash.Meta内核永久更新地址：https://github.com/MetaCubeX/Clash.Meta/releases

2.naiveproxy内核永久更新地址：https://github.com/klzgrad/naiveproxy/releases

3.Tuic内核永久更新地址：https://github.com/EAimTY/tuic/releases

### 汉化方法：

Clash官方汉化补丁永久更新地址：https://github.com/BoyceLig/Clash_Chinese_Patch/releases

说明：解压压缩包后，请自行替换下列路径中的app.asar文件

Clash for Windows\resources\app.asar

------

## 二、 Clash For Android 下载

### 手机端端下载地址：
1.Clash 安卓客户端：https://github.com/naicfeng/ClashRForAndroid/releases

2.ClashForAndroid永久更新地址1：https://github.com/MetaCubeX/ClashMetaForAndroid/releases  

永久更新地址2：https://downloads.clash.wiki/ClashForAndroid/

3.v2rayNG永久更新地址：https://github.com/2dust/v2rayNG/releases

4.surfboard永久更新地址：https://github.com/getsurfboard/surfboard/releases

  FlClash三端可用：https://github.com/chen08209/FlClash/releases

5.Matsuri永久更新地址：https://github.com/MatsuriDayo/Matsuri/releases

6.NekoBoxForAndroid永久更新地址：https://github.com/MatsuriDayo/NekoBoxForAndroid/releases

7.tuict||sing-box||Hysteria永久更新地址：https://github.com/MatsuriDayo/plugins/releases

8.Sagernet永久更新地址：https://github.com/SagerNet/SagerNet/releases/tag/0.8.1-rc03    

9.Hiddify-Next永久更新地址：https://github.com/hiddify/hiddify-next/blob/main/README_cn.md

10.ClashMetaForAndroid永久更新地址：https://github.com/ihaoljy/ClashMetaForAndroid

**11.最新-FlyClash - 简洁优雅的现代化代理工具永久更新地址：https://github.com/GtxFury/FlyClash-Android**

------

## 三、nekoray 或者 sing-box配置格式
    
```txt
{
    "interface_name": "WARP",
    "local_address": [
        "172.16.0.2/32",
        "2606:4700:110:8f0a:fcdb:db2f:3b3:4d49/128"
    ],
    "mtu": 1408,
    "peer_public_key": "bmXOC+F1FxEMF9dyiK2H5/1SUtzH0JuVo51h2wPfgyo=",
    "private_key": "GAl2z55U2UzNU5FG+LW3kowK+BA/WGMi1dWYwx20pWk=",
    "server": "engage.cloudflareclient.com",
    "server_port": 2408,
    "system_interface": false,
    "tag": "proxy",
    "type": "wireguard"
}
```

------

## 四、Wireguard分流规则
<details>
  <summary>请点开我查看详细教程</summary>
    
#  auto-add-routes [教程来源](https://github.com/zzzhhh1/auto-add-routes)

## 介绍

为Windows平台上的全局代理VPN添加国内IP/域名分流功能。

## 文件说明：

add.txt和del.txt为写入和删除时使用的路由表；

routes-up.bat和routes-down.bat为Wireguard在连接前和断开后调用的写入/删除路由表的批处理文件。通过Wireguard的Pre/Post命令调用。

client_pre.bat和client_down.bat为Openvpn在连接前和断开后调用的写入/删除路由表的批处理文件。Openvpn连接时会自动调用。

cmroute.dll会被上述批处理文件调用，作用是秒载/秒删路由表。即使有数千条路由表也能秒载入，秒删除。

[Overture项目地址](https://github.com/shawn1m/overture)

Overture使用方法可以参考：https://moe.best/tutorial/overture.html

## 分流原理

[请参考wiki](https://github.com/lmc999/auto-add-routes/wiki)

## 使用方法

### Wireguard

#### 1. 下载并安装最新版本的官方PC客户端。一般会安装在目录"C:\Program Files\WireGuard"

#### 2. 开启Wireguard的Pre/Post命令支持，只能通过修改注册表的方式开启，具体操作：

- 以管理员身份运行cmd
- 输入以下命令按回车

```
reg add HKLM\Software\WireGuard /v DangerousScriptExecution /t REG_DWORD /d 1 /f
```

![CMD](https://camo.githubusercontent.com/0280012d00fa7f7044145313c16b84228de38307d8bca771758ade80d6b4423f/68747470733a2f2f73322e6c6f6c692e6e65742f323032312f31322f32342f793653774a6a31755a6d64684637452e6a7067)

#### 3. 下载[此页面](https://github.com/lmc999/auto-add-routes/tree/master/wireguard)中的所有文件到"C:\Program Files\WireGuard\bat"。或者直接下载解压此[压缩档](https://github.com/lmc999/auto-add-routes/blob/master/zip/wireguard.zip)

![wjj](https://camo.githubusercontent.com/c0b2b96c21e3f8bd0a818df581f52e2d46f46985c6767e5cc75a9080f2645359/68747470733a2f2f73322e6c6f6c692e6e65742f323032312f31322f32342f6251665731645652414a426e6765352e6a7067)

#### 4. 修改Wireguard客户端配置文件，加入以下Script Hook调用"C:\Program Files\WireGuard\bat"的批处理文件

```
PreUp = "C:\Program Files\WireGuard\bat\routes-up.bat"
PostUp = "C:\Program Files\WireGuard\bat\dns-up.bat"
PreDown = "C:\Program Files\WireGuard\bat\routes-down.bat"
PostDown = "C:\Program Files\WireGuard\bat\dns-down.bat"
```

将DNS指向本机以使用Overture作为DNS服务器

```
DNS = 127.0.0.1
```

关闭Wireguard的kill switch并保存修改

![xg](https://camo.githubusercontent.com/2d34a38221b5f1dff285a7871bb315392fc683e4f7ed98efbfa58c1831c169c8/68747470733a2f2f73322e6c6f6c692e6e65742f323032312f31322f32342f3574566c71326641695568543748472e6a7067)

#### 5. 如配置正确，此时点击连接Wireguard会⑴自动调用routes-up.bat将国内IP写进系统路由表，⑵启动overture DNS服务器

### 连接成功后可上[ip.skk.moe](https://ip.skk.moe/)测试一下看是否正确分流。

### Openvpn

#### 1. 下载[openvpn.zip](https://github.com/lmc999/auto-add-routes/raw/master/zip/openvpn.zip)解压到OPENVPN的config文件夹中，需要确保解压出的文件与你的配置文件client.ovpn保存在同一目录中。

假如你的配置文件不是client.ovpn而是abc.ovpn，你需要将client_pre.bat和client_down.bat分别改名为abc_pre.bat和abc_down.bat，否则OPENVPN无法自动调用批处理文件。

#### 2. 添加以下参数到客户端配置文件client.ovpn

```
pull-filter ignore "dhcp-option DNS"
dhcp-option DNS 127.0.0.1
```

#### 3. OPENVPN点击Connect连接就会调用client_pre.bat将国内IP写进系统路由表，断开disconnect则会调用client_down.bat删除路由表。

## 关于分流后国内访问慢，无法播放网站版权视频/音乐

#### ~~因为你访问的国内网站有海外节点，当你使用WG/OPENVPN时DNS一般默认是8.8.8.8。这是一个海外的DNS，访问有海外节点的网站时会把你解析到海外节点，所以会被认为从大陆地区以外访问，这时候访问网站会变慢或者版权视频/音乐无法播放。解决办法是不要边用WG边上这些网站，这不是域名分流！~~

#### `配搭overture可实现访问国内网站用国内DNS，海外网站使用海外DNS`

</details>

------

## 五、节点分享

### 长风节点

#### 节点地址：https://github.com/changfengoss/pub/tree/main/data  自己选最新的日期

------

## 六、 Windows上优质&精选的最佳应用程序及工具列表

<details>
  <summary> Windows上优质&精选的最佳应用程序及工具列表</summary>

# <img src="https://raw.githubusercontent.com/Awesome-Windows/Awesome/master/media/main-awesomeWindows.png" width="400" alt="awesome windows">
[![Awesome](https://awesome.re/badge-flat2.svg)](https://awesome.re) [![jaywcjlove/sb](https://jaywcjlove.github.io/sb/lang/english.svg)](README.md)

<a href="https://www.buymeacoffee.com/rahulkapoor90" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-yellow.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>

> Windows上优质&精选的最佳应用程序及工具列表。

> *标有 ![Open-Source Software][OSS Icon] 的项目是Open-Source Software。 标有![Freeware][Freeware Icon] 的项目是Freeware。*


# <img src="https://raw.githubusercontent.com/Awesome-Windows/Awesome/master/media/chrome_2016-06-11_19-02-31.png" alt="table of contents">

- [应用程序](#应用程序)
  - [音频](#音频)
  - [聊天客户端](#聊天客户端)
  - [压缩](#压缩)
  - [个性化](#个性化)
  - [数据恢复](#数据恢复)
  - [开发者工具](#开发者工具)
  - [文档](#文档)
  - [电子书实用程序](#电子书实用程序)
  - [电子邮件](#电子邮件)
  - [游戏](#游戏)
  - [图形](#图形)
  - [文本编辑器](#文本编辑器)
  - [集成开发环境](#集成开发环境)
  - [在线存储](#在线存储)
  - [备份](#备份)
  - [生产力工具](#生产力工具)
  - [终端](#终端)
  - [实用程序](#实用程序)
  - [视频](#视频)
  - [安全](#安全)
- [配置与安装](#配置与安装)
  - [Windows 10 设置](#windows-10-设置)
  - [Windows 8 设置](#windows-8-设置)
- [杂项](#杂项)
- [软件列表](#软件列表)
- [国产（中国）软件](#国产中国软件)
- [论坛](#论坛)
    - [Windows](#windows)
    - [IRC 频道](#irc-频道)
    - [Reddit](#reddit)
- [贡献](#贡献)
- [版权](#版权)


## 应用程序

### 音频
- [AIMP3](http://www.aimp.ru/) - 32位音频处理和多格式播放。 ![Freeware][Freeware Icon]
- [Audacity](http://audacityteam.org/) - 免费，开放的资源，用于录制和编辑音频的跨平台软件。 [![Open-Source Software][OSS Icon]](https://github.com/audacity/audacity) ![Freeware][Freeware Icon]
- [AudioNodes](https://audionodes.com/) - 模块化音频制作套件，具有多轨音频混合，音频效果，参数自动化，MIDI编辑，合成，云制作等。 ![Freeware][Freeware Icon]
- [CDex](http://www.cdex.fr/) - CD 音轨抓取工具 (法语站点，英文软件)。 ![Freeware][Freeware Icon]
- [Dopamine](http://www.digimezzo.com/software/dopamine/) - 一款音频播放器，致力于为管理和播放音乐提供尽可能简单且美观的操作体验。 ![Freeware][Freeware Icon]
- [Exact Audio Copy](http://www.exactaudiocopy.de/) - 可以将您的CD里的文件以任意格式转到您的电脑, 同时兼具一些优秀的特色功能。
- [Foobar2000](http://www.foobar2000.org/) - Windows版的免费音频播放器，支持各种音频格式，并且有很多很酷的特色功能。
- [K-Lite Codecs](http://www.codecguide.com/download_kl.htm) - 包含 DirectShow 过滤器，VFW/ACM 编解码器和一些其他工具的集合包。![Freeware][Freeware Icon]
- [Kodi](https://kodi.tv/) -免费且开放的家庭影院软件。
- [Mixxx](http://mixxx.org/) - 免费的DJ软件，给你现场混音所需的一切功能，真正可替代Traktor。[![Open-Source Software][OSS Icon]](https://github.com/mixxxdj/mixxx) ![Freeware][Freeware Icon]
- [Musicbee](http://getmusicbee.com/) - 类似iTunes，但比iTunes更好用。
- [MusicBrainz Picard](https://picard.musicbrainz.org/) - Picard 是一款跨平台的音乐标签器，用于查看和改写元数据标签。 [![Open-Source Software][OSS Icon]](https://github.com/metabrainz/picard) ![Freeware][Freeware Icon]
- [Qtractor](http://qtractor.sourceforge.net/qtractor-index.html#Downloads) -音频/MIDI多轨音序器。[![Open-Source Software][OSS Icon]](http://qtractor.sourceforge.net/qtractor-downloads.html#Git) ![Freeware][Freeware Icon]
- [Reaper](http://www.reaper.fm/download.php) - 精致小巧的程序, 以$60的价格提供给个人，非营利机构或小型企业使用。
- [Resonic](https://resonic.at/) - 免费快速的音频播放器。
- [VLC](http://www.videolan.org/vlc/index.html) - 免费的媒体播放器，非常实用。
- [Winamp](http://www.winamp.com/) - 能播放MP3，MP2，WAV，VOCAls和MIDI文件的音乐播放器。![Freeware][Freeware Icon]

### 聊天客户端

- [Caprine](https://sindresorhus.com/caprine/) - 优雅的Facebook Messenger桌面应用程序。 [![Open-Source Software][OSS Icon]](https://github.com/sindresorhus/caprine) ![Freeware][Freeware Icon]
- [Discord](https://discordapp.com) - Discord是免费的语音和文本聊天客户端，适合玩家和非玩家。您可以从浏览器使用它，它可以在iOS，Android，Windows，Mac和Linux上使用。 ![Freeware][Freeware Icon]
- [Hexchat](https://hexchat.github.io/) - 基于XChat的IRC客户端 [![Open-Source Software][OSS Icon]](https://hexchat.github.io/) ![Freeware][Freeware Icon]
- [LimeChat](http://limechat.net) -即时通讯软件。 ![Freeware][Freeware Icon]
- [Messenger for Desktop](http://messengerfordesktop.com/) - Facebook messenger 的桌面端程序。 [![Open-Source Software][OSS Icon]](https://github.com/Aluxian/Facebook-Messenger-Desktop) ![Freeware][Freeware Icon]
- [mIRC](http://www.mirc.com/) - 互联网中继聊天（IRC）客户端。![Freeware][Freeware Icon]
- [Quassel](http://quassel-irc.org/) - Quassel IRC 是一款现代, 跨平台, 分布式的 IRC 客户端。 [![Open-Source Software][OSS Icon]](http://quassel-irc.org/) ![Freeware][Freeware Icon]
- [Telegram](https://desktop.telegram.org/) - 一个专注于速度和安全性的消息应用程序，它速度极快，操作简单且免费。[![Open-Source Software][OSS Icon]](https://telegram.org/apps)  ![Freeware][Freeware Icon]
- [Waow](http://dedg3.com/wao/) - 卓越的 WhatsApp Web 客户端，为您提供最好的WhatsApp的体验。 ![Freeware][Freeware Icon]

### 压缩
- [7-Zip](http://www.7-zip.org/) - 用于处理压缩包的开源Windows实用程序。完美支持 7z，ZIP，GZIP，BZIP2和TAR 的全部特性，其他格式也可解压缩。 [![Open-Source Software][OSS Icon]](http://www.7-zip.org/download.html) ![Freeware][Freeware Icon]
- [Bandizip](https://www.bandisoft.com/bandizip/) - 集轻量，快速与免费一体的zip压缩程序。 ![Freeware][Freeware Icon]
- [PeaZip](http://www.peazip.org/) - 归档器和文件压缩器。 提取7Z CAB ISO RAR TAR ZIP归档文件。 ![Freeware][Freeware Icon]
- [Riot](http://luci.criosweb.ro/riot/) -通过文件大小或许多其他图像属性压缩图像。 ![Freeware][Freeware Icon]
- [WinRAR](http://www.rarlab.com/) -  强大的归档管理器。 它可以备份您的数据并减小电子邮件附件的大小，解压缩RAR，ZIP和其他文件。

### 个性化

- [7+ Taskbar Tweaker](http://rammichael.com/7-taskbar-tweaker) - 允许自定义和扩展Windows任务栏功能，并具有各种生产力增强功能。 ![Freeware][Freeware Icon]
- [Classic Start](https://github.com/passionate-coder/Classic-Start) - 使用开始菜单和资源管理器就像2000年一样。 [![Open-Source Software][OSS Icon]](https://github.com/passionate-coder/Classic-Start) ![Freeware][Freeware Icon]
- [Clover](http://en.ejie.me/) - 将多选项卡功能添加到Windows资源管理器。![Freeware][Freeware Icon]
- [EarTrumpet](https://github.com/File-New-Project/EarTrumpet) - 从系统托盘按应用程序控制音量。[![Open-Source Software][OSS Icon]](https://github.com/File-New-Project/EarTrumpet) ![Freeware][Freeware Icon]
- [QTTabBar](http://qttabbar.wikidot.com/) - 通过选项卡和其他文件夹视图扩展资源管理器。 ![Freeware][Freeware Icon]
- [Rainmeter](https://www.rainmeter.net/) - Rainmeter允许您在桌面上显示可自定义的皮肤，从硬件使用情况表到功能齐全的音频可视化器。 [![Open-Source Software][OSS Icon]](https://github.com/rainmeter/rainmeter) ![Freeware][Freeware Icon]
- [Search Deflector](https://github.com/spikespaz/search-deflector) - 一个小型程序，将从Windows“开始”菜单或Cortana进行的搜索重定向到您喜欢的任何浏览器和搜索引擎。 [![Open-Source Software][OSS Icon]](https://github.com/spikespaz/search-deflector) ![Freeware][Freeware Icon]
- [TranslucentTB](https://github.com/TranslucentTB/TranslucentTB) - 使Windows任务栏透明。[![Open-Source Software][OSS Icon]](https://github.com/TranslucentTB/TranslucentTB) ![Freeware][Freeware Icon]
- [Windows 10 Login Background Changer](https://github.com/PFCKrutonium/Windows-10-Login-Background-Changer) - 使您可以更改Windows 10登录屏幕背景。  [![Open-Source Software][OSS Icon]](https://github.com/PFCKrutonium/Windows-10-Login-Background-Changer) ![Freeware][Freeware Icon]
- [ZBar](http://www.zhornsoftware.co.uk/zbar/) - 如果使用多个监视器，则可以在每个监视器上显示单独的任务栏。

### 数据恢复
- [Data Rescue](https://www.prosofteng.com/datarescuepc3/) - 综合和专业的硬盘恢复软件，可以恢复你的照片，视频，文件。
- [Ontrach EasyRecovery](http://www.krollontrack.com/data-recovery/recovery-software/) - 拥有过滤工具，可用于将需恢复的大量数据排序。
- [PartitionGuru｜Eassos Recovery](http://www.eassos.com/) - 数据恢复及分区恢复功能。 ![Freeware][Freeware Icon]
- [Recuva](https://www.piriform.com/recuva) - 快速，轻松地恢复已删除的文件。
- [Stellar Phoenix Windows Data Recovery](http://www.stellarinfo.com/windows-data-recovery.php) - 提供远程恢复选项, 可通过网络从另一台计算机恢复数据。
- [TestDisk](http://www.cgsecurity.org/wiki/TestDisk) - 强大的免费数据恢复软件, 主要设计用于帮助恢复丢失的分区和/或使非引导磁盘重新启动。

### 开发者工具

- [Addict](https://github.com/dthree/addict) - Active Directory的嵌入式REST API。
- [Cacher](https://www.cacher.io/)-具有Gist同步，VSCode / Atom / Sublime软件包和功能齐全的Web客户端的基于云的，团队启用的代码段管理器。
- [用于SQLite的数据库浏览器](http://sqlitebrowser.org/)-用于创建，设计和编辑与SQLite兼容的数据库文件的高质量，可视，开放源代码工具[![Open-Source Software][OSS Icon] ](http://sqlitebrowser.org/)
- [ExtendsClass](https://extendsclass.com/)-开发人员的在线工具（REST / SOAP客户端，SQLite浏览器，Regex测试器，XPath测试器）![Freeware][Freeware Icon]
- [Fiddler](http://www.telerik.com/fiddler)-Web调试代理。
- [FileZilla](https://filezilla-project.org/)-FTP，FTPS和SFTP客户端。 [![Open-Source Software][OSS Icon]](https://download.filezilla-project.org/client/)![Freeware][Freeware Icon]
- [Fork](https://git-fork.com/)-适用于Windows（和Mac）的快速友好的Git客户端。 ![Freeware][Freeware Icon]
- [Git扩展程序](https://gitextensions.github.io/)-一个功能强大且易于使用的Git UI。 [![Open-Source Software][OSS Icon]](https://github.com/gitextensions/gitextensions)![Freeware][Freeware Icon]
- [GitHub Desktop](https://desktop.github.com/)-GitHub Desktop是一个基于Electron的开源GitHub应用。 [![Open-Source Software][OSS Icon]](https://github.com/desktop/desktop)![Freeware][Freeware Icon]
- [GitKraken](https://www.gitkraken.com/)-一个漂亮的跨平台Git客户。 ![Freeware][Freeware Icon]
- [HeidiSQL](http://www.heidisql.com/)-适用于MySQL，MariaDB，Microsoft SQL Server和PostgreSQL的强大易用的客户端。
- [HTTP工具包](https://httptoolkit.tech)-HTTP调试和模拟工具。 [![Open-Source Software][OSS Icon]](https://github.com/httptoolkit)![Freeware][Freeware Icon]
- [仅休息](https://github.com/SwensenSoftware/im-only-resting)-基于WinForms的功能丰富的HTTP客户端[![Open-Source Software][OSS Icon]](https://github.com/swensensoftware/im-only-resting)![Freeware][Freeware Icon]
- [Insomnia](http://insomnia.rest)-具有漂亮界面的现代REST客户端。 ![Open-Source Software][OSS Icon]![Freeware][Freeware Icon]
- [Keylord](https://protonail.com/products/keylord)用于Redis，LevelDB和Memcached键值数据库的跨平台GUI客户端。
- [Mamp](https://www.mamp.info/en/)-本地服务器环境。 ![Freeware][Freeware Icon]
- [合并](http://meldmerge.org/)-视觉差异和合并工具。 [![Open-Source Software][OSS Icon]](https://gitlab.gnome.org/GNOME/meld/)![Freeware][Freeware Icon]
- [NSudo](https://github.com/M2Team/NSudo/)-强大的系统管理工具。 [![Open-Source Software][OSS Icon]](https://github.com/M2Team/NSudo/)
- [Open Server](https://ospanel.io/)-便携式服务器平台和软件环境（例如MAMP，XAMPP，WAMP，非常用户友好）。 ![Freeware][Freeware Icon]
- [Pixie](http://www.nattyware.com/pixie.php)-适用于开发人员的简单颜色选择器。
- [pngquant](https://pngquant.org/)-使用或wi在PNG文件上应用有损压缩
- [PostgreSQL数据库](http://wiki.postgresql.org/wiki/Community_Guide_to_PostgreSQL_GUI_Tools)-全面的工具列表。
- [邮递员](https://www.getpostman.com/postman)-REST客户端具有直观的用户界面，可以发送请求，保存响应，添加测试以及创建工作流。
- [流程浏览器](https://technet.microsoft.com/zh-cn/sysinternals/processexplorer.aspx)-强大的任务管理器。 ![Freeware][Freeware Icon]
- [Process Hacker](http://processhacker.sourceforge.net/)-出色的全面任务管理器。
- [进程监视器](https://docs.microsoft.com/zh-cn/sysinternals/downloads/procmon)-sysinternal工具显示实时文件系统，注册表，网络和进程/线程活动。 ![Freeware][Freeware Icon]
- [RazorSQL](http://www.razorsql.com/)-用于管理SQLite数据库的GUI，需要进行大量工作。
- [Redis Desktop Manager](http://redisdesktop.com/)跨平台的开源Redis DB管理工具。
- [Robo 3T](https://robomongo.org/)-适用于MongoDB爱好者的轻量级GUI。
- [SourceTree](https://www.sourcetreeapp.com/)-免费的Git和Mercurial客户。
- [Sql Wave](http://www.valentina-db.com/en/sqlwave)-一个MySQL数据库管理器。
- [SSLyog](https://www.webyog.com/)-强大的MySQL管理工具
- [TailBlazer](https://github.com/RolandPheasant/TailBlazer)-一种用于浏览日志的小型快速工具[![Open-Source Software][OSS Icon]](https://github.com/RolandPheasant/TailBlazer)![Freeware][Freeware Icon]
- [TortoiseGit](https://tortoisegit.org/)-具有完整Shell集成的Git客户端。 [![Open-Source Software][OSS Icon]](https://github.com/tortoisegit/tortoisegit/)![Freeware][Freeware Icon]
- [塔](https://www.git-tower.com/windows)-塔-Mac和Windows上功能最强大的Git客户端。
- [Vagrant](https://www.vagrantup.com/)-用于构建和管理虚拟机的工具。 [![Open-Source Software][OSS Icon]](https://github.com/mitchellh/vagrant)
- [速度](http://velocity.silverlakesoftware.com/)-脱机API文档工具。 （例如适用于macOS的[Dash](https://kapeli.com/dash)）
- [Visual Studio代码](https://code.visualstudio.com/)-轻量级源代码编辑器。 [![Open-Source Software][OSS Icon]](https://github.com/Microsoft/vscode)![Freeware][Freeware Icon]
- [Visual Studio](https://www.visualstudio.com/)-最终的Microsoft开发人员工具。
- [Wamp](http://www.wampserver.com/en/)-Web开发环境。
- [WinSCP](https://winscp.net/)-免费的开源SFTP，FTP，WebDAV和SCP客户端。 ![Freeware][Freeware Icon]
- [Wireshark](https://www.wireshark.org/)-网络协议分析器。 [![Open-Source Software][OSS Icon]](https://www.wireshark.org/docs/wsdg_html_chunked/ChIntroDevelopment.html)![Freeware][Freeware Icon]
- [WMI资源管理器](https://github.com/vinaypamnani/wmie2/)-提供在单个视图窗格中浏览和查看WMI名称空间/类/实例/属性的功能。 [![Open-Source Software][OSS Icon]](https://github.com/vinaypamnani/wmie2/)
- [Xampp](https://www.apachefriends.org/index.html)-Apache驱动的Web开发环境。 ![Freeware][Freeware Icon]
- [Xftp 5](https://www.netsarang.com/products/xfp_overview.html)-灵活轻便的SFTP / FTP客户端。 ![Freeware][Freeware Icon]
- [Zsh](http://www.zsh.org/)-功能强大的命令行外壳。 [![Open-Source Software][OSS Icon]](http://sourceforge.net/p/zsh/code/ci/master/tree/)![Freeware][Freeware Icon]

### 文档

- [FreeOffice](http://www.freeoffice.com/en/)-FreeOffice是一个完整的办公套件，带有文字处理器，电子表格应用程序和演示程序，所有套件均与Microsoft Office中的同类产品兼容。 ![Freeware][Freeware Icon]
- [LibreOffice](https://www.libreoffice.org/)-开源办公套件。 [![Open-Source Software][OSS Icon]](https://www.libreoffice.org/about-us/source-code/)![Freeware][Freeware Icon]
- [Microsoft Office](http://www.office.com)-微软自己的生产力套件。
- [NitroPDF](https://www.gonitro.com/pdf-reader)-您将获得的最佳PDF阅读器。
- [OnlyOffice](https://www.onlyoffice.com/)-最完整，功能最丰富的办公和生产力套件。 ![Freeware][Freeware Icon]
- [OpenOffice](https://www.openoffice.org/)-用于文字处理，电子表格，演示文稿，图形，数据库等的软件套件。 [![Open-Source Software][OSS Icon]](http://openoffice.apache.org/source.html)![Freeware][Freeware Icon]
- [Sumatra PDF](http://www.sumatrapdfreader.org/free-pdf-reader.html)-PDF，ePub，MOBI，CHM，XPS，DjVu，CBZ，CBR阅读器。 [![Open-Source Software][OSS Icon]](https://github.com/sumatrapdfreader/sumatrapdf)![Freeware][Freeware Icon]
- [WPS Office](https://www.wps.com/office-free)-完美的免费办公软件![Freeware][Freeware Icon]

### 电子书实用程序
- [Bookviser](http://apps.microsoft.com/windows/zh-cn/app/bookviser-reader/42d4527a-b1fe-479b-ad04-150303dc056f)-Windows 8设备的出色应用程序，可轻松读取电子书 办法。 ![Freeware][Freeware Icon]
- [Calibre](http://calibre-ebook.com/)-用于电子书管理和转换的强大软件。 [![Open-Source Software][OSS Icon]](http://calibre-ebook.com/get-involved)![Freeware][Freeware Icon]
- [kobo](https://www.kobo.com/desktop)-用于电子书管理和转换的极其丑陋但功能强大的软件。 ![Freeware][Freeware Icon]

### 电子邮件

- [Mailbird](https://www.mailbird.com/)-IMAP和POP3电子邮件客户端，具有自定义，完整的触摸支持和多语言支持。
- [Mailspring](https://getmailspring.com/)-Nylas Mail的快速维护分支，建立在现代Web技术上。 [![Open-Source Software][OSS Icon]](https://github.com/Foundry376/Mailspring)![Freeware][Freeware Icon]
- [Nylas Mail](https://www.nylas.com/download/)-基于现代网络构建的可扩展桌面邮件应用程序。 [![Open-Source Software][OSS Icon]](https://github.com/nylas/N1)![Freeware][Freeware Icon]
- [邮箱](https://postbox-inc.com/)-Power Email App
- [Thunderbird](https://www.mozilla.org/zh-CN/thunderbird/)-具有简约设计的电子邮件客户端。 [![Open-Source Software][OSS Icon]](https://developer.mozilla.org/zh-CN/docs/Mozilla/Developer_guide/Build_Instructions/Simple_Thunderbird_build)![Freeware][Freeware Icon]

### 游戏
- [0 A.D.](https://play0ad.com/) - 免费，开源，实时的关于古代战争的策略游戏。 [![Open-Source Software][OSS Icon]](https://github.com/0ad/0ad) ![Freeware][Freeware Icon]
- [Awesome Games](https://github.com/leereilly/games) - 在Github上托管的游戏列表。 ![Freeware][Freeware Icon]
- [Freeciv](http://www.freeciv.org/) - 用户、回合制的开源策略游戏，来源于人类文明的历史进程.  [![Open-Source Software][OSS Icon]](https://github.com/freeciv/) ![Freeware][Freeware Icon]
- [GOG Galaxy](https://www.gog.com/galaxy) - 类似Steam的DRM-free游戏平台。
- [Itch.io](https://itch.io/app/) - 安装，更新，并畅玩独立游戏 [![Open-Source Software][OSS Icon]](https://github.com/itchio/itch) ![Freeware][Freeware Icon]
- [Origin](https://www.origin.com/en-in/store/) - 类似Steam 但属于 EA 公司。
- [Steam](http://store.steampowered.com/) -  最大的视频游戏在线零售商。 桌面应用程序允许您管理您的游戏库，并在任何时间畅玩。 我想你早就知道了。
- [Godot](https://github.com/godotengine/godot) - 开源游戏引擎。 入门简单且包含大量中文教程。[![Open-Source Software][OSS Icon]](https://github.com/godotengine/godot)
- [Unity](https://unity3d.com/) - 免费游戏引擎。 入门简单且包含大量教程。
- [Unreal Engine](https://www.unrealengine.com/what-is-unreal-engine-4) - 另一个免费游戏引擎。 更容易入门且包含大量教程，但如果你基于此引擎制作的游戏盈利， 你需支付给 Unreal 5%的盈利作为使用费。
- [Warsow](https://www.warsow.net/) - Windows上免费和快节奏的FPS游戏。 ![Freeware][Freeware Icon]

### 图形
- [Blender](https://www.blender.org/) - 功能齐全的可扩展跨平台3D内容套件。 [![Open-Source Software][OSS Icon]](https://developer.blender.org/) ![Freeware][Freeware Icon]
- [Gimp](http://www.gimp.org/) - 开源图像编辑器。 [![Open-Source Software][OSS Icon]](http://www.gimp.org/source/) ![Freeware][Freeware Icon]
- [Inkscape](https://inkscape.org/en/) - 免费的矢量图形设计软件。
- [Krita](https://krita.org/) - 有一堆很酷的功能的免费绘图软件。
- [Paint.net](http://www.getpaint.net/index.html) - 简易版本的Photoshop。 ![Freeware][Freeware Icon]
- [Snipaste](https://zh.snipaste.com/) 一款高效率功能全面的截图软件  ![Open-Source Software][OSS Icon]

### 文本编辑器
- [Atom](https://atom.io/) - 面向21世纪的极客文本编辑器。 [![Open-Source Software][OSS Icon]](https://github.com/atom/atom) ![Freeware][Freeware Icon]
- [Brackets](http://brackets.io/) - 一款擅长网页设计的现代，开源文本编辑器。 [![Open-Source Software][OSS Icon]](https://github.com/adobe/brackets) ![Freeware][Freeware Icon]
- [GVim](http://www.vim.org/download.php#pc) - （G）Vim是一款高度可配置的文本编辑器，用于高效的文本编辑。 [![Open-Source Software][OSS Icon]](https://github.com/vim/vim) ![Freeware][Freeware Icon]
- [Light Table](http://lighttable.com/) - 具有即时反馈和显示代码中数据值的可定制的编辑器。[![Open-Source Software][OSS Icon]](https://github.com/LightTable/LightTable) ![Freeware][Freeware Icon]
- [Neovim](https://neovim.io/) - vim真正的继任者。
- [Notepad++](https://notepad-plus-plus.org/) - 一款支持多种编程语言的源码编辑器。 [![Open-Source Software][OSS Icon]](https://github.com/notepad-plus-plus/notepad-plus-plus) ![Freeware][Freeware Icon]
- [Notepad2](http://www.flos-freeware.ch/notepad2.html) - 用于替代默认文本编辑器的轻量快速的编辑器，拥有众多有用的功能。![Open-Source Software][OSS Icon] ![Freeware][Freeware Icon]
- [Sublime Text 3](http://www.sublimetext.com/3) - 高级文本编辑器。
- [Visual Studio Code](https://code.visualstudio.com/) - 用于构建和调试现代Web和云应用程序。 [![Open-Source Software][OSS Icon]](https://github.com/Microsoft/vscode) ![Freeware][Freeware Icon]

### 集成开发环境
- [Android Studio](https://developer.android.com/studio/index.html) - Android 的官方 IDE , 基于 IntelliJ 的 IDEA。 [![Open-Source Software][OSS Icon]](https://sites.google.com/a/android.com/tools/) ![Freeware][Freeware Icon]
- [AppCode](https://www.jetbrains.com/objc/) - JetBrain出品的IDE，用于iOS/macOS开发，支持Objective-C, Swift, C and C++，类似Xcode。
- [CLion](https://www.jetbrains.com/clion/) - JetBrain出品的跨平台的IDE，支持C/C++开发，使用CMake构建。
- [Eclipse](https://eclipse.org/downloads/) - 一款功能强大的 IDE。 [![Open-Source Software][OSS Icon]](https://git.eclipse.org/c/) ![Freeware][Freeware Icon]
- [IntelliJ IDEA](https://www.jetbrains.com/idea/) - JetBrain出品的跨平台的IDE，现代化的 Java IDE。
- [NetBeans IDE](https://netbeans.org/) - 免费开源的 IDE。 [![Open-Source Software][OSS Icon]](https://netbeans.org/community/sources/) ![Freeware][Freeware Icon]
- [PhpStorm](https://www.jetbrains.com/phpstorm/) - JetBrain出品的跨平台的PHP开发平台。
- [PyCharm](https://www.jetbrains.com/pycharm) - JetBrain出品的跨平台的Python开发平台，有社区版本（免费）。 [![Open-Source Software][OSS Icon]](https://github.com/JetBrains/intellij-community/tree/master/python) ![Freeware][Freeware Icon]
- [Rider](https://www.jetbrains.com/rider/) -  JetBrain出品的跨平台的用于.NET/Mono开发的IDE.
- [RubyMine](https://www.jetbrains.com/ruby/) - JetBrain出品的跨平台的Ruby开发平台，支持多种框架。
- [Visual Studio](https://www.visualstudio.com/vs/) - 微软官方的 IDE，通过插件可支持大量编程语言。
- [WebStorm](https://www.jetbrains.com/webstorm/) - JetBrain出品的JavaScript开发平台。

### 在线存储
- [百度网盘](https://pan.baidu.com/) - 其他类似还有腾讯微云，坚果云等。
- [Box](https://app.box.com/services/browse/43/box_sync_for_windows) - 能够同步超过100,000个文件，并支持含有特殊字符的文件名和长度超过256个字符的路径。
- [Dropbox](https://www.dropbox.com/install) -简单，优雅和多功能（PC，Mac，Android ...）云存储解决方案。
- [Google Drive](https://www.google.com/drive/download/) - 深深融入Google生态系统的云存储解决方案。
- [Hubic](https://hubic.com/en/) - 为 Windows, Linux, MacOsx, iOs & Android 平台设计的云存储。
- [Mozy](https://mozy.com/product/download)
- [OneDrive](https://onedrive.live.com/about/en-us/download/) - 为Windows用户提供最佳云存储解决方案，原先叫SkyDrive。

### 备份
- [Arq](https://www.arqbackup.com/) - 备份文件到你自己的云账户中（Amazon Cloud Drive，AWS，Dropbox，Google Drive，Google Cloud Storage，OneDrive，和SFTP）。
- [Bvckup 2](https://bvckup2.com/) - 轻量，多功能的数据复制应用。
- [Duplicati](https://www.duplicati.com/) - 免费的备份应用，将加密备份存储到线上服务器，可用于Windows，macOS和Linux。[![Open-Source Software][OSS Icon]](https://github.com/duplicati/duplicati) ![Freeware][Freeware Icon]

### 生产力工具
- [AutoHotkey](https://autohotkey.com/) - Windows平台的终极自动化脚本语言。 [![Open-Source Software][OSS Icon]](https://autohotkey.com/) ![Freeware][Freeware Icon]
- [Chocolatey](https://chocolatey.org/) - Windows的包管理器。
- [Cold Turkey](https://getcoldturkey.com) - 屏蔽能分散你注意力的网站。（屏蔽期间你甚至无法卸载它。）
- [CommandTrayHost](https://github.com/rexdf/CommandTrayHost) - Windows命令行程序运行监控系统托盘管理工具。 [![Open-Source Software][OSS Icon]](https://github.com/rexdf/CommandTrayHost) ![Freeware][Freeware Icon]
- [Ditto](http://ditto-cp.sourceforge.net/) - 剪贴板管理器。
- [Easy Window Switcher](https://neosmart.net/EasySwitch/) - 应用程序之间快速切换。
- [Everything](http://www.voidtools.com/) - 最快的文件/文件夹搜索工具， 通过名称搜索。
- [f.lux](http://stereopsis.com/flux/) - 自动调整您的计算机屏幕亮度以适应当前环境亮度。 ![Freeware][Freeware Icon]
- [Inkdrop](https://www.inkdrop.info/) - Markdown爱好者的笔记应用程序。
- [KatMouse](http://www.ehiti.de/katmouse/) - 用于在 Windows 上提供全局滚动效果：滚动时不需要先激活/点击窗口（类似 macOS 和 Linux 上的效果）。 ![Freeware][Freeware Icon]
- [Keypirinha](http://keypirinha.com/) - 一个提供给Windows键盘党的快速启动器。你可以把它当成 *Launchy* 的替代品和 *Alfred* 的表兄弟。![Freeware][Freeware Icon]
- [Launchy](http://www.launchy.net/) - 开源快捷键启动器。 [![Open-Source Software][OSS Icon]](https://github.com/OpenNingia/Launchy) ![Freeware][Freeware Icon]
- [Listary](http://www.listary.com/) - 让你的文件不离指尖。 独特的搜索实用程序。
- [MultiCommander](http://multicommander.com/) - 为专业用户提供的文件管理器。 ![Freeware][Freeware Icon]
- [Ninite](https://ninite.com/) - 最简单，最快速的更新或安装软件的方式。 ![Freeware][Freeware Icon]
- [One Commander](http://onecommander.com/) - 多面板的文件管理器。 ![Freeware][Freeware Icon]
- [Quicker](https://getquicker.net/) - Windows上的超级启动器+自动化利器，快捷动作设计与分享平台。
- [Scoop](https://github.com/lukesampson/scoop) - Windows 的命令行安装程序。 [![Open-Source Software][OSS Icon]](https://github.com/lukesampson/scoop) ![Freeware][Freeware Icon]
- [Simplenote](https://simplenote.com/) - 基于云同步的简单跨平台笔记应用程序。 ![Freeware][Freeware Icon]
- [Total Commander](https://www.ghisler.com/) - Windows 上最佳的文件管理器。
- [WordWeb](http://wordweb.info/) - Windows 上很好的英文词典。 ![Freeware][Freeware Icon]
- [Wox](http://www.getwox.com/) - Windows 上效果优异的快捷启动应用。 [![Open-Source Software][OSS Icon]](https://github.com/Wox-launcher/Wox/) ![Freeware][Freeware Icon]  
[xoring](https://www.xoring.com/) 一款基于番茄工作法的时间管理工具


### 终端
- [Babun](http://babun.github.io/) - 基于 Cygwin，用于替代 Windows shell。
- [Cmder](https://github.com/cmderdev/cmder) - 控制台模拟器包。
- [ColorTool](https://github.com/Microsoft/Console/tree/master/tools/ColorTool) - 设置Widows终端支持iTerm的颜色模式。
- [ConEmu](https://github.com/Maximus5/ConEmu) - 标签，分布，闪烁及其他各项均可定制的终端。
- [ConsoleZ](https://github.com/cbucher/console) - Console 2 的修改版本，更好的体验和更好的视觉呈现。
- [FluentTerminal](https://github.com/felixse/FluentTerminal) - 基于 UWP 和 Web 技术的终端应用程序。
- [Hyper](https://hyper.is) - 基于 Web 技术的终端。 [![Open-Source Software][OSS Icon]](https://github.com/zeit/hyper) ![Freeware][Freeware Icon]
- [Kitty](http://www.9bis.net/kitty/) - 高级 Putty (SSH 和 telnet 客户端)。
- [MobaXterm](http://mobaxterm.mobatek.net/) - Xserver 和标签式 SSH 客户端。
- [mRemoteNG](https://mremoteng.org/) - 下一代 mRemote，开源，多标签，多协议，远程连接管理器。 [![Open-Source Software][OSS Icon]](https://mremoteng.org/) ![Freeware][Freeware Icon]
- [MTPuTTY](http://ttyplus.com/multi-tabbed-putty/) - 多标签 PuTTY。
- [Putty](http://www.chiark.greenend.org.uk/~sgtatham/putty/download.html) - SSH 和 telnet 客户端。
- [Terminus](https://eugeny.github.io/terminus/) - 基于Web技术的现代高度可配置的终端应用程序。 [![Open-Source Software][OSS Icon]](https://github.com/Eugeny/terminus) ![Freeware][Freeware Icon]
- [Alacritty](https://github.com/jwilm/alacritty) - 跨平台，使用GPU加速的终端模拟器。 [![Open-Source Software][OSS Icon]](https://github.com/jwilm/alacritty) ![Freeware][Freeware Icon]
- [XShell](https://www.netsarang.com/zh/xshell/) - 业界最强大的SSH客户机，同时还有XFtp，分商业版本和个人版本，安装时选择。 [![Freeware][Freeware Icon]


### 实用程序
- [AddToSendTo](https://aashutoshrathi.github.io/Python-Scripts-and-Games/AddToSendTo/) - 通过此脚本，您可以在右键单击时将喜欢的“文件夹”添加到“发送到”选项。 [![Open-Source Software][OSS Icon]](https://aashutoshrathi.github.io/Python-Scripts-and-Games/AddToSendTo/)
- [Bandicam](https://www.bandicam.com) - 录制软件可以同时轻松录制桌面和3D应用程序。
- [Carnac](http://code52.org/carnac/) - 在任何屏幕录制期间录制按键的最简单方法。
- [CleanMyPC](http://macpaw.com/cleanmypc) - 快速的电脑清洁软件。
- [CPU-Z](http://www.cpuid.com/softwares/cpu-z.html) - 免费且功能齐全的 CPU 监控工具。 ![Freeware][Freeware Icon]
- [Ext2Fsd](http://www.ext2fsd.com/) - 轻松在Windows系统下挂载EXT3/4文件系统。[![Open-Source Software][OSS Icon]](https://github.com/matt-wu/Ext3Fsd) ![Freeware][Freeware Icon]
- [Far](http://www.farmanager.com/index.php?l=en) -文件和归档管理器。克隆自诺顿指挥官。 [![Open-Source Software][OSS Icon]](http://sourceforge.net/projects/farmanager/)
- [Fraps](http://www.fraps.com/)- 视频游戏屏幕录制机，可用于所有使用 DirectX 或 OpenGL 技术的游戏。
- [FreeFileSync](http://www.freefilesync.org/) - 文件和文件夹的简单备份解决方案，它支持源和目标之间的镜像/双向同步/更新。
- [Glary Utilities](http://www.glarysoft.com/) - 提供许多ccleaner中没有的更高级的功能。
- [GPU-Z](http://www.techpowerup.com/gpuz/) - 免费且功能齐全的 GPU 监控工具。 ![Freeware][Freeware Icon]
- [Greenshot](https://github.com/greenshot/greenshot) - 屏幕快照拍摄和裁剪. [![Open-Source Software][OSS Icon]](https://github.com/greenshot/greenshot)
- [HTTrack](https://www.httrack.com/page/2/en/index.html)- 离线浏览器实用程序，允许您从Internet下载网站到本地目录。 [![Open-Source Software][OSS Icon]](https://github.com/xroche/httrack/tree/master)
- [HWMonitor](http://www.cpuid.com/softwares/hwmonitor.html) - 硬件监视器，能读取电压、温度和风扇速度。
- [LICEcap](http://www.cockos.com/licecap/) - 捕获屏幕动画并直接保存到.GIF。
- [LightBulb](https://github.com/Tyrrrz/LightBulb) - 调节屏幕以减缓眼部疲劳。
- [Link Shell Extension](http://schinagl.priv.at/nt/hardlinkshellext/hardlinkshellext.html) - 为资源管理器建立符号链接。
- [PowerPlanSwitcher](https://www.microsoft.com/en-us/store/p/powerplanswitcher/9nblggh556l3) - Windows 10上快速切换电源计划。[![Open-Source Software][OSS Icon]](https://github.com/petrroll/PowerSwitcher)
- [qBittorrent](https://qbittorrent.org/) - P2P bittorrent下载软件.
- [Retroshare](https://retroshare.cc/) - 开源的好友间通讯及文件共享平台. [![Open-Source Software][OSS Icon]](https://github.com/RetroShare/RetroShare) 
- [rimraf](https://www.npmjs.com/package/rimraf) - node中的深度删除模块。 用于删除具有很长路径的文件和文件夹。
- [Rufus](https://rufus.akeo.ie/) - 创建USB启动盘。
- [SetToStartup](https://aashutoshrathi.github.io/Python-Scripts-and-Games/SetToStartup/) - 此脚本将帮助您将您喜欢的程序或自制脚本/文件夹添加到启动。 [![Open-Source Software][OSS Icon]]
- [SDelete](https://technet.microsoft.com/en-us/sysinternals/sdelete.aspx) - 安全删除文件或清空闲置空间的命令行库。
- [ShareX](https://getsharex.com/)- 让您使用单个键获取任何选定区域的截图或屏幕录像。 [![Open-Source Software][OSS Icon]](https://github.com/ShareX/ShareX) ![Freeware][Freeware Icon]
- [SpaceMonger](https://spacemonger.en.softonic.com/download) - 一款图形化程序，可根据文件和目录的大小将其显示为不同大小的块。
- [Speccy](https://www.piriform.com/speccy) - 显示你计算机中每个硬件的详细统计信息。
- [Sysinternals Suite](https://technet.microsoft.com/en-us/sysinternals/bb842062) - 由Mark Russinovich提供的工具套件，提供对 Windows 进程，物理端口，磁盘活动等构件的访问以进行故障排除。
- [Unlocker](http://www.softpedia.com/get/System/System-Miscellaneous/Unlocker.shtml) - 解除无法删除文件的锁定。
- [Waltr](http://softorino.com/waltr/) - 不依靠 iTunes 将任何电影或音乐文件传输到iPhone。
- [WinDirStat](https://windirstat.info/) - 磁盘使用情况查看器和清洁器。
- [Windows 10 Login Screen Changer](https://github.com/PFCKrutonium/Windows-10-Login-Background-Changer/releases/) - 更改 Windows 10 登录屏幕背景。 [![Open-Source Software][OSS Icon]](https://github.com/PFCKrutonium/Windows-10-Login-Background-Changer)
- [Windows终端命令的A-Z](http://ss64.com/nt/)
- [Yacy](https://github.com/yacy/yacy_search_server) - 开源合作式搜索引擎，具有搜索前端界面，爬虫后台，索引管理器等一套搜索引擎所需的组件。[![Open-Source Software][OSS Icon]](https://github.com/yacy/yacy_search_server)
- [Zotero](https://www.zotero.org/) - 类似EndNote的开源文献管理器。[![Open-Source Software][OSS Icon]](https://github.com/zotero/zotero)
- [ZeroNet](https://github.com/HelloZeroNet/ZeroNet) - 分布式开源网络平台，具有博客，微博，论坛等功能。[![Open-Source Software][OSS Icon]](https://github.com/HelloZeroNet/ZeroNet)
- [ZoomIt](https://technet.microsoft.com/en-us/sysinternals/zoomit.aspx) - 一款屏幕缩放和标记工具，用于技术展示。它静默运行于托盘处，通过用户定义的热键触发放大屏幕区域，放大时拖动及在放大图像上标注。

### 视频
- [HandBrake](http://handbrake.fr/) - 一个拥有良好界面的高性能视频编码和转换工具。 [![Open-Source Software][OSS Icon]](https://github.com/HandBrake/HandBrake)
- [K-Lite Codecs](http://www.codecguide.com/download_kl.htm) - DirectShow过滤器，VFW / ACM 编解码器和工具的集合。
- [mpv](http://mpv.io/) -媒体播放器。 [![Open-Source Software][OSS Icon]](https://github.com/mpv-player/mpv)
- [Open Broadcaster Software](https://obsproject.com/) - 免费开源的视频录制和流媒体播放软件。 [![Open-Source Software][OSS Icon]](https://github.com/jp9000/OBS)
- [PotPlayer](http://potplayer.daum.net/) - 多媒体播放器，具有广泛的编解码器集合，它还为用户提供大量配置选项。
- [ScreenToGif](http://www.screentogif.com/) - 它允许你录制屏幕的一部分区域并保存为 gif 或视频。 [![Open-Source Software][OSS Icon]](https://github.com/NickeManarin/ScreenToGif/) ![Freeware][Freeware Icon]
- [SMPlayer](https://sourceforge.net/projects/smplayer/) - 多媒体播放器，可针对不同视频保存不同的配置。 [![Open-Source Software][OSS Icon]](https://sourceforge.net/p/smplayer/code/HEAD/tree/) ![Freeware][Freeware Icon]
- [VLC](http://www.videolan.org/vlc/index.html) - 多媒体播放器和框架，用于播放DVD，音频CD，VCD和各种流协议。 [![Open-Source Software][OSS Icon]](https://github.com/videolan/vlc)

### 安全
- [360](http://www.360.cn/download/)* - 360全家桶，让你的电脑飞起来
- *[AIDA64](https://www.aida64.com/)* - 查看系统信息，支持手机。
- *[CCleaner](https://www.piriform.com/ccleaner)* - 用于 PC 优化和清洁。
- *[CrystalDiskMark](https://crystalmark.info/?lang=en)* - 硬盘信息，日文版和英文版。
- *[Geek Uninstaller](https://geekuninstaller.com/)* - 软件卸载工具，有收费的Pro版本。 类似软件：Iobit Uninstaller, Crystalidea uninstall-tool, Revo Uninstaller Pro。
- *[SUMo(Software Updates Monitor)](https://www.kcsoftwares.com/?sumo)* - 用于软件更新，有免费版本。
- *[SysGauge](http://www.sysgauge.com/)* - 系统监视器
- [Acrylic DNS Proxy](http://mayakron.altervista.org/wikibase/show.php?id=AcrylicHome) - 一款本地 DNS 代理软件，它缓存了 DNS 服务器的内容，并根据用户定制的 HOSTS 文件过滤你不想要的广告。 ![Freeware][Freeware Icon]
- [AdwCleaner](https://toolslib.net/downloads/viewdownload/1-adwcleaner/) - 清除广告，PUP/LPI，工具栏和劫持者的免费工具。![Freeware][Freeware Icon]
- [Bitdefender](http://www.bitdefender.com/) - 最好的防范恶意软件的安全防护程序。
- [Cryptomator](https://cryptomator.org/) - 免费的客户端加密程序，用于加密你储存在云端的文件。 [![Open-Source Software][OSS Icon]](https://github.com/cryptomator/cryptomator) ![Freeware][Freeware Icon]
- [Disable Data Logging](https://www.reddit.com/r/Windows10/comments/3f38ed/guide_how_to_disable_data_logging_in_w10) - 使Windows 10更加私密和安全。
- [ENCRYPTO](http://macpaw.com/encrypto) - 优雅地加密你的文件。 ![Freeware][Freeware Icon]
- [VeraCrypt](https://www.veracrypt.fr/en/Home.html) - VeraCrypt是一款适用于Windows，Mac OSX和Linux的免费开源磁盘加密软件。![Open-Source Software][OSS Icon]
- [GlassWire](https://www.glasswire.com/) - 网络安全监控工具和分析器，可视化您的网络活动。
- [IIS Crypto](https://www.nartac.com/Products/IISCrypto) - Windows 上用于配置加密协议，密码，散列方式和密钥交换的工具集（例如为远程桌面提供 TLS/AES/SHA 加密。）
- [KeePass](http://www.keepass.info) - 免费、开源、易用的密码管理软件. [![Open-Source Software][OSS Icon]](https://sourceforge.net/projects/keepass/) ![Freeware][Freeware Icon]
- [Malwarebytes](https://www.malwarebytes.org/) - 提供防病毒软件无法提供的防护功能。
- [NetLimiter]() - 网络流量控制和分析工具。 ![Freeware][Freeware Icon]
- [SpyBot](https://www.safer-networking.org/) - 搜索和销毁恶意软件，间谍软件和病毒。
- [System Explorer](http://systemexplorer.net) - 加强版的任务管理器，支持监控和修改系统进程，启动项，系统服务，驱动，终端扩展等。
- [Tor Project](https://www.torproject.org/) - 启用匿名通信。 [![Open-Source Software][OSS Icon]](https://github.com/TheTorProject)
- [UnChecky](https://unchecky.com/) - 自动取消勾选程序安装过程中的无关选项。
- [Viscosity](https://www.sparklabs.com/viscosity/) - 全功能的OpenVPN客户端，适用于企业部署。
- [Windows 10 Paranoid's Guide](http://www.zdnet.com/article/how-to-secure-windows-10-the-paranoids-guide/)

## 配置与安装

### Windows 10 设置

* [Windows 10纯净安装（How to clean install Windows 10）](http://www.theverge.com/2015/7/31/9077997/microsoft-windows-10-clean-install-how-to-guide), 2015/07/31, 英文。
* [Windows 10纯净安装（How to do a Clean Install of Windows 10, the Easy Way）](http://www.howtogeek.com/224342/how-to-clean-install-windows-10/), 2016/01/13, 英文。
* [Win10-Initial-Setup-Script](https://github.com/Disassembler0/Win10-Initial-Setup-Script) - Windows 10 / Windows Server 2016重新安装后进行一些初始设置的Powershell脚本。

### Windows 8 设置

* ~~http://windows.microsoft.com/en-IN/windows-8/clean-install~~ 已失效，跳转到其他页面。


## 杂项

* [显示隐藏文件Show hidden files](https://support.microsoft.com/en-us/help/14201/windows-show-hidden-files) ~~[旧链](http://www.windows.microsoft.com/en-in/windows/show-hidden-files)~~已失效
* [快捷键列表list of Shortcut keys](http://imgur.com/a/TIXvm)

## 软件列表
* [Windows最佳应用软件Best Windows Apps](https://github.com/stackia/best-windows-apps) - 来自Github的stackia推荐的软件。
* [小众软件 - 我最喜爱的软件Windows版](http://love.appinn.com/) - 小众软件网站的推荐，共17类软件。
* [Windows绝赞应用 Windows Apps That Amaze Us](https://www.gitbook.com/book/amazing-apps/windows-apps-that-amaze-us/details/zh-CN) 一些较好的WIndows软件，附有黑名单可参考。

## 国产（中国）软件
TODO

## 论坛

#### Windows

* [Windows Support Communities](http://answers.microsoft.com/en-us/windows)
* [Stackoverflow](http://stackoverflow.com/questions/tagged/windows)


#### IRC 频道

* [#Windows](https://webchat.freenode.net/?channels=windows)
* [#microsoft](https://webchat.freenode.net/?channels=microsoft)


#### Reddit

* [/r/windows](https://www.reddit.com/r/windows/)
* [/r/windowsapps](https://www.reddit.com/r/windowsapps)
* [/r/microsoft](https://www.reddit.com/r/Microsoft)
* [/r/sysadmin](https://www.reddit.com/r/sysadmin)
* [/r/microsoftsoftwareswap](https://www.reddit.com/r/microsoftsoftwareswap)

## 贡献

欢迎贡献列表，请参照此 [contribution guidelines](Contributing.md).

**[⬆ 回到顶部](#应用程序)**


## 版权

[![Creative Commons License](http://i.creativecommons.org/l/by/4.0/88x31.png)](http://creativecommons.org/licenses/by/4.0/)

此项目基于[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/).


[OSS Icon]: https://cdn.rawgit.com/Awesome-Windows/Awesome/master/media/OSS.svg
[Freeware Icon]: https://cdn.rawgit.com/Awesome-Windows/Awesome/master/media/free.svg

# 云

IaaS指提供系统（可以自己选）或者储存空间之类的硬件，软件要自己手动装；PaaS提供语言环境和框架（可以自己选）；SaaS只能使用开发好的软件（卖软件本身）；BaaS一般类似于非关系数据库，但各家不通用，有时还有一些其它东西。

## 其他人的集合

* https://education.github.com/pack GitHub学生包，需用教育邮箱验证。各种福利，可从DigitalOcean上手
* https://github.com/ripienaar/free-for-dev 本文尽量不与此项目重复
* https://github.com/AchoArnold/discount-for-student-dev
* https://github.com/ivmm/Student-resources
* https://www.freeforstudents.org/
* https://github.com/255kb/stack-on-a-budget
* https://github.com/Ibexoft/awesome-startup-tools-list
* https://www.cokemine.com/
* https://freestuff.dev/

## Paas

* https://www.heroku.com/ java go py docker。国内访问不佳。现在没有免费的了
* https://fly.io/docs/pricing/ py node go 静态，感觉很完美
* https://www.deta.sh/ py3.9 node14 内存128MB，依赖250MB，支持定时任务。有类dict数据库和10GB存储且可独立使用
* https://www.pythonanywhere.com/ 限制非常多，免费账户不允许访问白名单之外的网站。但好歹能提供一个自动https的web app
* https://www.divio.com/ docker
* https://render.com/ 曾经免费plan只有静态网页，现在提供service和database了。有node py go pg
* https://www.clever-cloud.com/en/pricing 看介绍送20€，但应该只会送一次，可以用4个月；数据库好像有完全免费的
* https://cloud.google.com/appengine/docs/ 标准环境有一点储存空间和流量，要求启用API即要求绑卡，柔性环境(.NET)必须启用结算。国内无法访问
* https://clustered.com/pricing 现在只免费14天，永久免费的plan还没出，但至少从2020年11月就是这样了
* https://www.koyeb.com docker node py go，首页被RST
* https://railway.app/ node py go java，用了类似于heroku的buildpacks，RST
* https://qoddi.com/
* https://appwrite.io/cloud 至少从2021年10月就说有了，但一直没出
* https://adaptable.io/ node py go
* https://appliku.com/ django 可能直接打不开

### .net

* https://freeasphosting.net/ 网站说了一大堆学习的东西，不过说支持.NET5
* https://www.gearhost.com/ 看起来比较好，支持3.1。还支持PHP7和node。现在开了CF屏蔽大陆IP
* https://order.aspify.com/en/freehosting/ 100MB硬盘100MB数据库，支持5。但之前不让注册说服务在中国不可用
* https://somee.com/ 被墙了，且IP被封了
* https://www.myasp.net/hosting_plans 免费两个月但好像能免费续期

## 云端空间/IDE

* https://cloudstudio.net VSC，服务器在上海，每月免费1000分钟=16.7小时，4G内存，8G硬盘（但/tmp很大）
* https://mydev.csdn.net/product/ide/dashboard 与coding的非常类似，目前每月免费5000分钟。没有cpptools
* https://www.gitpod.io/ VSC，免费版每月50小时，支持在本地打开；专业版在学生包里免费6个月但要求Primary Email是学校的账户
* https://repl.it/ 有免费版，专业版在学生包里免费3个月。支持许多语言，支持类Heroku的hosting，只要监听0.0.0.0上任意端口即可。自带kv数据库。配置文件为隐藏的.replit和nix，内容参考configuring-repl
* GitHub Codespaces：可能收费，目前个人版暂时是免费的
* https://workspaces.openshift.com/ 魔改VSC，不支持扩展，国内访问慢；之前是codenvy和che.openshift.io
* https://paiza.cloud/en/ 日产，好像还支持SSH连上去
* https://codetasty.com/
* https://next.tech/ 学生包中有
* https://ide.goorm.io/pricing 可以建立五个工作区，可以用SSH连上去。好像是自制的，界面完成度蛮高的，有终端，但没有intellisense，只能玩玩。好像可以运行docker容器？
* https://www.tutorialspoint.com/codingground.htm http://codepad.org/ https://ideone.com/ https://coliru.stacked-crooked.com/ https://wandbox.org/ https://tio.run https://code.xueersi.com/ide/code/1 https://jsrun.net/ https://www.jdoodle.com/ https://rextester.com/  https://ide.progman.in https://glot.io/ 无需登录，能执行许多语言，但只能说能运行代码，称不上IDE。https://www.codiva.io 有一点intellisense
* https://www.keil.arm.com/
* https://www.jetbrains.com/zh-cn/space/
* https://lightly.teamcode.com/ 国产，新出的

### 前端在线IDE

* https://jsbin.com 简洁，无需注册，开源。国内搭建的：https://code.h5jun.com http://http://js.jirengu.com
* https://codepen.io/ 可不注册
* https://stackblitz.com/
* https://codesandbox.io/
* https://bit.dev/ RST
* https://runkit.com 类似于jupyter notebook，也能创建api，以及把js的codeblock变得可运行
* https://www.codeply.com/
* https://plnkr.co/ 比较简陋
* https://jsfiddle.net/ 我这里打不开，且感觉是他们封的我们

### Jupyter Notebook/Lab 大数据机器学习平台

* https://colab.research.google.com/ 有免费gpu额度，国内无法直接打开。免费版无终端
* https://tianchi.aliyun.com/notebook-ai/home 免费gpu 60小时/年。登录要用阿里云账号，不想记住密码，每次都要用手机扫很麻烦，有时还要短信二次验证
* https://aistudio.baidu.com/aistudio/projectoverview/private 内存8G，磁盘100G，work目录永久保存，实名认证有一些GPU资源；长时间不用无法自动重连
* https://www.kaggle.com 验证电话后有免费gpu和外网，能连续运行9小时，有机器学习的教程
* https://www.heywhale.com/home/project 国产
* https://datalore.jetbrains.com/
* https://cocalc.com/doc/jupyter-notebook.html
* https://jupyter.org/try 官方，资源非常少，有C++；mybinder可以从GitHub仓库建立临时NB
* ~~https://kogence.com/app/landing/pricing~~
* https://deepnote.com 免费额度750小时，5G空间
* https://www.dclab.run/project_list.html 国产
* https://software.intel.com/content/www/cn/zh/develop/tools/devcloud.html
* https://lab.datafountain.cn/ 国产，CCF
* https://www.datacastle.cn 国产

## 数据库DBaaS

* https://db4free.net/ mysql 200M
* https://dbhub.io/ SQLite，以HTTPAPI使用，基本上是用git存文件，不过允许用API查询，修改则要下下来
* https://memfiredb.com/ 兼容PG11，国产，5GB，目前在公测，管理员说后续收费计划还没决定
* ~~https://remotemysql.com/ mysql 8.0 100M，需要花不少时间回答调查问卷，允许常见的DQL和DML和创建索引，不能创建Proc 视图 触发器~~ 挂了
* https://www.freemysqlhosting.net/ mysql 5.5，5MB，每周会收到要手动操作来延期的邮件
* https://www.datastax.com/products/datastax-astra/pricing ApacheCassandra(NoSQL)
* ~~https://www.freesqldatabase.com/ mysql 5MB~~ 会过期且就不能再用了
* http://sqlpub.com/ MySQL，国产
* https://freedb.tech/ MySQL8 50MB
* https://tidbcloud.com/ 兼容MySQL，国产
* https://neon.tech/ PG，EA

## BaaS

* ~~https://bmob.cn/~~ https://www.bmobapp.com/
* https://leancloud.cn/pricing/
* https://firebase.google.cn/pricing 用处：https://zhuanlan.zhihu.com/p/95334890
* https://www.zhihu.com/question/34124789/answer/72495188
* https://maxleap.cn/s/web/zh_cn/devcenter-pricing.html
* https://www.8base.com GraphQL
* https://www.easycsv.io/pricing
* JSON
  * https://jsonstores.com/ 100个JSON对象，每个最大2MB
  * https://jsonbin.io/
  * https://extendsclass.com/json-storage.html
  * ~~https://json.psty.io/~~
  * https://www.jsonstorage.net/ 有无需注册的
  * https://db.neelr.dev/ 无需注册，打开网页时自动生成一个TOKEN。但国内打不开

## Managed K8S

* https://www.openshift.com/products/online/ 每60天清除
* https://okteto.com/pricing 免费版2CPU，4G内存，10G储存。刚注册送一个月pro，不付款自动降到免费版。免费版24小时不活动就sleep。原意是为开发者日常开发使用的
* https://usekrucible.com 一个月能用25小时，自己分配
* https://labs.play-with-k8s.com/ 好像每天只有四小时；https://labs.play-with-docker.com/
* zarvis.ai staroid.com 网页都用的是Google的服务器，无法直接访问
* https://kubesail.com/ 停止免费版了，不过还是能作为管理平台
* https://loft.sh/ 好像只是客户端或者管理平台
* ~~https://kubernauts.sh/~~ 宣传免费版有1CPU，1G内存；申请注册后没收到任何邮件，无法登录。现在会跳转到https://kubernautic.com/ 打不开
* 挂了的：k8spin.cloud tryk8s.com

## Serverless/Node Paas（无状态的api）

* https://glitch.com/
* https://workers.cloudflare.com/ ；https://github.com/xiaoyang-sde/reflare
* https://vercel.com/ node go py
* https://deno.com/deploy
* https://pipedream.com/
* https://keen.io/
* ~~https://www.openode.io/pricing~~
* https://www.cloud66.com/node/ 免费一个月
* ~~https://www.jexia.com/~~
* https://encore.dev/ RST
* 谷歌的functions有一些免费额度，但一定会产生部署费用，最少$0.03/mo
* 国内的云服务厂商一般都有FaaS服务，也有一定的免费额度，但问题是公网流出流量是没有免费额度的
* https://www.slappforge.com/sigma 仅开发平台
* https://catalyst.zoho.com/ 有免费的
* ~~https://hook.io/pricing~~
* https://jotcode.io/
* https://wundergraph.com/ 免费版还没出
* https://www.val.town/

## 静态网页托管（必须要能自动更新）

* https://surge.sh/
* https://www.netlify.com/
* https://cloudcannon.com
* https://tiiny.host 只能存活7天？
* https://pages.cloudflare.com/
* https://cloud.digitalocean.com/apps starter版本免费3个静态网站，用了cf的cdn国内可能无法访问

## 也许可用的IaaS

* euserv，德国的，只有IPV6，亲测确实可以，但硬盘很慢 https://github.com/YG-tsj/EUserv-warp
* https://activity.xinruiyun.cn/free/ 新睿云，发个广告可以免费用一个月的ECS
* https://www.oracle.com/cn/cloud/free/ 体验文章：https://51.ruyo.net/14138.html 不支持prepaid card；https://www.blueskyxn.com/202109/5232.html
* https://51.ruyo.net/14583.html Azure
* https://www.atlantic.net/ ~~免费12个月~~现在好像变成免费一个月了，需要信用卡，
* https://hax.co.id/ https://woiden.id/ https://blog.kermsite.com/p/hax/
* https://evolution-host.com/
* https://microlxc.net/ https://nanokvm.net/ 需要注册 https://lowendtalk.com/ 满足一定条件才能申请
* 谷歌云、Amazon、Azure、Yandex Cloud：注册后都会送一些额度
* https://open.iot.10086.cn OneNET移动的，目前没啥免费的内容

### [IBM Cloud](https://www.ibm.com/cn-zh/cloud/free)

* Lite(轻量)版无需信用卡，没有到期时间，完全不会变到付费套餐上，额度到了就无法使用，30天不活动自动删除，一共44项服务
* Cloud Foundry：PaaS 256M内存，支持Java Node .NET GO PHP Py。10天不活动就休眠。apic.mybluemix.net和mybluemix.net都被墙了。要用ibmcloud命令行
* 对象储存：25GB储存，5GB出站；Cloudant JSON文档数据库：1GB；DB2数据库：200MB，每90天要邮件延期
* 机器翻译：但无ja-zh模型，只能和en互转，每月100万字符
* ~~API Gateway：转发一次到另一个endpoint上，能用于静态文件的反代，能设定密钥验证和限制速率，显示调用频率。免费调用100万次但是没写每月，之后限速~~ 他们关闭此服务了，说要迁移到API Connect Reserved，然而这东西是付费的，介绍中的Lite能用的V5版也不存在
* Cloud for Education：持续时间一小时的ECS，能用RDP连上但卡到完全无法使用，好像无外部互联网连接
* 机器学习
* Docker Registry：储存0.5GB，流量5GB
* Event Streams：Kafka
* 那些“软件”虽然有非常多免费的，但必须部署到k8s上；k8s也有免费套餐，但lite无法创建，因为流量和IP可能要收费
* 函数计算：虽然有一点免费额度，但是无lite版

### [腾讯云](https://cloud.tencent.com/act/free)

* 对象储存：免费半年
* CDN：免费半年
* Serverless：免费一年
* 文件储存：免费10G
* 机器翻译：免费500万字符/月，开通免费版必不会收任何费用
* 云托管 CloudBase Run：不知道干什么用的

### [阿里云](https://free.aliyun.com)

* ECS：https://www.aliyun.com/daily-act/ecs/free 需要实名认证且未购买过任何产品，有个t6的ECS可以免费试用一年
* MaxCompute大数据计算服务开发者版https://www.aliyun.com/product/odps
* 云效DevOps有一些免费额度，包括5GB Maven仓库
* 机器翻译通用版：每月100万字符免费额度
* FaaS一年免费额度

## 低代码平台/aPaaS

* 指不用写很多代码就能设计出软件，有可视化工具
* 大部分都是BPM平台，即 表单+工作流审批，适合企业建立业务逻辑在线办公
* 往往与平台本身严重绑定，难以复用和维护，切换平台代价大，开发者自身难以提升

### 国内的

* https://github.com/taowen/awesome-lowcode 收集
* https://www.aliwork.com/ 宜搭，阿里+钉钉
* https://www.apicloud.com/ 云端开发管理类
* https://www.mingdao.com/ 明道云
* https://www.jiandaoyun.com/ 简道云
* https://www.huoban.com/ 伙伴云
* https://qingflow.com/ 轻流
* https://www.steedos.com/pricing/platform/ 华炎魔方，开源，私有部署免费
* https://baidu.gitee.io/amis/docs/index 开源，偏程序员
* https://modao.cc/ 墨刀，原型设计工具
* https://www.imgcook.com/ 淘宝，由设计稿生成界面
* https://www.huaweicloud.com/product/appcube.html 华为云应用魔方，太新
* https://www.informat.cn/ 织信
* https://seatable.cn/ 在线协同表格和信息管理工具，类似于excel，本体不开源但开源了一些组件
* https://www.baishuyun.com/ 百数云
* https://kalacloud.com/ 卡拉云
* https://js.design/ 即时设计，原型设计工具
* https://code.fun/
* https://yesapi.cn/
* https://www.jijyun.cn/ 集简云，相当于内置了常见应用的爬虫数据源，获取后根据需要执行动作
* 网页感觉不太好的
  * https://www.iyunbiao.com/ 云表
  * https://www.grapecity.com.cn/solutions/huozige 活字格
  * https://www.learun.cn/ 力软敏捷框架
  * https://www.ivx.cn 号称零代码开发Web App和小程序，前身是ih5.cn，不是BPM
  * https://wuyuan.io/ https://enhancer.io/ 无远开发平台，个人使用免费，商业收费
  * https://www.wudaima.com/ 宜创无代码，官网的footer的链接都是废的，一点也不透明
  * https://www.bn100.com/ 柏思科技/Workfine
* 收费的
  * https://h3yun.com/ 氚云，只免费15天，集成钉钉
  * https://www.newdao.net/ 牛刀，免费两周
  * https://www.clickpaas.com/ 不支持个人
  * https://www.dadayun.cn/ 搭搭云 没有注册的地方
* 没有https的： http://www.joget.cn/ 捷得 、http://www.putdb.com/ WebBuilder 、http://www.mf999.com/ 魔方网表(纯表单类)、http://www.delit.cn/ 度量快速开发平台、http://www.jinyunweb.com 进云、http://dev.easydo.cn 易开发、http://www.jepaas.com/ 、

### 国外的

* https://anvil.works/ py全栈，前端Drag and Drop UI，后端和数据储存用的是该网站的库
* https://www.outsystems.com/pricing-and-editions/ 开发移动应用，是该行的老大；前端组件比较多，后台相对弱一点儿；注册需要姓名，邮箱
* https://www.mendix.com/ 开发移动应用，后台能力比较强（有微流系统）
* https://free.caspio.com/ Database-Powered Apps
* https://thunkable.com 开发移动应用
* https://www.appsheet.com/ 无法直接打开
* https://www.zoho.com/creator/ 网页在我这里打开巨慢。可以一直用免费版只要不使用高级特性
* https://airtable.com/
* https://zenkit.com/ 无法直接打开
* Google的App Maker（G Suite收费）、微软的PowerApps（收费10$/mo）
* https://www.dronahq.com/
* https://zhuanlan.zhihu.com/p/375252561
* https://www.odoo.com/zh_CN/ 开源
* https://bubble.io/ 新出的
* https://github.com/appsmithorg/appsmith
* https://www.ragic.com.cn/ 表格类
* https://www.airtable.com/
* https://www.make.com

## 定时任务

* https://www.cronjobservices.com/ 收集
* EasyCron：每月要重新激活
* https://cronitor.io/

## 未分类

* https://www.litespeedtech.com/experience-litespeed-for-free 一个月有效？需要姓名，电话，邮箱，地址。好像只有wordpress，还是只有软件？
* https://github-students.educationhost.co.uk/ 免费一年
* 有可能与Jupyter有关：
  * https://www.dataquest.io/plans-pricing/
  * https://mode.com/compare-plans/
  * https://kyso.io/pricing
* https://studio.azureml.net/ 可视化机器学习实验工具，可不登陆使用
* https://quic.cloud/ Wordpress cache cdn
* https://apis.baidu.com/
* https://platform.sh/pricing/ 好像只免费30天
* API聚合
 * https://rapidapi.com/ 只是一个平台，经过它反代到各个提供者的服务器上，大部分质量很低，速度超慢。作为提供者大概简化了收费和验证途径吧。有点用的：simple-file-storage、secure-storage、postput。各种cors-proxy反代。ProxyPage代理ip
 * https://promptapi.com https://apilayer.com/
 * https://www.lafyun.com/

# 有云服务器时能自建的项目

* https://github.com/awesome-selfhosted/awesome-selfhosted
* ss：https://github.com/lrinQVQ/script https://github.com/mritd/dockerfile/tree/master/shadowsocks
* 网盘
  * Seafile：国产，C，同步盘，但必须依赖Py2.7
  * https://github.com/nextcloud/docker https://docs.nextcloud.com/server/17/user_manual/ ：owncloud的同作者，PHP。https://github.com/e-alfred/ocdownloader 离线下载插件
  * Cloudreve：国产，GO，支持OSS
  * zFile：国产，Java
  * https://github.com/syncthing/syncthing GO
  * BTSync
  * oneindex
  * OLAINDEX：使用OneDrive API
  * https://github.com/zhaojun1998/zfile 评测：https://xiaoyou66.com/archives/769
  * https://www.directorylister.com/ indexer，PHP
  * https://github.com/prasathmani/tinyfilemanager PHP
  * sparkleshare
  * rclone
  * https://freefilesync.org/
* 文件浏览器：https://larsjung.de/h5ai/ （PHP）、https://github.com/filebrowser/filebrowser （GO）
* gitlab
* 爬虫
* 论坛：discuz（PHP，维护不快），Flarum（PHP），vanilla (PHP)
* 监控程序/API
  * https://github.com/ivbeg/awesome-status-pages 合集
  * https://cachethq.io/ 合集中最活跃的但是PHP
  * https://github.com/hunterlong/statping GO
  * https://github.com/bazzite/statusfy JS
  * https://uptimerobot.com/ 不开源有免费版
  * https://www.atlassian.com/zh/software/statuspage 有免费版
  * https://github.com/nicolargo/glances Py
  * https://eheh.org/ 国产
  * https://www.fundebug.com/
  * https://betteruptime.com/pricing 不开源有免费版
* 监控服务器状态：https://github.com/netdata/netdata C+Python，star非常多，有中文翻译。https://github.com/grafana/grafana TS+GO，star数稍少，但commit数和贡献者数非常多。https://github.com/open-falcon/falcon-plus GO，相对而言star数少很多，但是国产的，需要mysql；https://github.com/CokeMine/ServerStatus-Hotaru
* 各种可以装的软件的收集：https://github.com/Kickball/awesome-selfhosted 、https://www.softaculous.com/softaculous/apps 、 https://github.com/luong-komorebi/Awesome-Linux-Software 、https://statusfy.co/
* 自己挂广告
* 图床：https://xiaoyou66.com/archives/774 https://molunerfinn.com/PicGo/ https://github.com/wisp-x/lsky-pro https://github.com/chevereto/Chevereto-Free
* 可视化日志：https://goaccess.io
* BT下载：https://github.com/jpillora/cloud-torrent
* 创建网页版的Shell：https://github.com/instantbox/instantbox
* jupyter notebook: https://xiaoyou66.com/archives/1095
* OSS: https://github.com/minio/minio https://www.digitalocean.com/community/tutorials/how-to-set-up-an-object-storage-server-using-minio-on-ubuntu-18-04 但协议是最严格的AGPL
* 短链接：UOURLS（PHP，需要二次开发）Polr（也是PHP，不过偏向开箱即用）https://github.com/ellisonleao/pyshorteners https://shlink.io/ https://dub.sh/
* https://apex.sh/up/ 一键部署几种语言的Serverless应用到AWS
* https://github.com/chrislusf/seaweedfs 分布式文件系统，支持S3的API；https://github.com/syncthing/syncthing
* 当我有服务器时我做了什么（别人的集合）：https://shanyue.tech/op
* 后台控制面板：https://www.jianshu.com/p/3bc7404af887
* 搜索引擎：https://github.com/benbusby/whoogle-search https://github.com/milvus-io/milvus https://github.com/meilisearch/MeiliSearch
* 控制面板：https://github.com/cockpit-project/cockpit
* 性能测试：`curl -L bench.sh | bash`
* CMS: https://www.storyblok.com/
* CI
  * https://www.jetbrains.com/teamcity/
  * https://drone.io/
  * https://devtron.ai/

## 自建Paas

集合：https://paasfinder.org

* https://dokku.com/
* openstack，开源IaaS，机器最好有10G以上的内存
* rancher, openshift, CloudFoundry, flynn
* https://www.rainbond.com/ 国产的
* https://letscoded.com
* https://www.koding.com/
* https://kodcloud.com/ 有使用者表示“每次访问都会采集服务端和客户端的隐私信息，里面流氓脚本一大堆”
* https://github.com/caprover/caprover
* https://convox.com/
* https://nanobox.io/
* https://caprover.com/
* https://rio.io/
* https://github.com/teamhephy/workflow
* https://www.kintohub.com/ 基于k8s
比IaaS高层（无法重装或指定系统），比PaaS低层（可以访问文件系统，有的可以SSH连上去），一般使用cPanel。

感觉比较好的：

* https://alwaysdata.com 支持多种语言，版本也比较新，注册只需要邮箱
* https://www.accuwebhosting.com/about/free-students-hosting
https://www.ukhost4u.com/free-website-hosting-uk/
https://3001.host/pricing/ 现在会自动跳到https://status.3001.host/
https://www.2makeu.com/pricing 522

---

听说你在找免费虚拟主机？：
速度、数据安全、网页安全（修改源代码、挂广告病毒）、随时消失（删库跑路）、难SEO、无客服、无法退出（要求付迁移费）、乱用信用卡

---
国内的，基本上都要实名+备案：
热铁盒 https://host.retiehe.com/ https://rthe.cn/ 静态和单文件PHP
乐云空间 https://www.renzhijia.com/buy/index/7/ ：2元/月，明说了稳定性差；注册需要姓名、手机号、地址

酷番云 https://www.kcloudidc.com/freehost ：注册需要手机号、QQ号，需要实名认证，有效期一个月，联系客服免费续到最长一年
主机蛋 http://www.idcegg.com/free/ ：有效期3个月，注册需要姓名、手机号、QQ号、邮箱、地址、身份证号
金泰联 http://www.iiddcc.com/ ：注册需要姓名、手机号、QQ号、邮箱、地址、身份证号
恒爱网络 http://www.zzhidc.com/freehost.html 两种方式，一种是发广告，另一种是充五块钱保证金
番茄互联 https://www.fqidc.cn/free/ 每年2元；https://www.fqidc.cn/index.php/buy/index/10/
蓝队云 https://www.landui.com/project/freehost/ 每天限额放出
我的免费云 https://www.myfreeyun.com/ 不支持TLS1.2
百度智能建站 https://aipage.baidu.com/ 可能收费
强人网络 https://www.qiangren.net/html/active/vhost-free/ 好像从2020年5月开始就暂停申请了
景安网络 https://www.zzidc.com/main/huodong/freehost 号称每天9点100台免费主机，现在好像没了
https://www.henghost.com/sponsor.shtml
https://www.xiaoji.la/ 签到得积分开通，可能缺货

---
国外的：

https://neocities.org/ 网站本体开源
https://www.nodehost.ca/ php mysql 访问很慢
https://my.nexusbytes.com/cart.php?gid=1 python node php

评测网站：https://hostingfacts.com/
收集：http://www.100bestfreewebspace.com/searchPage0/Free-Host.html

https://infinityfree.net/ ：单文件上限10MB；说是禁止使用广告拦截器，不过好像只是Dashboard等有广告，实际自己的网页不会插广告
https://x10hosting.com/ ：有很多被莫名其妙删掉的网站
https://www.awardspace.com/free-hosting/ ：慢、TOS中说可以把数据出售
https://www.freehosting.com/ ：速度慢、删网站
https://www.freehostia.com/ ：速度慢
https://www.freewebhostingarea.com/
http://www.zymic.com/free-web-hosting/ 无法直接打开。现在好像挂了
https://googiehost.com/freehosting.html 有人打广告；需要填 WHY DO YOU NEED THIS ACCOUNT?
https://freehostingnoads.net/ 好像存在推广；需要填姓名，手机，邮箱，地址
https://www.biz.nf/
https://www.lima-city.de/
https://www.zzz.com.ua/en
https://viewen.com/free-cloud-hosting/ https://dashboard.viewen.com/?language=chinese 好像quora的人评价比较高，但网站没有明显说免费
https://wpnode.net/free-hosting/ 有wp，php和mysql，空间1G；但要信用卡；无法直接打开
https://www.myownfreehost.net/
https://www.xrea.com/ 日本的
http://sitemix.jp/ 日本的
https://www.krypt.com/zh/cloud/wordpress 只有wp，免费版暂时卖光了；无法直接打开
https://www.uhostall.com/free-hosting.php
https://pipni.cz/
https://www.heliohost.org Community powered free hosting for everyone 感觉比较好
https://woomhost.com/
https://www.instafree.com/ 封了国内的IP
https://www.hostpoco.com/
https://profreehost.com/
https://www.websitebuilder.com/pricing
http://razyhosting.com/
http://0fees.us/hosting.php
--
二次售卖https://ifastnet.com/的：
http://olab.in
https://byet.host/free-hosting
http://efreehost.com

---
Drag and Drop的：

https://zh.wix.com/
https://webflow.com/
https://www.weebly.com/ 无法直接打开
https://www.squarespace.com/
https://www.ucraft.com/free-web-hosting
https://sites.google.com
https://www.ucoz.com 无法直接打开
--
国内的：
https://www.qifeiye.com/
https://www.strikingly.com/ https://www.sxl.cn/
https://jz.fkw.com/
http://www.wqdian.com/
http://www.zhuzi.me/
https://www.zhihu.com/question/19665744

---
号称免费VPS：
host1free/haphost
https://www.gigarocket.net/free-vps.php 也有free hosting
zulutrade
Vpswala.org
Xrea：https://www.freehao123.com/xrea-ssl/

---
Wordpress:
https://www.accuwebhosting.com/web-hosting/free-wordpress-hosting
https://pantheon.io/plans/pricing
https://wordify.com/wordpress-hosting/wp-devsites/
https://www.getshifter.io/
DDNS需要公网IP，基本上就是隔一段时间访问一下接口，连接和传输数据是不会消耗服务商的流量的。
内网穿透需要消耗服务器的流量。
还有点对点/内网打洞的技术，但是需要两边都安装软件：xtcp，n2n，moon，zerotier one

## frp

* https://www.natfrp.org/ Sakura Frp
* https://www.lu8.win/ ngrok、frp、n2n、nps、免费域名
* https://mefrp.cn/ 之前是 https://frp.msrx.online/
* https://liulifrp.cn
* https://www.openfrp.net/

## ngrok

1.x开源但现在已经停止维护了；2.x不开源。

* https://ngrok.com/ 官网，服务器在国外
* https://natapp.cn/ 免费的需实名认证
* https://www.ngrok.cc/ Sunny Ngrok，不过官网说也支持frp
* https://www.tunnelnat.com/ 虽然也写了frp，但好像只有ngrok有免费通道

## 其它开源的

* https://github.com/ffay/lanproxy Java
* http://wdom.net/ 免费20分钟
* https://github.com/inlets/inlets

## 其它不开源的

* https://hsk.oray.com/ 花生壳，注册需要手机号；DDNS和内网穿透都支持？后者免费速度1M。
* https://www.kingdriod.cn/ 神卓，免费速度1M；需要实名认证上传身份证
* http://www.luyouxia.com/ 路由侠
* https://www.notr.tech/ 免费3小时
* https://www.nsloop.com/ 量子互联，写的不限流量
* http://www.mofasuidao.cn/ 魔法隧道，写的是“免费创建账户”
* http://www.youtusoft.com/ 网络通
* https://xiaomy.net/ 网云穿
* https://localhost.run/ 无需注册？
* https://www.cpolar.com/
* https://pinggy.io/

## 免费DDNS

* https://dyndnss.net/eng/
* https://freedns.afraid.org/
* https://www.duckdns.org/
* https://www.noip.com/
* https://www.spdyn.de/ 只有德语？
* https://dynv6.com/
## 网页

### 域名

* 理论上DDNS也会提供，不过不是二级的
* https://my.freenom.com/clientarea.php  tk、ml、ga、cf、gq顶级域名
* https://nic.eu.org/ 欧盟下的，个人免费注册；http会被重置
* https://dns.txizd.cn/ 三级
* https://dns.yzjia.xin/ 三级
* http://cc.1xie.xyz
* https://github.com/fransallen/thedev.id https://github.com/js-org/js.org 要开PR
* https://www.freedomain.pro/ co.nr
* http://www.com.nu/
* https://domainoji.com/ https://www.punycoder.com/ emoji/idn域名转换；https://emojipedia.org/ emoji搜索
* https://nic.ua/en/domains 乌克兰 pp.ua
* https://www.azote.org 法国 asso.st，fr.nf，fr.cr，ze.cx，infos.st
* https://www.nom.za 南非
* https://www.sitelutions.com 纽埃 rr.nu
* https://www.ipq.co 哥伦比亚共和国
* https://fofa.so/ 用来搜索域名的

### 证书

* https://freessl.cn
* https://freessl.org
* https://allinssl.com/zh/
* https://zerossl.com/

### DNS

* https://www.dns.la/
* https://www.bajiedns.com/
* https://www.dnsdun.com/
* https://nip.io/ 自动根据域名中的IP返回DNS查询结果。xip.io挂了
* https://dnsmadeeasy.com/

### [Cloudflare CNAME/IP/NS 接入](https://github.com/ZE3kr/Cloudflare-CNAME-Setup/blob/master/README.zh.md)

* https://cdn.liang.ke/
* https://cf.tlo.xyz/
* https://dns.porta1.net/
* https://cdn.bnxb.com/
* https://cdn.wzfou.com/
* https://cdn.moeelf.com/

### CDN

* https://su.baidu.com/product/cdn.html
* http://cdn.meierlian.net/
* https://www.yunaq.com/jsl/ 仅限80端口
* https://www.cdnfine.com/
* https://wangzhan.qianxin.com/ 前身是360网页卫士
* https://www.merlincdn.com/ 注册送$10，不清楚有没有限时，额度有个自选的
* https://github.com/EtherDream/freecdn 自动选择合适的CDN的程序

### 短网址

* https://1t.click/ 、https://sina.lt/ 新浪的
* https://u.nu/
* http://suo.im/
* https://tinyurl.com/
* https://bitly.com/ 无法直接访问
* https://sl.iyong.com/
* https://v.ht 国外的
* https://ulvis.net/
* https://reurl.cc
* https://fars.ee/

## 国内源/镜像

* https://github.com/china-speed/china-speed.github.io apt/docker/pip/npm收集
* https://www.7ed.net Google Fonts/Libraries、CDNJS、Gravatar、Github RAW、Imgur、SM.MS反代；曾用cdn.staticdn.net cdn.con.sh
* https://cdn.geekzu.org/cached.html Google Fonts/Libraries、Gravatar反代
* https://sb.sb/blog/css-cdn/ loli.net域名，Google Fonts/Libraries、Gravatar反代
* https://npm.taobao.org/mirrors 一部分GitHub开源项目的release
* https://cdn.ews1.com/ Google Fonts、Gravatar
* https://github.com/eryajf/Thanks-Mirror 收集
* https://cravatar.cn/avatar/

### GitHub

* jsdelivr、statically：相当于只支持raw
* https://doc.fastgit.org/zh-cn/node.html 主站网页、assets、~~raw、release~~
* https://gitclone.com/ 支持http clone
* https://github.com/XIU2/UserScript/blob/master/GithubEnhanced-High-Speed-Download.user.js
* https://www.toolzl.com/tools/githubjiasu.html 支持release
* https://github.com/zwc456baby/file-proxy https://pd.zwc365.com/
* https://github.wuyanzheshui.workers.dev/ https://github.rc1844.workers.dev/ 网页版
* https://github.com/nulastudio/mclone 安装后用git mclone即可自动用mirror
* https://shrill-pond-3e81.hunsh.workers.dev/ https://gh.api.99988866.xyz/ https://g.ioiox.com/ (https://github.com/hunshcn/gh-proxy)
* https://gh.haval.gq 没处理css和js的网页版
* https://ghproxy.com/
* https://git.aya1.top/ 网页，https://note.aya1.top/#/r 任意网页。基于CF Worker
* https://d.serctl.com/ 活着但是日本Linode，IP干扰大。支持release
* https://github-do.panbaidu.cn/ github.do
* https://combinatronics.io/ 国外的，相当于只支持raw，com后缀被污染+RST了
* https://raw.iqiq.io/ 仅raw
* https://hub.nuaa.cf/
* https://github.com/fhefh2015/Fast-GitHub/issues/44
* ~~github.com.cnpmjs.org~~ 网页版，触发了滥用检测
* ~~zll.us~~
* ~~https://githubd.com~~
* ~~widora：http://gg.widyun.com http://g.widyun.com/ http://g.widora.cn/ 支持release~~
* ~~https://git.best/~~
* ~~http://gitd.cc/~~
* ~~https://www.toolwa.com/github/~~ 网站本身活着，但线路一是用不了的jsproxy，线路二是fastgit
* ~~https://github.bajins.com/ 网页版~~

### 前端库

* 国内的，基本都是同步的cdnjs，否则要么不全要么老；链接格式只有bootcdn.cn的与cdnjs完全相同，其余的都没有ajax/libs/部分，字节的还多一部分。版本排序原本就是按字符串顺序，如1.1 1.10 1.2，太蠢了
  * https://www.bootcdn.cn/ 由bootcss网站支持
  * https://www.staticfile.org/ 七牛云。版本默认选的最老的，不知道怎么想的。版本排序按字符串顺序
  * https://cdn.baomitu.com/ 360
  * https://cdn.bytedance.com/ 字节跳动，直接把所有库按首字母列出来
  * https://jshub.com 有点旧，感觉是模仿bootcdn的
  * https://cdnjs.net/ 有可能2019年后就没更新了
  * https://lib.sinaapp.com/ 新浪，少且旧，jq最新3.1
  * http://jscdn.upai.com/ 又拍云，极少且极旧，无https
  * https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js 非公开，不更新
* 国外的
  * https://www.jsdelivr.com/ 有国内CDN。支持GitHub。https://esm.run 支持ESM
  * https://cdnjs.com/ CF自己的，访问慢
  * https://unpkg.com/ 用的CF的CDN，实验性支持ESM
  * https://statically.io/ 用的Fastly的CDN。只支持GitHub，加min后缀自动压缩，还有图片压缩服务和网页快照截图功能。现在cdn.statically.io被RST了
  * https://jspm.org/ 仅ESM
  * https://www.skypack.dev/ snowpack团队的，ESM，高度为浏览器优化
  * https://esm.sh/ 仅ESM，自动转换的
  * https://ajax.aspnetcdn.com 微软的，只有jq相关的很少几个，但路径格式与jq官网相同方便替换
* Font Awesome
  * 前面那些前端库仍可用，但是某些版本不在cdnjs上，如5.0.x
  * https://use.fontawesome.com/releases/v5.15.0/css/all.css 官方的打开慢，且注意它其实对应的是min.css
  * http://apps.bdimg.com/libs/fontawesome/4.4.0/css/font-awesome.min.css 非公开，不更新

## 储存

* 那些明显是其他人自建的使用时要小心跑路，不建议放重要内容

### OSS

* https://www.zhihu.com/question/51309695 有哪些优秀且免费的云存储服务？
* https://www.zhihu.com/question/34445630/answer/449868590 网易云，免费50G空间，20G流量
* https://developer.qiniu.com/af/kb/1574/free-credit-information https://www.qiniu.com/events/free 七牛云
* https://www.upyun.com/league 又拍云，10G储存15G流量
* https://www.ucloud.cn/site/product/ufile.html 实名认证用户20GB免费云存储空间和20GB/月免费下载流量
* http://www.cuplayer.com/price/ 酷播云，视频储存
* https://u-file.cn/ 好像需要申请
* https://get.robin.io/ 5GB

### 网盘

* https://www.quqi.com/ 曲奇云盘，但好像没有电脑端
* https://cowtransfer.com/ 奶牛快传，~~现在也提供网盘功能~~
* https://www.wenshushu.cn/
* https://www.liupan.net/
* https://teracloud.jp 10G空间，支持 WebDAV；推荐码NDMSQ
* https://www.furk.net/ 很慢，1G/D且5G/W
* https://www.lanzou.com/ 蓝奏云，单个文件限100M
* 亿方云
* 天翼云盘、沃家云盘、和彩云
* https://www.zoho.com.cn/workdrive/
* 超星云盘
* 腾讯微云
* https://www.asuswebstorage.com
* https://pan.bitqiu.com/ 比特球云盘
* https://github.com/xausky/DockerRegisterCloud 把docker registry变成网盘
* https://www.mediafire.com/
* https://github.com/apachecn/CDNDrive
* https://ondisk.fuyeor.com/login
* https://internxt.com/

### Onedrive

* https://products.office.com/en-us/student?tab=students
* https://xkx.me/
* https://xyxywan.gitee.io/web/ 有桌面office但需审批
* https://get.porta1.net/
* https://zhuanlan.zhihu.com/p/105438817 免费申请office E5开发者订阅，附无限续期+私人网盘教程
* Index：https://github.com/spencerwooo/onedrive-vercel-index https://github.com/vcheckzen/FODI https://github.com/qkqpttgf/OneManager-php

### 文件分享

* https://catbox.moe/ 上传速度不稳定，快的时候有600K，单次上限200MB
* https://www.zippyshare.com/ 上传速度为0
* ~~https://send.firefox.com/ 上传速度能到2M，但有时传到一半会断掉；VPS的下载速度能到21MB/s~~
* https://www.up-4ever.org/ 上传速度不到1M，需要关闭广告过滤扩展才能用，有的后缀不让传，下载等30秒人机验证后倒是能创建出直链，单次上限200MB
* https://transfer.sh/
* https://uguu.se/ 单次上限100MB
* https://anonfiles.com/
* https://letsupload.co/
* https://secufiles.com/
* https://wetransfer.com/
* https://wormhole.app/
* https://filedoge.com/
* https://demo.jirafeau.net/ 也能自建 https://gitlab.com/mojo42/Jirafeau
* https://plik.root.gg 也能自建 https://github.com/root-gg/plik
* https://wormhole.app/
* https://pan.duiai.cc/
* https://oshi.at/
* https://anonfiles.com/ https://filechan.org/
* https://ttm.sh/
* https://send.internxt.com/
* https://bashupload.com/ 有效期3天，只能下载一次
* https://airportal.cn/
* https://musetransfer.com/
* https://snapdrop.net/ 无需APP，仅局域网
* https://termbin.com/
* https://temp.sh/

### 离线下载

* https://www.loadbt.com 免费用户2G
* https://zhuanlan.zhihu.com/p/37785481 19款离线下载服务对比

### 图床

* http://www.zmonster.me/2013/12/06/image-host-service.html 国内外图床及其对比
* https://www.zhihu.com/question/21667151
* https://sm.ms/
* https://postimages.org/
* https://imgbox.com/
* https://imgbb.com/
* https://www.freeimagehosting.net/
* https://pic.xiaojianjian.net/
* https://imgurl.org/
* https://yunjiemi.com/ 之前是img.kuibu.net
* https://www.superbed.cn/ pic.imgdb.cn
* https://www.moepicx.cc
* https://www.hualigs.cn/
* https://jpg.dog/
* https://www.z4a.net/
* https://moetu.org/
* https://imgbb.com/
* https://www.picgd.com/
* https://tuchuang.richuyun.com/
* https://images.weserv.nl/ image cache & resize service 相当于图片的CDN
* https://imgtu.com/ 之前是imgchr.com
* https://imgix.com/ 使用.net的域名
* https://im.ge/

### BT Trackers

* https://github.com/ngosang/trackerslist
* https://github.com/XIU2/TrackersListCollection
* https://github.com/DeSireFire/animeTrackerList

## (盗版)资源

* https://discx.yuntu.io/ 光盘

### 软件

* https://masuit.com/
* https://www.lanzous.com/u/roustar31cn

### 书

* https://t.me/ebookdl 亲测确实能搜到
* http://finelybook.com/ 国产，亲测可以，非注册用户只能用城通网盘
* https://github.com/hoodiearon/w3-goto-world/tree/master/集成实用夹/书籍与文档
* https://smtebooks.com/
* https://foxgreat.com/ 搜不到C#的书
* https://dokumen.pub 网站不是英文的
* https://www.wowebook.org 下载页面为turbobit.net，很慢，而且有的要开会员
* https://www.zhihu.com/question/21202757 有哪些好的电子书下载网站推荐？
* https://zhuanlan.zhihu.com/p/53064677 有了这十几个网站，没有你找不到的电子书！
* https://www.jiumodiary.com/ 鸠摩搜书，也能搜到百度网盘的内容
* https://gist.github.com/baiwfg2/af827b8b75eebf8ab29f5531a0d265ce
* ~~https://www.allitebooks.com/~~ 超好但是挂了，不清楚现在的几个是否有关：https://www.allitebooks.in/ https://allitebook.xyz/ https://allitbooks.net/
* https://www.jb51.net/books/ 下载需要关注公众号获取提取码
* http://sd.blackball.lv/books/
* https://sobooks.cc/ 不是专门计算机的
* http://www.kgbook.com/ 不是专门计算机的
* https://z-lib.org/ 无法直接访问。https://sg1lib.org/ 目前可以直接访问
* https://www.zhihu.com/question/19709630 有哪些网站可以获取免费的国外的原版书籍（电子版）
* https://github.com/EbookFoundation/free-programming-books 免费的
* https://github.com/Jackpopc/CS-Books-Store 该开发者自己收集的一小部分经典的书，百度网盘直接下载
* https://libgen.gs https://1lib.ink/ https://zh.zlib.buzz/ https://www.ooopn.com/tool/zlibrary/

### 音乐

* https://tool.liumingye.cn/music/
* https://www.yijingying.com/html/musictools/
* http://music.moresound.ml/
* 国外的：https://myfreemp3.to/ https://myfreemp3juices.cc/ https://www.myfreemp3.bond/
* https://www.52pojie.cn/thread-929831-1-1.html 集合
* https://listen1.github.io/listen1/ 只是整合可以直接听的
* https://github.com/lyswhut/lx-music-desktop
* https://music.y444.cn/ 需要关注公众号
* 挂了的：https://github.com/maicong/music https://github.com/OJZen/QMD_Android

### GeoIP2数据库

* https://geolite.clash.dev/
* https://github.com/Dreamacro/maxmind-geoip/releases
* https://static.clash.to/GeoIP2/GeoIP2-Country.tar.gz （RixCloud 公共库）
* https://quantumult.crossutility.com/download/geoip/database/GeoLite2-Country.mmdb

### 字体

* https://zenozeng.github.io/Free-Chinese-Fonts/
* https://www.webfont.com/onlinefont/index
* https://www.marksimonson.com/fonts

## 安全

* https://github.com/euphrat1ca/security_w1k1
* https://github.com/No-Github/1earn

### 恶意软件分析沙箱

* https://habo.qq.com/ 腾讯哈勃。现在只能分析很少的一部分，详细报告需要高级会员，而申请通道已经关闭了
* https://www.maldun.com/ 魔盾安全
* https://s.threatbook.com/ 微步
* https://www.hybrid-analysis.com
* https://scan.anxinsec.com/
* https://ata.360.net/ 360安全大脑沙箱云，免费版只有Win7 32位环境

### 服务器安全软件

* https://www.yunsuo.com.cn/download.html 
* https://scanner.baidu.com webshell检测引擎

## Git平台

* https://code.aliyun.com
* https://xiaolvyun.baidu.com
* https://gitcode.net csdn出的，GitLab
* https://gitee.com/
* https://www.gitlink.org.cn/
* https://opendev.org Ubuntu, Gitea
* https://salsa.debian.org/ GitLab
* https://repo.or.cz/
* https://sr.ht/ https://sourcehut.org/

## Paste Bin

* https://pastebin.com/
* https://ghostbin.com/
* https://rentry.co/
* https://hastebin.com/
* https://pastebin.ubuntu.com/
* https://www.cacher.io/ 功能很多
* https://write.as/ 其实是博客
* https://del.dog/
* https://psty.io
* https://telegra.ph RST了

## 搜索引擎

* https://goobe.io/ 程序员搜索
* https://www.sousuoyinqingtijiao.com/ 搜索引擎收录提交入口
* https://www.cn-ki.net/ 文献搜索
* https://www.wuzhuiso.com/ 360的
* https://fsoufsou.com/

## Docker平台（非免费）

* https://www.tenxcloud.com/ 时速云
* https://www.daocloud.io/ 有一点点免费测试环境 http://docs.daocloud.io/app-deploy-mgmt/cloud-limited-resources
* https://www.mopaas.com/ 魔泊云
* https://www.alauda.cn/ 灵雀云
* https://canister.io/solo
* https://hostpresto.com/docker-hosting 免费六个月

## CI

* https://www.shippable.com/pricing.html
* https://codefresh.io/

## 图标

* https://octicons.github.com/

## 云办公相关

* http://www.gleasy.com/ 格子云，到哪都能办公
* http://www.everydo.com/ 文档管理系统

## PDF

* https://www.hipdf.com/
* https://smallpdf.com/cn

## 爬虫

* https://www.bazhuayu.com/ 八爪鱼；国外版 https://www.octoparse.com/
* http://www.houyicaiji.com/
* http://www.gooseeker.com/
* 以下是国外的
* https://www.zyte.com
* https://apify.com/
* https://www.diffbot.com/
* https://www.import.io/

## 微信消息推送

* https://sct.ftqq.com/ Server酱
* http://www.xtuis.cn/ 虾推啥
* https://pushplus.hxtrip.com/ push+
* https://qmsg.zendee.cn/ Qmsg酱
* https://wxpusher.zjiecode.com 开源
* https://letserver.run/ Server饭，开源
* https://github.com/songquanpeng/message-pusher 开源

## CI

* Circle CI 老牌
* AppVeyor 以Win出名
* https://cloud.drone.io 有人说文档烂
* https://semaphoreci.com/
* https://buildkite.com/

## 在线Shell

* https://shell.cloud.google.com/
* https://www.xshellz.com/
* https://freeshell.de/
* https://sdf.org/

## Chat GPT

* https://www.perplexity.ai 只回复英文，只单次问，无交互。会给出消息来源，较偏搜索引擎
* https://you.com 点Chat。国内无法直接访问
* https://beta.character.ai 可以创建某种性格特性的人物来对话。国内无法直接访问

### 写作

* https://writesonic.com
* https://rytr.me
* https://www.peppertype.ai 官网目前没说免费，根据宣传有5000词

### 国内版

* https://chat.forchange.cn/
* https://www.eiefun.com/chatgpt 效果较差，对输入的长度有限制
* https://www.text-to-speech.cn/chatGPT.html 效果较差
* https://ioii.cn xixibot.com 需要扫描公众号登录，扫了后网页版还是说要登录，小程序说服务繁忙
* 挂了的：https://trychatgpt.ssi.plus/ http://119.91.201.57:3000/ https://hi.icu/ https://chatgpt.sbaliyun.com/ http://chat.h2ai.cn/home https://bxs.xiaoz.me https://chat.gptocean.com/

## 其它中的其它

* https://img.xjh.me/ 随机图片 https://api.lolicon.app/#/setu 随机色图
* http://shaofan.org/jetbrains-active/ Jetbrains在线激活工具
* https://apiary.io/ API Design Stack，与Oracle合作
* https://www.sap.cn/products/cloud-platform/pricing.html ERP系统；注册Beta版是免费的，但要填姓名公司电话
* https://developer.okta.com/ adds authentication, authorization, and user management to your web or mobile app within minutes.
* https://www.chanzhi.org/dynamic.html https://www.chanzhi.org/book/chanzhieps/5.html https://www.zentao.net/ 蝉知和禅道，前者是CMS，后者是项目管理系统。不过是PHP
* https://www.kancloud.cn/ https://www.yuque.com/ https://www.baklib.com/ MD平台
* http://www.ypppt.com/ ppt
* https://squoosh.app/ 图片压缩，谷歌出的工具
* http://www.freeyun.net/ 软件授权管理一站式解决方案
* https://prerender.io/ 预渲染动态网页
* https://termible.io 还在内测的在线终端，基于Docker
* https://heyterm.com/zh-cn/ WebSSH
* https://www.freepik.com/ 免费psd图像资源
* https://pyup.io/ 监测Python依赖
* https://waifulabs.com/ AI生成二次元头像
* https://appcenter.ms/ 存放release
* https://dev.to/doobled/listing-the-best-services-for-free-domain-email-addresses-in-2020-3hkb 几个邮箱测评
* https://newrelic.com 遥测？
* https://mailchimp.com/ 群发邮件
* 性能测试：`wget -qO- 86.re/bench.sh | bash`
* https://github.com/fangzesheng/free-api 免费的接口
* https://github.com/zhaojh329/rtty web tty
* https://www.plasticscm.com/ 不同于git的版本控制系统，可以玩玩
* https://trinket.io/ Py的Turtles运行环境，谷歌的Blocks，适合小孩子学
* 手机原生应用推送：https://www.getui.com/push https://www.jiguang.cn/push
* 服务器监控：https://www.oneapm.com https://www.tingyun.com/ https://www.jiankongbao.com/
* https://www.authing.cn/pricing 统一身份验证
* https://hashnode.com/ 博客平台
* https://www.goodwaf.cn/ WAF
* https://pusher.com/ 为网页提供实时信息推送
* https://hex-rays.com/educational/ IDA教育版
* https://www.apponfly.com/ 点trial能获得免费30分钟的Windows
* https://patchbay.pub/ 类似于PIPE
* https://requestbin.com/ 类似于httpbin但可以保留请求的内容

## 别人的收集

* https://www.freehao123.com/
* https://51.ruyo.net/
* https://github.com/Sicmatr1x/Free-Resource
* https://www.producthunt.com/

## 挂了的

* Ohosti “骗人的，去年申请的现在还在Pending中”
* https://vitu.ai
临时短信

https://www.lothelper.com/cn
https://www.materialtools.com/
https://www.receive-sms.com/
https://sms.sellaite.com/
http://receivefreesms.com/
https://www.receivesmsonline.net/ https://www.freeonlinephone.org/
https://smsreceivefree.com/
https://blog.csdn.net/freeking101/article/details/82770470
https://www.textnow.com/ 要注册，应该能发？

临时邮箱

* https://yopmail.com/zh/
* https://www.guerrillamail.com/zh/ https://grr.la
* https://temp-mail.org/
* https://10minutemail.net/
* http://24mail.chacuo.net/
* https://www.moakt.com/
* https://www.zhihu.com/question/23418181/answer/56106667

虚拟电话：https://github.com/hoodiearon/w3-goto-world/tree/master/集成实用夹/临时邮箱与虚拟电话#虚拟电话
虚拟地址：https://www.haoweichi.com/
虚拟信用卡：Yandex.Money

</details>
