// 直接使用字面量进行类型声明
var h;
// 可以用|连接多个类型
var i;
var q;
q = true;
q = 'hello';
// any表示任意的类型 一个变量设置为any 相当于对改变了关闭了ts的类型检测
var r;
r = 10;
r = 'hello';
r = true;
// 所以在实际开发中不建议使用any
// 声明变量如果不指定类型 则ts解析器会自动判断变量类型为any（隐式any）
var t;
// unknown表示未知类型的值
t = 10;
t = "hello";
t = true;
// r的类型是any 它可以赋值给任何变量
t = r;
// unknown实际上就是一个类型安全的any
// unknown类型的变量无法直接赋值给其他的变量
function fn() {
    return 10;
}
// void用来表示为空 以函数为例子 就表示没有返回的值
function qq() {
    return;
}
function fn2() {
    throw new Error('error');
}
// never表示永远不会有返回值的函数
// 只能用于声明函数的返回值类型
