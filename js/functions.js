// 'prompt()' is for user input, has a text field for the user to enter some text.
/*
var name;

while (!name) {		//'!name' means 'not name', i.e., no name has been entered
	name = prompt('What is your name?');
}

// 'console.log()' writes out the content of a variable for debugging
//identical to Actionscript's 'trace()'
console.log(name);

document.write('Hello, ' + name);


for (var i = 0; i < 5; i++) {
//	document.write('<br>' + i);
	document.write('<h1>' + i + '</h1>');
}
*/


function letter () {
	var letter = prompt('Please type a letter into the field at right');
	
	if (letter == 'a, b, c') {
		document.write(letter);
	} else {
		document.write("Please type a letter into the field.");
	}
}

isNameCool();		//calling the function

var writeLetterMultipleTimes = function () {
	for (var i = 0; i < 10; i++ ) {
	document.write('<br>letter');
	}
};

writeLetterMultipleTimes();





















