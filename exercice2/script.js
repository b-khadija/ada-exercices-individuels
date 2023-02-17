/*
function didIWin(givenNumber) {
  givenNumber = prompt('Choisissez un nombre');
  givenNumber = parseInt(givenNumber);
  let number = 22;
  while (isNaN(givenNumber) == true || givenNumber === null) {
    givenNumber = prompt('Donne moi un vrai nombre');
  }
  if(givenNumber < number) {
    alert('Plus grand');
  } if(givenNumber > number) {
    alert('Plus petit');
  } else if(givenNumber === number) {
    return true;
  }
}
didIWin();

function gamePlay(){
  while (didIWin(givenNumber) !== true){
    givenNumber === number;
  }
    alert("Bravo !");
}
gamePlay();
*/
/* -----------------------Correction--------------------------- */ 

function askNumber() {
  let givenNumber = prompt('Devinez le nombre entre 0 et 50');
  while (numberToGuess < 0 || numberToGuess >50) {
    numberToGuess = parseInt(prompt('Le nombre doit être entre 0 et 50'))
  }
  return givenNumber;
}

askNumber();

function didIWin(numberToGuess ,givenNumber) {

  if (givenNumber < numberToGuess) {
    alert('Plus grand')
  } else if(givenNumber > numberToGuess){
    alert('Plus petit');
  } else {
    alert('Bravo vous avez trouvé le nombre')
    return true;
  }
  return false;
}

function gamePlay() {
  const numberToGuess = askNumber();
  let result = false;
  let tentation = 0;

  while (!result) {
    tentation++;
    givenNumber = askNumber();
    result = didIWin(numberToGuess ,givenNumber);
  }
  alert(`Partie terminer avec ${tentation} essais`);
}
gamePlay();
