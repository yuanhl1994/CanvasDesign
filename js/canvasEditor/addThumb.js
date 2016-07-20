var y=0;//历史操作canvas
var current = 0;//当前操作的canvas

/**
 * 添加页码缩略图
 * @param ContainerId：呈现容器id
 * @param ThumbId:页码id
 * @param ScanvasId:canvas呈现id
 * @param textName:页码名称
 * @returns {fabric.Element}
 */
function createThumb(ContainerId, ThumbId, ScanvasId, textName) {
    var $div = $("<div class='edd'></div>");
    $div[0].id = ThumbId;
    $("#" + ContainerId).append($div);
    var $span = $("<div class='ThumbWord' ></div>");
    $span[0].innerHTML = textName;
    var canvas = createCanvas(ThumbId, ScanvasId, false);
    $("#" + ThumbId).append($span);
    return canvas;
}

/**
 *下方分页缩略图切换
 * @param canvas_name_array
 * @param canvas_array
 * @param i
 */
function canvas_switch(i) {
    var thumbId = canvas_name_array[i] + "_thumb";
    $("#" + thumbId).click("mousedown", function() {
        for (var a = 0; a < canvas_name_array.length; a++) {
            if (canvas_name_array[i] != canvas_name_array[a]) {
                //隐藏其它canvas
                $("#" + canvas_name_array[a]).parent().hide(); //canvas
                $("#" + canvas_name_array[a] + "_layer").hide(); //图层
            } else {
                var json = JSON.stringify(canvas_array[y]);
                thumb_canvas_list[y].loadFromJSON(json, thumb_canvas_list[y].renderAll.bind(thumb_canvas_list[y]), function(o, object) {});
                //显示选择的canvas
                $("#" + canvas_name_array[i]).parent().show(); //canvas
                $("#" + canvas_name_array[i] + "_layer").show(); //图层
                current = i;//记录当前操作canvas
                //调用监听canvas操作，支持 前进后退功能
                setTimeout("thumb_zoomOut(canvas_array[y], thumb_canvas_list[y])",20);
                cancel_canvas(canvas_array[i], i);
                //控制切换按钮
                show_hide();
            };
        };
    })/*.bind("mouseup", function() {
        thumb_zoomOut(canvas_array[y], thumb_canvas_list[y]);
        y=i;
    });*/
}

/**
 * 监听切换按钮的点击，操作切换操作canvas
 */
function switch_button() {
    editQuick_switch_button();//绑定快捷键
    $(".rightPage").bind("click",function () {//向后
        clickId="#"+canvas_name_array[current+1]+"_thumb";
        $(clickId).click()
        /*setTimeout("pageMouseup()",20);*///延迟执行mouseup事件
        show_hide();
    });
    $(".leftPage").bind("click",function () {//向前
        clickId="#"+canvas_name_array[current-1]+"_thumb";
        $(clickId).click();
        /*setTimeout("pageMouseup()",20);*///延迟执行mouseup事件
        show_hide();
    });
}
function show_hide() {//切换按钮显示隐藏控制
    if (current == 0){
        $(".leftPage").hide();
        $(".rightPage").show();
    }else if(current+1 == canvas_name_array.length){
        $(".leftPage").show();
        $(".rightPage").hide();
    }else {
        $(".leftPage").show();
        $(".rightPage").show();
    }
}
/**
 *等比例缩小canvas中的对象
 * @param canvas:主画布
 * @param thumb_canvas:缩略图画布
 * @param showId:显示id
 */
function thumb_zoomOut(canvas, thumb_canvas) {
    y=current;
    //当前canvas的宽高
    var width = canvas.getWidth();
    var height = canvas.getHeight();
    //当前屏幕最大画布宽高，作为画布将更改为的宽高
    var tempWidth = thumb_canvas.getWidth();
    var tempHeight = thumb_canvas.getHeight();
    //计算宽高扩大的倍数: 将更改为的宽高-当前的宽高/当前宽高
    var scale_width = width / tempWidth;
    var scale_height = height / tempHeight;
    //重新定位对象
    var objects = thumb_canvas.getObjects();
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
        objects[i].selectable = false;
        objects[i].hasBorders = false;
        objects[i].hasControls = false;
    }
    thumb_canvas.calcOffset();
    thumb_canvas.renderAll();
}
/*
$(function () {
    $(".pule_btn").click(function () {
        createThumb("million","1111","12444","封面");
    });
});*/