
## 使用方法

1. 安装Node.js环境：https://nodejs.org/

2. 安装git: https://git-scm.com/

3. 执行以下命令：

``` bash
git clone https://github.com/sitexa/anires.git
cd anires
npm install
npm run dev
```

## 部署方法

1. 编辑 config/index.js，修改第 10 行的 assetsPublicPath，值为 `项目名/public`。如果你没有修改项目名 anires，则可跳过此步骤。

2. 编译、上传
    
``` 
bash
npm run build
git add .
git commit -m "update"
git push
```

3. 开启 GitHub Pages 功能, 或者，把生成的目标文件```public/*```放在你的web服务器上。

4.如果出错 UNABLE_TO_VERIFY_LEAF_SIGNATURE 
请执行npm config set strict-ssl false

用完之后恢复：

npm config set strict-ssl true