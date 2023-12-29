(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1296:function(s,e,t){"use strict";t.r(e);var a=t(4),n=Object(a.a)({},(function(){var s=this,e=s._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("是一个Emby/Jellyfin/Plex 媒体中文自动同步工具。")]),s._v(" "),e("ul",[e("li",[s._v("中文标题")]),s._v(" "),e("li",[s._v("媒体概述")]),s._v(" "),e("li",[s._v("中文人名(Plex暂时不支持)")]),s._v(" "),e("li",[s._v("中文扮演(Plex暂时不支持)")]),s._v(" "),e("li",[s._v("剧集概述评分图片同步")]),s._v(" "),e("li",[s._v("剧集组自定义同步")]),s._v(" "),e("li",[s._v("媒体搜刮检查是否正确(配合NasTools)")])]),s._v(" "),e("p",[s._v("Dockerhub地址: "),e("a",{attrs:{href:"https://hub.docker.com/r/ddsderek/mediaservertools",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://hub.docker.com/r/ddsderek/mediaservertools"),e("OutboundLink")],1)]),s._v(" "),e("p",[s._v("Github地址: "),e("a",{attrs:{href:"https://github.com/sleikang/MediaServerTools",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://github.com/sleikang/MediaServerTools"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"容器部署"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器部署"}},[s._v("#")]),s._v(" 容器部署")]),s._v(" "),e("p",[s._v("1、在绿联云APP里打开docker，在镜像管理-镜像仓库中搜索mediaservertools，选择第一个ddsderek/mediaservertools镜像，并点击下载最新版本。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(850),alt:"img"}})]),s._v(" "),e("p",[s._v("2、官方docker-compose安装命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("version: '3.3'\nservices:\n    MediaServerTools:\n        container_name: MediaServerTools\n        volumes:\n            - './config:/config'\n        environment:\n            - TZ=Asia/Shanghai\n            - PUID=1000  # 可以改成0\n            - PGID=1000   # 可以改成0\n            - UMASK=022\n            - MediaServerTools_AUTO_UPDATE=true # 自动更新，建议关掉\n            - MediaServerTools_CN_UPDATE=true # 使用国内源更新\n        network_mode: host\n        logging:\n          driver: json-file\n          options:\n            max-size: 5m\n        image: 'ddsderek/mediaservertools:latest'\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br"),e("span",{staticClass:"line-number"},[s._v("19")]),e("br"),e("span",{staticClass:"line-number"},[s._v("20")]),e("br")])]),e("p",[s._v("2、在本地仓库里找到刚刚下载好的镜像，点击创建容器。容器名称可以自定义，勾选创建后启动容器，然后点击下一步。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(851),alt:"img"}})]),s._v(" "),e("p",[s._v("3、基础设置这里设置下重启策略。此时先不要点下一步。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(852),alt:"img"}})]),s._v(" "),e("p",[s._v("4、网络：设置为host模式。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(853),alt:"img"}})]),s._v(" "),e("p",[s._v("5、存储空间设置：在docker文件夹下新建一个文件夹MediaServerTools，并建一个子文件夹config，把它挂载为/config，类型设置读写。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(854),alt:"img"}})]),s._v(" "),e("p",[s._v("6、环境这里可以把PUID、PGID都由默认的1000改成0，把自动更新MediaServerTools_AUTO_UPDATE由默认的true改成false。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(855),alt:"img"}})]),s._v(" "),e("p",[s._v("需要加代理的话（建议增加代理环境），环境可以另外加三行：")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("NO_PROXY=172.17.0.1,127.0.0.1,localhost ##保持默认\nALL_PROXY=http://192.168.31.2:7890 ## 更换为自己的http代理\nHTTP_PROXY=http://10.0.0.4:10081 ##更换为自己的http代理\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("7、点击下一步，然后点击完成，完成容器部署。")]),s._v(" "),e("h2",{attrs:{id:"初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#初始化"}},[s._v("#")]),s._v(" 初始化")]),s._v(" "),e("p",[s._v("1、打开刚刚新建的MediaServerTools-config文件夹，找到config.yaml文件。下载到本地。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(856),alt:"img"}})]),s._v(" "),e("p",[s._v("2、打开文档，初始样子是这样。")]),s._v(" "),e("p",[e("img",{attrs:{src:t(857),alt:"img"}})]),s._v(" "),e("p",[s._v("3、我们需要填写或修改些内容。")]),s._v(" "),e("p",[e("strong",[s._v("1）emby和jf")])]),s._v(" "),e("ul",[e("li",[s._v("host：jf/emby的内网访问地址及端口，后面不要带/")]),s._v(" "),e("li",[s._v("key：jf/emby的api key，点击jf/emby控制台-API密钥，点击新建API密钥，名称可以填MediaServerTools，得到key值。\n"),e("ul",[e("li",[e("p",[s._v("emby：\n"),e("img",{attrs:{src:t(858),alt:"img"}})])]),s._v(" "),e("li",[e("p",[s._v("jf：\n"),e("img",{attrs:{src:t(859),alt:"img"}})])])])]),s._v(" "),e("li",[s._v("userid：jf/emby的管理员ID，点击jf/emby控制台-用户，找到当前管理员账户点进去浏览器地址显示的userid=后面的内容就是我们需要的userid值。\n"),e("ul",[e("li",[s._v("emby的userid获取：\n"),e("img",{attrs:{src:t(860),alt:"img"}})]),s._v(" "),e("li",[s._v("jf的userid获取：\n"),e("img",{attrs:{src:t(861),alt:"img"}})])])])]),s._v(" "),e("p",[e("strong",[s._v("2）nastools")])]),s._v(" "),e("ul",[e("li",[s._v("authorization: ''  # nastools基础设置-安全-API密钥")]),s._v(" "),e("li",[s._v("host:   # nastools内网地址地址及端口，后面不要带/")]),s._v(" "),e("li",[s._v("passwd: ''  # nastools密码")]),s._v(" "),e("li",[s._v("username: ''  # nastools用户名")])]),s._v(" "),e("p",[e("strong",[s._v("3）douban")])]),s._v(" "),e("ul",[e("li",[s._v("cookie: ''  # 豆瓣PC端个人页cookie\n"),e("ul",[e("li",[s._v("cookie获取：\n"),e("img",{attrs:{src:t(862),alt:"img"}})])])]),s._v(" "),e("li",[s._v("key: 0ac44ae016490db2204ce0a042db2916  # 豆瓣API KEY，默认这个就可")]),s._v(" "),e("li",[s._v("mediacachefailtime: 1  # 媒体数据缓存失效时间，单位：天")]),s._v(" "),e("li",[s._v("peoplecachefailtime: 10 # 人物数据缓存失效时间，单位：天")])]),s._v(" "),e("p",[e("strong",[s._v("3）tmdb")])]),s._v(" "),e("ul",[e("li",[s._v("key:''   # TMDB的API KEY，未申请的话点击查看"),e("RouterLink",{attrs:{to:"/other/tmdb_api/"}},[s._v("申请TMDB的Api")])],1),s._v(" "),e("li",[s._v("mediacachefailtime: 1  # 媒体数据缓存失效时间，单位：天")]),s._v(" "),e("li",[s._v("peoplecachefailtime: 10 # 人物数据缓存失效时间，单位：天")])]),s._v(" "),e("p",[e("strong",[s._v("4）system")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('mediaserver: Jellyfin # 使用的媒体服务器，可选 Emby Jellyfin\ncheckmediasearch: true # 检查媒体搜刮是否正确,不正确自动更新,需要配合NasTools使用\ndelnotimagepeople: true # 是否删除没有头像的演员\ntaskdonespace: 20 # 任务完成等待时间，单位：秒。豆瓣API有请求频率限制，建议时间可以设置长一点\nthreadnum: 8  # 线程数量，豆瓣API有请求频率限制，建议线程数量不要过多\nupdateoverview: true # 是否更新简介，建议打开\nupdatepeople: true # 是否刷新人名，建议打开，这样可以把演员英文名字换成中文\nupdatetime: 24 # 每次刷新全部媒体间隔时间，单位：小时\n\nupdateseasongroup: false # 是否更新剧集组\n\n#剧集组配置, 在启用更新剧集组后有效，不用的话保持默认即可\nseasongroup:\n- "\\u7EB8\\u623F\\u5B50|62ed7ac87d5504007e4ab046" # 内容："EMBY媒体名称|TMDB episode_group剧集组ID" ，比如："纸房子|5eb730dfca7ec6001f7beb51"\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br")])]),e("p",[s._v("4、把docker盘中的MediaServerTools-config文件夹里的原config.yaml删除，并把修改好的config.yaml文件上传进去。")]),s._v(" "),e("p",[s._v("5、点击重启，然后点击详情")]),s._v(" "),e("p",[e("img",{attrs:{src:t(863),alt:"img"}})]),s._v(" "),e("p",[s._v("6、点击日志，查看运行情况")]),s._v(" "),e("p",[e("img",{attrs:{src:t(864),alt:"img"}})]),s._v(" "),e("p",[e("img",{attrs:{src:t(865),alt:"img"}})])])}),[],!1,null,null,null);e.default=n.exports},850:function(s,e,t){s.exports=t.p+"assets/img/0801.f0c10976.png"},851:function(s,e,t){s.exports=t.p+"assets/img/0802.452b699d.png"},852:function(s,e,t){s.exports=t.p+"assets/img/0803.042c3fa9.png"},853:function(s,e,t){s.exports=t.p+"assets/img/0804.bf23aff3.png"},854:function(s,e,t){s.exports=t.p+"assets/img/0805.864f3097.png"},855:function(s,e,t){s.exports=t.p+"assets/img/0806.3fc5476d.png"},856:function(s,e,t){s.exports=t.p+"assets/img/0807.eb512063.png"},857:function(s,e,t){s.exports=t.p+"assets/img/0808.21eb45f2.png"},858:function(s,e,t){s.exports=t.p+"assets/img/0810.c833065b.png"},859:function(s,e,t){s.exports=t.p+"assets/img/0812.23ff554a.png"},860:function(s,e,t){s.exports=t.p+"assets/img/0809.066f3fbc.png"},861:function(s,e,t){s.exports=t.p+"assets/img/0811.f20f9302.png"},862:function(s,e,t){s.exports=t.p+"assets/img/0813.eb3de469.png"},863:function(s,e,t){s.exports=t.p+"assets/img/0814.eb94f46c.png"},864:function(s,e,t){s.exports=t.p+"assets/img/0815.f84aebef.png"},865:function(s,e,t){s.exports=t.p+"assets/img/0816.76eed0af.png"}}]);