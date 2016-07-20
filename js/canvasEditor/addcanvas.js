/*添加画布*/
/**
 *创建canvas画布
 * @param showId:陈放canvas画布的容器的id名称
 * @param idName：canvas的id
 * @param auxiliaryFunction:给canvas添加辅助功能，默认值为true
 */
function createCanvas(showId,idName,auxiliaryFunction) {
    var $canvas=$("<canvas id='"+idName+"'></canvas>");//定义canvas
    $canvas.attr("width",$("#"+showId).width());//设置canvas宽度
    $canvas.attr("height",$("#"+showId).height());//设置canvas高度
    $("#"+showId).append($canvas);//把canvas添加到页面
    var canvas=new fabric.Canvas(idName);//canvas上下文
    if (auxiliaryFunction == "undefined"){
        auxiliaryFunction = true;
    }
    if(auxiliaryFunction){
        //setupCanvas(canvas);//前进后退
        addCoordinate(canvas);//画布中坐标显示
        initAligningGuidelines(canvas);//画布中对象对齐辅助线
        initCenteringGuidelines(canvas);//画布对齐辅助线
        actionBox(canvas);
        //createListenersKeyboard();//放大缩小画布种的对象
        editQuick();//添加快捷键操作
    }
    return canvas;
}
/**
 *扩大canvas
 */
function zoomln(canvas,showId) {
    //当前canvas的宽高
    var width = canvas.getWidth();
    var height= canvas.getHeight();
    //当前屏幕最大画布宽高，作为画布将更改为的宽高
    var tempWidth = $("#"+showid).width();
    var tempHeight= $("#"+showid).height();
    //计算宽高扩大的倍数: 将更改为的宽高-当前的宽高/当前宽高
    var scale_width = tempWidth/width;
    var scale_height= tempHeight/height;
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
        var tempScaleX = scaleX * scale_width;
        var tempScaleY = scaleY * scale_height;
        var tempLeft = left * scale_width;
        var tempTop = top * scale_height;
        objects[i].scaleX = tempScaleX;
        objects[i].scaleY = tempScaleY;
        objects[i].left = tempLeft;
        objects[i].top = tempTop;
        objects[i].setCoords();
    }
    canvas.renderAll();
}
/**
 *缩小canvas  860   577   577 860
 */
function zoomOut(canvas,showId) {
    //当前canvas的宽高
    var width = canvas.getWidth();
    var height= canvas.getHeight();
    //当前屏幕最大画布宽高，作为画布将更改为的宽高
    var tempWidth = $("#"+showId).width();
    var tempHeight= $("#"+showId).height();
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