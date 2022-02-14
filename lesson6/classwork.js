// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normalName = (str) => {
    let name = str.replace('.', '').replace('.', ' ').replace('-', '').replace('-', '').replace('-', ' ').replace('_', '').replace('_', ' ');
    return name;
}
console.log(normalName(n1));
console.log(normalName(n2));
console.log(normalName(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let randomNumbers = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
}
console.log(randomNumbers(100));

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let random = randomNumbers(100);
random.sort((a, b) => a - b);
console.log(random);
random.sort((a, b) => b - a);
console.log(random);

//- створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
random.sort((a, b) => a - b);
console.log(random.filter(elem => elem % 2 === 0));

//- створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
let arrayRandom = (num) => {
    let emptyArray = [];
    for (let i = 0; i < num; i++) {
        emptyArray.push(Math.floor(Math.random() * num));
    }
    return emptyArray.map(value => value.toString());
};
console.log(arrayRandom(10));

//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]

let sortNums = (arr, direction) => {
    if (direction === `ascending`)
        return arr.sort((a, b) => a - b);
    if (direction === `descending`)
        return arr.sort((a, b) => b - a);
}

console.log(sortNums([1, 12, 3, 43, 21, 0, -167], `descending`));

//- є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//  -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort(function (a, b) {
    return b.monthDuration - a.monthDuration;
}))

//-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filter = coursesAndDurationArray.filter(a => a.monthDuration > 5);
console.log(filter);