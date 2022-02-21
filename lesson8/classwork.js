// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) додає клас з назвою групи, елементу з ід main_header
let addMainHeader = document.getElementById(`main_header`);
addMainHeader.setAttribute(`class` ,`dec_2021`);
console.log(addMainHeader);
// b) робить шириниу елементу ul 400px
let widthUl = document.getElementsByTagName(`ul`);
widthUl[0].style.width = '400px';
console.log(widthUl);
// c) робить шириниу всіх елементів з класом linkList шириною 50%
let widthLinkList = document.getElementsByClassName(`linkList`);
for (const elements of widthLinkList) {
elements.style.width = `50%`;
}
console.log(widthLinkList);
// d) отримує текст який зберігається в елементі з класом listElement2
let getTextListElement2 = document.getElementsByClassName(`listElement2`);
console.log(getTextListElement2);
// e) отримує всі елементи li та змінює ім колір фону на сірий
let liBackGrey = document.getElementsByTagName(`li`);
console.log(liBackGrey);
for (const elements of liBackGrey) {
    elements.style.background = `grey`;
}
// f) отримує всі елементи 'a' та додає їм клас anchor
let addClassAnchor = document.getElementsByTagName(`a`);
console.log(addClassAnchor);
for (let elements of addClassAnchor) {
    elements.classList.add('anchor')
    console.log(elements);
}
// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
let link3Change40Px = document.getElementsByTagName(`a`);
console.log(link3Change40Px);
for (const elements of link3Change40Px) {
    if (elements.innerText === `link3`) {
        elements.style.fontSize = `40px`;
    }
}
// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
let addXXX = document.getElementsByTagName(`a`);
console.log(addXXX);
for (const elements of addXXX) {
    let newClass = elements.innerText;
    elements.classList.add(`element_${newClass}`);
}
// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let changeSubHeaderBackground = document.getElementsByClassName(`sub-header`);
console.log(changeSubHeaderBackground);
changeSubHeaderBackground[0].style.background = prompt('Enter background: (red, green, blue ...)');
changeSubHeaderBackground[1].style.background = prompt('Enter background: (red, green, blue ...)');
// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
let changeSubHeaderColor = document.getElementsByClassName(`sub-header`);
console.log(changeSubHeaderColor);
for (const elements of changeSubHeaderColor) {
    if (elements.innerText === `content 2 segment`) {
        elements.style.color = prompt(`Enter color: (red, green, blue ...)`);
    }
}
// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let changeTextContent1 = document.getElementsByClassName(`content_1`);
console.log(changeTextContent1);
for (const elements of changeTextContent1) {
    elements.innerText = prompt(`enter your text`);
}
// l) отримати елементи p та змінити їм padding на 20px
let pChangePadding = document.getElementsByTagName(`p`);
console.log(pChangePadding);
for (const elements of pChangePadding) {
    elements.style.padding = `20px`;
}
// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
let elementsText2 = document.getElementsByClassName(`text2`);
console.log(elementsText2);
for (const elements of elementsText2) {
    elements.innerText = `dec_2021`;
}