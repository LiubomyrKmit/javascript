// Все робити за допомоги js.
// - створити блок,
let blockDiv = document.createElement(`div`);
//     - додати йому класи wrap, collapse, alpha, beta
blockDiv.classList.add(`wrap`);
blockDiv.classList.add(`collapse`);
blockDiv.classList.add(`alpha`);
blockDiv.classList.add(`beta`);
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
blockDiv.style.background = `yellow`;
blockDiv.style.color = `purple`;
blockDiv.style.fontSize = `50px`;
// - додати цей блок в body.
document.body.append(blockDiv);
// - клонувати його повністю, та додати клон в body.
document.body.append(blockDiv.cloneNode(true));

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let arrayElements = ['Main','Products','About us','Contacts'];
let menuElements =  document.getElementsByClassName(`menu`)[0];
for (const elements of arrayElements) {
    let li = document.createElement('li');
    li.innerText = elements;
    menuElements.append(li);
}

// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (const elements of coursesAndDurationArray) {
    let divElements = document.createElement('div');
    divElements.innerText = `${elements.title} ${elements.monthDuration}`;
    document.body.append(divElements);
}

// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
for (const elements of coursesAndDurationArray) {
    let divElements = document.createElement('div');
    let h1 = document.createElement('h1');
    h1.innerText = elements.title;
    let p = document.createElement('p');
    p.innerText = elements.monthDuration;
    divElements.append(h1);
    divElements.append(p);
    document.body.append(divElements);
}