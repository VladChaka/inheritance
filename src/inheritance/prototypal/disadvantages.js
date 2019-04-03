function Person(name) {
    this.name = name;
}

Person.prototype.age = 33;

Person.prototype.getNameAndAge = function() {
    return 'Имя: ' + this.name + ', возраст: ' + this.age;
}

function Worker(name, salary) {
    Person.call(this, name);

    this.salary = salary;
}

Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.getFullInfo = function () {
    return this.getNameAndAge() + ', зарплата: ' + this.salary;
};

const worker = new Worker2('Vasya', 1000);

console.log(worker.age); // 33
console.log(worker.getFullInfo()); // Имя: Vasya, возраст: 33, зарплата: 1000