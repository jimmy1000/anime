<template>
	<view>
		<view>
			<!-- 解决移除原生导航栏后页面与手机状态栏重叠问题 -->
			<!-- #ifdef APP-PLUS -->
			<view class="status_bar">
				<view class="top_view"></view>
			</view>
			<!-- #endif -->
		</view>
		<tabBar></tabBar>
		<u-toast ref="uToast" />
		<!-- 顶部 banner  start -->
		<view style="background-image: url(../../static/profile/topbanner.png);width: 100%;height: 511upx;background-size: 100% 511upx;margin-bottom: 7%;">
			<br>
			<view class="user-wrap" @tap="urlGo('/pages/my/changeAva','')">
				<view class="setting iconfont icon31shezhi"></view>
				<view class="info">
					<u-avatar :src="this.$store.state.ava_img" style="margin-top: 18%;" size="120"></u-avatar>
					<view class="nickname">
						{{ this.$store.state.username}}
					</view>
				</view>
			</view>

			<view style="background-image: url(../../static/profile/vip.png) ;width: 95%;height: 404upx;background-size: 95% 404upx;margin: -15% auto; background-repeat:no-repeat;">
				<br>
				<view style="margin-left: 76%;margin-top: 23.2%;" class="font">0/2人</view>
			</view>
		</view>

		<!-- 顶部 banner  end -->
		<!-- 邀请码 start -->
		<view style="width: 100%;text-align: center;">
			<image src="@/static/profile/banana.png" style="width: 40upx;height: 31upx;margin-left: -5%;"></image>
			<text class="font2">分享送VP:成功邀请2人送3天,邀请5人送7天 </text>
			<view class="fuzhi">
				<view style="font-size: 42upx;font-family: FZCU;font-weight: bold;color: #000000;line-height: 25px;margin-left: 10%;">邀请码：{{this.$store.state.invite_code}}</view>
				<view @tap="showToast()"  style="background-image: url(../../static/profile/radio.png);background-size: 140upx 54upx;width: 140upx;height: 54upx;padding-top: 0.5%;">复制</view>
				<view style="background-image: url(../../static/profile/radio.png);background-size: 140upx 54upx;width: 140upx;height: 54upx;padding-top: 0.5%;">分享推广</view>
			</view>
		</view>
		<!-- 邀请码 end -->
		<!-- 选项卡  start-->

		<view :style="{'margin-top': '18%','width': 'auto','height': height+'upx'}">
			<view style="display: flex;flex-direction: row;margin-left: 10%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/account.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">账号凭证</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 60%;margin-top: 2%;"></view>
			</view>
			<view style="display: flex;flex-direction: row;margin-left: 10%;margin-top: 8%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/favorites.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">收藏详情</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 60%;margin-top: 2%;"></view>
			</view>
			<view style="display: flex;flex-direction: row;margin-left: 10%;margin-top: 8%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/history.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">浏览足迹</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 60%;margin-top: 2%;"></view>
			</view>
			<view style="display: flex;flex-direction: row;margin-left: 10%;margin-top: 8%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/invite.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">填写邀请码</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 56%;margin-top: 2%;"></view>
			</view>
			<view style="display: flex;flex-direction: row;margin-left: 10%;margin-top: 5%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/kefu.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">客服中心</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 60%;margin-top: 2%;"></view>
			</view>
			<view style="display: flex;flex-direction: row;margin-left: 10%;margin-top: 8%;">
				<view style="width: 50upx;height: 50upx;background-image: url(../../static/profile/recharge.png);background-size: 50upx 50upx;"></view>
				<view style="margin-left: 3%;padding-top: 1%;">版本更新</view>
				<view style="width: 15upx;height: 26upx;background-image: url(../../static/profile/back.png);background-size: 15upx 26upx;margin-left: 60%;margin-top: 2%;"></view>
			</view>
		</view>
	</view>
</template>

<script>
	import tabBar from '../../component/bar/tabbar.vue'
	export default {
		components: {
			tabBar
		},
		data() {
			return {
				height: '',
				src: '../../static/my/avatar/ava1.png'||this.$store.state.ava_img,

			};
		},
		mounted() {
			let _this = this;
			uni.getSystemInfo({
				success: function(res) {
					if (res.screenHeight < 600) {
						_this.height = res.screenHeight * 1.5;
					} else {
						_this.height = res.screenHeight * 1.1;
					}
				}
			});
		},
		onLoad() {},
		beforeCreate() {
			async function timeout() {
				return 'hello world'
			}
			timeout().then(result => {
				console.log(result);
			})
			console.log('虽然在后面，但是我先执行');
		},
		methods: {
			showToast() {
				this.$refs.uToast.show({
					title: '复制成功',
					type: 'success'
				})
				this.copy()
			},
			copy() {
				uni.setClipboardData({
					data: this.$store.state.invite_code,
					success: function(data) {
					},
					fail: function(err) {},
					complete: function(res) {}
				})
			}
		}

	}
</script>

<style lang="scss">
	.font {
		font-size: 14px;
		font-family: FZCuYuan-M03S;
		font-weight: 400;
		color: #FFFFFF;
		line-height: 24.8px;
	}

	.font2 {
		font-size: 28upx;
		font-family: FZCU;
		font-weight: bold;
		color: #3A3A3A;
		line-height: 22px;
		padding-left: 4%;
		padding-top: -2%;
	}

	.fuzhi>view {
		font-size: 14px;
		font-family: HT;
		font-weight: bold;
		color: #4E8AFC;
		line-height: 45upx;
		float: left;
		text-align: center;
		margin-left: 3%;
		margin-top: 5%;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #ffffff;
	}

	.top_view {
		height: var(--status-bar-height);
		width: 100%;
		position: fixed;
		background-color: #ffffff;
		top: 0;
		z-index: 999;
	}

	.user-wrap {
		display: flex;
		justify-content: center;
		height: 245upx;
		align-items: center;

		.info {
			position: absolute;
			text-align: center;

			.nickname {
				font-size: 38upx;
				font-family: FZCU;
				font-weight: bold;
				color: #FFFFFF;
				line-height: 51upx;
			}
		}
	}
</style>
