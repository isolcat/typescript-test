"use strict";
class Dog {
    // 构造函数
    constructor(name, age) {
        // 在调用new Dog()的时候就调用了该构造函数
        console.log(this); //在实例方法中表示当前的实例
        // 通过this向新建的对象添加属性
        this.name = name;
        this.age = age;
    }
    bark() {
        alert('汪汪汪');
    }
}
const dog = new Dog('旺财', 3);
const dog2 = new Dog('小白', 1);
console.log(dog);
console.log(dog2);
