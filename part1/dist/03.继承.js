"use strict";
(function () {
    // 定义animal类
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    // 使DOg继承animal
    class Dog extends Animal {
        run() {
            console.log(`$(this.name)在跑`);
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log('喵喵喵');
        }
    }
    const dog = new Dog('旺财', 3);
    console.log(dog);
    const cat = new Cat('小白', 1);
    console.log(cat);
});
