/**************************************************************/

let t = 1;

function f(y = t) {
    let t = 99;
    return y;
}

let arr = [f(55), f()];
document.getElementById("es6_ context_show").innerHTML = `${arr}`;
//默认参数作用域

/**************************************************************/

function g1(x) {
    if (x === 1) {
        return 1;
    }
    return x * g1(x - 1);
}//递归
function g2(x, t) {
    if (x === 1) {
        return t;
    }
    return g2(x - 1, t * x);
}//尾递归
let ayy = [g1(100), g2(100, 1)];
document.getElementById("es6_digui_show").innerHTML = `${ayy}`;

/**************************************************************/

let a = 1;
let obj1 = {
    f1() {
        return 'hello';
    },
    a,
    b: 2
};
let obj2 = {
    toString() {
        return 'hello';
    }
};
// noinspection JSCheckFunctionSignatures
let m1 = Symbol(obj1);
// noinspection JSCheckFunctionSignatures
let m2 = Symbol(obj2);
console.log(m2, m2.toString(), String(m2));
console.log(m1);//symbol类型的参数传入

let s = Symbol(66);
let c = {
    [s]: "wokaoaaaa"
};
console.log(a[s]);//symbol不可以使用点运算符
const log = {};

log.levels = {
    DEBUG: Symbol('debug'),
    INFO: Symbol('info'),
    WARN: Symbol('warn')
};//设定常量的值

/**************************************************************/
let arr_uu = [1, 1, 1, 1, 1, 4, 4, 4, 4, 5, 6, 7];
let obj4 = {p: 1, u: 2};
let arr_us = [[1, 2], [3, 4]];
let set1 = new Set(arr_uu);
// let set2=new WeakSet(arr_uu);//worry
let map1 = new Map(arr_us);
// let map2=new Map(arr_us);
map1.forEach(function (key, value) {
    console.log(key, value);
});
console.log(map1.get(1));


/**************************************************************/
//Proxy拦截对象与Reflect对象
let handler = {
    get: function (target, name) {
        if (name === 'prototype') {
            return Object.prototype;
        }
        return 'Hello, ' + name;
    },

    apply: function (target, thisBinding, args) {
        return args[0];
    },

    construct: function (target, args) {
        return {value: args[1]};
    }
};

let fproxy = new Proxy(function (x, y) {
    return x + y;
}, handler);

console.log(fproxy(1, 2), 111);
console.log(new fproxy(1, 2), 222);
console.log(fproxy.prototype);
console.log(fproxy.duck);//proxy拦截
/**************************************************************/

class c1 {
    constructor(x, y) {
        return x + y;
    }

    static hi() {
        console.log("hello hi");
    }
}//声明类

let children = new c1(1, 2);
console.log(children);
let c2 = new c1();
let c3 = new c1();
console.log(c1.hi());
c3.__proto__.printName = function () {
    console.log('Oops');
};
c2.printName();//同一个原型


Object.assign(c1.prototype, {
    say() {
        alert("hihihi");
    }
});//向类添加方法

/************************************************************************/
let r1={
    a:1
};
let loggedObj = new Proxy(r1, {
    get(target, name) {
        console.log('get', target, name);
        return Reflect.get(target, name);
    },
    deleteProperty(target, name) {
        console.log('delete' + name);
        return Reflect.deleteProperty(target, name);
    },
    has(target, name) {
        console.log('has' + name);
        return Reflect.has(target, name);
    }
});
// console.log("2edsads"+loggedObj.get());
// console.log("2421412412ds"+r1.get());
console.log("dsddsds"+Reflect.get(r1,a));
