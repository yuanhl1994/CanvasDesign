/**
 * Created by Admin on 2016/6/13.
 * 创建作品
 */
var canvas_name_array = new Array();//创建canvas 名字数组
var canvas_array = new Array();//canvas存储
var layer_number = new Array();//图层数
var thumb_canvas_list = new Array();//分页缩略图canvas
var name_array = new Array();//分页名（注意：只需要给特殊的，例如：名片给正面、反面，相册书只需要给：封面、封低等等）
var page =1;
var clickId;//添加分页时需要选中的id
/**
 * 创建一个空白操作空间
 */
function blank_puzzle() {
    canvas_name_array[0] = "canvas_puzzle";
    blank_createWork(false,false,name_array);
    //隐藏切换按钮
    $(".rightPage").hide();
    $(".leftPage").hide();
}
/**
 * 创建一个名片
 */
function blank_card() {
    canvas_name_array.push("canvas_card_positive");
    canvas_name_array.push("canvas_card_reverse");
    name_array.push("正面");
    name_array.push("反面");
    pagingContainer(false);
    blank_createWork(true,false,name_array);
    switch_button();
 }
/**
 * 创建相册书
 */
function blank_photoAlbum() {
    for (var i = 1;i < 12 ; i++){
        canvas_name_array.push("photo_"+i);
    }
    name_array.push("封面");
    name_array.push("封低");
    pagingContainer(true);
    blank_createWork(true,true,name_array);
    blank_createWork_one("photo_");
    switch_button();
    /*remove();*/

}
/**
 * 创建日历
 */
function blank_menology() {
    for (var i = 1; i<15; i++){
        canvas_name_array.push("menology_"+i);
    }
    name_array.push("封面");
    name_array.push("封低");
    for (var a = 1; a<13; a++){
        name_array.push(a+"月");
    }
    pagingContainer(false);
    blank_createWork(true,false,name_array);
    switch_button();
}
/**
 *初始创建画布
 * @param showPage:是否显示下方分页
 * @param addButton:是否显示添加分页按钮
 */

function blank_createWork(showPage,addButton,name_array) {
    for (var i = 0; i<canvas_name_array.length;i++){
        //创建canvas
        canvas_array[i] = createCanvas("edit",canvas_name_array[i],true);
        //创建图层显示容器
        var $div = $("<div></div>");
        var div = $div[0];
        div.id = canvas_name_array[i]+"_layer";
        $("#layerList").prepend($div);
        //初始化图层数
        layer_number[i] = 1;
        //初始化前进后退存储记录
        var undoHist = [];
        var redoHist = [];
        canvas_undoHist[i] = undoHist;
        canvas_redoHist[i] = redoHist;
        //显示下方分页导航容器
        /*if(showPage){
            pagingContainer(addButton);
        }*/
    }
    //创建初始分页
    if(showPage){
        for(var a = 0; a<canvas_name_array.length; a++){
            //添加分页
            var name = a;
            if(a<name_array.length){
                name = name_array[a];
            }else{
                name = page;
                page++;
            }
            thumb_canvas_list[a]=createThumb("million",canvas_name_array[a]+"_thumb",canvas_name_array[a]+"_thumb_canvas", name);
            //添加分页切换事件
            canvas_switch(a);
            //留下第一个，其他全隐藏
            if(a != 0){
                $("#"+canvas_name_array[a]).parent().hide();//canvas
                $("#"+canvas_name_array[a]+"_layer").hide();//图层
            }
            //选中第一个
            $("#"+canvas_name_array[0]+"_thumb").click();
        }
    }
    //调用添加图片
    canvas_import_img(canvas_name_array,canvas_array,layer_number);
    //调用文字添加
    text(canvas_name_array,canvas_array);
    addDrop();
    //调用图片操作
    /*doImge(canvas_name_array,canvas_array);*/
    //监听窗口变化，改变canvas大小
    window.onresize = function() {
        var history_width=$("#"+"edit").width();//历史宽
        var history_height=$("#"+"edit").height();//历史高
        if ($("#edit").width() > history_width || $("#edit").height > history_height) {
            for (var i = 0; i<canvas_array.length; i++){
                zoomln(canvas_array[i],"edit")
            }
        } else {
            for (var i = 0; i<canvas_array.length; i++){
                zoomOut(canvas_array[i],"edit")
            }
        };
    }
    slider();
}
/**
 *
 * @param name :名称的前部分
 */
function blank_createWork_one(name) {
    $(".pule_btn").click(function () {
        //创建canvas并添加至数组
        $(".edd").css("marginTop","9px");
        var number = canvas_name_array.length;
        var names = name+(page+2);
        canvas_name_array[number] = names;
        canvas_array[number] = createCanvas("edit",names,true);
        //创建图层显示容器
        var $div = $("<div></div>");
        var div = $div[0];
        div.id = canvas_name_array[number]+"_layer";
        $("#layerList").prepend($div);
        //初始化图层数
        layer_number[number] = 1;
        //初始化前进后退存储记录
        var undoHist = [];
        var redoHist = [];
        canvas_undoHist[number] = undoHist;
        canvas_redoHist[number] = redoHist;
        //添加分页
        thumb_canvas_list[number]=createThumb("million",canvas_name_array[number]+"_thumb",canvas_name_array[number]+"_thumb_canvas", number-1);
        page++;
        //添加分页切换事件
        canvas_switch(number);
        $("#"+canvas_name_array[number]).parent().hide();//canvas
        $("#"+canvas_name_array[number]+"_layer").hide();//图层
        //选中当前
        clickId="#"+canvas_name_array[number]+"_thumb";
        $(clickId).click().mousedown();
        setTimeout("pageMouseup()",100);
        //监听窗口变化，改变canvas大小
        window.onresize = function() {
            var history_width=$("#"+"edit").width();//历史宽
            var history_height=$("#"+"edit").height();//历史高
            if ($("#edit").width() > history_width || $("#edit").height > history_height) {
                for (var i = 0; i<canvas_array.length; i++){
                    zoomln(canvas_array[i],"edit")
                }
            } else {
                for (var i = 0; i<canvas_array.length; i++){
                    zoomOut(canvas_array[i],"edit")
                }
            };
        }
        slider();
    });
}
function pageMouseup() {
    $(clickId).mouseup();
}