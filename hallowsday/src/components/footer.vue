<template>
	<footer class="bottom"></footer>
</template>
<style scoped="" type="text/css">
	.bottom{
		width: 100%;
        min-width: 1024px;
		height: 120px;
		background: url('https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-b01.png');
		background-repeat-x: repeat;
	    background-repeat-y: no-repeat;
	    background-size: cover;
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 2;
	}
	.bottom:before{
		content: '';
	    width: 500px;
	    display: inline-block;
	    height: 400px;
	    background: url(https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-b02.png);
	    background-repeat: no-repeat;
	    background-size: cover;
	    position: absolute;
	    left: 0;
	    bottom: 30px;
	    z-index: 3;
	}
	.bottom:after{
		content: '';
	    width: 700px;
	    display: inline-block;
	    height: 400px;
         background: url(https://raw.githubusercontent.com/wangqian0609/hallowsday/master/src/assets/hallow-b03.png);
	    background-repeat: no-repeat;
	    background-size: cover;
	    position: absolute;
	    right: 0;
	    bottom: 30px;
	    z-index: 3;
	}
</style>