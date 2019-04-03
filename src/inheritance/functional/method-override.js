function Person(name, age) {
    this.name = name
    this.age = age;

    this.getInfo = () => {
        return { name: this.name, age: this.age };
    }
}

function Worker(name, age, salary) {
    Person.apply(this, arguments);

    this.salary = salary;

    const parentGetinfo = this.getInfo;
    this.getInfo = () => {
        let info = parentGetinfo();
        info.salary = this.salary;
        return info;
    }
}

const worker = new Worker('Vasya', 33, 1000);

console.log(worker.getInfo()); // { name: 'Vasya', age: 33, salary: 1000 }
