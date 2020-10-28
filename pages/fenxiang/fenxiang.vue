<template>
	<view>
		<tabBar></tabBar>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		<view class="share" :style="{'height':height/2 + 'px'}">
			<view class="share-img">
				<image src="../../static/fenxiang/fenxiang.png" style="width: 160upx;height: 53upx;" mode=""></image>
			</view>
			<!-- //邀请码 -->
			<view class="yaoqingma">
					<view class="">
						邀请码:33568
					</view>
			</view>
			<!-- 二维码start -->
			<view class="qrimg">
				<view class="urcode">
					<canvas canvas-id="qrcode" style="width:354rpx;height:354rpx ;" />
				</view>
			</view>
			<view class="tuiguang">
			<view class="tuiguang_img">
				<image src="../../static/fenxiang/baocunfenxiangtu.png" style="width: 40%;height: 80upx;" mode=""></image>
				<image src="../../static/fenxiang/fenxiangtuiguang.png" style="width: 40%;height: 80upx;" mode=""></image>
			</view>
			<view class="num" style="text-align: center;">
					已累计邀请人数
			</view>
			</view>
			<image src="../../static/fenxiang/youqingtishi.png" style="width: 40%;height: 80upx;padding-right: 60%;" mode=""></image>
			<image src="../../static/fenxiang/shareTxt.png" style="width: 80%;height:12%;margin-left: 10%;"  mode=""></image>
			<view class="buttom" style="height: 10%;width: 100%;">
				
			</view>
		</view>
	</view>
</template>

<script>
	import tabBar from '../../component/bar/tabbar.vue'
	import navBar from '../../component/bar/navbar.vue'
	import uQRCode  from '../../components/unit/uqrcode.js'
	export default {
		components: {
			navBar,
			tabBar,
			uQRCode
		},
		data() {
			return {
				height:"",
				codeSize:150
			}
		},
		methods: {
			 async make() {
			      // 回调方式
			      uQRCode.make({
			        canvasId: 'qrcode',
			        componentInstance: this,
			        text: 'uQRCode',
			        size:this.codeSize,
			        margin: 10,
			        backgroundColor: '#ffffff',
			        foregroundColor: '#000000',
			        fileType: 'jpg',
			        correctLevel: uQRCode.errorCorrectLevel.H,
			        success: res => {
			        }
			      })}
			
			//       // Promise
			//       uQRCode.make({
			//         canvasId: 'qrcode',
			//         componentInstance: this,
			//         text: 'uQRCode',
			//         size: 354,
			//         margin: 10,
			//         backgroundColor: '#ffffff',
			//         foregroundColor: '#000000',
			//         fileType: 'jpg',
			//         correctLevel: uQRCode.errorCorrectLevel.H
			//       }).then(res => {
			//           console.log(res)
			//       })
			
			//       // 同步等待
			//       var res = await uQRCode.make({
			//         canvasId: 'qrcode',
			//         componentInstance: this,
			//         text: 'uQRCodedfaf',
			//         size: 354,
			//         margin: 10,
			//         backgroundColor: '#ffffff',
			//         foregroundColor: '#000000',
			//         fileType: 'jpg',
			//         correctLevel: uQRCode.errorCorrectLevel.H
			//       })
			
				},
		onLoad() {
			this.height = this.$store.state.set_window_height
			this.height>1000?this.codeSize =180:this.codeSize =150
			this.make()
		},
		computed:{
		},
	}
</script>

<style scoped>
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
	}
	.share{
		background-image: url(../../static/fenxiang/share.png);	
		width: 100%;
		background-size: 100% 100%;
		
	}
	.share-img{
		height: 10%;
		width: 95%;
		display: flex;
		flex-direction:row-reverse;
		align-items:flex-end;
	}
	.yaoqingma{
		width: 100%;
		height: 30%;
		font-size: 41.84upx;
		display: flex;
		align-items:flex-end;
		justify-content: center;
	}
	.qrimg{
		display: grid;
		place-items: center;
	}
	.urcode{
		
	}
	.tuiguang_img{
		display: flex;
		justify-content:space-around;
		margin-top: 2%;
	}
</style>
