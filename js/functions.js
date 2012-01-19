//alert('This is an alert.');

var letter;

while (!letter) {
	letter = prompt('Please type a letter into the field');
}

// 'console.log()' writes out the content of a variable for debugging
//identical to Actionscript's 'trace()'
console.log(letter);

document.write(letter);


for (var i = 0; i < 10; i++) {
	document.write(letter);
}




function isNameCool () {
	var name = prompt('What is your name?');
	
	if (name == 'Deanna') {
		document.write("That's an awesome name!");
	} else {
		document.write("I don't like your name.");
	}
}

isNameCool();		//calling the function

var writeNameMultipleTimes = function () {
	for (var i = 0; i < 5; i++ ) {
	document.write(letter);
	}
};		//add a semicolon at the end because this is a definition of a variable.

writeNameMultipleTimes();		//calling the variable, which includes a function.





















