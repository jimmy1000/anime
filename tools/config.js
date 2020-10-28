let baseUrl = ''
// 开发环境

if (process.env.NODE_ENV === 'development') {
	baseUrl = 'http://api.com/'
}
// 生产环境
if (process.env.NODE_ENV === 'production') {
	baseUrl = 'http://api.com/'
}

const data = {
	//网关 
	baseUrl: baseUrl,

	//用户controller
	//session相关的key
	user_session: "user_session",
	/**
	 * 用户相关接口
	 */
	reg: "/user/reg", //用户注册
	login: '/login', //用户登录
	userMsg: "/userMsg",
	/**
	 * 产品相关api
	 */
	anime: "/anime/index/id/", //动漫
	manhua:"/manhua"//漫画

}

module.exports = {
	data: data
}
