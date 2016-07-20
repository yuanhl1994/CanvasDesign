/*
@param index:选择滤镜位置
@param filter:滤镜种类
@param id:传入读取id
*/
/*console.log(canvas_array[0].getActiveObject()._element.className=="canvas-img")*/
/*滤镜*/
var filters = ['grayscale', 'invert', 'remove-white', 'sepia', 'sepia2',
    'brightness', 'noise', 'gradient-transparency', 'pixelate',
    'blur', 'sharpen', 'emboss', 'tint', 'multiply', 'blend'
];
f = fabric.Image.filters;

function applyFilter(index, filter) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            var obj = canvas_array[i].getActiveObject();
            break;
        }
    }
    obj.filters[index] = filter;
    obj.applyFilters(canvas_array[i].renderAll.bind(canvas_array[i]));
}

function applyFilterValue(index, prop, value) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            var obj = canvas_array[i].getActiveObject();
            if (obj.filters[index]) {
                obj.filters[index][prop] = value;
                obj.applyFilters(canvas_array[i].renderAll.bind(canvas_array[i]));
            }
            break;
        }
    }

}

/*宽度*/
function widthChange(id) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            if (canvas_array[i].getActiveObject()._element != undefined) {
                canvas_array[i].getActiveObject().setWidth(parseFloat($("#" + id).val()));
                canvas_array[i].renderAll();

            } else {
                canvas_array[i].getActiveObject().scaleToWidth(parseFloat($("#" + id).val()));
                canvas_array[i].renderAll();
            }
            break;
        }
    };
}

/*高度*/
function heightChange(id) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {

            if (canvas_array[i].getActiveObject()._element!= undefined) {
                canvas_array[i].getActiveObject().setHeight(parseFloat($("#" + id).val()));
                canvas_array[i].renderAll();

            } else {
                canvas_array[i].getActiveObject().scaleToHeight(parseFloat($("#" + id).val()));
                canvas_array[i].renderAll();
            }
            break;
        }
    };
}

/*角度*/
function angleChange(id) {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            canvas_array[i].getActiveObject().setAngle(parseFloat($("#" + id).val()));
            canvas_array[i].renderAll();
            /*$("#width").val()*/
        }
    }
}
/*倒置*/
function inversion() {
    for (var i = 0; i < canvas_name_array.length; i++) {
        if ($("#" + canvas_name_array[i]).parent().is(":visible")) {
            var angle = parseFloat(canvas_array[i].getActiveObject().getAngle()) + 180;
            canvas_array[i].getActiveObject().setAngle(angle);
            canvas_array[i].renderAll();
        }
    }
}

/*明度*/
/* $('#brightness').click(function() {
     applyFilter(5, this.checked && new f.Brightness({
         brightness: parseInt($('#brightness-value').value, 10)
     }));
 });*/
$(function() {
    document.getElementById('brightness-value').onchange = function() {
        applyFilter(5, new f.Brightness({
            brightness: parseInt($('#brightness-value').value, 10)
        }));
        applyFilterValue(5, 'brightness', parseInt(this.value, 10));
    };

})