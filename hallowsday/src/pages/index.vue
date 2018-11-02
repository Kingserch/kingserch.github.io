<template>
	<div class="home">
		<form>
			<dl>
				<dd>
					<input type="text" v-model="username" placeholder="请输入你的用户名">
				</dd>
			</dl>
			<div class="btnBox">
				<input  v-show="isShow" class="btn" type="button" value="确认" @click="goNext">
			</div>
		</form>
		<dialog-bar v-model="sendVal" type="danger" :title="maskTitle"  :content="maskContent"  v-on:cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()" dangerText="Delete"></dialog-bar>
	</div>
</template>
<style lang="scss" scoped="" type="text/css">
	.home{
		width:100%;
		height:100%;
		padding-bottom:200px;
		display: -webkit-box;
	    -webkit-box-align: center;
	    -webkit-box-pack: center;
	    display: flex;
	    justify-content: center;
	    align-items: center;
		background-color:rgba(51,51,51,.1);
		z-index:9;
		& > form{
			width:100%;
		    padding: 0 20%;
			dl{
				width:100%;
				padding-bottom: 50px;
				dd{
					width:100%;
					padding:20px 20px 20px 100px;
					margin-bottom:20px;
					position:relative;
					input{
						width:100%;
						height:50px;
						padding:0 20px;
						line-height:50px;
						font-family:'宋体';
						font-size:20px;
						background-color:#fff;
						border:2px solid #000;
						border-radius:5px;
					}
					&:before{
						content:'';
						width:80px;
						height:80px;
						display:inline-block;
						background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/icon.png');
						background-size:400px 400px;
						background-repeat:no-repeat;
						background-position: -166px -34px;
						position:absolute;
						left:0;
						top:0;
					}
				}
			}
			.btnBox{
				width:100%;
				height:100px;
				display:inline-block;
				cursor: pointer;
				.btn{
					width:258px;
					height:100px;
					font-family:'宋体';
					font-size:30px;
					color: #dd541c;
				    font-weight: bold;
				    letter-spacing: 25px;
					display:inline-block;
					text-align:center;
					// background:-webkit-gradient(linear,left top,right top,from(#e97750),coloe-stop(.7,#efa525),to(#e97750));
					// background:-webkit-linear-gradient(left,#e97750,#efa525 70%,#e97750);
					background:url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-btnbg.png') no-repeat;
					background-size:cover;
					background-position:center center;
					border: none;
				    border-radius: 5px;
				}
			}
		}

	}
</style>
<script type="text/javascript">
	import dialogBar from '../components/dialog'

	export default{
		props:{
			user:{
				type:String,
				default:''
			}
		},
		data(){
			return{
				username:'',
				isShow:false,
				sendVal:false,
				maskTitle:'',
				maskContent:'',
			}
		},
		components:{
			'dialog-bar':dialogBar,
		},
		methods:{
			openMask(index){
				this.sendVal = true;
			},
			clickCancel(){
				console.log('点击了取消');
				this.username = '';
			},
			clickDanger(){
				console.log('这里四danger回调');
			},
			clickConfirm(){
				console.log('点击了确认');
				this.$router.push({name:'Home',params:{user:this.username}})
			},
			goNext(){
				console.log(this.username);
				this.maskTitle = '欢迎光临';
				this.maskContent = this.username + '，欢迎你的加入~';
				this.openMask();
			}
		},
		watch:{
			username:function(){
				if(this.username == ''){
					// console.log('快输入吧~');
					this.isShow = false;
				}
				else{
					this.isShow = true;
				}
			}
		}
	}
</script>