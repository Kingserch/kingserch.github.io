<template>
	<div v-show="showMask" class="dialog">
		<div class="dialog-title">
			<h3>{{title}}</h3>
		</div>
		<div class="dialog-content" v-html="content"></div>
		<div class="dialog-btns">
			<input v-if="type != 'confirm'" class="cancel" type="button" :value="cancelText" @click="cancelBtn">
			<input v-if="type != 'danger'" class="danger" type="button" :value="dangerText" @click="dangerBtn">
			<input v-if="type != 'confirm'" class="confirm" type="button" :value="confirmText" @click="confirmBtn">
		</div>
	</div>
</template>
<style lang="scss" type="text/css">
	.dialog{
		width:300px;
		padding:30px 15px;
		border-radius:10px;
		background-color:#fff;
		position:absolute;
		top:50%;
		left:50%;
		margin-left:-150px;
		margin-top:-150px;
		z-index:9999;
		.dialog-title{
			width:100%;
			line-height:60px;
			display:inline-block;
			h3{
				color:#333;
			}
		}
		.dialog-content{
			width:100%;
			line-height:45px;
			display:inline-block;
			text-align:left;
			label{
				width:100%;
				display:inline-block;
				word-break:break-all;
			}
		}
		.dialog-btns{
			width:100%;
			display:table;
			padding-top:30px;
			.cancle{
				background-color:#eee;
				color:#333;
			}
			.danger{
				background-color:#dc1414;
				color:#fff;
			}
			.confirm{
				background-color:#eca60e;
				color:#dc4e14;
			}
			input{
				display: table-cell;
			    height: 40px;
			    width: 49%;
			    border: none;
			    border-radius: 5px;
			    font-size: 14px;
			    &:nth-child(2){
			    	margin-left:2%;
			    }
			}
		}
	}
</style>
<script type="text/javascript">
	export default{
		props:{
			value:{},
			type:{
				type:String,
				default:'default'    //default 默认,danger 危险，confirm 确认
			},
			content:{
				type:String,
				default:''
			},
			title:{
				type:String,
				default:''
			},
			cancelText:{
				type:String,
				default:'取消'
			},
			dangerText:{
				type:String,
				default:'删除'
			},
			confirmText:{
				type:String,
				default:'确认'
			}
		},
		data(){
			return{
				showMask:false,
			}
		},
		methods:{
			closeMask(){
				this.showMask = false;
			},
			cancelBtn(){
				this.$emit('cancel');
				this.closeMask();
			},
			dangerBtn(){
				this.$emit('danger');
				this.closeMask();
			},
			confirmBtn(){
				this.$emit('confirm');
				this.closeMask();
			}
		},
		mounted(){
			this.showMask = this.value;
		},
		watch:{
			value(newVal,oldVal){
				this.showMask = newVal;
			},
			showMask(val){
				this.$emit('input',val);
			}
		}
	}
</script>