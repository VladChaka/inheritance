function Person(name) {
    this.name = name;
}

Person.prototype.getName = function() {
    return this.name;
}

function Worker(name) {
    Person.call(this, name);
}

// Worker.prototype.__proto__ = Person.prototype;
Worker.prototype = Object.create(Person.prototype);
Worker.prototype.constructor = Worker;

const worker = new Worker('Vasya');

console.log(worker.getName()); // Vasya