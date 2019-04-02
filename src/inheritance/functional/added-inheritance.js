function Person(name, age) {
    this.name = name
    this.age = age;

    this.getInfo = () => {
        return { name: this.name, age: this.age };
    }
}

function Worker(name, age) {
    Person.apply(this, arguments); // задаём наследование
}

const worker = new Worker('Vasya', 33); // создаём экземпляр класса

console.log(worker.getInfo()); // { name: 'Vasya', age: 33 }