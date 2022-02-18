// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model,manufacturer,production_year,max_speed,engine_size){
    this.model = model;
    this.manufacturer = manufacturer;
    this.productionYear = production_year;
    this.maxSpeed = max_speed;
    this.engineSize = engine_size;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    };
    this.info = function () {
        for (const key in this) {
            if (typeof this[key] !== "function")
                console.log(`${key} - ${this[key]}`);
        }
    };
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    };
    this.changeYear = function (newValue) {
        this.productionYear = newValue;
    };
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

console.log(new Cars(`Ford`,`USA`,2018,250,3.5));
let newCar = new Cars();
newCar.drive();
newCar.info();
newCar.increaseMaxSpeed();
newCar.changeYear();
newCar.addDriver();
console.log(newCar);

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class CarsNew {
    constructor(model, manufacturer, productionYear, maxSpeed, engineSize) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.productionYear = productionYear;
        this.maxSpeed = maxSpeed;
        this.engineSize = engineSize;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        for (const key in this) {
            if (typeof this[key] !== "function")
                console.log(`${key} - ${this[key]}`);
        }
    }
    increaseMaxSpeed (newSpeed) {
        this.maxSpeed = this.maxSpeed + newSpeed;
    }
    changeYear (newValue) {
        this.productionYear = newValue;
    }
    addDriver (driver) {
        this.driver = driver;
    }
}

console.log(new CarsNew(`Ford`,`USA`,2018,250,3.5));
let newCar1 = new CarsNew();
newCar1.drive();
newCar1.info();
newCar1.increaseMaxSpeed();
newCar1.changeYear();
newCar1.addDriver();
console.log(newCar1);

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

const cinderellaArray = [
    new Cinderella(`Jasmin`,22,36),
    new Cinderella(`Esmeralda`,18,35),
    new Cinderella(`Bella`,21,37),
    new Cinderella(`Diana`,24,38),
    new Cinderella(`Catherine`,22,36),
    new Cinderella(`Elena`,27,39),
    new Cinderella(`Victoria`,28,39),
    new Cinderella(`Eva`,25,38),
    new Cinderella(`Caroline`,27,38),
    new Cinderella(`Rosalie`,23,37),
]
console.log(cinderellaArray);

class Prince {
    constructor(name, age, womenShoes) {
        this.name = name;
        this.age = age;
        this.womenShoes = womenShoes;
    }
}
const princeOnAWhiteHorse = new Prince(`Leopold`,30,37);

const couple = (cinderellaArray,princeOnAWhiteHorse) => {
    for (const item of cinderellaArray) {
        if (item.footSize === princeOnAWhiteHorse.womenShoes) {
            return `${item.name}`;
        }
    }
}

console.log(couple(cinderellaArray,princeOnAWhiteHorse));

const couple1 = cinderellaArray.find((item) => item.footSize === princeOnAWhiteHorse.womenShoes);
console.log(couple1);