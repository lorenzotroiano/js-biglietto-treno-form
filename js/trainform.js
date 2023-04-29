// regole generali
let userName, userKm, userAge, prezzoKm, prezzoBase, percentualeSconto;



// const element = document.getElementById("myBtn");
// element.addEventListener("click", myFunction);

// Chiedere nome e cognome all'user
function myFunction() {
    
    // Chiedere nome e cognome all'user
    userName = document.getElementById("username").value;
    

    document.getElementById("stampanome").innerHTML = "Nome:" + " " + userName;
   
    
    // chiedere km che vuole percorrere
    userKm = document.getElementById("km").value;

    document.getElementById("stampakm").innerHTML = "Km richiesti:" + " " + userKm;
   
    // chiedere età
    userAge = document.getElementById("age").value;

    document.getElementById("stampaeta").innerHTML = "Fascia di Età:" + " " + userAge;



    
    // prezzo km 0,21cent
    prezzoKm = 0.21;

    prezzoBase = prezzoKm * userKm;

    // console.log(prezzoBase);

    document.getElementById("prezzobase").innerHTML = "Il prezzo base da pagare sarebbe di circa:" + " " + prezzoBase.toFixed(2);
  

    // if (userAge <= 17) {
    //     // minorenni 20% sconto
    //     percentualeSconto = 20;
    // } else if (userAge >= 65) {
    //     // over 65 sconto 40%
    //     percentualeSconto = 40;
    // } else {
    //     percentualeSconto = 0;
    // }


    if (userAge == "minorenne") {
        // minorenni 20% sconto
        percentualeSconto = 20;

        // modo per aggiungere una classe che contiene display block dentro un tag che contiene classe con display none
        document.getElementById("biglietto2").classList.add("biglietto2-block");
    } else if (userAge == "anziano") {
        // over 65 sconto 40%
        percentualeSconto = 40;

        // modo per aggiungere una classe che contiene display block dentro un tag che contiene classe con display none
        document.getElementById("biglietto2").classList.add("biglietto2-block");
    } else if (userAge == "adulto") {
        percentualeSconto = 0;

        // modo per aggiungere una classe che contiene display block dentro un tag che contiene classe con display none
        document.getElementById("biglietto2").classList.add("biglietto2-block");
    }
        else {

        alert("NOn hai inserito l'età u fra");
       
    }


  

// calcolare prezzo biglietto scontato
prezzoSconto = prezzoBase * percentualeSconto / 100;
document.getElementById("stampaprezzosconto").innerHTML = "Lo sconto da scalare è pari a:" + " " + prezzoSconto.toFixed(2);
prezzoFinale = prezzoBase - prezzoSconto;


// metodo per stampare un testo all'interno di un tag html + mettere cifre decimali (2)
document.getElementById("stampaprezzofinale").innerHTML = "Il prezzo finale è:" + " " + prezzoFinale.toFixed(2);




// document.getElementById("biglietto2").classList.add("biglietto2-block");

  }
 



  function myReset() {
    // document.getElementById("biglietto2").classList.remove("biglietto2-block");
   
// modo per aggiornare pagina e azzerare le cose
    history.go(0)

  }




