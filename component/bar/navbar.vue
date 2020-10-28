<template name="navBar">
	<view class="nav" id="navbar">
		<u-navbar :height='50' :is-back="false" >
			<view class="slot-wrap">
			<image src="~@/static/index/image/vip.png" style="width: 120rpx;height: 110rpx;"></image>
				<view class="bar" >
				<u-search    @custom="search" @search="search" :clearabled="false" :maxlength="15" placeholder=""   :input-style="inputStyle"  :action-style="actionStyle"  :height="75"  shape="round"  search-icon-color="#FF7AA4" v-model="keyword" bg-color="#FFFFFF" placeholder-color="#FF7AA4"    color="#FF7AA4"></u-search>
				</view>
			<image src="~@/static/index/image/ab52037ee6c2a5cd2143a32f16fe84df@2x.png"  style="width: 120rpx;height: 80rpx;"></image>	
			</view>
		</u-navbar> 	
	</view>
</template>

<script>
	export default {
		name:"navBar",
		props:{
			getPages:{
				name:"123123"
			},
			required:true
		},
		data() {
			return {
				filteritem:{},
				keyword: '进击的巨人',
				cleard:"false",
				actionStyle:{
					 color:"#FF7AA4",
					 "font-size":"35rpx",
				},
				inputStyle:{
					color:"#FF7AA4",
					"font-size":"35rpx"	,
				},
			}
		},
		methods: {
			search(){
				var filteritem = [
				]
				this.getPages.forEach(item => {
					item.allzuoping.forEach(childitem => {
					filteritem.push(childitem.contenTitle)
					})
					})
				var value = filteritem.filter((item) => {
				 return	item.match(this.keyword)
				})
				uni.navigateTo({
				  url:'/component/bar/search?item='+ encodeURIComponent(JSON.stringify(value))  ,
				});
			}	
			},
		computed:{
			
		}
	}
</script>


<style scoped lang="scss">
	.bar{
		border:4rpx solid #FF7AA4;
		border-radius:20rpx;
		
		font-size: 28px;
		font-family: DFPHaiBaoW12-GB;
		font-weight: 400;
		color: #FF7AA3;
		
	}
	.slot-wrap {
		display: flex;
		align-items: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
			// flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		padding:  6rpx;
		

	}
</style>