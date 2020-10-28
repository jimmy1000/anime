<template>
	<view id="manhua">
		<navBar :getPages="navpages"></navBar>
		<tabBar></tabBar>
		<!-- 顶部导航start -->
		<view v-bind:class="{ nav: true, 'activNav': classObject.activNav }">
			<navTab ref="navTab" :tabTitle="tabTitle" @changeTab='changeTab'></navTab>
		</view>
		<!-- 顶部导航栏end -->

		<!-- swiper切换 swiper-item表示一页 scroll-view表示滚动视窗 -->
		<swiper :style="{minHeight:swiperHeight + 'px' }"   class="scroll" :current="currentTab" @change="swiperTab">
			<swiper-item    v-for="(listItem,listIndex) in list" :key="listIndex">
				<scroll-view style="height: 100%;" scroll-y="true"  scroll-with-animation :scroll-into-view="toView">
					<!-- <view :id="'top'+listIndex" style="width: 100%;height: 180upx;">边距盒子</view> -->

					<!-- 各个页面start -->
					<view class='content'>
						<!-- 推荐页面start -->
						<view class="tuijian" v-if="0===listIndex">
							<!-- 轮播图start -->
							<u-swiper :list="lblist"></u-swiper>
							<!-- 轮播图end -->
							<!-- 优选.限免.完结start -->
							<view class="wrap">
								<view class="youxuan">
									<image style="width: 100%;height: 100%;" src="../../static/index/image/manhua/youxuan.png" mode=""></image>
								</view>
								<view class="youbian">
									<view class="xianmian">
										<image style="width: 100%;height: 100%;" src="../../static/index/image/manhua/xianmian.png" mode=""></image>
									</view>
									<view class="wanjie">
										<image style="width: 100%;height: 100%;" src="../../static/index/image/manhua/wanjie.png" mode=""></image>
									</view>
								</view>
							</view>
							<!-- 优选.限免.完结end -->

							<!-- 更多模块start -->
							<mhneirong ref="mhneirong" @getPages="getPages"  @getDmHeight="getDmHeight"></mhneirong>
							<!-- 更多模块end -->

						</view>
						<!-- 推荐页面end -->
						<!-- 韩漫start -->
						<view class="hanman" v-if="1===listIndex">
							韩漫
						</view>
						<!-- 韩漫end -->
						<!-- H漫start -->
						<view class="Hman" v-if="2===listIndex">
							H漫
						</view>
						<!-- Hman页面end -->
						<!-- 真人漫页面start -->
						<view class="zhenren" v-if="3===listIndex">
							真人漫页面
						</view>
						<!-- 真人漫end -->
						<!-- CG页面start -->
						<view class="CG书籍" v-if="4===listIndex">
							cg页面
						</view>
						<!-- CG页面end -->

						<!-- 备用卡片start -->
						<!-- <view class='card' v-for="(item,index) in listItem" v-if="listItem.length > 0" :key="index">
						{{item}}{{listIndex}}
					</view> -->
						<!-- 备用卡片end -->
						<!-- 各个页面内容end -->

					</view>

				</scroll-view>
			</swiper-item>
		</swiper>
		<!-- swiper切换 end-->
		<view style="width: 100%;height: 110upx;opacity:0;">底部占位盒子</view>

	</view>
</template>

<script>
	import navTab from '../../component/mhBar/navTab.vue'
	import navBar from '../../component/bar/navbar.vue'
	import tabBar from '../../component/bar/tabbar.vue'
	import mhneirong from '../../component/mhBar/MHneirong.vue'
	export default {
		components: {
			navBar,
			tabBar,
			navTab,
			mhneirong
		},
		data() {
			return {
				navpages:{},
				//内容高度
				swiperHeight: "",
				//动漫轮播数据start
				currentPage: 'index',
				toView: '', //回到顶部id
				tabTitle: ['推荐', '韩漫', 'H漫', '真人漫', 'CG书籍'], //导航栏格式 --导航栏组件
				currentTab: 0, //sweiper所在页
				pages: [1, 1, 1, 1], //第几个swiper的第几页
				list: [
					[1, 2, 3, 4, 5, 6],
					['a', 'b', 'c', 'd', 'e', 'f'],
					[],
					['2233', '4234', '13144', '324244'],
					[]
				], //数据格式
				lblist: [{
						image: '../../static/index/image/manhua/lunbo.png',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: '../../static/index/image/manhua/lunbo.png',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				//动漫数据end
				//动态classstart
				 classObject:{ nav: true, activNav:false },
				 //动态classend
			}
		},
		methods: {
			changeTab(index) {
				this.currentTab = index;
				console.log(this.currentTab + "changetab")
			},
			swiperTab: function(e) {
				var index = e.detail.current //获取索引
				this.$refs.navTab.longClick(index);
				console.log(index + "navTab")
			},
			getDmHeight: function(getDmHeight) {
				let _this = this
				_this.swiperHeight = getDmHeight.msg + 240
			},
			getPages:function(getPages){
				this.navpages = getPages.msg
			},
			onPageScroll:function(e){
				console.log(e)
				if(e.scrollTop > 0 ){
					this.classObject.activNav = true
				}
				if(e.scrollTop < 0){
					this.classObject.activNav =false
				}
			    // e.scrollTop >  0? this.classObject.activNav = true : this.classObject.activNav =false
			}
		},
		onLoad() {
			 this.onPageScroll
		}
	}
</script>

<style scoped>
	.container999 {
		width: 100vw;
		font-size: 28upx;
		min-height: 100vh;
		overflow: hidden;
		color: #6B8082;
		position: relative;
		background-color: #f6f6f6;
	}

	.content {
		width: 95%;
		position: fixed;
		margin: 0 auto;
		left: 0;
		right: 0;
	}

	.card {
		width: 95%;
		height: 368upx;
		background-color: white;
		margin: 0 auto 42upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
	}


	.nav {
		position: inherit;
		left: 0;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		/* 	background-color: #50B7EA; */
		z-index: 996;
	}
	.activNav{
		background:rgba(255,255,255,0.8);
		position: fixed;
		}
	.scroll{
		position: inherit;
		
	}
	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}
	/* layout */
	.wrap {
		width: 100%;
		height: 250rpx;
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;

	}

	.youxuan {
		width: 48%;
		height: 100%;
	}

	.youbian {
		margin-left: 6px;
		width: 50%;
		height: 100%;
	}

	.xianmian {
		width: 100%;
		height: 48%;
	}

	.wanjie {
		width: 100%;
		height: 48%;
		margin-top: 6rpx;



	}
</style>
