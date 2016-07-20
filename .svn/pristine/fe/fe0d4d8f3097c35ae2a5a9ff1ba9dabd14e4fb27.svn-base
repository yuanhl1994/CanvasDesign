/**
 * Created by Admin on 2016/6/13.
 * 监听键盘按钮，实现相应快捷操作
 */

function editQuick() {
    //后退快捷键
    key('ctrl+z',function () {
        var undo_bth = document.getElementById('undo-btn');
        undo_bth.click();
    });
    //前进快捷键
    key('ctrl+shift+z',function () {
        var redo_btn = document.getElementById('redo-btn');
        redo_btn.click();
    });
}

function editQuick_switch_button() {
    //向后翻一页
    key('ctrl+b',function () {
        $(".rightPage").click();
    });
    //向前翻一页
    key('ctrl+q',function () {
        $(".leftPage").click();
    });
}
