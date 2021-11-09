---
title: 咕咕鸡API搭建教程
mathjax: false
abbrlink: d194
date: 2021-11-08 19:38:00
tags:
---

# 前言

就之前我（小学）班主任给了我一个热敏打印机，名曰咕咕鸡（Memobird） G1 （~~有亿点老~~），因为我喜欢研究这些东西，我就写了个API的调用（不咋地（doge））。

<!--more-->

# 申请API

## 注册账号

首先当然是注册开发帐号了（~~不然人家都不给你用~~），进入[咕咕鸡 Memobird 开放平台](http://open.memobird.cn/)，点击右上角注册：

![Memobird 开放平台主页](/images/memobirdopen.home01.png)

输入你将要注册的邮箱和密码，填一下右边的验证码，点注册。

![Memobird 开放平台主页](/images/memobirdopen.reg01.png)

## 登录并申请API

会提示到注册的电子邮箱去激活，激活后用注册的电子邮箱和密码[登录](http://open.memobird.cn/user/index)，依旧有一个验证码。

登录进去后好像会有一个填写API信息（我的账号是一两年前申请的，有点不清楚......（捂脸）），按需求填写，申请后（可能有较短的审核期）到[用户主页](http://open.memobird.cn/User/Main)，查看`Access_Key`，待会要用（***注意，这个Ak很重要，相当于是你申请的API的使用密码，不能泄露***)。

这里还要先绑定用户，网络地址：[http://open.memobird.cn/home/setuserbind](http://open.memobird.cn/home/setuserbind)

这里有4个参数（就是网址后面加个`?`，后面再跟的东西是参数），分别为：

1. ak ：就是刚刚的Access_key，填在这里
2. timestamp ：当前时间，格式`YYYY-MM-DD hh:mm:ss`，示例`2021-11-14 16:32:25`
3. memobirdID ：咕咕鸡设备编号（双击设备上的按键可以打印出来），例如`fb93bfff504c020a`（一般没什么格式，不要瞎试）
4. useridentifying ：与用户关联的唯一标识符，可以自定义（一般用数字），示例`123336`。

返回值是json格式，`showapi_res_code`是状态码，`1`为成功，其他失败（检查ak是否正确以及地址是否正确）。

`useridentifying`以后也都要用到

## 熟悉API

这里推荐一下[官方文档（适用于Wifi的咕咕鸡）](http://open.memobird.cn/upload/webapi.pdf)。~~看过就熟悉了，所以我不讲了~~ 讲还是要讲的，这里的`wifi API`是基于web访问的。这些参数里有一些基本都要用到，如下：

| 名称       | 示例                 | 描述                           |
| ---------- | -------------------- | ------------------------------ |
| ak         | 698d51a19d8121ce5818 | `Access_key`，应用签名         |
| timestamp  | 2021-10-22 15:22:31  | 客户端当前时间（格式之前说过） |
| memobirdID | fb93bfff504c023c     | 咕咕鸡设备编号                 |
| userID     | 123336               | 之前绑定的标识符               |
