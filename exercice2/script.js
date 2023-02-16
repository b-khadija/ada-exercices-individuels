function didIWin() {
  let givenNumber = prompt('Choisissez un nombre');
  givenNumber = parseInt(givenNumber);
  let number = 22;
  while (isNaN(givenNumber) == true || givenNumber === null) {
    givenNumber = prompt('Donne moi un vrai nombre');
  }
  if(givenNumber > number) {
    alert('Plus petit');
  } else if(givenNumber < number) {
    alert('Plus grand');
  } else {
    alert('Bravo ! Vous avez deviné le nombre');
  }
}
didIWin();


function gamePlay() {
  function didIWin(givenNumber) {
    if (didIWin(isNaN(givenNumber)) == true) {
      alert('On arrete');
    } else {
      return didIWin(givenNumber);
    }
  }
  return didIWin();
}
gamePlay();