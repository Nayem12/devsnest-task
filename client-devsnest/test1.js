const fibonacciSeries = (n) => {
  let fibSeries = [0, 1];
  for (let i = 2; i <= n; i++) {
    fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
  }
  return fibSeries;
};

const sumOfFibSeries = (n) => {
  let fibSeries = fibonacciSeries(n);
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += fibSeries[i];
  }
  return sum;
};

const splitPrintNumbers = (n) => {
  let sum = sumOfFibSeries(n);
  const digits = ("" + sum).split("");
  return { sum, digits };
};

const result = splitPrintNumbers(6);
// console.log(result);

// ##########

