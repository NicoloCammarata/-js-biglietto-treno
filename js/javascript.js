// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.



// Chiedi quanti km ed età:

let km = prompt("qunti km percorrerai?")
let età = prompt("quanti anni hai?")



if (km == 1 && età >= 18 && età <= 65) {
    console.log("hai speso 0.21 €")
    console.log ("no sconto")
  
}
else if (km == 1 && età >= 65 ) {
    console.log(0.21 * 0.6)
  
}
else if (km == 1 && età < 18 ) {
    console.log(0.21 * 0.8)

  
}
else if (km != 1 && età >= 18 && età <= 65){
    console.log(km * 0.21)
    
    
}
else if (km != 1 && età < 18 ){
    console.log(km * 0.21 * 0.8)
    
}
else if (km != 1 && età >= 65 ){
    console.log(km * 0.21 * 0.6)
    
}
console.log(typeof età)



