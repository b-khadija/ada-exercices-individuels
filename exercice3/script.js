const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}

function getLatinCharacterList(myText) {
  var myText = "Hello, world";
	let myTextToSplit = myText.split("");
	console.log(myTextToSplit);
	document.write(`<p>${myTextToSplit}</p>`);
	return myTextToSplit;
}
getLatinCharacterList();


/*
function translateLatinCharacter(paramUn) {
	paramUn = latinToMorse(("A"));
	console.log(paramUn);
	return paramUn;
}
translateLatinCharacter(paramUn);
console.log();
*/