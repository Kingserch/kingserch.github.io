<template>
	<div id="home" class="home-content">
		<canvas-part :boxId = "canvasId"></canvas-part>
		<hallow-header :headerTitle='Htitle'></hallow-header>
		<div class="content">
			<div class="infos">
				<div v-show="noteShow" class="ShowNotes" @click="openNotice">这是一份祝福</div>
				<div v-show="!noteShow" class="Notes">
					<label>{{userName}}，欢迎你...</label>
				</div>
			</div>
			<div class="menus" v-show="!noteShow">
				<ul>
					<li v-for="list in lists" @click="openNext($event)">{{list}}</li>
				</ul>
			</div>
			<div class="clear"></div>
		</div>
		<!-- <div class="ghost" v-show="ghostShow"></div> -->
		<hallow-footer></hallow-footer>
	</div>
</template>
<style lang="scss" type="text/css">
	.clear{
		height:0;
		visibility:hidden;
		clear:both;
	}
	.home-content{
		width:100%;
		height:100%;
		position:relative;
		.ghost{
			width:150px;
			height:150px;
			display:inline-block;
			position:absolute;
			top:0;
			left:0;
			opacity:0;
			z-index:10;
			background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-h01.png') no-repeat;
			background-size:contain;
			background-position:center center;
			animation:zoomUP 1s ease-in-out;
			-webkit-animation:zoomUP 1s ease-in-out;
			animation-delay: 5s;
			-webkit-animation-delay: 5s;
		}
		.content{
			width:100%;
			min-width: 320px;
		    max-width: 768px;
		    margin: auto;
			padding:20px;
			position: relative;
			z-index: 5;
			.infos{
				width:100%;
				min-height:300px;
				padding: 70px 100px;
				display:inline-block;
				position:relative;
				background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-h02.png') no-repeat;
				background-position:center center;
				background-size:100% 100%;
				animation:zoomShow 1s ease-in-out;
				-webkit-animation:zoomShow 1s ease-in-out;
				.ShowNotes{
					width: 100%;
					display:inline-block;
				    font-size: 24px;
				    color: #333;
					line-height: 100px;
				}
				.Notes{
					width:100%;
					display:inline-block;
					font-size:16px;
					color:#333;
					line-height:35px;
					text-align:left;
				}
			}
			.menus{
				width:100%;
				display:inline-block;
				padding-top:70px;
				ul{
					width:100%;
					text-align:left;
					li{
						width:30%;
						height:50px;
						line-height:50px;
						display:inline-block;
						text-align:center;
						margin:0 3% 3% 0;
						background-color:#eba306;
						border-radius:10px;
						font-size:18px;
						color:#dc4e14;
						cursor: pointer;
						&:nth-child(3){
							margin-right:0;
						}
					}
				}
			}
		}
	}
	@keyframes zoomUP{
		0%{
			opacity:0;
			transform: translate(0,0) scale(1);
		}
		75%{
			opacity:1;
			transform: translate(250%,250%) scale(6);
		}
		100%{
			opacity:0;
			transform: translate(0,0) scale(1);
		}
	}
	@-webkit-keyframes zoomUP{
		0%{
			opacity:0;
			-webkit-transform: translate(0,0) scale(1);
		}
		75%{
			opacity:1;
			-webkit-transform: translate(250%,250%) scale(6);
		}
		100%{
			opacity:0;
			-webkit-transform: translate(0,0) scale(1);
		}
	}
	@keyframes zoomShow{
		0%{
			opacity:0;
			transform: scaleX(0);
		}
		100{
			opacity:1;
			transform: scaleX(1);
		}
	}
	@-webkit-keyframes zoomShow{
		0%{
			opacity:0;
			-webkit-transform: scaleX(0);
		}
		100{
			opacity:1;
			-webkit-transform: scaleX(1);
		}
	}
</style>
<script type="text/javascript">
	import  header from '../components/header'
	import footer from '../components/footer'
	import canvas from '../components/canvas'

	export default{
		props:{
			user:{
				type:String,
				default:''
			},
			StoryName:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				lists:['咿呀咿呀哟','咿呀咿呀哟','咿呀咿呀哟','咿呀咿呀哟'],
				userName:this.$route.params.user,
				storyName:'',
				Htitle:'',
				ghostShow:false,
				noteShow:true,
				canvasId:'home'
			}
		},
		components:{
			'hallow-header':header,
			'hallow-footer':footer,
			'canvas-part':canvas,
		},
		methods:{
			openNotice(){
				this.ghostShow = true;
				this.noteShow = !this.noteShow;
			},
			openNext(obj){
				// console.log(obj.currentTarget.innerHTML);
				// debugger;
				this.storyName = obj.currentTarget.innerHTML;
				this.$router.push({name:'Story',params:{
					user:this.userName,
					StoryName:this.storyName
				}})
			}
		}
	}
</script>