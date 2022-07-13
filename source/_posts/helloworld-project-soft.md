---
title: 软件更新
date: 2022-07-09 20:06:54
banner_img: /img/bg1.jpg
author: min
---
为了方便相关软件更新,现将各种软件最新版链接提供如下.

<p style='color:red;'>温馨提示:QQ内置浏览器请右上角使用浏览器打开!</p>


## 2dust/v2rayN
### 5.29

<details><summary>更新内容</summary>

### 改进订阅更新的提示信息



1. 获取内容失败，包括连接发生异常，超时取消等等

2. 获取内容成功，解析导入失败，可能是不支持的格式

3. 获取内容成功，解析导入成功



- 检查更新增加clash-core

- 添加按测试结果排序快捷键

- shadowsocks设置可设底层传输方式（plugin=obfs-local;obfs=http;obfs-host=abc.com 等价 tcp的HTTP 伪装)

- routing rule inboundtag 添加 http2 和 socks2

- [language usage improvements ](https://github.com/2dust/v2rayN/pull/2415)

- [Fix English translations](https://github.com/2dust/v2rayN/pull/2417)



- https://github.com/2dust/v2rayN/issues/2303

- https://github.com/2dust/v2rayN/issues/2395

- https://github.com/2dust/v2rayN/issues/2401

- https://github.com/2dust/v2rayN/issues/2412



- https://github.com/2dust/v2rayN/issues/2434

- https://github.com/2dust/v2rayN/issues/2430

- https://github.com/2dust/v2rayN/issues/2227

- https://github.com/2dust/v2rayN/issues/2442


------

</details>

<details><summary>下载链接</summary>

[v2rayN-Core.zip](https://github.com/2dust/v2rayN/releases/download/5.29/v2rayN-Core.zip)
[(国内)v2rayN-Core.zip](https://ghproxy.com/https://github.com/2dust/v2rayN/releases/download/5.29/v2rayN-Core.zip)

[v2rayN.zip](https://github.com/2dust/v2rayN/releases/download/5.29/v2rayN.zip)
[(国内)v2rayN.zip](https://ghproxy.com/https://github.com/2dust/v2rayN/releases/download/5.29/v2rayN.zip)


</details>

-------------

## 2dust/v2rayNG
### 1.7.3

<details><summary>更新内容</summary>

- minSdkVersion changed from 17(Android 4.4)  to 21(Android 5.0)  

- targetSdkVersion changed from 30 to 31 (Android 12) 

- https://github.com/2dust/v2rayNG/pull/1374

- https://github.com/2dust/v2rayNG/pull/1416


------

</details>

<details><summary>下载链接</summary>

[v2rayNG_1.7.3.apk](https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3.apk)
[(国内)v2rayNG_1.7.3.apk](https://ghproxy.com/https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3.apk)

[v2rayNG_1.7.3_arm64-v8a.apk](https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_arm64-v8a.apk)
[(国内)v2rayNG_1.7.3_arm64-v8a.apk](https://ghproxy.com/https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_arm64-v8a.apk)

[v2rayNG_1.7.3_armeabi-v7a.apk](https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_armeabi-v7a.apk)
[(国内)v2rayNG_1.7.3_armeabi-v7a.apk](https://ghproxy.com/https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_armeabi-v7a.apk)

[v2rayNG_1.7.3_x86.apk](https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_x86.apk)
[(国内)v2rayNG_1.7.3_x86.apk](https://ghproxy.com/https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_x86.apk)

[v2rayNG_1.7.3_x86_64.apk](https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_x86_64.apk)
[(国内)v2rayNG_1.7.3_x86_64.apk](https://ghproxy.com/https://github.com/2dust/v2rayNG/releases/download/1.7.3/v2rayNG_1.7.3_x86_64.apk)


</details>

-------------

## Notsfsssf/pixez-flutter
### 0.9.2

<details><summary>更新内容</summary>

-新的searchbar

-novel支持caption和应用内跳转


------

</details>

<details><summary>下载链接</summary>

[app-release.apk](https://github.com/Notsfsssf/pixez-flutter/releases/download/0.9.2/app-release.apk)
[(国内)app-release.apk](https://ghproxy.com/https://github.com/Notsfsssf/pixez-flutter/releases/download/0.9.2/app-release.apk)


</details>

-------------

## Mrs4s/go-cqhttp
### v1.0.0-rc3

<details><summary>更新内容</summary>

## Changelog

此版本恢复了滑条验证码的支持, 如果无法通过扫码登录可尝试更新



### 新增

859f40d 消息资源支持了 `base16384` 编码.  @fumiama 

23d594b 新增私聊文件API `upload_private_file`. @wdvxdr1123 

2a0baba 重新引入了滑条验证码的支持, 以应对二维码风险网络的问题. @Mrs4s 



### 修复

7d97216 修复了data文件夹的权限问题. @LambdaYH 

7e24f8b 修复了处理事件出现错误的日志消息可能会错误的混入上报信息的问题. @Mrs4s 

7349fd4 修复了频道发送已存在图片时可能会崩溃的问题. @Mrs4s 

b013f66 修复了上传图片时可能会崩溃的问题. @Mrs4s 

babf35e 修复了群消息事件会存在两个 `message_type` 字段的问题. @wdvxdr1123 

修复了无法登录刚解封的账号的问题. @Mrs4s 

修复了无法正常处理滑条验证码的问题. @Mrs4s ( 锅 @fumiama )

修复了无法上传群文件的问题. @wdvxdr1123 





### 协议更新

`Android Phone` 协议更新到了 `8.8.95` 版本. @wdvxdr1123 




------

</details>

<details><summary>下载链接</summary>

[go-cqhttp_1.0.0-rc3_linux_386.deb](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_386.deb)
[(国内)go-cqhttp_1.0.0-rc3_linux_386.deb](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_386.deb)

[go-cqhttp_1.0.0-rc3_linux_386.rpm](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_386.rpm)
[(国内)go-cqhttp_1.0.0-rc3_linux_386.rpm](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_386.rpm)

[go-cqhttp_1.0.0-rc3_linux_amd64.deb](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_amd64.deb)
[(国内)go-cqhttp_1.0.0-rc3_linux_amd64.deb](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_amd64.deb)

[go-cqhttp_1.0.0-rc3_linux_amd64.rpm](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_amd64.rpm)
[(国内)go-cqhttp_1.0.0-rc3_linux_amd64.rpm](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_amd64.rpm)

[go-cqhttp_1.0.0-rc3_linux_arm.deb](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm.deb)
[(国内)go-cqhttp_1.0.0-rc3_linux_arm.deb](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm.deb)

[go-cqhttp_1.0.0-rc3_linux_arm.rpm](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm.rpm)
[(国内)go-cqhttp_1.0.0-rc3_linux_arm.rpm](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm.rpm)

[go-cqhttp_1.0.0-rc3_linux_arm64.deb](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm64.deb)
[(国内)go-cqhttp_1.0.0-rc3_linux_arm64.deb](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm64.deb)

[go-cqhttp_1.0.0-rc3_linux_arm64.rpm](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm64.rpm)
[(国内)go-cqhttp_1.0.0-rc3_linux_arm64.rpm](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_1.0.0-rc3_linux_arm64.rpm)

[go-cqhttp_checksums.txt](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_checksums.txt)
[(国内)go-cqhttp_checksums.txt](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_checksums.txt)

[go-cqhttp_darwin_amd64.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_darwin_amd64.tar.gz)
[(国内)go-cqhttp_darwin_amd64.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_darwin_amd64.tar.gz)

[go-cqhttp_darwin_arm64.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_darwin_arm64.tar.gz)
[(国内)go-cqhttp_darwin_arm64.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_darwin_arm64.tar.gz)

[go-cqhttp_linux_386.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz)
[(国内)go-cqhttp_linux_386.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_386.tar.gz)

[go-cqhttp_linux_amd64.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_amd64.tar.gz)
[(国内)go-cqhttp_linux_amd64.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_amd64.tar.gz)

[go-cqhttp_linux_arm64.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_arm64.tar.gz)
[(国内)go-cqhttp_linux_arm64.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_arm64.tar.gz)

[go-cqhttp_linux_armv7.tar.gz](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_armv7.tar.gz)
[(国内)go-cqhttp_linux_armv7.tar.gz](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_linux_armv7.tar.gz)

[go-cqhttp_windows_386.exe](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_386.exe)
[(国内)go-cqhttp_windows_386.exe](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_386.exe)

[go-cqhttp_windows_386.zip](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_386.zip)
[(国内)go-cqhttp_windows_386.zip](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_386.zip)

[go-cqhttp_windows_amd64.exe](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_amd64.exe)
[(国内)go-cqhttp_windows_amd64.exe](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_amd64.exe)

[go-cqhttp_windows_amd64.zip](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_amd64.zip)
[(国内)go-cqhttp_windows_amd64.zip](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_amd64.zip)

[go-cqhttp_windows_arm64.exe](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_arm64.exe)
[(国内)go-cqhttp_windows_arm64.exe](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_arm64.exe)

[go-cqhttp_windows_arm64.zip](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_arm64.zip)
[(国内)go-cqhttp_windows_arm64.zip](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_arm64.zip)

[go-cqhttp_windows_armv7.exe](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_armv7.exe)
[(国内)go-cqhttp_windows_armv7.exe](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_armv7.exe)

[go-cqhttp_windows_armv7.zip](https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_armv7.zip)
[(国内)go-cqhttp_windows_armv7.zip](https://ghproxy.com/https://github.com/Mrs4s/go-cqhttp/releases/download/v1.0.0-rc3/go-cqhttp_windows_armv7.zip)


</details>

-------------

