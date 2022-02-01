// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
let greeting = `hello`;
let name = `owu`;
let com = `com`;
let ua = `ua`
let numbers = [1, 10, -999, 123, 16];
const PI = 3.14;
const twoSeven = 2.7;
let bool = true;
let bool2 = false;
console.log(greeting, name, com, ua, numbers, PI, twoSeven, bool, bool2);
alert(greeting);
alert(name);
alert(com);
alert(ua);
alert(numbers);
alert(PI);
alert(twoSeven);
alert(bool);
alert(bool2);
document.write(greeting, name, com, ua, numbers, PI, twoSeven, bool, bool2);
//- Переприсвоїти кожній змінній з завдання значення на довільне.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
greeting = `привіт`;
name = `ову`;
com = `ком`;
ua = `юа`;
numbers = [2, 11, -1000, 124, 17];
// PI
// twoSeven
//константа, значення лишаються незмінними
bool = false;
bool2 = true;
console.log(greeting, name, com, ua, numbers, PI, twoSeven, bool, bool2);
alert(greeting);
alert(name);
alert(com);
alert(ua);
alert(numbers);
alert(PI);
alert(twoSeven);
alert(bool);
alert(bool2);
document.write(greeting, name, com, ua, numbers, PI, twoSeven, bool, bool2);
//- Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person. (Не об'єкт)
let firstName = `Любомир`;
let middleName = `Романович`;
let lastName = `Кміть`;
let person = firstName + middleName + lastName;
//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
prompt(`ім'я`, firstName);
prompt(`по-батькові`, middleName);
let age = prompt(`вік`, 26);
console.log(` Вітаю ` + firstName + ` ` + middleName + `. Тобі ` + age + ` років.`);
document.write(` Вітаю ` + firstName + ` ` + middleName + `. Тобі ` + age + ` років.`);
//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, b, c);
//- Визначити відповідний оператор в виразах що б вийшов відповідний результат.
// В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
let a1 = 5 <= 6;
let a2 = 5 > 6;
let a3 = 5 === 6;
let a4 = 5 >= 6;
let a5 = 10 === 10;
let a6 = 10 == 10;
let a7 = 10 !== 10;
let a8 = 10 > 10;
let a9 = 10 < 10;
let a10 = 123 === '123';
let a11 = 123 == '123';
console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);
//- Подумайте Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
//     let str = "20";
//      let a = 5;
//      document.write(str + a + "<br/>");
//      document.write(str - a + "<br/>");
//      document.write(str * "2" + "<br/>");
//      document.write(str / 2 + "<br/>");
//Відповідь:
// 205 (стрінг + число, не обчислюється),
// 15 (переводить стрінг у число, обчислюється),
// 40 (переводить стрінг у число, обчислюється),
// 10 (переводить стрінг у число, обчислюється)