"use strict";
// 使用class来定义一个类
class person {
    constructor() {
        // 定义属性
        // 直接定义的属性为实例属性，需要通过对象实例去访问
        this.name = '孙悟空';
    }
    // readonly 只读属性
    sayHello() {
        console.log('hello');
    }
}
// 静态对象可以直接去访问
person.age = 999;
const per = new person();
console.log(per);
console.log(per.name);
// console.log(per.age); 静态对象会报错
console.log(person.age); //直接去访问
per.sayHello();
