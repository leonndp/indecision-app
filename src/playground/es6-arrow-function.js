// arguments object - no longer bound with arrow functions

const add = (a, b) => a+b;

console.log(add(55, 1));

// this keyword - no longer required

const user = {
	name: "Leon",
	cities: ["Honolulu", "Quezon City"],
	printPlacesLived(){
		return this.cities.map((city) => this.name + " has lived in " + city);
	}
};

console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
	// numbers - array of numbers
	// multiplyBy - single number
	// multiply - return a new array where the numbers have been multiplied
	numbers: [0, 4, 5, 1],
	multiplyBy: 5,
	multiply(){
		return this.numbers.map((number) => number * this.multiplyBy);
	}
}

console.log(multiplier.multiply());