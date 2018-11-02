// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
Vue.use(VueResource)

// import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data(){
  	return{
  		transitionName:'slide'
  	}
  },
  router,
  // components: { index },
  // template: '<App/>'
  watch:{
  	'$route'(to,from){
  		const toDepth = to.path.substring(0,to.path.length-2).split('/').length
  		const fromDepth = from.path.substring(0,from.path.length-2).split('/').length
  		this.transitionName = toDepth < fromDepth ? 'slide_back':'slide'
  	}
  }
})
