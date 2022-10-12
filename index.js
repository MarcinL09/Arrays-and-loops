// create an array with three fruits

const fruits = ["Orange", "Apple", "Lemon"]

// print the last element in the fruits  array to the console

console.log(fruits[fruits.length - 1]);

// print all elements of the vegetables array to the console using the while loop.

const vegetables = ['Carrot', 'Tomato', 'Cabbage'];

let index = 0;
while (index < 3) {
    console.log(vegetables[index]);
    index = index + 1;
}

// print all elements of the vegetables array to the console using the for loop.

for (let i = 0; i < 3; ++i) {
    console.log(vegetables[i]);
}

// Write the getSmallestNumber function

function getSmallestNumber(numberOfArray) {
    let theSmallestNumber = numberOfArray[0];
    for (let i = 0; i < numberOfArray.length; ++i) {
        if (numberOfArray[i] < theSmallestNumber) {
            theSmallestNumber = numberOfArray[i]
        }
    }
    return theSmallestNumber;
}
console.log(getSmallestNumber([2, -5, 10, 1, 4])); // -5
console.log(getSmallestNumber([200, 25, 4, 123, 87])); // 4

//Write the getSmallestNumber function using the sort function.
const arrayOfNumbers = [2, -5, 10, 1, 4, 5]

const smallestNumber = arrayOfNumbers.sort(
function (firstNumber, secondNumber) {
        return firstNumber - secondNumber;
    }
)
console.log(smallestNumber); // -5

// Write the getSquaredNumbers function

function getSquaredNumbers(number) {
    let squaredNumber = [];
    for (let i = 0; i < number.length; ++i) {
        const item = number[i];
        squaredNumber.push(item * item);
    }
    return squaredNumber;
}
console.log(getSquaredNumbers([1, 2, 3, 4, 5])); // [1, 4, 9, 16, 25]
console.log(getSquaredNumbers([6, 7, 8, 9, 10])); // [36, 49, 64, 81, 100]

// Write the getReversedString function

function getReversedString(letter) {
    let arrayString = [];
    let letterOfArray = letter.split('')
    for (let i = letterOfArray.length - 1; i >= 0; --i) {
        arrayString.push(letterOfArray[i]);
    }
    return arrayString.join('');
}

console.log(getReversedString('Hello!')); // '!olleH'
console.log(getReversedString('Arrays')); // 'syarrA'

// Write the isPalindrome function. Inside the isPalindrome function, call the
// getReversedString function. It should be case-insensitive and shouldn't take spaces into
// consideration.

function isPalindrome(letter) {
    function getReversedString(letter) {
        let arrayString = [];
        let letterOfArray = letter.split('')
        for (let i = letterOfArray.length - 1; i >= 0; --i) {
            arrayString.push(letterOfArray[i]);
        }
        return arrayString.join('');
    }
    const reversedStringResult = getReversedString(letter);
    return reversedStringResult;
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')); // true
console.log(isPalindrome('Hello!')); // false