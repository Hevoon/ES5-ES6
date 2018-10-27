let arr=[1,2,3,4,5];

arr.every(function (item,index,array) {
    return(item>2);
});//1
arr.some(function (item) {
   return(item>2);
});//2
arr.filter(function (item,index,array) {
    return(item>2);
});//3
arr.map(function (item, index,array) {
   if(item>2){
       return item*2;
   }
   else {
       return index;
   }
});//4
arr.forEach(function (item,index,array) {
    console.log('5_'+item);
});//5

arr.reduce(function (prev,cur,index,array) {
    console.log('6_'+prev);
   return prev+cur+index;
});//6
arr.reduceRight(function (prev,cur,index,array) {
    console.log('7_'+prev);
    return prev+cur+index;
});//7
console.log(arr);