// This is just an example of how to create random JavaScript codes
// It's not actually part of the Math-problems or any specific project

// Random number between 1 and 10
function getRandomNumber() {
    return Math.floor(Math.random() * (9 - 1) + 1);
}

// This code generates a random string with the same length as the original number
function generateRandomString(originalNumber) {
    let result = '';
    for (let i = 0; i < originalNumber; i++) {
        result += 'a'.charCodeAt(0).toString(16);
    }
    return result;
}

// This code generates a random boolean value between true and false
function generateRandomBoolean() {
    return Math.random() >= 0.5 ? true : false;
}
