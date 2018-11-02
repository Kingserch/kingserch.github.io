<template>
	<header class="nav">
		<div class="nav-left" @click="goBack"></div>
		<label>{{headerTitle}}</label>
	</header>
</template>
<style lang="scss" type="text/css">
	.nav{
		width:100%;
		height:88px;
		line-height:88px;
		padding:0 100px;
		position:relative;
		z-index:9;
		.nav-left{
			width:50px;
			height:50px;
			display:inline-block;
			background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/return.png') no-repeat;
			background-size:cover;
			background-position:center center;
			position:absolute;
			left:20px;
			top:18px;
		}
		label{
			width:100%;
			line-height:88px;
			display:inline-block;
			font-size:28px;
			font-weight:bold;
			color:#fff;
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			headerTitle:{
				type:String,
				default:''
			}
		},
		methods:{
			goBack(){
				window.history.back();
			}
		}
	}
</script>