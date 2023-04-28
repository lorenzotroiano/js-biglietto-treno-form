// regole generali
let userName, userKm, userAge, prezzoKm, percentualeSconto;





// Chiedere nome e cognome all'user

  function myFunction() {
    
    // Chiedere nome e cognome all'user
    userName = document.getElementById("username").value;
    
    // chiedere km che vuole percorrere
    userKm = document.getElementById("km").value;
   
    // chiedere età
    userAge = document.getElementById("age").value;



    
    submitOK = "true";
  

    if (userAge <= 17) {
        // minorenni 20% sconto
        percentualeSconto = 20;
    } else if (userAge >= 65) {
        // over 65 sconto 40%
        percentualeSconto = 40;
    } else {
        percentualeSconto = 0;
    }
  
   
  
    if (submitOK == "false") {
      return false;
    }
  }



 

// prezzo km 0,21cent
prezzoKm = parseInt(0,21);

prezzoBase = prezzoKm * userKm;
console.log(prezzoBase);


// minorenne = document.getElementById("minorenne").value;
// anziano = document.getElementById("anziano").value;
// adulto = document.getElementById("adulto").value;




// calcolare prezzo biglietto scontato
prezzoSconto = userKm * percentualeSconto / 100;
prezzoFinale = prezzoBase - prezzoSconto;

console.log(prezzoSconto, prezzoFinale);





document.getElementById("stampanome").innerHTML = userName;




