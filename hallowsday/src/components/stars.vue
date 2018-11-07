<template>
	<canvas id="canvas-star" class="canvas">
		<p>你的浏览器不支持Canvas</p>
	</canvas>
</template>
<style type="text/css">
	.canvas{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		z-index:-1;
	}
</style>
<script type="text/javascript">
	import Stars from '../../static/js/Stars'

	export default{
		mounted(){
			let canvas = document.getElementById('canvas-star'),
		    ctx = canvas.getContext('2d'),
		    width = window.innerWidth,
		    height = window.innerHeight,
		    //实例化月亮和星星。流星是随机时间生成，所以只初始化数组
		    // moon = new Moon(ctx, width, height),
		    stars = new Stars(ctx, width, height, 200),
		    meteorArr = [],
		    count = 0
		    canvas.width = width;
		    canvas.height = height;

		    for (var i = 0; i < 50; i++) {
				meteorArr.push({
					x: Math.random() * canvas.width * 20,
					y: -Math.random() * canvas.height,
					r: 0.1,
					opacity: 1
				});
			}

			console.log(meteorArr);
		    setInterval(function() {
			  ctx.fillStyle = 'rgb(20,20,20)';
			  ctx.fillRect(0, 0, canvas.width, canvas.height);
			  ctx.lineCap = 'round';
			  for (var i = 0; i < meteorArr.length; i++) {
			    var x = meteorArr[i].x,
			      y = meteorArr[i].y,
			      r = meteorArr[i].r;
			    for (var j = r; j < 70; j++) {
			      ctx.beginPath();
			      ctx.fillStyle = 'rgb(255,255,255)'
			      ctx.arc(x, y, r, 0, 360 * Math.PI / 180, true);
			      r += 0.02;
			      x -= 2;
			      y += 1;
			      ctx.fill();
			      ctx.closePath();
			    }
			    meteorArr[i].x -= 16;
			    meteorArr[i].y += 8;
			    if (meteorArr[i].y >= canvas.height + 50) {
			      meteorArr[i].x = Math.random() * canvas.width * 20;
			      meteorArr[i].y = -Math.random() * canvas.height;
			    }
			  }
			}, 20);

			const frame = () => {
				count++
			    count % 10 == 0 && stars.blink()
			    // moon.draw()
			    stars.draw()
				requestAnimationFrame(frame)
			}
			frame()
		}
	}
</script>