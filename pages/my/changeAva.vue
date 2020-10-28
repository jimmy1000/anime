<template>
	<view>
		<view class="bg" :style="{height:scorllHeight}">
			<view class="box">
				<view style="text-align: center;margin-top: -10%;">
						<u-avatar :size=150 :src="this.$store.state.ava_img"></u-avatar>
				</view>
				<!-- 头像组start -->
					<u-grid :col="4" :border='false'>
							<u-grid-item v-for="index in 24" :key='index' bg-color="rgba(243, 230, 255, 0.89)">
								<u-icon name="hourglass" :size="70"></u-icon>
								<image  @click="settingImg('../../static/my/avatar/ava'+index+'.png')" :src="'../../static/my/avatar/ava'+index+'.png'" class="badge-icon" mode=""></image>
							</u-grid-item>
					</u-grid>
				<!-- 头像end -->
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scorllHeight:"",
				src:this.$store.state.ava_img ||'../../static/my/avatar/ava0.png',
			}
		},
		methods: {
			settingImg(e){
				this.$store.commit('set_ava_img',e)
			}
		},
		onLoad() {
			let _this = this
			_this.scorllHeight = _this.$store.state.set_window_height*0.9 + 'rpx'
		}
	}
</script>

<style>
	.bg{
		width: 100%;
		background-color: #FFE6D9E9;
		display: grid;
		place-items: center;
	}
	.box{
		background: rgba(243, 230, 255, 0.89);
		box-shadow: 0px 4px 68px 0px rgba(39, 52, 125, 0.25);
		border-radius: 24px 24px 24px 24px;
		height: 80%;
		width: 85%;
	}
	.box-content{
		display: flex;
		flex-wrap:wrap;
		width: 100%;
		height: 100%;
	}
	.badge-icon {
		position: absolute;
		top: 14rpx;
		right: rpx;
		width: 130rpx;
		height: 110rpx;
	}
</style>
