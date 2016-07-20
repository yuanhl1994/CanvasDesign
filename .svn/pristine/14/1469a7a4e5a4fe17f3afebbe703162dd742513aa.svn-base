/**
*显示
*/
$(function() {
	document.getElementById('show').onchange = function() {
		show();
	};
})
/**
*+-的操作
*/
$(document).ready(function(){
	$("#big").click(function(){
		var va=document.getElementById('show').value;
		var va=parseInt(va)+10;
		$("#show").val(va);
		show();
	})
	$("#small").click(function(){
		var va=document.getElementById('show').value-10;
		$("#show").val(va); 
		show();
	})
})
function show(){
		var he=$("#edit1").height();
		var wi=$("#edit1").width();
		var heig=$(".edit_center").height()-20;
		var widt=$(".edit_center").width()-70;
		var va=document.getElementById('show').value*0.02;
		var hei=he*va;
		var wid=wi*va;
		if(wid>wi){
				$(".rightPage").css("margin","0px");
				$(".leftPage").css("margin","0px");
				$(".rightPage").css("top","45%");
				$(".leftPage").css("top","45%");				
		}else{
			$(".rightPage").css("margin","67.75px");
			$(".rightPage").css("top","30%");
			$(".leftPage").css("top","30%");
			$(".leftPage").css("margin","67.75px");	
		}
		if(hei > heig || wid >widt){
			$("#edit").css("overflow", "auto");
			$("#edit").css("height", heig);
			$("#edit").css("width", widt);
			$('#edit').css({top:'50%',left:'50%',margin:'-'+($('#edit').height() / 2)+'px 0 0 -'+($('#edit').width() / 2)+'px'});
			for (var i = 0; i<canvas_array.length; i++){
				xianshi(canvas_array[i],hei,wid);
			}
		}
		else{
			$("#edit").css("overflow", "");
			$("#edit").css("height", hei);
			$("#edit").css("width", wid);
			$('#edit').css({top:'50%',left:'50%',margin:'-'+($('#edit').height() / 2)+'px 0 0 -'+($('#edit').width() / 2)+'px'});
			for (var i = 0; i<canvas_array.length; i++){
				xianshi(canvas_array[i],hei,wid);
			}
		}
	
}
function xianshi(canvas,hei,wid) {
    //当前canvas的宽高
    var width = canvas.getWidth();
    var height= canvas.getHeight();
    //当前屏幕最大画布宽高，作为画布将更改为的宽高
    var tempWidth = wid;
    var tempHeight= hei;
    //计算宽高扩大的倍数: 将更改为的宽高-当前的宽高/当前宽高
    var scale_width = width/tempWidth;
    var scale_height= height/tempHeight;
    //改变canvas大小
    canvas.setWidth(tempWidth);
    canvas.setHeight(tempHeight);
    canvas.calcOffset();
    canvas.renderAll();
    //重新计算辅助线
    initAligningGuidelines(canvas);//画布中对象对齐辅助线
    initCenteringGuidelines(canvas);//画布对齐辅助线
    //重新定位对象
    var objects = canvas.getObjects();
    for (var i in objects) {
        var scaleX = objects[i].scaleX;
        var scaleY = objects[i].scaleY;
        var left = objects[i].left;
        var top = objects[i].top;
        var tempScaleX = scaleX * (1 / scale_width);
        var tempScaleY = scaleY * (1 / scale_height);
        var tempLeft = left * (1 / scale_width);
        var tempTop = top * (1 / scale_height);
        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;
        objects[i].setCoords();
    }
    canvas.calcOffset();
    canvas.renderAll();
}