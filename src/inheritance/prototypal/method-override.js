function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.getInfo = function() {
    return { name: this.name, age: this.age };
}

function Worker(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.getInfo = function() {
    return { name: this.name, age: this.age, salary: this.salary };
}

const worker = new Worker('Vasya', 33, 1000);

console.log(worker.getInfo()); // { name: 'Vasya', age: 33, salary: 1000 }