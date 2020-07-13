const arr = [1, 2, 3];
const aLong = Array(20);
aLong[11] = 3;
console.log(aLong);

// ADD/DELETE

const removeLast = arr.pop();
const removeFirst = arr.shift();

const addLast = arr.push(11);
const addFirst = arr.unshift(1);

const arr2 = [1, 2, 3];
const addAndRemove = arr2.splice(1, 1, 'added');
console.log(addAndRemove);
console.log(arr2);

// modify

const prices = [5, 10, 20, 18];
const halfPrice = prices.map(price => price / 2);
console.log(halfPrice);

// slice

const arr3 = [1, 2, 3, 4, 5];
const newArr = arr3.slice(2, 4);
console.log(newArr);

// find

const arr4 = [1, 2, 3, 44, 5];
const firstLargerThan = arr4.find(n => n > 3);
const firstLargerIndex = arr4.findIndex(n => n > 3);
console.log(firstLargerThan);
const largerThan = arr4.filter(n => n > 3);
console.log(largerThan);
const smallenough = arr4.every(item => item < 6);
const smallenough2 = arr4.some(item => item < 6);

const people = ['Bob', 'Jeff', 'Tina', 'Waldo', 'Bill'];
const hasWaldo = people.includes('Waldo');

// unique

const dupes = [1, 1, 2, 2, 3, 3];
const uniqueSet = new Set(dupes);
const uniqueArr = [...uniqueSet];
console.log(uniqueArr);

// fill
const emptyArr = Array(5);
emptyArr.fill(0);
console.log(emptyArr);

// sort

const arr5 = [10, 5, 3, 11];
console.log(arr5.sort())
console.log(arr5.sort((a, b) => a - b));
console.log(arr5.sort((a, b) => b - a));

// reverse

const arr6 = [1, 2, 3, 4];
console.log(arr6.reverse());

// to object

const arr7 = [['key', 'value'], ['x', 500]];

const obj = arr7.reduce((accumulator, element) => {
    const [key, value] = element
    accumulator[key] = value
    return accumulator
}, {});

console.log(obj);

// for loops

const arr8 = ['a', 'b', 'c'];

arr8.forEach((val, index, array) => {
    console.log(val, index, array);
})

for (const [index, val] of arr8.entries()) {
    console.log(val, index);
}

// map x map

const arr9 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

arr9.map((row, y) => {
    console.log('--- ROW', y, row, '---');

    row.map((col, x) => {
        console.log('COL: ', x, col);
    })
})