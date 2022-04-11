"use strict";
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log('动物在叫');
    }
}
class DDog extends Animal {
    // age:number;
    sayHello() {
        console.log('汪汪汪');
    }
    constructor(name, age) {
        // 手动调用父类的构造函数
        super(name, age);
    }
}
console.log(new DDog('旺财', 3));
