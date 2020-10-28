<template name="tabBar">
		<!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
		<view style="position:absolute;left:0px;top:0px;z-index:999">
		<u-tabbar v-model="current"  :border-top="false" :midButton="false" mid-button="false" active-color="#D93F2F"  inactive-color="#C6C6C6"  :list="list"  :icon-size="65" height="120"  :mid-button="true"></u-tabbar>
		</view>
</template>

<script>
	export default {
		name:"tabBar",
		data() {
			return {
				list: [{
						iconPath: "/static/index/image/nav/manhuashu.png",
						selectedIconPath: "/static/index/image/nav/manhuashu_s.png",
						text: '漫画',
						count: 0,
						customIcon: false,
						"pagePath":"/pages/manhua/manhua",
					},
					{
						iconPath: "/static/index/image/nav/dianshi.png",
						selectedIconPath: "/static/index/image/nav/dianshi_s.png",
						text: '动漫',
						customIcon: false,
						"pagePath":"/pages/dongman/dongman"
					},
					{
						iconPath: "/static/index/image/nav/share.png",
						selectedIconPath: "/static/index/image/nav/share_s.png",
						text: '分享',
						customIcon: false,
						"pagePath":"/pages/fenxiang/fenxiang"
					},
					{
						iconPath: "/static/index/image/nav/gerenzhongxin.png",
						selectedIconPath: "/static/index/image/nav/wode_s.png",
						text: '我的',
						count: 0,
						isDot: true,
						customIcon: false,
						"pagePath":"/pages/my/my"
					},
				],
				current: 0
			}
		},
	}
</script>
<style scoped lang="scss">
</style>