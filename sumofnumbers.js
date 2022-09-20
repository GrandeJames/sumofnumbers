const TEST_NUMBERS = [1, 2, 3];

function sumFor(numbers) {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
}

function sumWhile(numbers) {
  let sum = 0;
  let i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum;
}

function sumRecursion(numbers) {
  if (numbers.length === 0) {
    return 0;
  }
  return numbers[0] + sumRecursion(numbers.slice(1, numbers.length));
}

function sumTheSimpleWay(numbers) {
  return _.reduce(numbers, (memo, number) => memo + number, 0);
}

console.log(sumFor(TEST_NUMBERS));
console.log(sumWhile(TEST_NUMBERS));
console.log(sumRecursion(TEST_NUMBERS));
console.log(sumTheSimpleWay(TEST_NUMBERS));
