var factorial = function (num) {
  if (num === 0) {
    return 1
  }
  if (num > 0) {
    return num * factorial(num - 1)
  }
}
console.log(factorial(5))
