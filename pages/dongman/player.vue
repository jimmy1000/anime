<template>
	<view>
		<view class="video">
			<view class="popu">
				<u-toast ref="uToast" />
			</view>
			<video id="myVideo" :poster="img_url" :src="videoSrc" @error="videoErrorCallback" @timeupdate="timeupdate"></video>
		</view>
		<!-- 动漫详情/用户评论start -->
		<view>
			<u-tabs-swiper  ref="uTabs" :list="list" :current="current" @change="tabsChange" :is-scroll="false" swiperWidth="750" bar-height="6" bar-width="300" active-color="#f07bff"></u-tabs-swiper>
		</view>
		<swiper :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item" v-for="(item, index) in tabs" :key="index">
				<scroll-view scroll-y style="height: 800rpx;width: 100%;" @scrolltolower="onreachBottom">
					<view class="anime" v-if="index==0">
						{{img_url}}
					</view>
					<view class="comment" v-if="index ==1">  
						{{videoSrc}}dz
					</view>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					name: '动漫详情'
				}, {
					name: '用户评论'
				}],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
				tabs:2,
				videoSrc:'',
				img_url:''
			}
		},
		methods: {
			videoErrorCallback() {
				this.$refs.uToast.show({
					title: '播放失败请刷新页面',
					type: 'error',
				})
			},
			// tabs通知swiper切换
			tabsChange(index) {
				this.swiperCurrent = index;
			},
			// swiper-item左右移动，通知tabs的滑块跟随移动
			transition(e) {
				let dx = e.detail.dx;
				this.$refs.uTabs.setDx(dx);
			},
			// 由于swiper的内部机制问题，快速切换swiper不会触发dx的连续变化，需要在结束时重置状态
			// swiper滑动结束，分别设置tabs和swiper的状态
			animationfinish(e) {
				let current = e.detail.current;
				this.$refs.uTabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},
			// scroll-view到底部加载更多
			onreachBottom() {

			},
			timeupdate(res){
			console.log('timeupdate', parseInt(res.detail.currentTime), '时间总时长-->', parseInt(res.detail.duration));
			}
		},
		onLoad(option) {
			let _this = this
			 console.log(option.msg)
			  const eventChannel = this.getOpenerEventChannel()
			  eventChannel.emit('acceptDataFromOpenedPage', {data: '我是plyer'});
			  eventChannel.emit('someEvent', {data: 'plyer'});
			  // 监听acceptDataFromOpenerPage事件，获取上一页面通过eventChannel传送到当前页面的数据
			  eventChannel.on('acceptDataFromOpenerPage', function(data) {
				_this.videoSrc = data.param[0].content
				_this.img_url = data.param[0].img_url
				console.log(_this.videoSrc)
			  })
		}

	}
</script>

<style>
	#myVideo {
		width: 100%;
	}
</style>
