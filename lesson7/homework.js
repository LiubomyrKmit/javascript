// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const userArray = [
    new User(1, `Vasyl`, `Popov`, `vasylpopov@gmail.com`, 380631231231),
    new User(12, `Stepan`, `Borovets`, `stepaborovets@gmail.com`, 3806312332111),
    new User(93, `Leonid`, `Haos`, `haos@gmail.com`, 380985463789),
    new User(84, `Myhaylo`, `Lyhoglyad`, `misha123@gmail.com`, 380671267345),
    new User(35, `Sergiy`, `Kravchuk`, `Kravchuk@gmail.com`, 380989876125),
    new User(66, `Yaryna`, `Bila`, `bila@gmail.com`, 380634554455),
    new User(77, `Hrystyna`, `Lugova`, `hrustya@gmail.com`, 380981234567),
    new User(48, `Olesya`, `Vovk`, `vovk@gmail.com`, 380668374912),
    new User(59, `Ruslana`, `Nagirna`, `ruslana1223@gmail.com`, 380638877665),
    new User(10, `Victoria`, `Danchuk`, `vika3993@gmail.com`, 380989876234),
]

//- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArray.filter((item) => {
    if (item.id % 2 === 0) {
        return item
    }
}));

//- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

console.log(userArray.sort((a, b) => a.id - b.id));

//- створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

const emptyArray = [
    new Client(1, `Vasyl`, `Popov`, `vasylpopov@gmail.com`, 380631231231, [`toyota`, `bmw`, `audi`, `jeep`]),
    new Client(12, `Stepan`, `Borovets`, `stepaborovets@gmail.com`, 3806312332111, [`snickers`, `mars`, `bounty`, `twix`]),
    new Client(93, `Leonid`, `Haos`, `haos@gmail.com`, 380985463789, [`corona`, `miller`, `bud`, `stella artois`]),
    new Client(84, `Myhaylo`, `Lyhoglyad`, `misha123@gmail.com`, 380671267345, [`iphone`, `samsung`, `redmi`, `nokia`]),
    new Client(35, `Sergiy`, `Kravchuk`, `Kravchuk@gmail.com`, 380989876125, [`lacoste`, `tommy hilfiger`, `levis`]),
    new Client(66, `Yaryna`, `Bila`, `bila@gmail.com`, 380634554455, [`toothpaste`, `soap`, `shampoo`]),
    new Client(77, `Hrystyna`, `Lugova`, `hrustya@gmail.com`, 380981234567, [`watermelon`, `plum`, `grape`]),
    new Client(48, `Olesya`, `Vovk`, `vovk@gmail.com`, 380668374912, [`eggplant`, `cucumber`, `tomato`]),
    new Client(59, `Ruslana`, `Nagirna`, `ruslana1223@gmail.com`, 380638877665, [`milk`, `cheese`, `yogurt`]),
    new Client(10, `Victoria`, `Danchuk`, `vika3993@gmail.com`, 380989876234, [`pizza`, `hamburger`, `hot dog`]),
]

//- Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(emptyArray.sort((a, b) => a.order.length - b.order.length));