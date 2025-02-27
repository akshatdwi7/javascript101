try {
  const dividend = window.prompt("Enter a divident");
  const divisior = window.prompt("Enter a divisor");

  if (divisior == 0) {
    throw new Error("You can't do it ");
  }
  if (isNaN(dividend) || isNaN(divisior)) {
    throw new Error("values must be a number ");
  }

  const result = dividend / divisior;

  console.log(result);
} catch (error) {
  console.log(error);
}
console.log("This is the end of the program");

// for more check error.js
