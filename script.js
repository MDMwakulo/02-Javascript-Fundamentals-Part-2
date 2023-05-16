'use strict';

/*let hasDriversLisence = false;
const passTest = true;

if (passTest) hasDriverLisence = true;
if (hasDriversLisence) console.log('I can drive :D');

// const interface = 'Audio';
// const private = 1997;*/

/*function logger() {
	console.log('My name is Durell');
}

logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
	console.log(apples, oranges);
	const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
	return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);*/

// Function Declaration and Expression
// this is function declaration
function calcAge1(birthYear) {
	return 2037 - birthYear;
}

// this is function expression
const calcAge2 = function(birthYear) {
	return 2037 - birthYear;
};

const age1 = calcAge1(1997);
const age2 = calcAge2(1997);
console.log(age1, age2);

// this is an arrow function
const calcAge3 = (birthYear) => 2037 - birthYear;
const age3 = calcAge3(1997);
console.log(age3);

const yearsUntilretirement = (birthYear, firstName) => {
	const age = 2017 - birthYear;
	const retirement = 65 - age;
	return `${firstName} retires in ${retirement} years.`;
};

console.log(yearsUntilretirement(1997, 'Durell'));
console.log(yearsUntilretirement(1990, 'Bob'));
