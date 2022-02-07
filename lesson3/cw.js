// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++
}
//2. перебрати його циклом for
for (i = 0; i < array.length; i++) {
    console.log(array[i])
}
//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let q = 0;
while (q < array.length) {
    if (!(q % 2)) {
        console.log(array[q]);
    }
    q++
}
//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
        console.log(array[i])
    }
}
//5. перебрати циклом while та вивести  числа тільки парні  значення
let w = 0;
while (w < array.length) {
    if (w % 2) {
        console.log(array[w]);
    }
    w++
}
//6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < array.length; i++) {
    if (i % 2) {
        console.log(array[i])
    }
}
//7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < array.length; i++) {
    if (!(array[i] % 3)) {
        array[i] = "okten";
        console.log(array[i])
    }
}
//8. вивести масив в зворотньому порядку.
let arrReverse = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let x = arrReverse.reverse()
for (i = 0; i < x.length; i++) {
    console.log(x[i])
}
let arrReverse1 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (i = arrReverse1.length - 1; i >= 0; i--) {
    console.log(arrReverse1[i]);
}
//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
let arrReverse2 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let r = 10;
while (r >= arrReverse2.length - 10) {
    console.log(arrReverse2[r]);
    r--;
}
let arrReverse3 = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
for (i = arrReverse3.length - 1; i >= 0; i--) {
    console.log(arrReverse3[i]);
}
let c = 10;
while (c >= arrReverse2.length - 10) {
    if (!(c % 2)) {
        console.log(arrReverse2[c]);
    }
    c--
}
for (i = arrReverse3.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
        console.log(arrReverse3[i])
    }
}
let v = 10;
while (v >= arrReverse2.length - 10) {
    if (v % 2) {
        console.log(arrReverse2[v]);
    }
    v--
}
for (i = arrReverse3.length - 1; i >= 0; i--) {
    if (i % 2) {
        console.log(arrReverse3[i])
    }
}
for (i = arrReverse3.length - 1; i >= 0; i--) {
    if (!(arrReverse3[i] % 3)) {
        arrReverse3[i] = "okten";
        console.log(arrReverse3[i])
    }
}
let b = 10;
while (b >= arrReverse2.length - 10) {
    if (!(arrReverse2[b] % 3)) {
        arrReverse2[b] = "okten";
        console.log(arrReverse2[b])
    }
    b--;
}



