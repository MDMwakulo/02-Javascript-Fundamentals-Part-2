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
/*function calcAge1(birthYear) {
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
console.log(yearsUntilretirement(1990, 'Bob'));*/

// Functions calling other functions
/*function cutFruitPieces(fruit) {
	return fruit * 4;
}

function fruitProcessor(apples, oranges) {
	const applePieces = cutFruitPieces(apples);
	const orangePieces = cutFruitPieces(oranges);
	console.log(apples, oranges);
	const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
	return juice;
}

console.log(fruitProcessor(2, 3));*/

// Reviewing Functions
/*const calcAge = function(birthYear) {
	return 2023 - birthYear;
};

const yearsUntilretirement = function(birthYear, firstName) {
	const age = calcAge(birthYear);
	const retirement = 65 - age;

	if (retirement >= 0) {
		console.log(`${firstName} retires in ${retirement} years.`);
		return retirement;
	} else {
		console.log(`${firstName} has already retired 🎉`);
		return -1;
	}
};
console.log(yearsUntilretirement(1997, 'Durell'));
console.log(yearsUntilretirement(1950, 'Noah'));*/

// Coding Challenge 1
const calcAverage = (x, y, z) => Math.floor((x + y + z) / 3);

const checkWinner = function(d1, d2, d3, k1, k2, k3) {
	const averageDolphins = calcAverage(d1, d2, d3);
	const averageKoalas = calcAverage(k1, k2, k3);

	if (averageDolphins / averageKoalas >= 2 || averageKoalas / averageDolphins >= 2) {
		const winningTeam =
			averageDolphins > averageKoalas
				? `Dolphin win 🏆 (${averageDolphins} vs. ${averageKoalas})`
				: `Koalas win 🏆 (${averageKoalas} vs. ${averageDolphins})`;
		return winningTeam;
	} else {
		return `No team wins...`;
	}
};

// test 1
console.log(checkWinner(44, 23, 71, 65, 54, 49));
// test 2
console.log(checkWinner(85, 54, 41, 23, 34, 27));
console.log(checkWinner(26, 1, 1, 65, 54, 49));
