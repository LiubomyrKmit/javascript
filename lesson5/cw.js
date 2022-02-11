// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let threeNumbersMin = (num1, num2, num3) => {
    if (num1 < num2 && num1 < num3) {
        console.log(num1);
    } else if (num2 < num1 && num2 < num3) {
        console.log(num2);
    } else if (num3 < num1 && num3 < num2) {
        console.log(num3);
    }
}

threeNumbersMin(111, 222, 333);

//- створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let threeNumbersMax = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1);
    } else if (num2 > num1 && num2 > num3) {
        console.log(num2);
    } else if (num3 > num1 && num3 > num2) {
        console.log(num3);
    }
}

threeNumbersMax(111, 222, 333);

//- створити функцію яка повертає найбільше число з масиву

let arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

let maxNumberArray = (array) => {
    let maximum = array[0];
    for (let i of array) {
        if (i > maximum) {
            maximum = i;
        }
    }
    return maximum;
}

console.log(maxNumberArray(arrayNumbers));

//- створити функцію яка повертає найменьше число з масиву

let minNumberArray = (array) => {
    let minimum = array[0];
    for (let i of array) {
        if (i < minimum) {
            minimum = i;
        }
    }
    return minimum;
}

console.log(minNumberArray(arrayNumbers));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArray = (arr) => {
    let sum = 0;
    for (const i of arr) {
        sum = i + sum;
    }
    return sum;
}

console.log(sumArray(arrayNumbers));

//- створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let sumArrayMiddle = (array) => {
    let sum = 0;
    for (const i of array) {
        sum = (i + sum) % array.length;
    }
    return sum;
}

console.log(sumArrayMiddle(arrayNumbers));

//- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let minMax = (...arg) => {
    let min = arg[0];
    let max = arg[0];
    for (const i of arg) {
        if (i > max) {
            max = i;
        } else if (i < min) {
            min = i;
        }
    }
    console.log(max);
    return min;
}

console.log(minMax(100, 200, 300));

//- створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let randomNumbers100 = (num) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.round(Math.random() * 100));
    }
    return array;
}

console.log(randomNumbers100(100));

//- створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomNumbersLimit = (num, limit) => {
    let array = [];
    for (let i = 0; i < num; i++) {
        array.push(Math.round(Math.random() * limit));
    }
    return array;
}

console.log(randomNumbersLimit(50, 1));

//- Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let arrayReverse = (arr) => {
    for (let i = arr.length - 1; i >= 0; i--) {
        console.log(arr[i]);
    }
}

arrayReverse(arrayNumbers);