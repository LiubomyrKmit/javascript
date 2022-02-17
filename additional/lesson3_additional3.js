// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
//     b. заповнити його 50 непарними числами за допомоги циклу.
//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

let emptyArray = [];
for (let i = 2, j = 0; i <= 100; i += 2, j++) {
    emptyArray[j] = i;
}

console.log(emptyArray);

let emptyArray1 = [];
for (let i = 1, j = 0; i <= 100; i += 2, j++) {
    emptyArray1[j] = i;
}

console.log(emptyArray1);

let random20Numbers = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.round(Math.random() * 20));
    }
    return array;
}
console.log(random20Numbers(20));

let random20Numbers1 = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.round(Math.random() * (732 - 8 + 1)) + 8);
    }
    return array;
}
console.log(random20Numbers1(20));
// 2. Вивести за допомогою console.log кожен третій елемен
