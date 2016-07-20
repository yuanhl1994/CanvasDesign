function card() {
  scanvas1 = new fabric.Canvas("cardCan_1");
  scanvas2 = new fabric.Canvas("cardCan_2");
  $("#myCanvas2").parent().hide();


/*鼠标点击*/
  $("#cardDiv_1").bind("mousedown", function() {
    $("#Cd").remove();
    $("#angle").remove();
    json = JSON.stringify(canvas2);

    scanvas2.loadFromJSON(json, scanvas2.renderAll.bind(scanvas2), function(o, object) {});

    $("#myCanvas2").parent().hide();
    $("#myCanvas1").parent().show();

  }).bind("mouseup", function() {
    cardszoomOut(scanvas2);
  });

  $("#cardDiv_2").bind("mousedown", function() {

    $("#Cd").remove();
    $("#angle").remove();
    console.log("1");
    json = JSON.stringify(canvas1);

    scanvas1.loadFromJSON(json, scanvas1.renderAll.bind(scanvas1), function(o, object) {});

    $("#myCanvas1").parent().hide();
    $("#myCanvas2").parent().show();
    initAligningGuidelines(canvas2);
    initCenteringGuidelines(canvas2);

  }).bind("mouseup", function() {
    cardszoomOut(scanvas1);
  });

/*点击完后缩小*/
  function cardszoomOut(canvas) {
    //当前canvas的宽高
    var width = canvas2.getWidth();

    var height = canvas2.getHeight();
    //当前屏幕最大画布宽高，作为画布将更改为的宽高
    var tempWidth = $("#cardDiv_1").width();
    var tempHeight = $("#cardDiv_1").height();
    //计算宽高扩大的倍数: 将更改为的宽高-当前的宽高/当前宽高
    var scale_width = width / tempWidth;
    var scale_height = height / tempHeight;
    //改变canvas大小
    canvas.setWidth(tempWidth);
    canvas.setHeight(tempHeight);
    canvas.calcOffset();
    canvas.renderAll();
    //重新计算辅助线

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
      objects[i].selectable = false;
      objects[i].hasBorders = false;
      objects[i].hasControls = false;
    }
    canvas.calcOffset();
    canvas.renderAll();
  }


  /*添加文字*/
$("#wordsAdd").click(function(){
  if($("#myCanvas1").parent().is(":hidden")){
    addWord(canvas2);
  }else if($("#myCanvas2").parent().is(":hidden")){
    addWord(canvas1);
  }
})
/*删除文字*/
$("#wordsDel").click(function(){
  if($("#myCanvas1").parent().is(":hidden")){
    deleteWord(canvas2);
  }else if($("#myCanvas2").parent().is(":hidden")){
    deleteWord(canvas1);
  }
})
}



