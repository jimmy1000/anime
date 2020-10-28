import config from '@/tools/config.js'
const httpClient = {
	request: function(method, url, data, token) {
		//头部信息封装
		var herders = {
			'token': token
		};
		return new Promise((resolve, reject) => {
			//添加一个提示框，可以提升交互，也能防止数据未加载完用户点击导致报错
			uni.showLoading({
				title: '加载中',
				mask: true
			});
			uni.request({
				url: config.data.baseUrl+url, //接口地址
				header: herders,
				data: data, // 传入的参数
				method: method, // 请求方法
				success: function(res) {
					//关闭提示框
					uni.hideLoading();
					if (res.statusCode !== 200) { //请求失败显示报错信息
						uni.showToast({
							title: res.statusCode.toString(),
							duration: 1000,
							icon: "none"
						})
						return;
					}
					resolve(res.data) // 成功返回的结果
				},
				fail: function(err) {
					uni.hideLoading()
					reject(err) // 失败结果
				}
			})
		});
	},
};
export default httpClient
