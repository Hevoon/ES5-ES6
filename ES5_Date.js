let d1=new Date(Date.UTC(2019,0,25,19,45,45));
let d2=new Date(Date.parse("6/25/2017"));
console.log(d1+'-----'+d2);
let d1_1=d1.toDateString();
let d1_2=d1.toTimeString();
let d1_3=d1.toLocaleDateString();
let d1_4=d1.toLocaleTimeString();
let d1_5=d1.toUTCString();
console.log(d1_1+'-----'+d1_2+'-----'+d1_3+'-----'+d1_4+'-----'+d1_5);