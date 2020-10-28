<template>
	<view class="allcentent">
		<view class="content" v-for="baseItem in pages">
			<view class="more">
				<!-- 左边图片start -->
				<view class="left">
					<image :src="baseItem.titelImg" style="width: 120rpx;height: 80%;" mode=""></image>
					<text>{{baseItem.titleMsg}}</text>
				</view>
				<!-- 左边图片end -->
				<!-- 右边more图片start -->
				<!-- <navigator url="../../pages/manhua/more" hover-class="navigator-hover"> -->
				<view class="right" @tap="urlGo(baseItem.more,'')">
					<image src="../../static/manhua/feijibei.png" style="width: 120rpx;height: 70%;" mode=""></image>
				</view>
				<!-- </navigator> -->
				<!-- 右边more图片end -->
			</view>
			<!-- 作品start -->
			<view class="allzuoping" >
				<view class="zuoping" v-for="item in baseItem.allzuoping" :style="{'background-image':'url('+baseItem.background+')'}">
					<view class="buttom" style="display: flex; align-self:flex-end;margin-bottom: 3%;flex-direction:column;">
						<view class="title" style="color: #FFFFFF;">
							{{item.contenTitle}}
						</view>
						<view class="shouchang" style="display: flex;">
							<image src="../../static/manhua/xxx.png" style="width: 40rpx;height:40rpx;" mode=""></image>
							3333
						</view>
					</view>
					<view class="top" style="color:#FFFFFF ;">
						{{item.zuopingTitle}}
					</view>
				</view>
			</view>
			<!-- 作品end -->
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name: "mhneirong",
		props: {
			
		},
		data() {
			return {
				pages: [{
					titelImg: "../../static/manhua/neiku.png",
					titleMsg: "吸精作品",
					moreUrl: "",
					more:"/pages/manhua/more",
					background: "../../static/manhua/jinri.png",
					allzuoping: [{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜1",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜2",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜3",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "进击的巨人",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "东京喰种",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "火影忍者",
							xxxUrl: "../../static/manhua/xxx.png"
						}
					],

				},{
					titelImg: "../../static/manhua/cup.png",
					titleMsg: "最新上架",
					moreUrl: "",
					more:"/pages/manhua/more2",
					background: "../../static/manhua/jingxuan.png",
					allzuoping: [{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜没睡",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜没睡",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜没睡",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜没睡",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "那夜没睡",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						{
							bgimgUrl: "url(../../static/manhua/jinri.png)",
							zuopingTitle: "韩漫",
							xxnumb: "3333",
							contenTitle: "海贼王",
							xxxUrl: "../../static/manhua/xxx.png"
						},
						
					],

				}],
				swiperHeight:"",
			}
		},
		created() {
		},
		methods: {
			getHeight:function(){
				let _this = this

				let query = uni.createSelectorQuery().select('.allcentent');  
				        query.boundingClientRect(function(data) {  

				                _this.swiperHeight = data.height;  
								 _this.$emit('getDmHeight', {msg:_this.swiperHeight})	
						
				            })  
				            .exec();
			},
			setPages:function(){
				this.$emit('getPages',{msg:this.pages})
			}
		},
		mounted() {
			this.getHeight()
			this.setPages()
		}
	}
</script>

<style>
	.content {
		width: 100%;
	}

	.more {
		display: flex;
		color: #FF7CAA;
		width: 100%;
		height: 100rpx;
		align-items: center;
		justify-content: space-between;
	}

	.more view {
		margin: 2%;
	}

	.left {
		width: 38%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.right {
		width: 15%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	//全部作品
	.allzuoping {
		font-size: 10px;
		color: #FF7CAA;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		width: 100%;
	}

	.zuoping {
		display: flex;
		justify-content: flex-end;
		width: 30%;
		background-size: cover ;
		margin-top: 2%;
		height: 326rpx;
	}
</style>
