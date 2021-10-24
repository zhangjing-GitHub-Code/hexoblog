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
我~~脑子没抽！~~搭了一个hexo+GitHub Pages的博客站，想记录下建站过程，“友好”的帮助其他人分享常见错误。
<!--more-->
# hexo初始化
## 安装nodejs
首先，你需要有`nodejs`，
### linux
linux直接用包管理器安装`nodejs`或`nodejs-lts`就彳亍了（alpine的apk~~脑子抽了~~为了精简，还要手动`apk add npm`），检查一下。
(不会吧不会吧，你竟然不会用包管理器)
```zsh
# on ubuntu
$ apt install nodejs-lts
#省略安装过程
$ npm -v
6.14.15
$ node -v
v14.17.6
```
（这个版本过高可能会造成一些警告（或错误），以后再处理（“程序只要能跑，有warning也不看”(doge)））
### Windows
先去[nodejs官网](https://nodejs.org/)，选择lts版本（左边那个）
![](/images/nodejswebsite-01.png)
下载的文件应名为`node-v14.17.6-x64.msi`，运行它，一路点next (前几步有个同意许可协议，把选择框点上就行了，可以选择安装路径)。
![node-v14.17.6-x64.msi](/images/node-v14.17.6-x64.msi-01.png)
安装好后打开`cmd`，运行`npm -v`和`node -v`
```zsh
C:\Windows\System32>npm -v
6.14.10
C:\Windows\System32>node -v
v14.15.4
```
## 安装Hexo
找一个~~风水宝地~~你认为合适的地方，比如在`~/hexo`目录下(linux)，cd到这里。
```bash
$ cd ~
$ mkdir hexo
$ cd hexo
$ pwd
~/hexo
```
运行`npm install hexo`，等待安装。
```bash
# 像这样 ↓
$ npm install hexo
#（这两行不必关心，据设备而定）
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

+ hexo@5.4.0
updated 1 package in 8.34s

12 packages are looking for funding
  run `npm fund` for details
```
试着运行`hexo -v`查看版本
运行`hexo init`，当提示`INFO  Start blogging with Hexo!`时就代表初始化成功了！
```bash
$ hexo init
INFO  Cloning hexo-starter https://github.com/hexojs/hexo-starter.git
fatal: unable to access 'https://github.com/hexojs/hexo-starter.git/': Failed to connect to github.com port 443: Timed out
# 访问github真是个玄学问题
WARN  git clone failed. Copying data instead
INFO  Install dependencies
added 242 packages from 207 contributors in 21.884s

15 packages are looking for funding
  run `npm fund` for details

INFO  Start blogging with Hexo!
```

## 试运行
安装好hexo后，运行`hexo g`和`hexo s`，这将生成静态页面并启动内置服务器，用浏览器访问`http://localhost:4000`以查看效果
```bash
$ hexo g
INFO  Validating config
INFO  Start processing
INFO  Files loaded in 224 ms
#warning是nodejs版本过高造成的，可以用nvm切换版本或下载较低版本(这***的lts版本的版本都这么高)
(node:5356) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
(node:5356) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:5356) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
(node:5356) Warning: Accessing non-existent property 'lineno' of module exports inside circular dependency
(node:5356) Warning: Accessing non-existent property 'column' of module exports inside circular dependency
(node:5356) Warning: Accessing non-existent property 'filename' of module exports inside circular dependency
INFO  Generated: archives/index.html
INFO  Generated: archives/2021/index.html
INFO  Generated: archives/2021/09/index.html
INFO  Generated: fancybox/blank.gif
INFO  Generated: fancybox/fancybox_loading.gif
INFO  Generated: fancybox/fancybox_overlay.png
INFO  Generated: index.html
INFO  Generated: fancybox/fancybox_sprite.png
INFO  Generated: fancybox/fancybox_loading@2x.gif
INFO  Generated: fancybox/fancybox_sprite@2x.png
INFO  Generated: js/script.js
INFO  Generated: css/fonts/fontawesome-webfont.eot
INFO  Generated: fancybox/jquery.fancybox.css
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.js
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.css
INFO  Generated: fancybox/helpers/jquery.fancybox-media.js
INFO  Generated: fancybox/helpers/jquery.fancybox-thumbs.js
INFO  Generated: fancybox/helpers/jquery.fancybox-buttons.css
INFO  Generated: 2021/09/20/hello-world/index.html
INFO  Generated: css/fonts/FontAwesome.otf
INFO  Generated: css/style.css
INFO  Generated: fancybox/jquery.fancybox.pack.js
INFO  Generated: css/fonts/fontawesome-webfont.ttf
INFO  Generated: css/fonts/fontawesome-webfont.woff
INFO  Generated: fancybox/jquery.fancybox.js
INFO  Generated: css/images/banner.jpg
INFO  Generated: css/fonts/fontawesome-webfont.svg
INFO  28 files generated in 774 ms
$ hexo s
INFO  Validating config
INFO  Start processing
INFO  Hexo is running at http://localhost:4000 . Press Ctrl+C to stop.
```
像这样（没做修改默认是这样）：
![默认页面](/images/hexo-default-webserver-page.png)

```python
import json
print("hello wolrd")
exit()
```

----
# 部署到Github
## 注册账号
(如果已有账号可以去[下一节](#登录))进入[github.com](https://github.com/)，若加载超时，可尝试科 学上 网或多试试~~[github.com.cnpmjs.org](https://github.com.cnpmjs.org) (没试过，应该可以doge)~~。
进去后在左边的框里(`Email address`)填入你的电子邮箱，点绿色按钮`sing up for github`，在下个页面根据提示填信息(读不懂英文也可以用翻译吧)，也可以点右上角的sign up，注册后自动登录，去[创建仓库](#创建仓库)。
## 登录
点右上角sign in(手机:点右上角三横，点右下方sign in)
## 创建仓库
电脑点右上角加号旁的小三角，点包含`repository`的那个，手机先点左上角三横，再点账户名称，选择repositories，再点`new`。
仓库名是`github用户名.github.io`，如`abc.github.io`，创建好后，点击settings(手机将code那一栏往左划)，再点pages，如果显示没打开就点source，选择master(一般是这个，选不是none的那个)。
仓库创建好后将地址记下(
