// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let int = [1, -487, 10295, 78, 333];
let str = [`one`, `zoo`, `javascript`, `fifty`, `30 seconds to mars`];
let mix = [true, false, 2022, `fire`, `water`];
console.log(int, str, mix)
//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let array = [];
array[0] = 30;
array[1] = ` seconds`;
array[2] = ` to`;
array[3] = ` Mars`;
console.log(array);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let a = 0; a < 10; a++) {
    document.write(`<div>довільний текст</div>`)
}
//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let b = 1; b < 11; b++) {
    document.write(`<div>${b}довільний текст</div>`);
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let c = 0;
while (c < 20) {
    document.write(`<h1>довільний текст</h1>`);
    c++;
}
//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let d = 1;
while (d < 21) {
    document.write(`<h1>${d}довільний текст</h1>`);
    d++;
}
//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let stringElements = [`one`, `two`, `three`, `four`, `five`, `six`, `seven`, `eight`, `nine`, `zero`];
for (i = 0; i < stringElements.length; i++) {
    console.log(stringElements[i]);
}
//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let mixElements = [true, false, 2022, `fire`, `water`, `2022`, 12345, 0, `ground`, `air`];
for (i = 0; i < mixElements.length; i++) {
    console.log(mixElements[i]);
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let booleanElements = [0, [], {}, undefined, true, false, `akdjafhl`, 123, null, `zero`];
for (i = 0; i < booleanElements.length; i++) {
    if (typeof booleanElements[i] === `boolean`) {
        console.log(booleanElements[i])
    }
}
//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (i = 0; i < booleanElements.length; i++) {
    if (typeof booleanElements[i] === `number`) {
        console.log(booleanElements[i])
    }
}
//- Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (i = 0; i < booleanElements.length; i++) {
    if (typeof booleanElements[i] === `string`) {
        console.log(booleanElements[i])
    }
}
//- Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let emptyArray = [];
emptyArray[0] = `I`;
emptyArray[1] = `study`;
emptyArray[2] = `JS`;
emptyArray[3] = 2;
emptyArray[4] = 0;
emptyArray[5] = 2;
emptyArray[6] = 2;
emptyArray[7] = true;
emptyArray[8] = false;
emptyArray[9] = `324hfbfsddbnfjrth4r`;
for (i = 0; i < emptyArray.length; i++) {
    console.log(emptyArray[i]);
}
//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let o = 0; o < 10; o++) {
    console.log('поточний крок циклу : ' + o + ' ');
    document.write('поточний крок циклу : ' + o + ' ');
}
//- Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let o = 0; o < 100; o++) {
    console.log('поточний крок циклу : ' + o + ' ');
    document.write('поточний крок циклу : ' + o + ' ');
}
//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let o = 0; o < 100; o += 2) {
    console.log('поточний крок циклу : ' + o + ' ');
    document.write('поточний крок циклу : ' + o + ' ');
}
//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let o = 0; o < 100; o++) {
    if (!(o % 2)) {
        console.log('поточний крок циклу : ' + o + ' ');
        document.write('поточний крок циклу : ' + o + ' ');
    }
}
//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let o = 0; o < 100; o++) {
    if (o % 2) {
        console.log('поточний крок циклу : ' + o + ' ');
        document.write('поточний крок циклу : ' + o + ' ');
    }
}