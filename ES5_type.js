/**********************/
//number类型
let cap = 10;
cap.toFixed(2);//取小数
cap.toExponential(1);//科学计数法
cap.toPrecision(3);//根据参数判断用什么


/*********************/
//string类型
let capsting = "  you are my baby  ";
console.log(capsting.length);//返回字符串的长度大小
console.log(capsting.charAt(1), capsting.charCodeAt(1));//charat得到字符，charcodeat得到字符编码
let capsring_whloe = capsting.concat("foll");//合并字符串
console.log(capsring_whloe);
capsting.slice(1, 5);//从第2个位置开始返回到第六个位置的子字符串，所有负值加上字符串长度
capsting.substr(1, 5);//同上，第一个负值加上字符串的长度，第二个参数负值取0
capsting.substring(1, 5);//从第二个位置开始返回5个长度的子字符串，所有负值视为0
capsting.indexOf("a");//从前面搜索“第一个指定字符”前面的字符个数
capsting.lastIndexOf("a");//从后面搜索“最后一个指定字符”后面的字符个数。
capsting.trim();//删除字符串前缀及后缀的所有空格
capsting.match(/.are/);//返回一个数组，包含匹配的字符串，参数只接受正则匹配式或者regexp对象
capsting.search(/are/);//返回第一个匹配项的索引，没有则返回-1，参数设定与上面相同。
let re1 = capsting.replace("a", "mmmmm");
let re2 = capsting.replace(/(.a)/g, "emmmmm($1)");//第一个参数接受字符串或者一个正则表达式，正则表达式要指定全局（g）标志，传入字符串只会替换第一个字符串，传入全局正则表达会替换所有的字符串。
//第二个参数可以是一个字符串也可以是一个函数
let r3 = capsting.replace(/(.a)/g, function (match, pos, original) {
    switch (match) {
        case " a":
            return 123;
        case "ba":
            return 234;
    }
});
console.log(re1 + "---------" + re2+ "---------" +r3);
let show=capsting.localeCompare("  zzzz");//比较传入参数和字符串在字母表中的排序大小，字符串小返回-1，大返回1，相等返回0
console.log(show);
String.fromCharCode(104,101,108,108,111);//转化字符编码为字符串

/*******************/
//所有全局定义域的对象或者函数都是Global对象的属性。

//1.Global对象的encodeURI()与encodeURIComponent()方法
let uri="http://www.baidu.com/illegal value.html";
encodeURI(uri);//不对本身输入uri的特殊字符编码，对空格会进行编码
encodeURIComponent(uri);//使得URI所有非标准字符编译

//2.Global对象的eval()方法
let sting_show="1+2*4*5/4+222+22";
console.log(eval(sting_show));//eval()会进行执行传入参数的js代码，之后把执行代码插入，因为在调用时必须非常小心。

//3.Global对象绑定了window对象。

/*******************/
//Math对象
Math.max(1,3,4);
Math.min(1,3,4);
Math.ceil(25.3);//向上归整
Math.floor(25.3);//向下归整
Math.round(25.3);//四舍五入
Math.random();//返回一个0~1之间的随机小数，不包含0,1
let what=Math.floor(Math.random()*10+1);//1~10直接的整数，包含1，10
console.log(what);
