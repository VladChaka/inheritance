function Person(name, age) {
    let personeName = name; // private
    this.age = age; // public

    this.getInfo = () => {
        return { name: personeName, age: this.age, salary: this._salary };
    }
}

function Worker(name, age, salary) {
    Person.apply(this, arguments);

    this._salary = salary; // protected
}

const worker = new Worker('Vasya', 33, 1000);

console.log(worker.getInfo()); // { name: 'Vasya', age: 33, salary: 1000 }