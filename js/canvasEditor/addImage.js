/**
 *导入图片到canvas
 * @param canvas_name_array:canvas名称数组
 * @param canvas_array:canvas上下文
 * @param layer_number:图层数量
 */
function canvas_import_img(canvas_name_array,canvas_array,layer_number) {
    /**
     * 点击素材图片、本地上传图片
     */
    $(document).on("click",".temDiv > img",function(){
        for (var i=0;i<canvas_name_array.length;i++){
            if ($("#"+canvas_name_array[i]).parent().is(":visible")){//循环取出当前操作canvas
                //调用监听canvas操作，支持 前进后退功能
                cancel_canvas(canvas_array[i],i);
                var src = this.src;//图片链接
                //使用年月日时分秒作为图片id
                var d = new Date();
                var imgId = d.getFullYear()+""+(d.getMonth() + 1)+d.getDate()+d.getHours()+d.getMinutes()+d.getSeconds();
                //使用canvas的id名+_layer
                var divId = canvas_name_array[i]+"_layer";
                //添加图片到画布
                canvas_addImg(src,canvas_array[i],imgId,divId,layer_number[i]);
                layer_number[i] = layer_number[i]+1;
            };
        };
    });
    /**
     * 添加图片到画布
     * @param src:图片链接
     * @param canvas：canvas上下文
     * @param imgId：图片id
     * @param divId：图层显示容器id
     * @param layer_number:图片数量
     */
    function canvas_addImg(src,canvas,imgId,divId,layer_number) {
       /* console.log("1");*/
        fabric.Object.prototype.transparentCorners = false;
        fabric.Image.fromURL(src, function (oImg) {
            oImg.set({
                left: oImg.width/2,
                top: oImg.height/2,
                id: imgId
            });
            canvas.add(oImg);
        });
        canvas_addLayer(imgId,src,divId,layer_number)
    }
}
/**
 * 添加图层
 * @param imgId：图片id
 * @param src：图片链接
 * @param divId：图层展示容器id
 * @param layer_number:图片数量
 */
function canvas_addLayer(imgId,src,divId,layer_number) {
    var $li=$("<li class='layers'></li>");
    var li=$li[0];
    li.style.borderBottom="1px solid grey";
    li.id=imgId;
    li.innerHTML="图层"+layer_number;
    $("#"+divId).prepend($li);
    var $img=$("<img>");
    var img=$img[0];
    img.src=src;
    $("#"+imgId).prepend($img);
    var $span=$("<span class='eye'>");
    $("#"+imgId).prepend($span);
};
