let o:object;
// object表示一个js对象（但不实用）

let z:{name:string,age?:number}
z={name:'孙悟空',age:19}
// {}用来指定对象可以包含哪些属性
// 语法：{属性名:属性值}
// 在属性后面加？表示属性是可选的

// 设置函数结构的类型声明
// 语法：(参数名:参数类型)=>返回值类型
let s:(a:number,b:number)=>number;
// 数组的类型声明
let g:Array<number>;
g=[1,2,3,4,5];
// 元组类型声明
// 元组就是固定长度的数组
let p:[string,number];

// enum枚举
let m:{name:string,age:number};
m={
    name:'孙悟空',
    age:19
}

enum Gender{
    Male=0,
    Female=1
}

// &表示同时
let j:{name:String}&{age:number}
j={name:'小慕',age:18};