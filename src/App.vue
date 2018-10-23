<template>
  <div id="app">
    <div id="content">
      <StyleEditor ref="styleEditor" :code="currentStyle"></StyleEditor>
      <ResumeEditor ref="resumeEditor" :markdown="currentMarkdown" :enableHtml="enableHtml"></ResumeEditor>
    </div>
    <div id="foot">
      <ThankEditor ref="thankEditor" :markdown="currentThankMarkdown" :enableHtml="enableHtml"></ThankEditor>
    </div>
  </div>
</template>

<script>
  import StyleEditor from './components/StyleEditor'
  import ResumeEditor from './components/ResumeEditor'
  import ThankEditor from './components/ThankEditor'
  import './assets/reset.css'

  export default {
    name: 'app',
    components: {
      StyleEditor,
      ResumeEditor,
      ThankEditor
    },
    data() {
      return {
        interval: 5,
        currentStyle: '',
        enableHtml: false,
        fullStyle: [
          `/*
* Inspired by http://strml.net/
* 大家好，我是亮亮。
* 我来写一份简历！
*/

/* 给所有元素加上过渡效果 */
* {
  transition: all .1s;
}
/* 设置背景颜色 */
html {
  color: rgb(222,222,222); background: rgb(0,64,64);
}
#content{
  height:70vh;
  margin:0;
}
#foot{
  height:29vh;
  margin:0;
}

/* 设置边框 */
.styleEditor {
  padding: .5em;
  border: 1px solid;
  margin: .5em;
  overflow: auto;
  width: 50vw; height: 70vh;
  background: rgb(20,20,20);
}
/* 代码高亮 */
.token.selector{ color: rgb(130,150,0); }
.token.property{ color: rgb(190,140,0); }
.token.punctuation{ color: yellow; }
.token.function{ color: rgb(40,160,150); }

/* 加3D效果 */
html{
  perspective: 1000px;
}
.styleEditor {
  position: fixed; left: 0; top: 0;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(10deg) translateZ(-100px) ;
          transform: rotateY(10deg) translateZ(-100px) ;
}

/* 准备一个编辑器 */
.resumeEditor{
  position: fixed; right: 0; top: 0;
  padding: .5em;  margin: .5em;
  width: 50vw; height: 70vh;
  border: 1px solid;
  background: rgb(200,200,200); color: #222;
  overflow: auto;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateY(-10deg) translateZ(-100px) ;
          transform: rotateY(-10deg) translateZ(-100px) ;
}
/* 开始写简历 */
`, `
/*将Markdown格式翻译成HTML
 *再对HTML加点样式
*/
.resumeEditor{
  padding: 2em;
}
.resumeEditor h2{
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
.resumeEditor ul,.resumeEditor ol{
  list-style: none;
}
.resumeEditor ul> li::before{
  content: '•';
  margin-right: .5em;
}
.resumeEditor ol {
  counter-reset: section;
}
.resumeEditor ol li::before {
  counter-increment: section;
  content: counters(section, ".") " ";
  margin-right: .5em;
}
.resumeEditor blockquote {
  margin: 1em;
  padding: .5em;
  background: #ddd;
}
`, `/* 写封感谢信。
 * 感谢大家对我的关注。
 */
.styleEditor{
    width:50vw;height:70vh;
}

.resumeEditor{
   width:50vw;height:70vh;
}

.thankEditor{
  position: relative; left: 0; top: 0;
  background: #E9D9BB;
  color: #001C42;
  overflow: auto;
}

.thankEditor {
  width: 99vw; height: 45vh;
  border: 1px solid #ccc;
  font-size: .9em;
}
`,`
.thankEditor{
  padding: .5em;  margin: .5em; margin-top:1em;
}

.thankEditor ul,.thankEditor ol{
  list-style: none;
}
.thankEditor ul> li::before{
  content: '☞'; color: red;
  margin-right: .5em;
}
.thankEditor ol {
  counter-reset: section;
}
.thankEditor ol li::before {
  counter-increment: section;
  content: counters(section, "☞") " ";
  margin-right: .5em;
}

.thankEditor{
  width: 99vw; height: 45vh;
  -webkit-transition: none;
  transition: none;
  -webkit-transform: rotateX(-10deg) translateZ(-200px);
          transform: rotateX(-10deg) translateZ(-200px);
}

`],
        currentMarkdown: '',
        currentThankMarkdown: '',
        fullMarkdown: `亮亮
====

坐标：山东济南。

Linux运维初级工程师，了解Java开发


技能
----

  - Centons等Linux系列系统安装（包括批量无人值守），以及性能调优，安全优化。
  - Linux文件目录权限体系，及Linux用户管理体系解决方案。
  - nfs共享存储的部署应用及rsync，inotify等数据（实时）同步工具的使用。
  - 熟练部署ssh key 结合rsync备份和文件分发的解决方案，熟悉cfengine/puppet分发部署
  - lvs+keepalived四层负载均衡及Nginx7层负载均衡与反向代理构建及优化。
  - shell编程，能使用shell及文本处理工具，grep，awk，sed，cut，tr，expect等进行服务器日志分析，监控，数据备份。系统批量自动化部署运行
  - mysql数据库应用，包括主从同步，主主同步集群的部署及读写分离的实现和配置
  - mysql数据库的日常定时备份和（增量）恢复，独立设计了分库分表备份方案
  - mysql的sql语句，日常应用，开发应用，调优
  - nagios，cacti等监控软件的安装配置，能够配置对web，数据库，负载均衡，存储等服务器进行监控
  - Linux系统安全及防火墙iptables部署优化，并根据生产环境具体要求进行配置。

工作经历
----
北京华锐联创科技有限公司（2017.3-2018.1）
  - 负责网站，数据库和应用系统的运维管理工作
  - 检查并监控系统的日常运行情况，处理突发事件
  - 负责对现有系统，应用架构进行规划改造
  - 负责对服务器的监控
  - 负责内部服务器，网络设备的管理维护
  - 负责系统和网络相关的辅助技术支持工作
  - 负责维护客户机，办公设备的日产运行
  - 负责系统日志分析系统脚本的编写

项目经验
----

一，服务器用户权限管理改造方案及实施项目
  - 提出权限整改解决方案改进公司超级root泛滥的现状
  - 开会讨论确定方案后推进实施
  - 实施后是公司的权限权利更加清晰了，从根本上解决了内部操作不规范造成的安全隐患的发生。

二,服务器日志审计提出与实施
权限控制后进一步实施对所有用户日志记录方案
  - root权限控制后进一步实施对所有用户进行日志记录的方案
  - 通过sudo和syslog配合实现对所有用户进行日志审计并将记录集中管理改善服务器存储问题
  - 实施后让所有的运维和开发的所有执行的命令都有记录可查，杜绝了内部人员操作安全隐患
三，改善服务器存储问题
需求：减轻访问高峰阶段存储压力
职责：
  - web前段存储使用NFS主备结构
  - 用户写入数据，如图片，附件等，存储到NFS主上面，用户的读访问NFS备。
  - NFS主备，使用rsync+inotify进行数据同步
  - NFS存储数据量不大，采用sersync把数据推送到web前段，尽量较少前段服务访问后端服务器的请求，减轻了NFS存储压力
  - 数据备份的安全有了保障，不用担心数据丢失问题
四，全网服务器数据备份解决方案提出及负责实施
  - 针对本公司重要数据备份混乱的状况向领导提出备份全网数据的解决方案
  - 通过本地打包备份，然后rsync+inotify应用把全网数据统一备份到一个固定存储服务器，然后在存储服务器上通过脚本检查并报警管理员备份结果
  - 定期将IDC机房的数据备份到公司电脑上针对本公司重要数据备份混乱的状况向领导提出备份全网数据的解决方案
  - 通过本地打包备份，然后rsync+inotify应用把全网数据统一备份到一个固定存储服务器，然后在存储服务器上通过脚本检查并报警管理员备份结果
  - 定期将IDC机房的数据备份到公司电脑上

技术及语言
----
  - Java: Struts2, Spring, Hibernate,
  - DB: SQLServer, Oracle, MySQL, redis, memcached
  - WebServer: apache, nginx, tomcat, resion, 
  - Linux: Ubuntu, CentOS,
  - Others:  git, Xmind，

教育经历
----

 郑州轻工业学院

`, thanksMarkdown: `
写在最后
----

* 这段时间，我有些诚煌诚恐。我的简历被很多人关注(49842），我码的那几篇文章也有很多人点击(20095），微信好友增加了2000多人。"程序人生"公众号文章（我的简历故事）阅读量超过十万+。
* 有很多企业向我发出了面试邀请，有很多创业团队向我伸出了橄榄枝，一些朋友给我提出非常好的建议，还有很多同学希望跟我进行技术交流，甚至有些企业问我能否承接外包业务。

  `
      }
    },
    created() {
      this.makeResume()
    },

    methods: {
      makeResume: async function () {
        await this.progressivelyShowStyle(0);
        await this.progressivelyShowResume();
        await this.progressivelyShowStyle(1);
        await this.showHtml();
        await this.progressivelyShowStyle(2);
        await this.progressivelyShowThanks();
        await this.progressivelyShowStyle(3)
      },
      showHtml() {
        return new Promise((resolve, reject) => {
          this.enableHtml = true
          resolve()
        })
      },
      progressivelyShowStyle(n) {
        return new Promise((resolve, reject) => {
          let interval = this.interval
          let showStyle = (async function () {
            let style = this.fullStyle[n]
            if (!style) {
              return
            }
            // 计算前 n 个 style 的字符总数
            let length = this.fullStyle.filter((_, index) => index <= n).map((item) => item.length).reduce((p, c) => p + c, 0)
            let prefixLength = length - style.length
            if (this.currentStyle.length < length) {
              let l = this.currentStyle.length - prefixLength
              let char = style.substring(l, l + 1) || ' '
              this.currentStyle += char
              if (style.substring(l - 1, l) === '\n' && this.$refs.styleEditor) {
                this.$nextTick(() => {
                  this.$refs.styleEditor.goBottom()
                })
              }
              setTimeout(showStyle, interval)
            } else {
              resolve()
            }
          }).bind(this)
          showStyle()
        })
      },
      progressivelyShowResume() {
        return new Promise((resolve, reject) => {
          let length = this.fullMarkdown.length
          let interval = this.interval
          let showResume = () => {
            if (this.currentMarkdown.length < length) {
              this.currentMarkdown = this.fullMarkdown.substring(0, this.currentMarkdown.length + 1)
              let lastChar = this.currentMarkdown[this.currentMarkdown.length - 1]
              let prevChar = this.currentMarkdown[this.currentMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.resumeEditor) {
                this.$nextTick(() => this.$refs.resumeEditor.goBottom())
              }
              setTimeout(showResume, interval)
            } else {
              resolve()
            }
          }
          showResume()
        })
      },
      progressivelyShowThanks() {
        return new Promise((resolve, reject) => {
          let length = this.thanksMarkdown.length
          let interval = this.interval
          let showThanks = () => {
            if (this.currentThankMarkdown.length < length) {
              this.currentThankMarkdown = this.thanksMarkdown.substring(0, this.currentThankMarkdown.length + 1)
              let lastChar = this.currentThankMarkdown[this.currentThankMarkdown.length - 1]
              let prevChar = this.currentThankMarkdown[this.currentThankMarkdown.length - 2]
              if (prevChar === '\n' && this.$refs.thankEditor) {
                this.$nextTick(() => this.$refs.thankEditor.goBottom())
              }
              setTimeout(showThanks, interval)
            } else {
              resolve()
            }
          }
          showThanks()
        })
      }
    }
  }

</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
</style>
