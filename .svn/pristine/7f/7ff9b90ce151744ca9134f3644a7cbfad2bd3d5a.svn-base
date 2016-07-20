var cMasking = 0; //蒙版id
var maskingW; //蒙版宽
var maskingH; //蒙版高
var count = 0; //现在图片数量
var chistory = 0; //历史值
var csrc;
document.ondrag = function(evt) {
		return false;
	};
	for(i in document.images)document.images[i].ondragstart=function(){
		return false;
	}; 
/*调用添加蒙版*/
$(function() {
	
	$(".makOutSize").next().click(function() {
		for (var i = 0; i < canvas_name_array.length; i++) {
			if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
				eval(this.id)(canvas_array[i]);
			}
		}
	})
})

/*获得宽高*/
function getSource() {
	if ($("#masOutWid").val() == '') {
		maskingW = 100;
	} else {
		maskingW = parseFloat($("#masOutWid").val());
	}
	if ($("#masOutHei").val() == '') {
		maskingH = 100;
	} else {
		maskingH = parseFloat($("#masOutHei").val());
	}

}

function square_masking(canvas) {
	getSource();
	var rect = new fabric.Rect({
		left: 100,
		top: 100,
		width: maskingW,
		height: maskingH,
		fill: '#fff',
		stroke: 'black',
		opacity: 1,
		id: "Masking" + cMasking
	});
	canvas.add(rect);

	cMasking++;
}
/*锁定*/



/*点击添加*/
/*function maskingImage(canvas) {

	canvas.on("mouse:up", function() {
		count = $(".temDiv").length;
		for (var i = 0; i < canvas_name_array.length; i++) {
			if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
				console.log(canvas_array[i]);
				if (canvas_array[i].getActiveObject().id.slice(0, 7) == "Masking" && !canvas_array[i].getActiveObject().hasControls) {
					var child = $("#btn_uploads").find("input");
					child.click();
					sh = setInterval(time, 500);

				}
			}
		}
	})
}*/

/*循环调用监听函数*/
/*function time() {
	if (count != chistory) {
		console.log("them");
		clearInterval(sh);
	}
	for (var i = 0; i < canvas_name_array.length; i++) {
		if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
			var object = canvas_array[i].getActiveObject();
			console.log(object);
			var canvas = canvas_array[i];
			if ($(".temDiv").length != count) {
				console.log(canvas);
				console.log(object);
				fabric.Image.fromURL(csrc, function(oImg) {
					oImg.set({
						width: object.scaleX*object.width,
						height: object.scaleY*object.height,
						left: object.left,
						top: object.top
					})
					canvas.add(oImg);
					oImg.hasBorders = false;
					oImg.hasControls = false;
					oImg.lockMovementX = true;
					oImg.lockMovementY = true;
					oImg.lockRotation = true;
					oImg.lockScalingX = true;
					oImg.lockScalingY = true;

				})
				chistory = count;
				count++;
			}
		};
	}

}*/
$(function() {
	$(".lock").click(function() {
		$(".actionBox").remove();
		for (var g = 0; g < canvas_name_array.length; g++) {
			if ($("#" + canvas_name_array[g]).parent().is(":visible")) {
				if (canvas_array[g].getActiveObject().id.slice(0, 7) == "Masking") {
					var object = canvas_array[g].getActiveObject();
					object.hasControls = false;
					object.lockMovementX = true;
					object.lockMovementY = true;
					object.lockRotation = true;
					object.lockScalingX = true;
					object.lockScalingY = true;
					object.hasBorders = false;
				}
				canvas_array[g].renderAll();
			}
		}

	})

})

/*$(function() {
	$(".pic_top").click(function() {
		var sh = setInterval(function() {
			console.log("1");
			if ($(".temDiv").length != 0) {
				var imagDrop = document.querySelectorAll(".temDiv");
				for (var d = 0; d < imagDrop.length; d++) {
					imagDrop[d].childNodes[0].ondrag = function() {
						console.log(imagDrop[d]);
						csrc = $(this).attr("src");
					}
				}
				clearInterval(sh);
			}

		}, 1000)
	})
})*/
/*$(function(){
	$(".temDiv img").mousedown(function(){
		console.log("1");
		csrc=$(this).attr("src");
	})
})*/ 
$(document).on("mousedown",".temDiv img",function(){
	console.log("1");
		csrc=$(this).attr("src");
})
function addDrop() {
	var dropSpace = document.querySelectorAll(".upper-canvas ");
	for (var d = 0; d < dropSpace.length; d++) {
		dropSpace[d].ondrop = function time() {
			for (var i = 0; i < canvas_name_array.length; i++) {
				if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
					var object = canvas_array[i].getActiveObject();
					var canvas = canvas_array[i];

					fabric.Image.fromURL(csrc, function(oImg) {
						oImg.set({
							width: object.scaleX * object.width,
							height: object.scaleY * object.height,
							left: object.left,
							top: object.top,

						})
						canvas.add(oImg);
						oImg.hasBorders = false;
						oImg.hasControls = false;
						oImg.lockMovementX = true;
						oImg.lockMovementY = true;
						oImg.lockRotation = true;
						oImg.lockScalingX = true;
						oImg.lockScalingY = true;

					})
					canvas.renderAll();
				}
			}
         return false;
		};

	}

}