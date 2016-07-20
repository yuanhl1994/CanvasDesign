/**
 * Created by Admin on 2016/6/13.
 * 动态加载js插件
 */

/**
 * js加载
 * @param path：文件路径
 * @param success：成功后执行的方法
 */
function loadJs(path,success) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type","text/javascript");
    fileref.setAttribute("src",path);
    if(navigator.userAgent.indexOf("MSIE")>0){
        fileref.onreadystatechange = function(){
            if('loaded' === this.readyState || 'complete' === this.readyState){
                success();
                this.onload = this.onreadystatechange = null;
                this.parentNode.removeChild(this);
            }
        }
    }else{
        fileref.onload = function(){
            success();
            this.onload = this.onreadystatechange = null;
            this.parentNode.removeChild(this);
        }
    }
    document.getElementsByTagName("head")[0].appendChild(fileref);
}