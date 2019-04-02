function Person(name) { // создаём класс
    this.name = name;
}

Person.prototype.getName = function() { // записываем в прототип класса функцию
    return this.name;
}

function Worker(name) {
    Person.apply(this, arguments); // передаём имя нашего работника в класс Person
}

/**
 * todo: Рассказать почему так
 */
// Object.create - создаёт обьект с указаным обьектом прототипа (параметр записывает в __proto__)
Worker.prototype = Object.create(Person.prototype); // задаём наследование

/**
 * todo: Узнать про сохранение контекста
 */
Worker.prototype.constructor = Worker; // сохраняем конструктор дочернего класса

const worker = new Worker('Vasya'); // создаём экземпляр класса

console.log(worker.getName()); // Vasya