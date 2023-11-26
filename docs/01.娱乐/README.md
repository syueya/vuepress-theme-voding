# MoviePilot

基于 [NAStool](https://github.com/NAStool/nas-tools) 部分代码重新设计，聚焦自动化核心需求，减少问题同时更易于扩展和维护。

# 仅用于学习交流使用，请勿在任何国内平台宣传该项目！

发布频道：https://t.me/moviepilot_channel

## 主要特性
- 前后端分离，基于FastApi + Vue3，前端项目地址：[MoviePilot-Frontend](https://github.com/jxxghp/MoviePilot-Frontend)
- 聚焦核心需求，简化功能和设置，部分设置项可直接使用默认值。
- 重新设计了用户界面，更加美观易用。

## 安装

### 1. **安装CookieCloud插件**

站点信息需要通过CookieCloud同步获取，因此需要安装CookieCloud插件，将浏览器中的站点Cookie数据同步到云端后再同步到MoviePilot使用。 插件下载地址请点击 [这里](https://github.com/easychen/CookieCloud/releases)。

### 2. **安装CookieCloud服务端（可选）**

MoviePilot内置了公共CookieCloud服务器，如果需要自建服务，可参考 [CookieCloud](https://github.com/easychen/CookieCloud) 项目进行搭建，docker镜像请点击 [这里](https://hub.docker.com/r/easychen/cookiecloud)。

**声明：** 本项目不会收集用户敏感数据，Cookie同步也是基于CookieCloud项目实现，非本项目提供的能力。技术角度上CookieCloud采用端到端加密，在个人不泄露`用户KEY`和`端对端加密密码`的情况下第三方无法窃取任何用户信息（包括服务器持有者）。如果你不放心，可以不使用公共服务或者不使用本项目，但如果使用后发生了任何信息泄露与本项目无关！

### 3. **安装配套管理软件**

MoviePilot需要配套下载器和媒体服务器配合使用。
- 下载器支持：qBittorrent、Transmission，QB版本号要求>= 4.3.9，TR版本号要求>= 3.0，推荐使用QB。
- 媒体服务器支持：Jellyfin、Emby、Plex，推荐使用Emby。

### 4. **安装MoviePilot**

- Docker镜像

  点击 [这里](https://hub.docker.com/r/jxxghp/moviepilot) 或执行命令：

  ```shell
  docker pull jxxghp/moviepilot:latest
  ```


- Windows

  下载 [MoviePilot.exe](https://github.com/jxxghp/MoviePilot/releases)，双击运行后自动生成配置文件目录。


- 本地运行

  1) 将工程 [MoviePilot-Plugins](https://github.com/jxxghp/MoviePilot-Plugins) plugins目录下的所有文件复制到`app/plugins`目录
  2) 将工程 [MoviePilot-Resources](https://github.com/jxxghp/MoviePilot-Resources) resources目录下的所有文件复制到`app/helper`目录
  3) 执行命令：`pip install -r requirements.txt` 安装依赖
  4) 执行命令：`python app/main.py` 启动服务



### 3. **优先级规则**

- 仅支持使用内置规则进行排列组合，内置规则有：`蓝光原盘`、`4K`、`1080P`、`中文字幕`、`特效字幕`、`H265`、`H264`、`杜比`、`HDR`、`REMUX`、`WEB-DL`、`免费`、`国语配音` 等
- 符合任一层级规则的资源将被标识选中，匹配成功的层级做为该资源的优先级，排越前面优先级超高
- 不符合过滤规则所有层级规则的资源将不会被选中


## 使用

- 通过CookieCloud同步快速同步站点，不需要使用的站点可在WEB管理界面中禁用，无法同步的站点可手动新增。
- 通过WEB进行管理，将WEB添加到手机桌面获得类App使用效果，管理界面端口：`3000`，后台API端口：`3001`。
- 通过下载器监控或使用目录监控插件实现自动整理入库刮削（二选一）。
- 通过微信/Telegram/Slack/SynologyChat远程管理，其中微信/Telegram将会自动添加操作菜单（微信菜单条数有限制，部分菜单不显示）；微信需要在官方页面设置回调地址，SynologyChat需要设置机器人传入地址，地址相对路径为：`/api/v1/message/`。
- 设置媒体服务器Webhook，通过MoviePilot发送播放通知等。Webhook回调相对路径为`/api/v1/webhook?token=moviepilot`（`3001`端口），其中`moviepilot`为设置的`API_TOKEN`。
- 将MoviePilot做为Radarr或Sonarr服务器添加到Overseerr或Jellyseerr（`API服务端口`），可使用Overseerr/Jellyseerr浏览订阅。
- 映射宿主机docker.sock文件到容器`/var/run/docker.sock`，以支持内建重启操作。实例：`-v /var/run/docker.sock:/var/run/docker.sock:ro`

### **注意**
- 容器首次启动需要下载浏览器内核，根据网络情况可能需要较长时间，此时无法登录。可映射`/moviepilot`目录避免容器重置后重新触发浏览器内核下载。 
- 使用反向代理时，需要添加以下配置，否则可能会导致部分功能无法访问（`ip:port`修改为实际值）：
```nginx configuration
location / {
    proxy_pass http://ip:port;
    proxy_set_header Host $http_host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
}
```
- 新建的企业微信应用需要固定公网IP的代理才能收到消息，代理添加以下代码：
```nginx configuration
location /cgi-bin/gettoken {
    proxy_pass https://qyapi.weixin.qq.com;
}
location /cgi-bin/message/send {
    proxy_pass https://qyapi.weixin.qq.com;
}
location  /cgi-bin/menu/create {
    proxy_pass https://qyapi.weixin.qq.com;
}
```

![image](https://github.com/jxxghp/MoviePilot/assets/51039935/f2654b09-26f3-464f-a0af-1de3f97832ee)

![image](https://github.com/jxxghp/MoviePilot/assets/51039935/fcb87529-56dd-43df-8337-6e34b8582819)

![image](https://github.com/jxxghp/MoviePilot/assets/51039935/bfa77c71-510a-46a6-9c1e-cf98cb101e3a)

![image](https://github.com/jxxghp/MoviePilot/assets/51039935/51cafd09-e38c-47f9-ae62-1e83ab8bf89b)

