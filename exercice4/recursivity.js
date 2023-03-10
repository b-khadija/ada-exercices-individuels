
let numbers = [2, 4, 6, 7];

function sum1(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

function sum2(numbers) {
  if(length.numbers == 0 ) {
    return 0;
  } else {
    return numbers[0] + sum2(numbers.slice(1));
  }
}

f(n) = n * f(n-1)
factorial(n) = n * factorial(n-1)

function factorial(n) {
  if (n == 1) {
   return 1;
  } else {
    return  n * factorial(n-1)
  }
}
console.log(factorial(3));

// Etape 3
f(5) = 5 * 4 * 3 * 2 * 1
f(4) = 4 * 3 * 2 * 1
f(5) = 5 * f(4)
f(5) = 5 * 4 * f(3)
f(5) = 5 * 4 * 3 * f(2)
f(5) = 5 * 4 * 3 * 2 * f(1)

f(n) = n * f(n-1)


console.log(parseInt(numbers[0]) + numbers.slice(1));
2 + numbers.slice(1)
2 + [4, 6, 7]
2 + 4 + [6, 7]
2 + 4 + 6 + [7]
2 + 4 + 6 + 7

// Etape 3
f(5) = 5 * 4 * 3 * 2 * 1
f(4) = 4 * 3 * 2 * 1
f(5) = 5 * f(4)
f(5) = 5 * 4 * f(3)
f(5) = 5 * 4 * 3 * f(2)
f(5) = 5 * 4 * 3 * 2 * 1

f(n) = n * f(n-1)
















// let arrNumber = [2, 3, 5, 7];

// function sum1() { 
//   let result = 0;
//   let calculate = arrNumber.reduce(
//     (accumulator, currentValue) => accumulator + currentValue, result
//   )
//   return calculate;
// }
// sum1();






// function sum2() {
//   if (sum1() == 0) {
//     return sum1() + calculate;
//   } else {
//     return sum1() * sum2( sum1() - 1)
//   }
// }
// sum2();
// console.log(sum2(5));