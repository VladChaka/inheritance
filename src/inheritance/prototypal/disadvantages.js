function Person() { // создаём класс
    let name = '321';
    
    this.name1 = '123'
    this.setNewName = function(newName) {
        name = newName;
    };

    this.getName = function() {
        return name;
    };
}

Person.prototype.setName = function(name) {
    console.log(this);
    
    return this.name1;
    // return this.setNewName(name);
}
Person.prototype.get = function() {
    return this.getName();
}

function Worker() { }

/**
 * todo: Рассказать почему так
 */
// Object.create - создаёт обьект с указаным обьектом прототипа (параметр записывает в __proto__)
Worker.prototype = Object.create(Person.prototype); // задаём наследование

/**
 * todo: Узнать про сохранение контекста
 */
Worker.prototype.constructor = Worker; // сохраняем конструктор дочернего класса

const worker = new Worker(); // создаём экземпляр класса

worker.setName('Vasya');

console.log(worker.name); // undefined
// console.log(worker.get()); // 'Vasya'