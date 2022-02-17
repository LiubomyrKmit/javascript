// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//     Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    document.write(`це великий масив, в якому  3 і більше елементи`);
} else {
    document.write(`це маленький масив, в якому менше 3-х елементів`);
}

//- Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let number1 = +prompt(`введіть перше число`);
let number2 = +prompt(`введіть друге число`);
let number3 = +prompt(`введіть третє число`);
console.log(number2);
if (number1 > number2 && number2 > number3) {
    console.log(number2);
}
if (number3 > number2 && number2 > number1) {
    console.log(number2);
}
if (number2 > number1 && number1 > number3) {
    console.log(number1);
}
if (number3 > number1 && number1 > number2) {
    console.log(number1);
}
if (number1 > number3 && number3 > number2) {
    console.log(number3);
}
if (number2 > number3 && number3 > number1) {
    console.log(number3);
} else (`спробуйте ще раз`);

// - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let a = 3;
let b = 4;
let result;
a + b < 4 ? result = 'Мало' : result = 'Багато';

//- Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let someNumber = +prompt(`введіть будь-яке число`);
let n = -100;
let numberZero = 0;
let m = 100;
let l = someNumber < numberZero ? `число негативне` : someNumber > numberZero ? `число позитивне` : `це нуль`;
console.log(l);

