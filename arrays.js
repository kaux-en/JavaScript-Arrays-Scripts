let arr = [1, 2, 3, 4, 5, 6];

arr.push(7);
console.log(arr)

arr.pop();
console.log(arr)

//Sorting
let numbers = [34, 6, 78, 2, 8]

numbers.sort((a,b) => a - b);
console.log(numbers);

//array methods
let arr1 = [5, 7, 8, 12, 34, 20];

y = arr1.map(x => x * 2);
console.log(y);

z = arr1.filter(x => x % 2 == 0);
console.log(z)

s = arr1.reduce((acc, curr) => acc + curr, 0);
console.log(s)