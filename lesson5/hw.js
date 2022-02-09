// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою
let sRectangle = (a, b) => {
    return a * b;
}
console.log(sRectangle(4, 8));

//- створити функцію яка обчислює та повертає площу кола
const Pi = 3.14;

let sCircle = (r) => {
    s = Pi * (r * r);
    return s;
}
console.log(sCircle(10));

//- створити функцію яка обчислює та повертає площу циліндру

let sCilinder = (r, h) => {
    s = 2 * Pi * r * h;
    return s;
}
console.log(sCilinder(6, 10));

//- створити функцію яка приймає масив та виводить кожен його елемент

let array = [true, false, 1, 2, 3, `A`, `B`, `C`, `D`, `E`];

let arrayElements = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
arrayElements(array);

//- створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let pTextP = (text) => {
    document.write(`<p>${text}</p>`);
}
pTextP(`some text`);

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let list3Elements = (text) => {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

list3Elements(`some text`);

//- створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let list3Elements1 = (text, quantity) => {
    for (let i = 0; i < quantity; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

list3Elements1(`some text`, 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayElements1 = (arr) => {
    document.write(`<ol>`)
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`)
    }
    document.write(`</ol>`);
}

arrayElements1(array);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayInfo = [{id: 1, name: `Vasyl`, age: 56}, {id: 2, name: `Stepan`, age: 38}, {id: 3, name: `Oleg`, age: 27}];

let objectArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}

objectArray(arrayInfo);