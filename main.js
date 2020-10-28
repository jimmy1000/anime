import Vue from 'vue'
import App from './App'
Vue.config.productionTip = false
import uView from "uview-ui";
import api from 'tools/api.js'
import 'components/unit/ican-H5Api'
Vue.use(uView);

Vue.prototype.$api = api
//引入vuex
import store from './store'
//把vue 定为全局组件
Vue.prototype.$store = store
Vue.config.productionTip = false

App.mpType = 'app'



Vue.prototype.urlGo = function(url, param) {
  uni.navigateTo({
    url: url + param
  });
}
Vue.prototype.videoGo = function(param = 'sunday.mp4'){
	let uri = param.content
	let url = '/pages/dongman/player'
	uni.navigateTo({
		url:url + '?' + 'msg=df' ,
		 events: {
		    // 为指定事件添加一个监听器，获取被打开页面传送到当前页面的数据
		    acceptDataFromOpenedPage: function(data) {
		      console.log(data)
		    },
		    someEvent: function(data) {
		      console.log(data)
		    }
		  },
		  success: function(res) {
		    // 通过eventChannel向被打开页面传送数据
		    res.eventChannel.emit('acceptDataFromOpenerPage', { param })
		  }
	})
	
}

Vue.prototype.$constant = {
	//网关
	baseUrl: "http://api.com/",
	//session相关的key
	user_session: "user_session",
	/**
	 * 用户相关接口
	 */
	reg: "/reg", //用户注册
	login: '/login', //用户登录
	userMsg: "/userMsg",
	/**
	 * 产品相关api
	 */
	anime: "/anime", //动漫
	manhua:"/manhua"//漫画
}
const app = new Vue({
    ...App,
	//挂载
	 store
})
app.$mount()
