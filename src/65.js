function calculateGCD(a, b) {
    if (b === 0) return a;
    else return calculateGCD(b, a % b);
}

function findFactors(num) {
    let factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0 && isPrime(i)) {
            factors.push(i);
        }
    }
    return factors;
}

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}
