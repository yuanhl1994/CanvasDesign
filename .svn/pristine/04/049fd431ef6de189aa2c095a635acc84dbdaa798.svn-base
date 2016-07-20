var canvas_undoHist = [];
var canvas_redoHist = [];
function cancel_canvas(canvas,i) {
    var canvas=canvas;
    var undoHist = canvas_undoHist[i];
    var redoHist = canvas_redoHist[i];
    var replayFlag = false; // set to true while undoing or redoing..
    var selectedObject = []; // store selected object properties
    var myUndo = document.getElementById('undo-btn');
    var myRedo = document.getElementById('redo-btn');
    setupCanvas();
    function onObjectSelected() {
        selectedObject = [];
        for (var i in canvas.getObjects()) {
            if (canvas.item(i).active === true) {
                var groupLeft = 0;
                var groupTop = 0;
                var groupScaleX = 1;
                var groupScaleY = 1;
                var groupAngle = 0;
                if (typeof canvas.item(i).group != "undefined") {
                    var groupLeft = canvas.item(i).group.left;
                    var groupTop = canvas.item(i).group.top;
                    var groupScaleX = canvas.item(i).group.scaleX;
                    var groupScaleY = canvas.item(i).group.scaleY;
                    var groupAngle = canvas.item(i).group.angle;
                }
                selectedObject.push({
                    "itemNum": i,
                    "left": canvas.item(i).left + groupLeft,
                    "top": canvas.item(i).top + groupTop,
                    "scaleX": canvas.item(i).scaleX * groupScaleX,
                    "scaleY": canvas.item(i).scaleY * groupScaleY,
                    "angle": canvas.item(i).angle + groupAngle,
                    "flipX": canvas.item(i).flipX,
                    "flipY": canvas.item(i).flipY,
                    "backgroundColor":canvas.item(i).backgroundColor,
                    "fill":canvas.item(i).fill,
                    "stroke":canvas.item(i).stroke
                });
            }
        }
    }
    function onObjectAdded() {
        var o = canvas.getObjects();
        if (replayFlag === false) {
            undoHist.push({
                "action": "add",
                "itemNums": [o.length - 1]
            });
            canvas_undoHist[i]= undoHist;
            redoHist = [];
        }
    }
    function onObjectModified() {
        if(canvas.getActiveGroup()){
            canvas.deactivateAll();
        }
        if (replayFlag === false) { // i.e. user modified something..
            var itemProps = [];
            for (var i in selectedObject) {
                itemProps.push({
                    "itemNum": selectedObject[i].itemNum,
                    "left": selectedObject[i].left,
                    "top": selectedObject[i].top,
                    "scaleX": selectedObject[i].scaleX,
                    "scaleY": selectedObject[i].scaleY,
                    "angle": selectedObject[i].angle,
                    "flipX": selectedObject[i].flipX,
                    "flipY": selectedObject[i].flipY,
                    "backgroundColor":selectedObject[i].backgroundColor,
                    "fill":selectedObject[i].fill,
                    "stroke":selectedObject[i].stroke
                });
            }
            onObjectSelected();
            undoHist.push({
                "action": "modify",
                "itemProps": itemProps
            });
            canvas_undoHist[i]=undoHist;
            redoHist = [];
        }
    }
    myUndo.onclick = function() {
        actionReplay("undo");
    };
    myRedo.onclick = function () {
        actionReplay("redo");
    };
    function actionReplay(replayType) {
        replayFlag = true;
        if (replayType === "undo") {
            if (undoHist.length > 0) {
                var backStack = undoHist;
                var forwardStack = redoHist;
                replay(backStack, forwardStack);
            } else {
                console.log('No undo history.');
            }
        } else if (replayType === "redo") {
            if (redoHist.length > 0) {
                var backStack = redoHist;
                var forwardStack = undoHist;
                replay(backStack, forwardStack);
            } else {
                console.log("No redo history.");
            }
        }
        replayFlag = false;
        canvas.renderAll();
    }
    function replay(backStack, forwardStack) {
        var o = backStack[backStack.length - 1];
        var actionType = backStack[backStack.length - 1].action;
        var itemProps = [];
        var itemNums = [];
        var boolShow = true;
        if (actionType === "remove") {
            actionType = "add"; // invert actionType for add/remove
            boolShow = true;
        } else if (actionType === "add") {
            actionType = "remove";
            boolShow = false;
        } else {
            boolShow = true;
        }
        if (actionType === "add" || actionType === "remove") {
            for (var i in o.itemNums) {
                canvas.item(o.itemNums[i]).set({
                    selectable: boolShow,
                    visible: boolShow
                });
                itemNums.push(o.itemNums[i]);
                canvas.item(o.itemNums[i]).setCoords();
            }
        } else { // actionType === "modify"
            for (var i in o.itemProps) {
                itemProps.push({
                    "itemNum": o.itemProps[i].itemNum,
                    "left": canvas.item(o.itemProps[i].itemNum).left,
                    "top": canvas.item(o.itemProps[i].itemNum).top,
                    "scaleX": canvas.item(o.itemProps[i].itemNum).scaleX,
                    "scaleY": canvas.item(o.itemProps[i].itemNum).scaleY,
                    "angle": canvas.item(o.itemProps[i].itemNum).angle,
                    "flipX": canvas.item(o.itemProps[i].itemNum).flipX,
                    "flipY": canvas.item(o.itemProps[i].itemNum).flipY,
                    "backgroundColor":canvas.item(o.itemProps[i].itemNum).backgroundColor,
                    "fill":canvas.item(o.itemProps[i].itemNum).fill,
                    "stroke":canvas.item(o.itemProps[i].itemNum).stroke
                });
                canvas.item(o.itemProps[i].itemNum).set({
                    left: o.itemProps[i].left,
                    top: o.itemProps[i].top,
                    scaleX: o.itemProps[i].scaleX,
                    scaleY: o.itemProps[i].scaleY,
                    angle: o.itemProps[i].angle,
                    flipX: o.itemProps[i].flipX,
                    flipY: o.itemProps[i].flipY,
                    backgroundColor:o.itemProps[i].backgroundColor,
                    fill:o.itemProps[i].fill,
                    stroke:o.itemProps[i].stroke
                });
                itemNums.push(o.itemProps[i].itemNum);
                canvas.item(o.itemProps[i].itemNum).setCoords();
            }
        }
        forwardStack.push({
            "action": actionType,
            "itemNums": itemNums,
            "itemProps": itemProps
        });
        backStack.splice(backStack.length - 1, 1);
        selectedObject = [];
        onObjectSelected();
    }
    function setupCanvas () {
        canvas.on('object:selected', onObjectSelected);
        canvas.on('object:added', onObjectAdded);
        canvas.on('object:modified', onObjectModified);
        canvas.renderAll();
        fabric.Object.prototype.originX = 'center';
        fabric.Object.prototype.originY = 'center';
        fabric.Object.prototype.controlsAboveOverlay = true;
        canvas.freeDrawingBrush.color = '#111111';
        canvas.freeDrawingBrush.width = 5;

    }
/*    function cancel_getCanvas() {
        for (var i = 0; i<canvas_name_array.length; i++){
            if ($("#"+canvas_name_array[i]).parent().is(":visible")){//循环取出当前操作canvas
                canvas=canvas_array[i];
                alert(canvas);
            }
        }
    }*/
}