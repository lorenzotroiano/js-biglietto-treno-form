// regole generali
let userName, userKm, userAge, prezzoKm, prezzoBase, percentualeSconto;



// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// Chiedere nome e cognome all'user
function myFunction() {
    
    // Chiedere nome e cognome all'user
    userName = document.getElementById("username").value;
    

    document.getElementById("stampanome").innerHTML = userName;
   
    
    // chiedere km che vuole percorrere
    userKm = document.getElementById("km").value;

    document.getElementById("stampakm").innerHTML = userKm;
   
    // chiedere età
    userAge = document.getElementById("age").value;

    document.getElementById("stampaeta").innerHTML = userAge;



    
    // prezzo km 0,21cent
    prezzoKm = 0,21;

    prezzoBase = prezzoKm * userKm;

    document.getElementById("prezzobase").innerHTML = prezzoBase;
  

    if (userAge <= 17) {
        // minorenni 20% sconto
        percentualeSconto = 20;
    } else if (userAge >= 65) {
        // over 65 sconto 40%
        percentualeSconto = 40;
    } else {
        percentualeSconto = 0;
    }
  

// calcolare prezzo biglietto scontato
prezzoSconto = prezzoBase * percentualeSconto / 100;
prezzoFinale = prezzoBase - prezzoSconto;

document.getElementById("stampaprezzofinale").innerHTML = prezzoFinale;

  }
 



// calcolare prezzo biglietto scontato
// prezzoSconto = userKm * percentualeSconto / 100;
// prezzoFinale = prezzoBase - prezzoSconto;

// console.log(prezzoSconto, prezzoFinale);





// document.getElementById("stampaprezzofinale").innerHTML = prezzoFinale;




