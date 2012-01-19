var letter;

while (!letter) {
	letter = prompt('Please type a letter into the field');
}

var writeLetterMultipleTimes = function () {
	for (l = 0; l <= 10; l++) {

		for (var i = 0; i <= l; i++ ) {
		document.write(letter);
		}
	document.write('<br>');
	}
};

writeLetterMultipleTimes();