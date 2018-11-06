<template>
	<div class="storyContent">
		<hallow-header :headerTitle="Htitle"></hallow-header>
		<div class="story">
			<div class="swiper-container">
				<div class="swiper-wrapper">
					<div class="swiper-slide">slide 1</div>
					<div class="swiper-slide">slide 2</div>
					<div class="swiper-slide">slide 3</div>
				</div>
				<div class="swiper-pagination"></div>
				<div class="swiper-scrollbar"></div>
			</div>
			<div class="storyinfo">
				<h2>{{story.title}}</h2>
				<h3>{{story.write}}&nbsp;&nbsp;&nbsp;&nbsp;紧箍咒</h3>
				<label>{{story.intro}}</label>
			</div>
			<div class="mp3player">
				<div class="player" @click="play"></div>
				<audio id="Mcontrols" autoplay="autoplay" controls="controls" preload="auto" loop="loop">
					<source :src="story.music">
				</audio>
			</div>
		</div>
		<hallow-footer></hallow-footer>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	@import "../../node_modules/swiper/dist/css/swiper.css";
	
	.storyContent{
		width:100%;
		height:100%;
		position:relative;
		.story{
			width:100%;
			position:absolute;
			top:88px;
			bottom:120px;
			margin:auto;
			.swiper-container{
				width:100%;
				min-width:320px;
				max-width:768px;
				height:100%;
				margin:auto;
			}
			.storyinfo{
				width:100%;
				padding:20px;
				background-color:rgba(235,207,147,1);
				text-align:left;
				opacity:0;
				position:absolute;
				left:0;
				bottom:0;
				z-index:10;
				animation:zoomIn 5s ease-in-out;
				& > h2{
					width:100%;
					min-width:320px;
					max-width:768px;
					display:block;
					margin:auto;
					font-size:26px;
					color:#333;
				}
				& > h3{
					width:100%;
					min-width:320px;
					max-width:768px;
					margin:auto;
					display:block;
					font-size:24px;
					color:#666;
				}
				& > label{
					width:100%;
					min-width:320px;
					max-width:768px;
					margin:auto;
					display:block;
					word-break:break-all;
					font-size:18px;
					color:#999;
				}
			}
			.mp3player{
				position:absolute;
				top:0;
				right:0;
				.player{
					width:50px;
					height:50px;
					display:inline-block;
					background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-n.png') no-repeat;
					background-size:cover;
					background-position:center center;
				}
				& > audio{
					display:none;
				}
			}
		}
	}
	@keyframes zoomIn{
		0%{
			opacity:0;
		}
		30%{
			opacity:1;
		}
		70%{
			opacity:1;
		}
		100{
			opacity:0;
		}
	}
</style>
<script>
	import Swiper from 'swiper'
	import  header from '../components/header'
	import footer from '../components/footer'

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
				Htitle:this.$route.params.StoryName,
				story:{
					title:this.$route.params.StoryName,
					writer:'',
					intro:'',
					content:[''],
					music:'https://m10.music.126.net/20181101151931/26fe5fc8d823697e7801ac4acf87f3b5/ymusic/1be1/6747/9843/982f6aacbff59899418b820f1299ecfc.mp3'
				},
				isplay:true,
			}
		},
		components:{
			'hallow-header':header,
			'hallow-footer':footer
		},
		methods:{
			play(){
				var oAudio = document.getElementById('Mcontrols');
				if(this.isplay == true){
					oAudio.pause();
					console.log('暂停播放');
				}
				else{
					oAudio.play();
					console.log('开始播放');
				}
				this.isplay = !this.isplay;
				return this.isplay;
			}
		},
		mounted(){
			new Swiper('.swiper-container',{
				direction:'vertical',
				pagination:{
					el:'.swiper-pagination',
					clickable:true
				}
			})

		}
	} 
</script>