console.log("****************************************************************************");
console.log(window.screenLeft+"-------"+window.screenTop+"--------"+window.screenX+"-----"+window.screenY);
//sl表示屏幕左边到浏览器窗口边沿的距离，st表示浏览器窗口边缘到顶端的距离
window.moveTo(500,50);//禁用
window.moveBy(0,100);//禁用
console.log(outerWidth,outerHeight,innerWidth,innerHeight);//outer返回视口的大小，inner返回浏览器视窗（减去边框,黄色区域）大小。
console.log(document.documentElement.clientWidth,document.documentElement.clientHeight);//返回可是窗口的大小，就如同html文件的黄色区域大小
console.log(document.body.clientWidth,document.body.clientHeight);//返回body视窗的大小