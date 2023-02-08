
function askName() {
  let userName = prompt("Indiquer votre nom");
  let sayHello = "👋 Bonjour" + ' ' + userName;
  document.body.innerHTML += `<h2> ${sayHello} </h2>`;
}
askName();

function askBirthYear() {
  let userYear = prompt('En quelle année êtes-vous née ?');
  let userMonth = prompt('En quelle mois êtes-vous née ?');
  let date = new Date();
  let year = date.getFullYear();
  let result = year - userYear;
  let month = date.getMonth();
  if(month < userMonth ) {
    result--;
  }
  document.body.innerHTML += `<h3> Vous avez ${result} ans</h3>`;
}
askBirthYear();