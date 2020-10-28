	<template>
	<view>
		<navBar></navBar>
		<tabBar></tabBar>
		<view class="dongman">
			<view class="lunbotu">
				<!-- 录播图start -->
				<u-swiper :list="list"></u-swiper>
				<!-- 录播图end -->
			</view>
			<!-- 最新上架more-start -->
			<view class="more">
				<image src="../../static/dongman/shoe.png" style="width:30% ;height: 70%;" mode=""></image>
				<image src="../../static/dongman/more.png" style="width:15% ;height: 70%;" mode=""></image>
			</view>
			<!-- 最新上架more-end -->
			<!-- 最新上架内容start -->
			<view class="new-sj">
				<view>
					<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="120">
						<view   class="scroll-view-item_H " v-for="item in new_sj ">
							<image v-bind:src="item.img_url" style="width: 98%;height: 85%;" ></image>
							<view class="xialan">
								<text>{{item.title}}</text>
								<view class="right">
									<image src='~@/static/dongman/bofangqi.png' style="width:30%;height: 70%;padding-right: 10%;" mode=""></image>
									<text>{{item.time}}</text>
								</view>
							</view>
						</view>
					</scroll-view>
				</view>
			</view>
			<!-- 最新上架内容end -->
			<!-- 编辑推荐more-start -->
			<view class="more">
				<image src="../../static/dongman/tuijian.png" style="width:30% ;height: 70%;" mode=""></image>
				<image src="../../static/dongman/more.png" style="width:15% ;height: 70%;" mode=""></image>
			</view>
			<!-- 编辑推荐more-end -->
			<!-- 编辑推荐start -->
			<view class="enshrine">
				<view class="enshrine_content" v-for="item in recommend" style="position:relative;height: 100%;">
					<view class="title" style="position:absolute;z-index: 100;display: flex;   align-items:center ;flex-direction:column-reverse; width: 100%;height: 100%;">
						<view style="color: #FFFF7BA9;margin: 5%;">
						<image src="../../static/dongman/xxx.png" style="width: 30upx;height: 30rpx;" mode=""></image>
						{{item.enshrine_num}}	
						</view>
						<view style="color:#FFFFFFFF;">进击的巨人</view>
					</view>
					<image v-bind:src="item.img_url" style="width: 100%;position:relative;" mode=""></image>
				</view>
			</view>
			<!-- 编辑推荐end -->
			<!-- 热播动漫more_start -->
			<view class="more">
				<image src="../../static/dongman/banana.png" style="width:30% ;height: 70%;" mode=""></image>
				<image src="../../static/dongman/more.png" style="width:15% ;height: 70%;" mode=""></image>
			</view>
			<!-- 热播动漫more_end -->
			<!-- 热播动漫start -->
				<view   @tap="videoGo([{img_url:item.img_url,content:item.content_url}])"  class="hot" v-for="item in hot" >
					<image src="../../static/dongman/hot.png" style="width: 100%;height: 85%;margin-right: 10%;" mode=""></image>
					<view class="hot-buttom">
						<text>{{item.title}}</text>
						<view >
							<image src="../../static/dongman/bofangqi.png" style="height: 30rpx;width: 30rpx;" mode=""></image>
							<text>{{item.time}}</text>
						</view>
					</view>
				</view>
			<!-- 热播动漫end -->
			<!-- 底部占位符 -->
			<view style="width: 100%;height:120upx;"></view>
		</view>
	</view>
</template>

<script>
	import tabBar from '../../component/bar/tabbar.vue'
	import navBar from '../../component/bar/navbar.vue'
	export default {
		components: {
			navBar,
			tabBar
		},
		data() {
			return {
				list: [{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				new_sj: [],
				recommend: [],
				hot: [],
				content_url:''
			}
		},
		onLoad() {	
			this.$api.getVs("post","is_new",'').then(
			res => this.new_sj = res
			)
			
			//获取编辑推荐视屏
			this.$api.getVs("post","is_recommend",'').then(
			res => this.recommend = res
			)
			//获取hot视屏
			this.$api.getVs("post","is_hot",'').then(
			res => this.hot = res
			)
		},
		methods: {
			scroll(){
			},			
			getnew(){
				console.log('getnew')
			}
		}

	}
</script>

<style scoped>
	.dongman {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}

	.lunbotu {
		width: 95%;
	}

	.more {
		display: flex;
		width: 95%;
		height: 100rpx;
		justify-content: space-between;
		align-items: center;
		position: relative;
	}

	.new-sj {
		width: 95%;
	}

	.scroll-view_H {
		width: 100%;
		height: 300upx;
		display: flex;
		white-space: nowrap;
		flex-wrap: wrap;

	}

	.scroll-view-item_H {
		overflow: hidden;
		margin: 2upx;
		width: 80%;
		height: 100%;
		display: inline-block;
	}

	.xialan {
		display: flex;
		justify-content: space-around;
		height: 15%;
	}

	.right {
	
	}

	.enshrine {
		width: 95%;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}

	.enshrine_content {
		width: 49%;
	}
	.hot{
		width: 95%;
		display: flex;
		height: 350upx;
		flex-direction:column ;
	}
	.hot-buttom{
		display: flex;
	    align-items:center;
		justify-content:space-between;
		height: 15%;
		width: 100%;
	}
</style>
