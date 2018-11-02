# hallowsday

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install
出错：
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! chromedriver@2.43.1 install: `node install.js`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the chromedriver@2.43.1 install script.
npm ERR! This is probably not a problem with npm. There is likely additional log
ging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     
C:\Users\Administrator\AppData\Roaming\npm-cache\_logs\2018-11-02T1
1_19_59_302Z-debug.log

解决npm install appium-chromedriver@3.0.1 --ignore-scripts或者npm install appium-chromedriver --chromedriver_cdnurl=http://npm.taobao.org/mirrors/chromedriver


npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit
问题：
npm ERR! code ELIFECYCLE 
npm ERR! errno 1 
npm ERR! node-sass@4.9.2 postinstall: node scripts/build.js 
npm ERR! Exit status 1 
npm ERR! 
npm ERR! Failed at the node-sass@4.9.2 postinstall script. 
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

解决：
进入项目目录，运行命令：
npm install --save-dev node-sass

网上方法：（未测试）
npm rebuild node-sass

# run e2e tests
npm run e2e

运行e2e时报如下错误：

Running:  default e2e tests

Error retrieving a new session from the selenium server

Connection refused! Is selenium server started?

{ value: 
   { stacktrace: 'org.openqa.selenium.SessionNotCreatedException: Unable to create new service: ChromeDriverService\nBuild info: version: \'3.7.1\', revision: \'8a0099a\', time: \'20
17-11-06T21:07:36.161Z\'\nSystem info: host: \'PC-20160906QJYJ\', ip: \'192.168.10.162\', os.name: \'Windows 7\', os.arch: \'amd64\', os.version: \'6.1\', java.version: \'9.0.1\'\nDr
iver info: driver.version: unknown\r\n\tat org.openqa.selenium.remote.server.ServicedSession$Factory.lambda$get$0(ServicedSession.java:194)\r\n\tat org.openqa.selenium.remote.server.
ServicedSession$Factory.apply(ServicedSession.java:204)\r\n\tat org.openqa.selenium.remote.server.ActiveSessionFactory.lambda$apply$11(ActiveSessionFactory.java:167)\r\n\tat java.bas
e/java.util.stream.........
npm ERR! Windows_NT 6.1.7601
npm ERR! argv "D:\\Program Files\\nodejs\\node.exe" "D:\\Program Files\\nodejs\\node_modules\\npm\\bin\\npm-cli.js" "run" "e2e"
npm ERR! node v6.10.1
npm ERR! npm  v3.10.10
npm ERR! code ELIFECYCLE
npm ERR! my-project@1.0.0 e2e: `node test/e2e/runner.js`
npm ERR! Exit status 1
--------------------- 
解决:尝试了很多方法，后来发现是npm 下载chromedriver的时候出现了问题，手动删除node_modules\chromedriver ，运行命令;
npm install chromedriver --chromedriver_cdnurl=https://npm.taobao.org/mirrors/chromedriver

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
