function blank_photoBook() {
	var photoBook=new Array();
	photoBook[0]="../images/公主日记 封面封底.jpg";
	photoBook[1]="../images/公主日记 封面封底.jpg";
	photoBook[2]="../images/公主日记 1-2.jpg";
	photoBook[3]="../images/公主日记 3-4.jpg";
	photoBook[4]="../images/公主日记 5-6.jpg";
	photoBook[5]="../images/公主日记 7-8.jpg";
	photoBook[6]="../images/公主日记 9-10.jpg";
	photoBook[7]="../images/公主日记 11-12.jpg";
	photoBook[8]="../images/公主日记13-14.jpg";
	photoBook[9]="../images/公主日记 15-16.jpg";
	photoBook[10]="../images/公主日记 17-18.jpg";
		for (var i = 1; i < 12; i++) {
		canvas_name_array.push("photo_" + i);
	}
	name_array.push("封面");
	name_array.push("封低");
	pagingContainer(true);
	blank_createWork(true, true, name_array);
	blank_createWork_one("photo_");
	switch_button();
	/*var bwidth = $(".canvas-container").width;
	var bheight = $(".canvas-container").height;*/
	var g=0;
		var sh=setInterval(function(){
			fabric.Image.fromURL(""+photoBook[g], function(oImg) {
			oImg.set({
				width: canvas_array[0].getWidth(),
				height: canvas_array[0].getHeight(),
				left:canvas_array[0].getWidth()/2,
				top:canvas_array[0].getHeight()/2
			})
			canvas_array[g].add(oImg);
			canvas_array[g].renderAll();
			$("#"+canvas_name_array[g]+"_thumb").click();
			g++;
			if(g>10){
				clearInterval(sh);
			}
		})
		},500)
		
}

function blank_Fmenology() {
	var candle = new Array();
candle[0] = "../images/封面背景.png";
candle[1] = "../images/封面背景.png";
candle[2] = "../images/1月背景.png";
candle[3] = "../images/2月背景.png";
candle[4] = "../images/3月背景.png";
candle[5] = "../images/4月背景.png";
candle[6] = "../images/5月背景.png";
candle[7] = "../images/6月背景.png";
candle[8] = "../images/7月背景.png";
candle[9] = "../images/8月背景.png";
candle[10] = "../images/9月背景.png";
candle[11] = "../images/10月背景.png";
candle[12] = "../images/11月背景.png";
candle[13] = "../images/12月.png";
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
    var g=0;
		var sh=setInterval(function(){
			fabric.Image.fromURL(""+candle[g], function(oImg) {
			oImg.set({
				width: canvas_array[0].getWidth(),
				height: canvas_array[0].getHeight(),
				left:canvas_array[0].getWidth()/2,
				top:canvas_array[0].getHeight()/2
			})
			canvas_array[g].add(oImg);
			canvas_array[g].renderAll();
			$("#"+canvas_name_array[g]+"_thumb").click();
			g++;
			if(g>13){
				clearInterval(sh);
			}
		})
		},500)
}

function blank_Fcard() {
	var card=new Array();
	card[0]="../images/未标题-2-01.jpg";
	card[1]="../images/未标题-2-02.jpg"
    canvas_name_array.push("canvas_card_positive");
    canvas_name_array.push("canvas_card_reverse");
    name_array.push("正面");
    name_array.push("反面");
    pagingContainer(false);
    blank_createWork(true,false,name_array);
    switch_button();
var g=0;
		var sh=setInterval(function(){
			fabric.Image.fromURL(""+card[g], function(oImg) {
			oImg.set({
				width: canvas_array[0].getWidth(),
				height: canvas_array[0].getHeight(),
				left:canvas_array[0].getWidth()/2,
				top:canvas_array[0].getHeight()/2
			})
			canvas_array[g].add(oImg);
			canvas_array[g].renderAll();
			$("#"+canvas_name_array[g]+"_thumb").click();
			g++;
			if(g>1){
				clearInterval(sh);
			}
		})
		},500)
}