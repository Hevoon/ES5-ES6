// let tr = 1;
// let you = prompt("say?");
// if (you === null) {
//     tr = 0;
// }
// let promise = new Promise(function (resolve, reject) {
//     if (this.tr) {
//         resolve("you are winner!");
//     } else {
//         let error = "you are worry!";
//         reject(error);
//     }
// });//promise函数的实例
// promise.then(function (vaule) {
//     alert(vaule);
// }, function (error) {
//     alert(error)
// });//调用实例,then方法指定了回调函数，在当前脚本所有同步任务执行完后才会执行

// function times(ms) {
//     return new Promise((resolve, reject) => {
//         setTimeout(resolve, ms,"done");
//     })
// }
// times(5000).then(value =>{
//     alert(value);
// } );

/***********************************************************************************/
const getJSON = function (url) {
    const promise = new Promise(function (resolve, reject) {
        console.log(1);
        let handler = function () {
            console.log("现在的状态:");
            if (this.readyState !== 4) {
                console.log(this.readyState);
                setTimeout(1000);
                return;//此处的return在不成功的时候一直返回
            }
            console.log("请求变了4，但promise状态仍在变化中");
            if (this.status === 200) {
                console.log("状态变化了！！");
                resolve(this.response);
                console.log("此时已经成为了resolve");
            } else {
                reject(new Error(this.statusText));
                console.log("此时变为了reject");
            }
        };
        console.log(2);
        const client = new XMLHttpRequest();
        client.open("GET", url);
        client.onreadystatechange = handler;
        client.responseType = "json";
        client.setRequestHeader("Accept", "application/json");
        client.send();

    });
    return promise;
};
let url = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-02-26/2017-06-10';
let url1 = 'https://hq.tigerbrokers.com/fundamental/finance_calendar/getType/2017-03-26/2017-06-10';

/***************************************************************************************************/
console.log(4);
getJSON(url).then(value => {
    console.log("此时then（回调）已经执行");
    console.log(value);
    // if (value){
    //     throw new Error("SEE HERE");
    // }
    // return reject;
    // return null;
    return value;
}).then(
    comments => console.log("resolvedss: ", comments),
    err => {
        console.log("errorss: ", err);
        // console("========");
        console.log("========");
    }
).then(
    com => console.log("say:", com)
).catch(
    err => console.log("eeeeee:", err)
);
console.log(5);
// 上面的例子里面，promise对象中resolve()与reject()方法没有放在函数里，导致在then的回调函数无法调用这个方法，只有将其放在一个函数中，才可以在后面使用then和catch方法回调，
// 同时，观看上面的数字出现的顺序，promise对象实现了异步操作，同时promise对象一旦创建就会立即执行，而回调函数不会立即执行。 Promise 的状态一旦改变，就永久保持该状态，不会再变了
// promise对象then方法定义在原型Promise.prototype上的，then方法返回一个新的promise对象。then方法接受2个参数，第一个为resolve第二个参数为reject。
// then中必须接受一个函数作为参数，若非函数则会忽略这个then方法，同时then执行完毕后需要返回一个新值给下一个then方法，若无return则返回undefined。
// then方法返回的新的promise对象也是处于resolve或reject状态的，resolve状态表示成功返回状态，reject多为报错状态或者抛出错误。
// 上一个then方法接收到reject状态的promise对象后，如果执行无错或者没有抛出错误，则会返回一个resolve状态的promise对象，无返回则为resolve（undefined）。


/***************************************************************************************************/
// getJSON(url1).then(value => console.log(value)).finally(() => console.log("we make finally"));
// finally方法不接受任何参数，与状态无关。

/***************************************************************************************************/
// Promise.all([getJSON(url),getJSON(url1)]).then(value => {console.log(value)});
// Promise.all当参数中全部为resolve状态才为resolve状态执行then，否则会catch其中的第一个错误。

/***************************************************************************************************/
// setTimeout(function (){Promise.race([getJSON(url), getJSON(url1)]).then(value => {
//     console.log("================");
//     console.log(value)
// })},0);
//Promise.race方法当参数中有一个变成reject或resolve状态时就可以调用后面的then或catch状态

/***************************************************************************************************/
let thenable = {
    then: function (resolve, reject) {
        resolve("我是一个带有then方法的对象");
    }
};
let p2 = Promise.resolve(thenable);//1.promise实例参数（返回本身） 2thenable对象（执行then方法） 3.普通对象或者根本不是对象（返回resolve状态） 4.不带有任何参数（resolve状态）
p2.then(value => console.log(value));//立即resolve的 Promise 对象，是在本轮“事件循环”（event loop）的结束时，而不是在下一轮“事件循环”的开始时。
