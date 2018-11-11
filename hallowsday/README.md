# hallowsday

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

##  关于路径问题

由于gh-page的入口是根目录index.html，不能指定为dist/index.html，而根目录下的index.html只是个模板，并非最终的
目标文件，最终目标文件是dist/index.htl，因此，就要很别扭地在生成目标文件后，修改根目录的index.html，让浏览器
跳转到目标dist/index.html,即用default.html的内容覆盖根目录下的index.html，实现跳转。

同时，由于dist不是webroot，因此，路径要进行相应的修改，写成相对路径比较可靠。即在config/index.js的53行将assetsPublicPath的值由'/'改为''。

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
