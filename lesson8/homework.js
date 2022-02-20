// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  котрий :
// -- отримує текст з параграфа з id "content"
let contentElements = document.getElementById(`content`);
console.log(contentElements);
// -- отримує текст з блоку з id "rules"
let rulesElements = document.getElementById(`rules`);
console.log(rulesElements);
// -- замініть текст параграфа з id 'content' на будь-який інший
contentElements.innerText = `qqqqqqqqqqqqqqqqqqqqqqqq`;
// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesElements.innerText = `wwwwwwwwwwwwwwwwwwwwwwww`;
// -- змініть кожному елементу колір фону на червоний
let bodyElements = document.body.children;
for (const elements of bodyElements) {
    elements.style.background = `red`;
}
// -- змініть кожному елементу колір тексту на синій
for (const elements of bodyElements) {
    elements.style.color = `blue`;
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
let classList = document.getElementById(`rules`);
console.log(classList.classList);
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let classFcRules = document.getElementsByClassName(`fc_rules`);
for (const elements of classFcRules) {
    elements.style.color = `red`;
}