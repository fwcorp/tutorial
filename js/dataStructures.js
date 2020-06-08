let array = [3, 2, 4, 1, 5];

console.log(`array length : ${array.length}`);
// array.sort();
// array.push(6);
// array.pop();
console.log(
  array.find((data) => {
    return data == 3;
  })
);

console.log(array.map((x) => x * 2));
