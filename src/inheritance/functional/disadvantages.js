function Person(name, age) {
    let name = name
    this.age = age;

    this.getInfo = () => {
        return { name: name, age: this.age };
    }
}

function Worker(name, age) {
    Person.apply(this, arguments); // задаём наследование
}

const worker = new Worker('Vasya', 33); // создаём экземпляр класса

console.log(worker.name); // undefined
console.log(worker.age); // 33
console.log(worker.getInfo()); // { name: 'Vasya', age: 33 }