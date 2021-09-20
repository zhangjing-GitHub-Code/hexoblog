---
title: 记录hexo+github pages建站过程
date: 2021-09-20 07:41:07
tags:
- hexo
- github
- 博客
- 建站
categories: hexo
---
# 前言
我~~脑子抽了~~搭了一个hexo+GitHub Pages的博客站，想记录下建站过程，“友好”的帮助其他人分享常见错误，就是这篇。
<!--more-->
# 第一步，hexo初始化
## 安装nodejs
首先，你需要有`nodejs`，
### linux
linux直接用包管理器安装`nodejs`或`nodejs-lts`就彳亍了（alpine的apk~~脑子抽了~~为了精简，还要手动`apk add npm`），检查一下
(不会吧不会吧，你竟然不会用包管理器)
```zsh
# on ubuntu
apt install nodejs-lts
#省略安装过程
npm -v
6.14.15
node -v
v14.17.6
```
（这个版本过高可能会造成一些警告（或错误），以后再处理（“程序只要能跑，有warning也不看”(doge)））
### Windows
先去[nodejs官网](https://nodejs.org/)，选择lts版本（左边那个）
![](/images/nodejswebsite-01.png)
下载的文件应名为`node-v14.17.6-x64.msi`，运行它，一路点next(前几步有个同意许可协议，把选择框点上就行了，可以选择安装路径)
![node-v14.17.6-x64.msi](/images/node-v14.17.6-x64.msi-01.png)
安装好后打开`cmd`，运行`npm -v`和`node -v`
```zsh
C:\Windows\System32>npm -v
6.14.10
C:\Windows\System32>node -v
v14.15.4
```
