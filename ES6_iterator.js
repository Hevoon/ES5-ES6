//iterator为接口，iterable

function makeIterator(array) {
    let nextIndex = 0;
    return {
        [Symbol.iterator]: function () {
            function next() {
                return nextIndex < array.length ?
                    {value: array[nextIndex++], done: false} :
                    {value: undefined, done: true};
            }
            return {next: next};
        }
    };
}//创建一个返回带有iterator接口对象的函数
let it = makeIterator(['a', 'b']);
for (let i of it) {
    console.log("我是遍历器对象返回的值：" + i);
}
console.log(it[Symbol.iterator]);

/*********************************************************************/
//预定好的iterator接口的数据结构如下：
//Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象


//iterator接口函数：
let obj = {
    [Symbol.iterator]: function () {
        return {
            next: function () {
                return {
                    value: 1,
                    done: true
                };
            }
        };
    }
};//symbol.iterator属性最本质就是返回一个遍历器对象，遍历器对象含有next方法，方法会返回value和done；

