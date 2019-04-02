function Person(name) { // создаём класс
    this.name = name;
}

const person = new Person('Vasya'); // создаём экземпляр класса

console.log(person.name); // Vasya