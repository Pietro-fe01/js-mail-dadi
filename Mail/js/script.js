"use strict";

/*Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.*/

const emailLogged = ["mariorossi@gmail.com", "gianlucaverdi@gmail.com", "oraziomarrone@gmail.com", "classe76@gmail.com"];

let emailInputUser = prompt("Ciao! Accedi con la tua e-mail!");

// PRIMO METODO
// if (emailLogged.includes(emailInputUser)){
//     alert("Email riconosciuta, Benvenuto/a!");
// } else {
//     alert("Attenzione! La e-mail inserita non è presente all'interno del nostro sistema. La invitiamo a riprovare");
//     location.reload();
// }


// SECONDO METODO
const index = 0;
for (let i = 0; i < emailLogged.length; i++) {
    if (emailInputUser === emailLogged[i]){
        alert("Email riconosciuta, Benvenuto/a!");
        index = 1;
        break;
    }
}

if (index === 0){
    alert("Attenzione! La e-mail inserita non è presente all'interno del nostro sistema. La invitiamo a riprovare");
    location.reload();
}

