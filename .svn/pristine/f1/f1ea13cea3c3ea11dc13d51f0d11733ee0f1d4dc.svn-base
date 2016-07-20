/**
文字操作
*@parm canvas:canvas数组id
*@parm canvas:canvas上下文
*@parm deleteId:绑定删除id
*@parm addId:绑定增加id
*/
//记录是否点击
var name;
function text(canvas_name_array, canvas_array) {
    console.log(canvas_name_array.length);
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.padding = 5;
    /*获得画布


    
    /*改变字体颜色*/
    /* document.getElementById('input_fontCol').onchange = function() {

         for (var i = 0; i < canvas_name_array.length; i++) {
             if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                 canvas_array[i].getActiveObject().setFill(this.value);
                 canvas_array[i].renderAll();
                 break;
             }
         };
     };*/

     $(".fontclass1,.fontclass2,.fontclass3,.print_class1,.print_class2").click(function(){
        name=this.className;
     })
    /*绑定颜色改变*/
    $(document).on("click", ".Ok", function() {
            for (var i = 0; i < canvas_name_array.length; i++) {
                if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                    if (canvas_array[i].getActiveObject().text != undefined) {
                        funWord(canvas_array[i],name);
                    } else {
                        funPath(canvas_array[i],name);
                    }
                }
            }
        })
        /*改变字体颜色*/
    function funWord(canvas,name) {
        //改变背景颜色
        if (name=="fontclass3") {
            document.getElementById("input_backCol").value = "#" + document.getElementById('input_backCol1').value;

            canvas.getActiveObject().setBackgroundColor(document.getElementById("input_backCol").value);
            canvas.renderAll();

        }


        //ÎÄ±¾ÏßÑÕÉ«
        /*if(document.getElementById("input_lineCol1").value !=''){
            document.getElementById("input_lineCol").value = "#"+document.getElementById('input_lineCol1').value;
            console.log(canvas_name_array.length);
            for (var i = 0; i < canvas_name_array.length; i++) {
                if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                    canvas_array[i].getActiveObject().setTextBackgroundColor(document.getElementById("input_lineCol").value);
                    canvas_array[i].renderAll();
                    break;
                }
            };
        }*/
        //字体颜色
        if (name=="fontclass1") {
            document.getElementById("input_fontCol").value = "#" + document.getElementById('input_fontCol1').value;

            canvas.getActiveObject().setFill(document.getElementById("input_fontCol").value);
            canvas.renderAll();


        }
        //描边颜色
        if (name=="fontclass2") {
            document.getElementById("input_lineCol").value = "#" + document.getElementById('input_lineCol1').value;

            canvas.getActiveObject().setStroke(document.getElementById("input_lineCol").value);
            canvas.renderAll();


        }

    }
    /*改变路径颜色*/
    function funPath(canvas,name) {
        //改变背景颜色
        if (name=="print_class1") {
            document.getElementById("input_picbackCol").value = "#" + document.getElementById('input_picbackCol1').value;
            canvas.getActiveObject().setFill(document.getElementById("input_picbackCol").value);
            canvas.renderAll();


        }
        //字体颜色
        if (name=="print_class2") {
            document.getElementById("input_piclineCol").value = "#" + document.getElementById('input_piclineCol1').value;

            canvas.getActiveObject().setStroke(document.getElementById("input_piclineCol").value);
            canvas.renderAll();

        }
        //描边颜色
    }



    /*描边宽度*/
    $(".s_b_w_options li").click(function() {
            for (var i = 0; i < canvas_name_array.length; i++) {
                if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                    canvas_array[i].getActiveObject().setStrokeWidth(parseFloat(this.innerHTML));
                    canvas_array[i].renderAll();
                    break;
                }
            };
        })
        /*字体*/

    /*document.getElementById('btn_font').onpropertychange = function() {
            console.log("1");
            console.log(this.value);
            canvas.getActiveObject().setFontFamily(this.value);
            canvas.renderAll();
        };*/
    /*字体尺寸*/
    /*document.getElementById('options').onchange = function() {
        for (var i = 0; i < canvas_name_array.length; i++) {
            if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                canvas_array[i].getActiveObject().setFontSize(this.value);
                canvas_array[i].renderAll();
                break;
            }
        };
    };*/
    $(".options li").click(function() {
            for (var i = 0; i < canvas_name_array.length; i++) {
                if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                    canvas_array[i].getActiveObject().setFontSize(parseFloat(this.innerHTML));
                    canvas_array[i].renderAll();
                    break;
                }
            };
        })
        /*字体粗细 */
        /*document.getElementById('input_fontWeight').onchange = function() {
            for (var i = 0; i < canvas_name_array.length; i++) {
                if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                    canvas_array[i].getActiveObject().setFontWeight(this.value);
                    canvas_array[i].renderAll();
                    break;
                }
            };
        };*/


    /*document.getElementById('input_lineHeight').onchange = function() {
        for (var i = 0; i < canvas_name_array.length; i++) {
            if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                canvas_array[i].getActiveObject().setLineHeight(this.value);
                canvas_array[i].renderAll();
                break;
            }
        };
    };*/



    /*字体状态*/
    $(".fontstyle div").click(function() {
        var src = $(this).children().attr("src");
        for (var i = 0; i < canvas_name_array.length; i++) {
            if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                if (src == "../images/mipmap-xhdpi/bold_click.png") {
                    canvas_array[i].getActiveObject().set("fontWeight", "bold");
                } else if (src == "../images/mipmap-xhdpi/bold.png") {
                    canvas_array[i].getActiveObject().set("fontWeight", "");
                } else if (src == "../images/mipmap-xhdpi/italic_click.png") {
                    canvas_array[i].getActiveObject().set("fontStyle", "italic");
                } else if (src == "../images/mipmap-xhdpi/italic.png") {
                    canvas_array[i].getActiveObject().set("fontStyle", "");
                } else if (src == "../images/mipmap-xhdpi/Underline_click.png") {
                    canvas_array[i].getActiveObject().set("textDecoration", "underline");
                } else if (src == "../images/mipmap-xhdpi/Underline.png") {
                    canvas_array[i].getActiveObject().set("textDecoration", "");
                } else if (src == "../images/mipmap-xhdpi/strikethrough_click.png") {
                    canvas_array[i].getActiveObject().set("textDecoration", "line-through");
                } else if (src == "../images/mipmap-xhdpi/strikethrough.png") {
                    canvas_array[i].getActiveObject().set("textDecoration", "");
                }
                canvas_array[i].renderAll();
                break;
            }
        }
    })

    /*radios5 = document.getElementsByName("fonttype"); // wijzig naar button
            for (var i = 0, max = radios5.length; i < max; i++) {
                radios5[i].onclick = function() {
                    for (var i = 0; i < canvas_name_array.length; i++) {
                        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                            if (document.getElementById(this.id).checked == true) {
                                if (this.id == "bold") {
                                    canvas_array[i].getActiveObject().set("fontWeight", "bold");
                                }
                                if (this.id == "italic") {
                                    canvas_array[i].getActiveObject().set("fontStyle", "italic");
                                }
                                if (this.id == "underLine") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "underline");
                                }
                                if (this.id == "lineThrough") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "line-through");
                                }
                                if (this.id == "overLine") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "overline");
                                }



                            } else {
                                if (this.id == "bold") {
                                    canvas_array[i].getActiveObject().set("fontWeight", "");
                                }
                                if (this.id == "italic") {
                                    canvas_array[i].getActiveObject().set("fontStyle", "");
                                }
                                if (this.id == "underLine") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "");
                                }
                                if (this.id == "lineThrough") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "");
                                }
                                if (this.id == "overLine") {
                                    canvas_array[i].getActiveObject().set("textDecoration", "");
                                }
                            }


                            canvas_array[i].renderAll();
                            break;
                        }
                    }
                }
            };
    */


    /*删除*/
    /*$("#wordsDel").click(function() {
        for (var i = 0; i < canvas_name_array.length; i++) {
            if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
                var object = canvas_array[i].getActiveObject();
                if (!object||(object.text==undefined)) {
                    alert('请选择要删除的字');
                    return '';
                }
                canvas_array[i].remove(object);
                $("#"+object.id).remove();
                break;
            }
        }
    })*/
    ;



    /*添加文字及图层*/
    $(".fontcontent div").click(function() {
        var SINGLE_LINE = false;
        var fontfamily=this.id;
        // custom input area
        for (var i = 0; i < canvas_name_array.length; i++) {
            if ($("#" + canvas_name_array[i]).parent().is(":visible")) {

                var tid = "t_" + layer_number[i];
                canvas_addLayer(tid, "../images/words.png", canvas_name_array[i] + "_layer", layer_number[i]);
                layer_number[i] = layer_number[i] + 1;

                var additext = document.createElement('textarea');
                additext.className += "itext";


                console.log(fontfamily);
                var text = '双击编辑文字';
                var itext = new fabric.IText(text, {
                    left: 100,
                    top: 100,
                    fontSize: 20,
                    fill: '#000',
                    fontFamily:fontfamily,
                    id: tid,
                    /*fontFamily:'black'*/
                })

                .on('editing:entered', function(e) {
                    var obj = this;
                    if (SINGLE_LINE) {
                        var keyDownCode = 0;
                    };

                    //alert(obj);
                    canvas_array[i].remove(obj);
                    // show input area
                    additext.style.left = obj.left + "px";
                    additext.style.position = "relative";
                    additext.style.top = obj.top + "px";
                    additext.style.lineHeight = obj.lineHeight;
                    additext.style.fontFamily = obj.fontFamily;
                    additext.style.fontSize = Math.floor(obj.fontSize * Math.min(obj.scaleX, obj.scaleY)) + 'px',
                        additext.style.fontWeight = obj.fontWeight;
                    additext.style.fontStyle = obj.fontStyle;
                    additext.style.color = obj.fill;
                    additext.style.width = "200px";

                    additext.value = obj.text;

                    document.querySelectorAll(".canvas-container")[i].appendChild(additext);

                    if (SINGLE_LINE) {
                        // submit text by ENTER key
                        additext.addEventListener('keydown', function(e) {
                                // save the key code of a pressed key while kanji conversion (it differs from the code for keyup)
                                keyDownCode = e.which;
                            })
                            .addEventListener('keyup', function(e) {
                                if (e.keyCode == 13 && e.which == keyDownCode) {
                                    obj.exitEditing();
                                    obj.set('text', this.value);
                                    this.remove();
                                    canvas_array[i].add(obj);
                                    canvas_array[i].renderAll();
                                }
                            });
                    } else {
                        // submit text by focusout
                        additext.addEventListener('blur', function(e) {
                            canvas_array[i].remove(obj);
                            obj.exitEditing();
                            canvas_array[i].remove(obj);
                            obj.set('text', this.value);
                            this.remove();
                            canvas_array[i].add(obj);
                            canvas_array[i].renderAll();
                        });
                    }

                    // focus on text
                    setTimeout(function() {
                        additext.select();
                    }, 0);
                });
                canvas_array[i].add(itext);
                canvas_array[i].setActiveObject(itext);
                break;
            };
        }
    })
}

/*对齐*/
function align(position) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            canvas_array[i].getActiveObject().setTextAlign(position);
            canvas_array[i].renderAll();
            break;
        }
    }
}
/*行间距*/
function lineSpace() {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            canvas_array[i].getActiveObject().setLineHeight(parseFloat($("#line_spacing").val()));
            canvas_array[i].renderAll();
            break;
        }
    };
}