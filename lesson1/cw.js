// 1. Створити масив з 10 чисел (можна використовувати Math.random Та Math.floor). Скласти результат цих чисел в змінній result.
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = array[0] + array[1] + array[2] + array[3] + array[4] + array[5] + array[6] + array[7] + array[8] + array[9];
console.log(array);
console.log(result);
//2. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр
let book = {
    name: `javascript for children`,
    page: 500,
    genre: 'educational'
}
// 3. Створити об'єкт book з наступними полями  - назва, кількість сторінок, жанр, автори
let book1 = {
    name: `javascript for children`,
    page: 500,
    genre: 'educational',
    authors: `Man` + `Woman`
}
//4. Створити маис об'єктів book з наступними полями  - назва, кількість сторінок, жанр, автори. Вивести кожну книгу як окремий об'єкт
let books = [`Harry Potter`, `Lord of rings`, `Hunger games`];
books[0] = {
    name: `Harry Potter`,
    page: 897,
    genre: 	`Fantasy`,
    authors: `J. K. Rowling`
}
books[1] = {
    name: `Lord of rings`,
    page: 1034,
    genre: `High fantasy`,
    authors: `J. R. R. Tolkien`
}
books[2] = {
    name: `Hunger games`,
    page: 822,
    genre: `Adventure`,
    authors: `Suzanne Collins`
}
console.log(books);
//5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//    Значення площі зберігати в змінній s.
let height = 23;
let width = 10;
let s = height * width;
console.log(s)
//6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//         результат помістіть у змінну v.
let h = 10;
let dc = 4;
const PI = 3.14;
let v = PI * Math.pow(dc / 2, 2) * h;
console.log(v)
//7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//        Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь) або оператор зведення в ступінь **).
let n = 3;
let m = 4;
let k = Math.sqrt(n**2 + m**2);
console.log(k);