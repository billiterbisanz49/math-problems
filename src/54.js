function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function fibonacci(n) {
    let a = 0, b = 1, c;
    while (++c < n) {
        [a, b] = [b, a + b];
    }
    return c - 2; // c is the nth Fibonacci number
}
