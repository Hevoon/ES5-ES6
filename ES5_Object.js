let persion = {
    age: 18,
    name: "nick",
    school: "NO1_school",
    jbo: "web engineer"
};

/*************************************************/
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

/***************************************************/
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
/*********************************************************/
//定义多个属性，包括数据属性和访问器属性
Object.defineProperties(persion, {
    school: {
        configurable: false,//该属性表示能否通过delete删除属性从而重新定义属性，能否修改属性的特性，能否配置。一但设置为不可配置便不可以修改。
        enumerable: false,//表示能否通过for-in循环返回属性
        writable: false,//能否修改属性的值
        value: "JACK"
    },
    years: {
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
    }
});