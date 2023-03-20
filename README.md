# ChatGPT Web

### 使用界面
![cover3](./docs/c3.png)
![cover](./docs/c1.png)
![cover2](./docs/c2.png)

### 性格微调功能
![cover4](./docs/c4.png)

### 文本审查功能(使用OpenAI官方接口)
![cover5](./docs/c5.png)

- [ChatGPT Web](#chatgpt-web)
	- [介绍](#介绍)
	- [快速部署](#快速部署)
	- [开发环境搭建](#开发环境搭建)
		- [Node](#Node)
		- [PNPM](#PNPM)
		- [Python](#Python)
	- [开发环境启动项目](#开发环境启动项目)
		- [后端](#后端服务)
		- [前端](#前端网页)
	- [打包为docker容器](#打包为docker容器)
		- [前端打包](#前端资源打包(需要安装node和docker、docker-compose))
		- [后端打包](#后端服务打包)
	- [使用DockerCompose启动](#使用DockerCompose启动)
	- [常见问题](#常见问题)
	- [参与贡献](#参与贡献)
	- [赞助原作者](#赞助)
	- [License](#license)

## 介绍

这是一个可以自己在本地部署的`ChatGpt`网页，使用`OpenAI`的官方API接入`gpt-3.5-turbo`模型来实现接近`ChatGPT Plus`的对话效果。
源代码Fork和修改于[Chanzhaoyu/chatgpt-web](https://github.com/Chanzhaoyu/chatgpt-web/)

与OpenAI官方提供的付费版本`ChatGPT Plus`对比，`ChatGPT Web`有以下优势：

1. **省钱**。你可以用1折左右的价格，体验与`ChatGPT Plus`
	 几乎相同的对话服务。对于日常学习工作使用，你不必每月花费20$购买Plus服务，使用本项目自己对接API的使用成本，是`ChatGPT Plus`
	 的1/10左右。
2. **0门槛使用**。你可以将自建的`ChatGPT Web`
	 站点分享给家人和朋友，他们不再需要经历“解决网络问题”-“登录”-“输入密码”-“点选验证码”这一连串麻烦的环节，就可以轻松享受到`ChatGPT Plus`
	 带来的生产力提升。
3. **可以缓解网络封锁的影响**。`ChatGPT Web`只需要一个`OpenAI API Key`即可使用，如果你所在的地区无法访问`OpenAI`
	 ，你可以将`ChatGPT Web`部署在海外服务器上，或在当地服务器上使用`Socks5`代理来转发请求给代理软件，即可正常使用。

和[Chanzhaoyu的原版](https://github.com/Chanzhaoyu/chatgpt-web/)的主要区别：

1. 专注于易用、易部署、不操心。对小白用户友好，部署和使用的门槛比原版更低

	 1.	没有反向代理功能
   2. 没有导入和管理Prompt模板的功能，使用者没有“这个链接干什么用的”、“什么是json文件”、“为什么要我自己审核json文件的安全性，怎么审核？”此类烦恼
   3. 可以随机生成头像，不需要自己去找头像链接
   4. 附带打包好的前端资源，自己部署不再需要安装开发环境

2. 可以识别语音消息：通过接入`whisper-1`API实现。懒得打字的时候很好用
3. 可以微调参数：通过设置可以调整`ChatGpt`的性格
4. 可以“记住”更多的上下文：聊天记录保存在服务器端，不会因为网页端清理缓存而丢失上下文，影响回答质量

其它更新：
1. 增加日语界面
2. 优化了移动端体验

## 快速部署

如果你不需要自己开发，只需要部署使用，可以直接跳到 [使用最新版本docker镜像启动](#使用最新版本docker镜像启动)

## 开发环境搭建

### Node

`node` 需要 `^16 || ^18` 版本（`node >= 14`
需要安装 [fetch polyfill](https://github.com/developit/unfetch#usage-as-a-polyfill)
），使用 [nvm](https://github.com/nvm-sh/nvm) 可管理本地多个 `node` 版本

```shell
node -v
```

### PNPM

如果你没有安装过 `pnpm`

```shell
npm install pnpm -g
```

### Python

`python` 需要 `3.10` 以上版本，进入文件夹 `/service` 运行以下命令

```shell
pip install --no-cache-dir -r requirements.txt
```

## 开发环境启动项目

### 后端服务

只有`OPENAI_API_KEY`是必填的，需要先去[OpenAI](https://platform.openai.com/)
注册账号，然后在[这里](https://platform.openai.com/account/api-keys)获取`OPENAI_API_KEY`。

```shell
# 进入文件夹 `/service` 运行以下命令
python main.py --openai_api_key="$OPENAI_API_KEY" --api_model="$API_MODEL" --socks_proxy="$SOCKS_PROXY" --host="$HOST" --port="$PORT"
# 后端服务的默认端口号是3002，可以通过 --port 参数修改
```

### 前端网页

根目录下运行以下命令

```shell
# 前端网页的默认端口号是1002，对接的后端服务的默认端口号是3002，可以在 .env 和 .vite.config.ts 文件中修改
pnpm bootstrap
pnpm dev
```

## 打包为docker容器

### 前端资源打包(需要安装node和docker、docker-compose)

1. 根目录下运行以下命令
	 ```shell
	 pnpm run build
	 ```
2. 将打包好的文件夹`dist`文件夹复制到`/docker-compose/nginx`目录下，并改名为`html`
	```shell
	cp dist/ docker-compose/nginx/html -r
	```

3. 修改`/docker-compose/nginx/nginx.conf`文件，填写你的服务器IP


### 后端服务打包

1. 进入文件夹 `/service` 运行以下命令
	 ```shell
	 docker build -t chatgpt-web-backend .
	 ```

### 使用DockerCompose启动

- 进入文件夹 `/docker-compose` 修改 `docker-compose.yml` 文件

	```
  version: '3'

  services:
    app:
      image: chatgpt-web-backend # 这里填你打包的后端服务的镜像名字
      ports:
        - 3002:3002
      environment:
        OPENAI_API_KEY: your_openai_api_key
        # 可选，默认值为 gpt-3.5-turbo
        API_MODEL: gpt-3.5-turbo
        # Socks代理，可选，格式为 http://127.0.0.1:10808
        SOCKS_PROXY: xxxx
        # HOST，可选，默认值为 0.0.0.0
        HOST: 0.0.0.0
        # PORT，可选，默认值为 3002
        PORT: 3002
    nginx:
      image: nginx:alpine
      ports:
        - '80:80'
      expose:
        - '80'
      volumes:
        - ./nginx/html/:/etc/nginx/html/
        - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
      links:
        - app
	```

- 进入文件夹 `/docker-compose` 运行以下命令

	```shell
	# 前台运行
	docker-compose up
	# 或后台运行
	docker-compose up -d
	```

## 使用最新版本docker镜像启动

- 如果你只是想自己使用docker部署，可以直接使用我已经打包好的镜像和前端资源

- 首先将前端资源的压缩包解压

	前端资源的压缩包在`/docker-compose/nginx/html.zip`，使用`unzip html.zip`将其解压缩。你应该可以看到`/docker-compose/nginx/html`下面有`index.html`和其他前端资源。

- 然后修改`docker-compose/nginx/nginx.conf`文件，填写你的服务器ip，假如你的服务器ip是`122.122.122.122`，那么

	```
	proxy_pass http://122.122.122.122:3002/;
	```

- 最后修改`docker-compose/docker-compose.yml`文件。

	除了填写你自己的`OPENAI_API_KEY`之外，还要根据自己的系统环境修改`image`的标签，如果你部署用的是x86架构的机器，就填写`wenjing95/chatgpt-web-backend:x86_64`，如果你用的是arm架构的机器，就填写`wenjing95/chatgpt-web-backend:aarch64`。

	```
	version: '3'

	services:
	  app:
      # 根据自己的系统选择x86_64还是aarch64
      image: wenjing95/chatgpt-web-backend:x86_64
      # image: wenjing95/chatgpt-web-backend:aarch64
      ports:
        - 3002:3002
      environment:
        # 记得填写你的OPENAI_API_KEY
        OPENAI_API_KEY: your_openai_api_key
        # 可选，默认值为 gpt-3.5-turbo
        API_MODEL: gpt-3.5-turbo
        # Socks代理，可选，格式为 http://127.0.0.1:10808
        SOCKS_PROXY: “”
        # HOST，可选，默认值为 0.0.0.0
        HOST: 0.0.0.0
        # PORT，可选，默认值为 3002
        PORT: 3002
    nginx:
      image: nginx:alpine
      ports:
        - '80:80'
      expose:
        - '80'
      volumes:
        - ./nginx/html/:/etc/nginx/html/
        - ./nginx/nginx.conf:/etc/nginx/conf.d/default.conf
      links:
        - app
	```

- 最后进入文件夹 `/docker-compose` 运行以下命令

	```shell
	# 前台运行
	docker-compose up
	# 或后台运行
	docker-compose up -d
	```

## 常见问题

Q: 为什么 `Git` 提交总是报错？

A: 因为有提交信息验证，请遵循 [Commit 指南](./CONTRIBUTING.md)

Q: 如果只使用前端页面，在哪里改请求接口？

A: 根目录下 `.env` 文件中的 `VITE_GLOB_API_URL` 字段。

Q: 文件保存时全部爆红?

A: `vscode` 请安装项目推荐插件，或手动安装 `Eslint` 插件。

Q: 前端没有打字机效果？

A: 一种可能原因是经过 Nginx 反向代理，开启了 buffer，则 Nginx
会尝试从后端缓冲一定大小的数据再发送给浏览器。请尝试在反代参数后添加 `proxy_buffering off;`，然后重载 Nginx。其他 web
server 配置同理。

Q: 为什么录音功能不能用？

A: 录音需要https环境，推荐使用cloudflare的免费https证书。

Q: build docker容器的时候，显示`exec entrypoint.sh: no such file or directory`？

A: 因为`entrypoint.sh`文件的换行符是`LF`，而不是`CRLF`，如果你用`CRLF`的IDE操作过这个文件，可能就会出错。可以使用`dos2unix`工具将`LF`换成`CRLF`。

## 参与贡献

贡献之前请先阅读 [贡献指南](./CONTRIBUTING.md)

感谢原作者[Chanzhaoyu](https://github.com/Chanzhaoyu/chatgpt-web/)和所有做过贡献的人，还有生产力工具`ChatGpt`
和`Github Copilot`!

<a href="https://github.com/Chanzhaoyu/chatgpt-web/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=Chanzhaoyu/chatgpt-web" />
</a>

## 赞助

如果你觉得这个项目对你有帮助，请给我点个Star。

如果情况允许，请支持原作者[Chanzhaoyu](https://github.com/Chanzhaoyu/chatgpt-web/)

## License

MIT © [WenJing95](./license)
