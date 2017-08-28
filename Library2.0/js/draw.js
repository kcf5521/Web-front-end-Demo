(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			docEl.style.fontSize = 30 * (clientWidth / 750) + 'px';
		};
	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);


/*抽奖 */
var turnplate = {
	restaraunts: [],				//大转盘奖品名称
	colors: [],					//大转盘奖品区块对应背景颜色
	outsideRadius: 192,			//大转盘外圆的半径
	textRadius: 155,				//大转盘奖品位置距离圆心的距离
	insideRadius: 68,			//大转盘内圆的半径
	startAngle: 0,				//开始角度
	bRotate: false				//false:停止;ture:旋转
};

$(document).ready(function () {
	//动态添加大转盘的奖品与奖品区域背景颜色
	turnplate.restaraunts = ["5元咪咕阅读书券", "2元咪咕阅读书券", "100元咪咕阅读书卡", "50元咪咕阅读书卡", "移动电源", "咪咕阅读限免书籍"];
	turnplate.colors = ["#FEED61", "#FF8F09", "#FE433A", "#FEED61", "#FF8F09", "#FE433A"];


	var rotateTimeOut = function () {
		$('#wheelcanvas').rotate({
			angle: 0,     //初始旋转角度
			animateTo: 2160,//旋转的总度数
			duration: 5000,//动画执行时间
			callback: function () {
				alert('网络超时，请检查您的网络设置！');
			}
		});
	};

	//旋转转盘 item:奖品位置; txt：提示语;
	var rotateFn = function (item) {
		
		var angles = item * (360 / turnplate.restaraunts.length) - (360 / (turnplate.restaraunts.length * 2));
		if (angles < 270) {
			angles = 270 - angles;
		} else {
			angles = 360 - angles + 270;
		}
		$('#wheelcanvas').stopRotate();
		$('#wheelcanvas').rotate({
			angle: 0,
			animateTo: angles + 1800,
			duration: 5000,
			callback: function () {
				switch (item) {
					case 1:
						$('.mengceng').css('display', 'block');
						$('.prize1').css('display', 'block');
						break;
					case 2:
						$('.mengceng').css('display', 'block');
						$('.prize2').css('display', 'block');
						break;
					case 3:
						$('.mengceng').css('display', 'block');
						$('.prize3').css('display', 'block');
						break;
					case 4:
						$('.mengceng').css('display', 'block');
						$('.prize4').css('display', 'block');
						break;
					case 5:
						$('.mengceng').css('display', 'block');
						$('.prize5').css('display', 'block');
						break;
					case 6:
						$('.mengceng').css('display', 'block');
						$('.prize6').css('display', 'block');
						break;
				}
				turnplate.bRotate = !turnplate.bRotate;
			}
		});		
	};
	 var countString=localStorage.getItem("draw");
	 var vote = localStorage.getItem("vote");
	 var words = localStorage.getItem("words");
	$('.pointer').click(function () {
		if(vote=="1"||words=="1"){
           	 if (countString!=="1"||countString==""||countString==null) {
		  /*可以抽奖*/
		     countString="1";
			 localStorage.setItem("draw",countString);
			 if (turnplate.bRotate) return;
			turnplate.bRotate = true;
			//获取随机数(奖品个数范围内)
			var item = rnd(1, turnplate.restaraunts.length);
			rotateFn(item, turnplate.restaraunts[item - 1]);
		 }else{
			 alert("只有一次抽奖机会，您已经用掉了！");
			turnplate.bRotate = false;
		 }
		}else{
			alert("请先投票或留言！")
		}
	
	});
});

function rnd(n, m) {
	var random = Math.floor(Math.random() * (m - n + 1) + n);
	return random;

}


//页面所有元素加载完毕后执行drawRouletteWheel()方法对转盘进行渲染
window.onload = function () {
	drawRouletteWheel();
	
};

function drawRouletteWheel() {
	var canvas = document.getElementById("wheelcanvas");
	if (canvas.getContext) {
		//根据奖品个数计算圆周角度
		var arc = Math.PI / (turnplate.restaraunts.length / 2);
		var ctx = canvas.getContext("2d");
		//在给定矩形内清空一个矩形
		ctx.clearRect(0, 0, 422, 422);
		//strokeStyle 属性设置或返回用于笔触的颜色、渐变或模式  
		ctx.strokeStyle = "white";
		//font 属性设置或返回画布上文本内容的当前字体属性
		ctx.font = 'bold 20px Microsoft YaHei';
		for (var i = 0; i < turnplate.restaraunts.length; i++) {
			var angle = turnplate.startAngle + i * arc;
			ctx.fillStyle = turnplate.colors[i];
			ctx.beginPath();
			//arc(x,y,r,起始角,结束角,绘制方向) 方法创建弧/曲线（用于创建圆或部分圆）    
			ctx.arc(211, 211, turnplate.outsideRadius, angle, angle + arc, false);
			ctx.arc(211, 211, turnplate.insideRadius, angle + arc, angle, true);
			ctx.stroke();
			ctx.fill();
			//锁画布(为了保存之前的画布状态)
			ctx.save();

			//----绘制奖品开始----
			ctx.fillStyle = "white";
			var text = turnplate.restaraunts[i];
			var line_height = 20;
			//translate方法重新映射画布上的 (0,0) 位置
			ctx.translate(211 + Math.cos(angle + arc / 2) * turnplate.textRadius, 211 + Math.sin(angle + arc / 2) * turnplate.textRadius);

			//rotate方法旋转当前的绘图
			ctx.rotate(angle + arc / 2 + Math.PI / 2);

			/** 下面代码根据奖品类型、奖品名称长度渲染不同效果，如字体、颜色、图片效果。(具体根据实际情况改变) **/
			if (text.indexOf("元") > 0) {
				var texts = text.split("元");
				for (var j = 0; j < texts.length; j++) {
					ctx.font = j == 0 ? 'bold 22px Microsoft YaHei' : '18px Microsoft YaHei';
					if (j == 0) {
						ctx.fillText(texts[j] + "元", -ctx.measureText(texts[j] + "元").width / 2, j * line_height);
					} else {
						ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
					}
				}
			} else if (text.indexOf("元") == -1 && text.length > 6) {//奖品名称长度超过一定范围 
				text = text.substring(0, 6) + "||" + text.substring(6);
				var texts = text.split("||");
				for (var j = 0; j < texts.length; j++) {
					ctx.fillText(texts[j], -ctx.measureText(texts[j]).width / 2, j * line_height);
				}
			} else {
				//在画布上绘制填色的文本。文本的默认颜色是黑色
				//measureText()方法返回包含一个对象，该对象包含以像素计的指定字体宽度
				ctx.fillText(text, -ctx.measureText(text).width / 2, 0);
			}

			//把当前画布返回（调整）到上一个save()状态之前 
			ctx.restore();
			//----绘制奖品结束----
		}
	}
}

$(function () {
	$('.colse1').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize1').css('display', 'none');

	})
	$('.colse2').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize2').css('display', 'none');

	})
	$('.colse3').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize3').css('display', 'none');

	})
	$('.colse4').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize4').css('display', 'none');

	})
	$('.colse5').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize5').css('display', 'none');

	})
	$('.colse6').click(function () {
		$('.mengceng').css('display', 'none');
		$('.prize6').css('display', 'none');

	})
})

