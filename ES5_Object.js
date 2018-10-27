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
};//在构造函数的原型上添加属性和方法
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
p1.jobs="what";
for(let prop in p1){
       console.log(prop+"----");
}//原型中的construction方法不可枚举，如果实例创造一个construction方法，便可以被for in枚举出来。
console.log(Object.keys(p1));//获得所有可枚举数属性
console.log(Object.getOwnPropertyNames(Persion.prototype));//所有属性，无论是否可枚举