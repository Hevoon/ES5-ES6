// console.log(sub1(1,2));
console.log(sub2(1, 2));
let sub1 = function (a, b) {
    return a + b;
};//函数表达式
function sub2(a, b) {
    return a + b;
}//函数声明

function f(somefunction, args1, args2) {
    return somefunction(args1, args2);
}

let test = f(sub2, 1, 2);
console.log(test);//传入函数而不使用函数需要用到去括号，函数嵌套


function callers() {
    inner();
}

function inner() {
    console.log(inner.caller);//等价于arguments.callee.caller,这个有强耦合性
}

callers();//caller属性

function factorial(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * factorial(num - 1);
    }
}//强耦合
function factorial_2(num) {
    if (num <= 1) {
        return 1;
    }
    else {
        return num * arguments.callee(num - 1);//callee指向拥有该arguments的函数，caller属性保存着当前函数的函数的引用
    }
}//解除强耦合
let t1 = factorial;
let t2 = factorial_2;
factorial = function () {
    return 0;
};
factorial_2 = factorial;
console.log(t1(10) + '-----' + t2(10));//强耦合的危害之处

function sum(a, b) {
    return a + b;
}

let a = [2, 2, 3, 4, 5];
let b = {
    a: 1
};
let g = sum.apply(a, a);//绑定函数作用域与数组
console.log(g);

function sum_2(a, b, c, d) {
    return sum.apply(this, arguments);//绑定函数作用域与arguments对象
}

console.log(sum_2(4, 5, 5, 5));//apply函数的绑定
console.log(sum.call(a, 1, 2));//call函数的绑定
function calloo() {
    return this.a;
}

let come = calloo.bind(b);
console.log(come() + '------' + calloo.bind(a));//bind函数给定一个函
