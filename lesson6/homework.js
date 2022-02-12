// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let string1 = 'hello world';
console.log(string1.length);
let string2 = `lorem ipsum`;
console.log(string2.length);
let string3 = `javascript is cool`;
console.log(string3.length);

//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

console.log(string1.toUpperCase());
console.log(string2.toUpperCase());
console.log(string3.toUpperCase());

//- Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
string1 = string1.toUpperCase();
string2 = string2.toUpperCase();
string3 = string3.toUpperCase();
console.log(string1.toLowerCase());
console.log(string2.toLowerCase());
console.log(string3.toLowerCase());

//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let dirtyString = ' dirty string   ';
dirtyString = dirtyString.trim();
console.log(dirtyString);

//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
//     let arr = stringToarray(str);
//     document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let stringToArray = (str) => {
    return str.split(` `);
}

let str = 'Каждый охотник желает знать';
document.write(stringToArray(str));
console.log(stringToArray(str));

//- Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
//     document.writeln(delete_characters(str, 7)); // Каждый

let delete_characters = (str, length) => {
    return str.substring(str, length);
}

document.write(`<p>${delete_characters(str, 7)}</p>`);
console.log(delete_characters(str, 7));

//- Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//    let str = "HTML JavaScript PHP";
//    document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let insert_dash = (str) => {
    let a = str.split(` `).join(`-`).toUpperCase();
    return a;
}

let str1 = "HTML JavaScript PHP";
document.write(`<p>${insert_dash(str1)}</p>`);
console.log(insert_dash(str1));

//- Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let someFunction = (str) => {
    if (str[0] !== ` `)
        return str[0].toUpperCase() + str.slice(1);
}

let someText = `some text`;
console.log(someFunction(someText));

//- Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let capitalize = (str) => {
    return str.split(` `).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(capitalize(`aa bb cc dd`));
document.write(capitalize(`aa bb cc dd`));