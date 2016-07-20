/**
 * Created by Admin on 2016/5/12.
 */
 $(function(){
    /**
     * 图片上传初始化配置
     * @type {Uploader|*}
     */
    var uploader = new WebUploader.Uploader({
        swf:              '../js/uplaod/Uploader.swf',
        dnd:              '#show_img',               //指定拖拽的容器(值为html中标签的id)
        disableGlobalDnd: true,                     //禁用整个页面拖拽功能
        paste:            document.body,            //通过粘贴来添加截屏的图片
        pick:             {                         //创建选择图片的按钮
            id:        '#btn_uploads',               //(值为html中标签的id)
            innerHTML: '本地上传',                  //按钮的名字
            multiple: true                         //是否可以同时上传多个图片
        },
        accept:            {                       //可上传的类型配置
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        },
        thumb:              {                   //配置生成缩略图属性
            width:        800,                 //宽
            height:       800,                 //高
            allowMagnify: false,              //是否允许放大，如果想要生成小图的时候不失真，此选项应该设置为false.
            crop:         false,              //是否允许裁剪
            type:'image/png'
        },
        resize:           false,              //不压缩图片
        auto:             false,              //自动上传
        duplicate:        true,                //去重复
        compress:         false,                    //配置不压缩图片
    });
    /**
     * 图片上传后显示
     */
    uploader.on("fileQueued",function (file) {

        
        var $show_img=$('<div class="temDiv"><img id = "temImg"><span class="close1"  style="z-index:999999;position:relative;left:6px;top:-90px;display:none;"><img src="../images/mipmap-xhdpi/close_circle.png" ></img><span></div>');
        var $img=$show_img.find('#temImg');
        $('#show_img').append($show_img);
        uploader.makeThumb(file,function (error,src) {
            if(error){
                $img.replaceWith('<span>不能预览</span>');
                return;
            }
            $img.attr('src',src);
            /**
             * 给图片添加事件
             */

        });
    });

    /**
     * 模拟本地上传按钮的点击效果，打开图片选择框
     * @type {Element}
     */
    $("#btn_upload").on("click",function () {

        $("#btn_uploads").click(function(){
            $(".add").hide();
        });
        var child=$("#btn_uploads").find("input");
        child.click();
    });
 })
