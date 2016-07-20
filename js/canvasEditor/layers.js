/*点击修改图层*/

$(document).on("click","#layerList li",function(){
	var id=$(this).attr("id");
	$(this).addClass("layer").siblings().removeClass("layer");
	 for (var j=0;j<canvas_name_array.length;j++){
        if($("#"+canvas_name_array[j]).parent().is(":visible")){
			for (var i = 0; i < canvas_array[j].getObjects().length; i++) {
				var elem = canvas_array[j].getObjects()[i];
				if(elem.id==id){
					canvas_array[j].setActiveObject(elem);
					canvas_array[j].bringToFront(elem);
					break;
				};
			};
		};
	};
});
