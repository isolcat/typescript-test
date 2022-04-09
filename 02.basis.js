var a;
// a的类型设置为了number 在此后的使用过程中只能为数字
// 相当于删除了js的隐式转换
a = 10;
// a='hello'; ts在此处就会直接报错
// 但如果这时候我们使用tsc 进行编译的话仍然会生成对应的js文件
var b;
b = 'hello';
// b=123; 
// 申明完变量就直接赋值
var c = 123;
// 如果变量的声明和赋值是同时进行的，ts会对变量进行类型检测
var d = false;
// d=123;
// js中的函数不考虑参数的类型和个数的
var e;
function sum(a, e) {
    return a + e;
}
console.log(sum(123, 456));
