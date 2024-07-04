// https://javascript.info/recursion

// Write a function sumTo(n) that calculates the sum of numbers 1 + 2 + ... + n.

// For instance:

// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050
// Make 3 solution variants:

// Using a for loop.
// Using a recursion, cause sumTo(n) = n + sumTo(n-1) for n > 1.
// Using the arithmetic progression formula.

const sumTo = number => {
    sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    return sum
}

const usingRecursion = number => {
    if (number == 1) {
        return 1
    } else {
        return number + usingRecursion(number - 1)
    }
}

