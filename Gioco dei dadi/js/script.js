/* Generare un numero random da 1 a 6, sia per il
giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il 
punteggio più alto.*/

// MIO CODICE LATO CONSOLE
// const computerNum = Math.floor(Math.random() * 6) + 1;

// const userNum = Math.floor(Math.random() * 6) + 1;

// console.log(`Il computer lancia il dado ed esce il numero ${computerNum}.`);

// console.log(`Adesso tocca a noi! Lanciamo il dado ed esce il numero ${userNum}.`);

// if(userNum === computerNum){
//     console.log("Abbiamo un pareggio!");
// } else if (userNum > computerNum){
//     console.log("Congratulazioni, Hai vinto!");
// } else {
//     console.log("Il computer ha vinto, c'eri quasi!");
// }
// MIO CODICE LATO CONSOLE




//DICE ANIMATION
const diceResult = document.getElementById("dice-result");

function rollDice() {
    const diceNum = [];
    diceResult.innerHTML = "";
    const dice = [...document.querySelectorAll(".die-list")];
    dice.forEach(die => {
      toggleClasses(die);
      die.dataset.roll = Math.floor(Math.random() * 6) + 1;
      diceNum.push(Number(die.dataset.roll));
    });
    setTimeout(function() { checkNums(diceNum) }, 1600);
    console.log(diceNum)
  }
  
  function toggleClasses(die) {
    die.classList.toggle("odd-roll");
    die.classList.toggle("even-roll");
  }
  
  function checkNums(diceNum){
      if (diceNum[0] == diceNum[1]){
          diceResult.innerHTML = "Pareggio!";
          console.log("Pareggio!")
          diceResult.style.color = "yellow";
          diceResult.style.textDecoration = "underline";
      } else if (diceNum[0] > diceNum[1]){
          diceResult.innerHTML = "Hai vinto!";
          console.log("Hai vinto!")
          diceResult.style.color = "green";
          diceResult.style.textDecoration = "underline";
      } else {
          diceResult.innerHTML = "Hai perso!";
          console.log("Hai perso!")
          diceResult.style.color = "red";
          diceResult.style.textDecoration = "underline";
      }
  }

  document.getElementById("roll-button").addEventListener("click", rollDice);


