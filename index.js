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
function getReversedString(stringToReversed) {
    let arrayString = [];
    let letterOfArray = stringToReversed.toLowerCase().split("");
    for (let i = 0; i < letterOfArray.length; ++i) {
        arrayString.push(letterOfArray[i]);
    }
    return arrayString.reverse().join("");
}
console.log(getReversedString('Kayak')); // true
console.log(getReversedString('Racecar')); // true
console.log(getReversedString('Was it a cat I saw')); // true
console.log(getReversedString('Hello!')); // false
function isPalindrome(stringToCheck) {
    let array = []
    let x = stringToCheck.toLowerCase().split(" ")
    let reversedStringResult = getReversedString(stringToCheck);
    for (let i = 0; i < x.length; ++i) {
        array.push(x[i]);
    }
    return array.join("")
    // if (x === reversedStringResult ) {
    //     return true;
    // }
    // return false;
}

console.log(isPalindrome('Kayak')); // true
console.log(isPalindrome('Racecar')); // true
console.log(isPalindrome('Was it a cat I saw')); // true
console.log(isPalindrome('Hello!')); // false

// Write the countLetters function. It should return an object representing the number of letters in
// the given text. Ignore spaces and make sure your function is case-insensitive.



function countLetters(letters) {
    let lettersCounted = {};
    let lettersOfObject = letters.toLowerCase();
    for (let i = 0; i < letters.length; ++i) {
        const character = lettersOfObject[i];
        if (!lettersCounted[character]) {
            lettersCounted[character] = 0;
        }
        lettersCounted[character]++;
    }
    return lettersCounted;
}
const lettersObject = countLetters('The quick brown fox jumps over the lazy dog');
console.log(lettersObject);
// Write the getAgeDifference function that finds the difference between the youngest and oldest
// person. Inside of the getAgeDifference function call the getYoungestPerson and
// getOldestPerson functions that you write yourself.

const peopleArray = [
    {
        name: 'Adam',
        age: 20
    },
    {
        name: 'Amanda',
        age: 5
    },
    {
        name: 'John',
        age: 75
    },
    {
        name: 'Dave',
        age: 15
    }
]
console.log(peopleArray.age);
function getYoungestPerson(people) {
    let theYoungestPerson = people[0];
    for (let i = 0; i < people.length; ++i) {
        if (people[i] < theYoungestPerson) {
            theYoungestPerson = people[i]
        }
    }
    return theYoungestPerson;
}
console.log(getYoungestPerson(peopleArray))
function getOldestPerson(people) {
    let theOldestPerson = people[0];
    for (let i = 0; i < people.length; ++i) {
        if (people[i] > theOldestPerson) {
            theOldestPerson = people[i]
        }
    }
    return theOldestPerson;
}

function getAgeDifference(people) {
    return getOldestPerson(people) - getYoungestPerson(people);
}
console.log(getAgeDifference(peopleArray)); // 70)
// Sum of positive
function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

// Square(n) Sum

function squareSum(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; ++i) {
        total = total + numbers[i] **2
    }
    return total;
}

console.log(squareSum([1, 2, 2]));

// Abbreviate a Two Word Name

function abbreviationName(name){
    let nameArray = [name[0]];
    let abreviation = name.split('');
    for (let i = 0; i < name.length; ++i) {
        if(name[i] === " ") {
            nameArray.push(abreviation[i + 1])
        }
    }
    return nameArray.join('.').toUpperCase();
}

console.log(abbreviationName('Sam Harris'));
console.log(abbreviationName('patrick feeney'));

// Counting sheep...
function countSheep(arrayOfSheep) {
    let present = true;
    let sheep = 0;
    for (let i = 0; i < arrayOfSheep.length; ++i) {
        if (arrayOfSheep[i] === present) {
           sheep++;
        }
    }
    return sheep;
}

console.log(countSheep([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));

// Convert number to reversed array of digits

function digitize(number) {
    let newArray = [];
    let reversedNumber = number.toString().split('');
    for (let i = 0; i < number.length; ++i) {
        newArray.push(reversedNumber[i])
    }
    return newArray.reverse();
}

console.log(digitize(35231));

// A Needle in the Haystack

function findNeedle(haystack) {
    let item = 'needle';
    for (let i = 0; i < haystack.length; ++i) {
        if (haystack[i] === item) {
            return 'found the needle at position ' + i;
        }
    }
}

console.log(findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]));


// Beginner - Lost Without a Map

function maps(value){
    let doubledNumber = [];
    for (let i = 0; i < value.length; ++i) {
        const item = value[i];
        doubledNumber.push(item * 2);
    }
    return doubledNumber;
}

console.log(maps([1, 2, 3]))

// Invert values
function invert(array) {
    let arrayOfInvertedNumbers = [];
    for (let i = 0; i < array.length; ++i) {
        arrayOfInvertedNumbers.push(array[i] * -1);
    }
    return arrayOfInvertedNumbers;
}

console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));

// Sum Arrays
function sum(numbers) {
    let sumOfArray = 0;
    for (let i = 0; i < numbers.length; ++i) {
        if (numbers === []) {
            return 0;
        }
        sumOfArray = sumOfArray + numbers[i]
    }
    return sumOfArray;
};

console.log(sum([1, 5.2, 4, 0, -1]))

// Array plus array
function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; ++i) {
        sum = sum + numbers[i]
    }
    return sum;
}

console.log(getArraySum([1, 5.2, 4, 0, 1]))
function arrayPlusArray(sumOfFirstArray, sumOfSecondArray) {
    return getArraySum(sumOfFirstArray) + getArraySum(sumOfSecondArray);
}
console.log(arrayPlusArray([1,2,3, 5], [2, 4 ,8]))
// If you can't sleep, just count sheep!!

function countSheeps(number){
    let result = '';
    for (let i = 1; i <= number; i++) {
        result += i.toString() + ' sheep...';
    }
    return result;
}

// Get the mean of an array
console.log(countSheeps(10))
function getAverage(marks){
    let sum = 0;
    for (let i = 0; i < marks.length; ++i) {
        sum = (sum + marks[i]);
    }
    return Math.floor(sum/marks.length);
}

console.log(getAverage([3, 5.2, 4, 2, 6]));

// Count the Monkeys!

function monkeyCount(quantity) {
    let array = [];
    for (let i = 1; i <= quantity; ++i) {
        array.push(i)

    }
    return array;
}
console.log(monkeyCount(10));
