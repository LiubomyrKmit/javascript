// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = prompt(`введіть число від 0 до 59`);
if (time <= 14 && time >= 0) {
    console.log(`перша чверть`)
} else if (time <= 29 && time >= 15) {
    console.log(`друга чверть`)
} else if (time <= 44 && time >= 30) {
    console.log(`третя чверть`)
} else if (time <= 59 && time >= 45) {
    console.log(`четверта чверть`)
} else {
    console.log(`некоректно введені дані`)
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt(`введіть число від 1 до 31`);
if (day <= 10 && day >= 1) {
    console.log(`перша декада`)
} else if (day <= 20 && day >= 11) {
    console.log(`друга декада`)
} else if (day <= 31 && day >= 21) {
    console.log(`третя декада`)
} else {
    console.log(`некоректно введені дані`)
}
//- У нас є змінна test, якщо  не дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;
if (test === true) {
    console.log('Вірно')
} else {
    console.log('Неправильно')
}
//- Якщо змінна a не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let a = prompt(`Введіть число 1, 0 , -3`);
if (a !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}
(a !== 0) ? console.log('Вірно') : console.log('Невірно');
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день.
let dayWeek = prompt('Введіть день тижня від 1 до 7');
switch (dayWeek) {
    case `1`:
        console.log(`лекція`)
        break;
    case `2`:
        console.log(`практична`)
        break;
    case `3`:
        console.log(`лекція`)
        break;
    case `4`:
        console.log(`практична`)
        break;
    case `5`:
        console.log(`лекція`)
        break;
    case `6`:
        console.log(`англійська`)
        break;
    case `7`:
        console.log(`вихідний`)
        break;
    default :
        console.log(`спробуйте ще раз`)
        break
}
//- Потрібно визначити Високосний рік чи ні. Високосні роки діляться націло на 4.
let year = prompt(`введіть котрий зараз рік`);
if (year % 4 === 0) {
    console.log(`рік високосний`)
} else {
    console.log(`рік невисокосний`)
}
//- Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let nameJS = prompt(`Яка «офіційна» назва JavaScript?`);
if (nameJS === `ECMAScript`) {
    console.log(`Правильно!`)
} else {
    console.log(`Не знаєте? ECMAScript!`)
}
