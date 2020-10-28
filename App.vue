<script>
	import api from '@/tools/api.js'
	export default {
		onLaunch: function() {
					uni.getSystemInfo({
						success:(res)=>{
							console.log("手机可用高度:"+res.windowHeight*2+"rpx");
							this.$store.commit('set_window_height',res.windowHeight*2);
						}
					})
					let token = this.$store.state.token;
					if(token === ''){
						api.reg().then(res=>{
							console.log(res)
							if(res.code == 0){
							this.$store.commit('set_user',res)
							}
						})
					}
					console.log(123)
				}
	}
</script>

<style lang="scss">
	/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */
	@import "uview-ui/index.scss";
	// @font-face{
	// 	font-family: "erciyuan";
	// 	font-display: swap;
	// 	src: url('~@/static/common/font/erciyunziti.ttc')format('truetype');
	// }
</style>
