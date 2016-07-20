
function saveCanvas(){
    var img=new Array();
    for (var i=0;i<canvas_array.length;i++){
        var canvas_img=canvas_array[i].toDataURL({
            format: 'jpeg',
            quality: 1,
            multiplier:1
        });
        canvas_array[i].deactivateAll().renderAll();
        img[i]=canvas_img;
    }
    img[canvas_array.length]=1;//因为一条数据会报错，所以在最后追加一条无用数据，需要过滤掉
    $.ajax({
        url:'http://localhost/canvas/qsupload',
        type:'POST',
        dataType: 'json',
        data:{img:img},
        contentType:"application/x-www-form-urlencoded",
        success:function (data) {
            alert(data.message);
        }
    });
}
$(function(){
    $("#save-btn").bind("click",function(){saveCanvas();})
});
