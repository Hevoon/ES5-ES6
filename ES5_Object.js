let persion = {
    age: 18,
    name: "nick",
    school: "NO1_school",
    job: "web engineer"
};

/*****************************************************************************************************************/
//数据属性 configurable enumerable writable value
//修改属性默认特征，需要通过Object.defineProperty来修改
Object.defineProperty(persion, "name", {
    configurable: false,//该属性表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，能否配置。一但设置为不可配置便不可以修改。
    enumerable: false,//表示能否通过for-in循环返回属性
    writable: false,//能否修改属性的值
    value: "JACK"
});//修改属性默认值,第一个参数为对象，第二个参数为对象中的指定属性，第三个参数为四个描述符对象属性行为的特征值
console.log(persion.name);
persion.name = "ooooo";
console.log(persion.name);
delete  persion.name;
console.log(persion.name);

/****************************************************************************************************************/
//访问器属性 configurable enumerable get set
//访问器属性不能直接定义，必须通过Object.defineProperty方法定义
Object.defineProperty(persion, "old", {
    get: function () {
        return this.age;
    },//get在读取对象时调用
    set: function (year) {
        if (year > 100) {
            this.age = year;
            this.jbo = "iiii"
        }
        else {
            this.age = 99;
        }
    }//set在写入属性时调用
});
persion.old = 2;
console.log(persion.old + "---------" + persion.age + "---------" + persion.jbo);
persion.old = 9999;
console.log(persion.old + "----------" + persion.age + "---------" + persion.jbo);


/***************************************************************************************************************/
//定义多个属性，包括数据属性和访问器属性
Object.defineProperties(persion, {
    school: {
        configurable: false,//该属性表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，能否配置。一但设置为不可配置便不可以修改。
        enumerable: false,//表示能否通过for-in循环返回属性
        writable: false,//能否修改属性的值
        value: "JACK_school"
    },
    years: {
        get: function () {
            return this.age;
        },//get在读取对象时调用
        set: function (year) {
            if (year > 100) {
                this.age = year;
                this.job = "worker";
            }
            else {
                this.age = 99;
            }
        }//set在写入属性时调用
    }
});
//读取属性的特征
let detail = Object.getOwnPropertyDescriptor(persion, "school");
//第一个参数为属性所在对象，第二个为要读取得属性名称。返回一个对象，包含访问器属性或者数据属性.
console.log(detail.value);

/****************************************************************************************************************/

//构造函数第一个字母大写
function Persion(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayname = function () {
        console.log(this.name);
    };
}//构造函数，直接调用Persion函数会将this指向window
Persion.prototype.jobs = "wroker";
Persion.prototype.sayjob = function () {
    console.log(this.job);
};//在构造函数的原型上添加属性和方法，原型的constructor属性指向构造函数，构造函数以及实例的原型指向Presion.prototype，实例的__proto__指向原型Presion.prototype
let p1 = new Persion("lilili", 20, "bosser");
let p2 = new Persion("hihihi", 20, "boss");
console.log(p1);
console.log(p1.sayname() === p2.sayname());
console.log(p1.sayjob() === p2.sayjob());
//Persion.prototype.constructor指向Persion,p1的内部属性指向原型Persion.prototype,而不是指向Persion.
//当搜索不到实例上的值，会去原型上搜索.
console.log(p1.hasOwnProperty("name") + "-------" + p1.hasOwnProperty("jobs"));
//hasOwnProperty判断该属性是否来自实例，来自实例则为true，来自原型为false


/**********************************************************************************************************/
//in操作符与原型，in单独使用可以判断是否能访问给定对象。for-in连用会返回所有能够通过对象访问的，可枚举属性，包括实例与原型中的全部，屏蔽了原型中不可枚举属性的实例属性会被循环访问到。
p1.jobs = "what";
for (let prop in p1) {
    console.log(prop + "----");
}//原型中的construction方法不可枚举，如果实例创造一个construction方法，便可以被for in枚举出来。
console.log(Object.keys(p1));//获得所有可枚举数属性
console.log(Object.getOwnPropertyNames(Persion.prototype));//所有属性，无论是否可枚举

function Iss() {
}

Iss.prototype = {
    constructor: Iss,
    key: 1235,
    username: "Hevoon",
};//这样设置prototype会导致constructor指向Object，必须显示的设置constructor的指向，但这样做会导致constructor的enumberable属性为true从而可以枚举
//生成实例后不要重写原型对象，这样会导致实例指向原型的指针指向原来的原型而不会改变，从而导致搜索不到方法，如下是一个重写原型的例子
let i1 = new Iss();//此时i1中的指针已经指向了第一个ISS.prototype
console.log(i1.key);
Iss.prototype.hello = "hello";
console.log(i1.hello);
Iss.prototype = {
    constructor: Iss,
    key: 123587878,
    username: "Hevoon",
};//此语法即为重写原型对象
let i2 = new Iss();//此时i2中的指针已经指向了第二个ISS.prototype
console.log(i1.key);//始终指向第一个原型
console.log(i2.key);
console.log(i2.hello);//没有定义
/**********************************************************************************************************/
//闭包
var wind = "lihong";
let ob = {
        wind: "yuyuyu",
        getName: function () {
            return function () {
                return this.wind;
            };
        },
        getthiswind: function () {
            let that = this;
            return function () {
                return that.wind;
            }
        }
    }
;
console.log(ob.getName()() + "<----这里是匿名函数的this指向,that的指向------>" +ob.getthiswind()());
//ES6的块级作用域会在这里做出比较,闭包会导致内存泄漏，即一个闭包中如果保存一个html元素，闭包中有另一个小函数调用了这个元素的某个属性，则因为函数的1原因该元素永远不可能销毁，所以需要手动来操作。
(function () {
    for (let i=1;i<10;i++){
        console.log(i);
    }
})();
// console.log(i);//i未定义
//ES5中创建块级作用域的方法，函数执行完毕没有
function Mock_arr(){
    this.name=1;
    this.age=2;
}
let application=function () {
    let arr=[];
    arr.push(new Mock_arr());//假装有一个数据
    return{
        getarr:function () {
            return arr.length;
        },//返回数组数量
        registerarr:function (arrss) {
            if(typeof arrss ==="object"){
                arr.push(arrss);
            }
        }//注册数组
    }
};
let pp1=application();
let pp2=application();
pp1.registerarr({key:22});
console.log(pp1.getarr()+"------"+pp2.getarr());
console.log(pp1===pp2,pp1,pp2);
//模块模式，创建单例，同时为单例创建私有属性和方法，单例指一个只有实例的对象（即以对象字面量来创建的对象，没有原型）。
