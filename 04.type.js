var o;
// object表示一个js对象（但不实用）
var z;
z = { name: '孙悟空', age: 19 };
// {}用来指定对象可以包含哪些属性
// 语法：{属性名:属性值}
// 在属性后面加？表示属性是可选的
// 设置函数结构的类型声明
// 语法：(参数名:参数类型)=>返回值类型
var s;
// 数组的类型声明
var g;
g = [1, 2, 3, 4, 5];
// 元组类型声明
// 元组就是固定长度的数组
var p;
// enum枚举
var m;
m = {
    name: '孙悟空',
    age: 19
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
// &表示同时
var j;
j = { name: '小慕', age: 18 };
