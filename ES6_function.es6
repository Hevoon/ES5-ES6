function f() { console.log('I am outside!'); }
(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
    f();
}());
//相当于：
function f() { console.log('I am outside!'); }
(function () {
    function f() { console.log('I am inside!'); }
    if (false) {
    }
    f();
}());
//声明的f()被提升到了函数头部,函数声明会提升到源代码树的顶部。


// B.	在ES6中规定：
// 1.	允许在块级作用域内声明函数。
// 2.	函数声明类似于var，即会提升到全局作用域或函数作用域的头部。
// 3.	同时，函数声明还会提升到所在的块级作用域的头部。
// 例如：
function f() { console.log('I am outside!'); }
(function () {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }
    f();
}());
//相当于：
function f() { console.log('I am outside!'); }
(function () {
    var f = undefined;
    if (false) {
        function f() { console.log('I am inside!'); }
    }
    f();
}());//在浏览器的 ES6 环境中，块级作用域内声明的函数，行为类似于var声明的变量,提前后的f为变量故无法在块级作用域外使用
let x=1;
