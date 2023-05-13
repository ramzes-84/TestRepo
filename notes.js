let arr = [ 100, 300, 250 ]

// MAP ---------------------------------------------------------------
let a = arr.map((item) => item / 100);
let b = arr.map(item => item / 100);
let c = arr.map(function(item) { return item / 100; });
let d = arr.map(function makeSmth(item) { return item / 100; });

// REDUCE -----------------------------------------------------------
let a = arr.reduce((accumulator, item) => accumulator + item, 0);
let b = arr.reduce(function(accumulator, item) { return accumulator + item}, 0);
let c = arr.reduce(function makeSmth(accumulator, item) { return accumulator + item}, 0);

// SORT -----------------------------------------------------------
arr.sort() //простое упорядочивание
arr.sort((a, b) => a - b );
arr.sort(function (a, b) { return a - b; });
arr.sort(function makeSmth(a, b) { return a - b; });

// FILTER -----------------------------------------------------------
let a = arr.filter((item) => item > 100);
let b = arr.filter(item => item > 100);
let c = arr.filter(function(item) { return item > 100; });
let d = arr.filter(function makeSmth(item) { return item > 100; });

// FOREACH -----------------------------------------------------------
arr.forEach(item => arr.push(item / 100));
arr.forEach((item) => arr.push(item / 100));
arr.forEach(function(item) { arr.push(item / 100) });
arr.forEach(function makeSmth(item) { arr.push(item / 100) });

// Несколько значений у функции
function calculate(a) {
    let sum = 0;
    let arr = [...arguments];
    for (let item of arr) {
        sum += item;
    };
    return function() {
        let arr2 = [...arguments];
        for (let item2 of arr2) {
            sum += item2;
        }
        console.log(sum);
        return sum
    }
}

calculate(2,4)(3,7,1)
