/*
 *@param removeId:删除的id;
 *@param r:位置
 */

function removeCanvas(removeId, r) {
  
  r = parseFloat(r);
  $("#" + canvas_name_array[r]).parent().remove();
  var id = canvas_name_array[r]+"_layer";

/*在数组中删除*/
  canvas_name_array.splice(r, 1);
  canvas_array.splice(r, 1);
  thumb_canvas_list.splice(r, 1);
  layer_number.splice(r, 1);
  $("#" + removeId).remove();
  console.log($("#" + id));
  $("#" +id).remove();

  var number = 1;
  /*排序*/
  for (var nowr = 2; nowr < canvas_name_array.length; nowr++) {
    var $text = $("#" + canvas_name_array[nowr] + "_thumb").find(".ThumbWord");
    $text[0].innerHTML = number;
    number++;
  }

    if (current>=canvas_name_array.length){
        y=canvas_name_array.length-1;
        current=y;
    }

    for(var k=0;k<canvas_name_array.length;k++){
      canvas_switch(k);
    }
    //选中当前
    clickId="#"+canvas_name_array[current]+"_thumb";
    $(clickId).click();
}


/*调用函数*/
function remove(){
  //添加删除
  $(document).on("click", ".edd", function() {
    if ($(this).attr("id") != "photo_1_thumb" && $(this).attr("id") != "photo_2_thumb") {
      $(".close").remove();
      var span = "<span class='close'  style='z-index:1001;position:relative;left:6px;top:-103px'><img src='../images/mipmap-xhdpi/close_circle.png' ></img><span>";
      $(this).append(span);
    };
  });
//添加图片删除
  $(document).on("mouseover", ".temDiv", function() {   
    $(this).children(".close1").show();  
  });
  $(document).on("mouseout", ".temDiv", function() {
   $(".close1").hide();
  });

   $(document).on("click", ".temDiv .close1", function() {
        $(this).parent().remove();
    });
//
  $(document).on("click", ".edd", function() {
    if ($(this).attr("id") != "photo_1_thumb" && $(this).attr("id") != "photo_2_thumb") {
      $(".close").remove();
      var span = "<span class='close'  style='z-index:1001;position:relative;left:6px;top:-103px'><img src='../images/mipmap-xhdpi/close_circle.png' ></img><span>";
      $(this).append(span);
    };
  });

  //调用删除
  $(document).on("click", ".close", function() {
  $('#confirm_box').modal('show');
});

$(document).on("click", "#confirm_box_sure", function() {
  $('#confirm_box').modal('hide');

   var cWidth = $(".million").width();
 

  var id = $(".close").parent().attr("id");
  var s = "";
   if ($(".million").width() > 920) {
    $(".million").width(cWidth-92);
  }
  for (i = 0; i < canvas_name_array.length; i++) {
    if (id == canvas_name_array[i] + "_thumb") {
      s = i;
    }
  }
  removeCanvas(id, s);
 /* console.log($(".million").width());*/
});

$(document).on("click", "#confirm_box_cancle,.confirm_box_header>span:last-child", function() {
  $('#confirm_box').modal('hide');
});
}

//画框删除
$(document).ready(function() {
   var close_button2 = "<span class='close2' style='z-index:1001;position:relative;top:-6px;left:40px;display:none'><img src='../images/mipmap-xhdpi/close_circle.png'></img><span>";
   $(".pic_frame,.maskingout_pic").append(close_button2);
  });

 $(document).on("mouseover", ".pic_frame,.maskingout_pic", function() {
      $(this).children(".close2").show();
  });
  $(document).on("mouseout", ".pic_frame,.maskingout_pic", function() {
      $(".close2").hide();
  });

  $(document).on("click", ".pic_frame .close2,.maskingout_pic .close2", function() {
      $(this).parent().remove();
  });