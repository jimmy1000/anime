<template>
	<view>
	<view  v-for="(item,index) in searchdata" >
			<text>{{item}}</text>
			
	</view>
	<view v-if="this.searchdata.length == 0">
		<text>未搜索到你的内容</text>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			searchdata:[]
			}
		},
		methods: {
		
		},
		onLoad: function (option) { //option为object类型，会序列化上个页面传递的参数
			this.searchdata =JSON.parse(option.item)
		console.log(this.searchdata.length )
	},
	}
</script>

<style>

</style>
