let time = setTimeout(function () {
    alert("hello,after 4s will tell you")
}, 200);//单线程在4s后将该函数加入到执行队列中，而不是4s后便执行,优先查看消息队列中是否有点击等事件0877
clearTimeout(time);//取消超时调用
let num = 0;
let say_come = setInterval(function () {
    alert("i am coming!! again");
    num++;
    if (num > 1) {
        clearInterval(say_come);
    }
}, 500);//间隔函数
clearInterval(say_come);//取消间隔函数
if (confirm("are you ok?")) {
    alert("ok");
} else {
    alert("sorry");
}//confirm对话框返回布尔值。

let result = prompt("what you name?", "m");
if (result !== null) {
    alert("hello " + result);
} else {
    alert("get out");
}//prompt对话框返回输入的数值，否则返回null
// window.print();//打印窗口
/**************************************************************************///BOM对象
console.log(location === window.location);//location 是有用的 BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一 些导航功能
console.log(location.search, location.host);
// location.assign("http://www.baidu.com");
// location.href="http://www.baidu.com";
let bool = true;
if (bool) {
    // location.reload();
    bool=false;
}
alert("stop!!!");
/**************************************************************************///BOM对象
console.log(navigator);//navigator为识别客户端浏览器的事实标准
console.log(navigator.plugins);//检测浏览器的插件，数组中存了插件的name属性等等