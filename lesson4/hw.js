// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function placeOfRectangle(a, b) {
    let sOfRectangle = a * b;
    return sOfRectangle;
}

console.log(placeOfRectangle(4, 8));
document.write(`площа прямокутника = ` + placeOfRectangle(4, 8) + ` `);

//- створити функцію яка обчислює та повертає площу кола з радіусом r
const PI = 3.14;

function placeOFCircle(r) {
    let sOfCircle = PI * (r * r);
    return sOfCircle;
}

console.log(placeOFCircle(8));
document.write(`площа кола = ` + placeOFCircle(8) + ` `);

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function placeOfСylinder(h, r) {
    let sOfCylinder = 2 * PI * r * h;
    return sOfCylinder;
}

console.log(placeOfСylinder(80, 50));
document.write(`площа циліндра = ` + placeOfСylinder(80, 50) + ` `);

//- створити функцію яка приймає масив та виводить кожен його елемент
let arr = [1, 2, 3, 4];

function dataArray(arr) {
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

dataArray(arr);

//- створити функцію яка створює параграф з текстом. Текст задати через аргумент
function someText(text) {
    document.write(`<p>${text}</p>`);
}

someText(`some text`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function listCreator(text) {
    document.write(`<ul>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
}

listCreator(`text`);

//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

function listCreator1(text, number) {
    document.write(`<ul>`);
    for (i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
}

listCreator1(`3 li`, 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let array = [1, 999, `string`, true, false];

function arrayElements(quality) {
    document.write(`<ol>`)
    for (i = 0; i < quality.length; i++) {
        document.write(`<li>${quality[i]}</li>`)
    }
    document.write(`</ol>`);
}

arrayElements(array);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let arrayInfo = [{id: 1, name: `Vasyl`, age: 56}, {id: 2, name: `Stepan`, age: 38}, {id: 3, name: `Oleg`, age: 27}];

function objectArray(array) {
    for (const arrayElement of array) {
        document.write(`<div>${arrayElement.id}.${arrayElement.name} - ${arrayElement.age}</div>`);
    }
}

objectArray(arrayInfo);