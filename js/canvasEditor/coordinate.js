/*显示坐标和角度*/

function addCoordinate(canvas){
	var posX=0;  //横坐标
	var posY=0;  //纵坐标
  var imgtipX=0  //显示横坐标值
  var imgtipY=0  //显示纵坐标值

/*坐标取值*/	
      function getMouseCoords(event)
{
  var pointer = canvas.getPointer(event.e);
   posX = pointer.x.toFixed(1);
   posY = pointer.y.toFixed(1);
   imgtipX=parseInt(posX)+parseFloat(20);
   imgtipY=parseInt(posY)-parseFloat(20);
   // return {posX,posY,imgtipX,imgtipY};
     // Log to console
}

/*鼠标按下事件*/
      canvas.on('mouse:down',function(e){
      	getMouseCoords(e);
          $div=$("<div class='Cd'></div>");
          var div=$div[0];
          div.innerHTML="X:"+posX+","+"Y:"+posY;
          div.style.top=imgtipY+"px";
          div.style.left=imgtipX+"px";
          div.style.position="absolute";
          div.style.zIndex=9999999999;
          for (var i=0;i<canvas_name_array.length;i++){
            if ($("#"+canvas_name_array[i]).parent().is(":visible")){
                 $("#"+canvas_name_array[i]).parent().append($div);
            }
          
        }
      });

/*鼠标移动事件*/      
      canvas.on('mouse:move',function(e){
        
      	getMouseCoords(e);
        
      	if($(".Cd")){
          
      		$(".Cd").css({
      			"top": imgtipY+"px",
          "left": imgtipX+"px"
      		});
          $(".Cd").html("X:"+posX+","+"Y:"+posY);
        }
      
      	
      })


/*鼠标放开事件*/      
     canvas.on('mouse:up',function(){
        $(".Cd").remove();
        $(".angle").remove();
     })


/*鼠标旋转事件*/
canvas.on('object:rotating',function(e){
     $(".Cd").remove();
     $(".angle").remove();
     getMouseCoords(e);
     var angle=canvas.getActiveObject().angle.toFixed(1);
          $div=$("<div class='angle'></div>");
          var div=$div[0];
          div.innerHTML="角度:"+angle;
          div.style.top=imgtipY+"px";
          div.style.left=imgtipX+"px";
          div.style.position="absolute";
          div.style.zIndex=9999999999;
          $(".canvas-container").append($div);
})

canvas.on('after:render',function(){

})
}



