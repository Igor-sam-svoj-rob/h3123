"use strict";

/* 
FOREACH metoda

forEach metoda prolazi listu član po član (svaki član ulazi kao parametar) i na njemu radi određene izmjene. Te izmjenjene članove
možemo spremiti u neku novu listu.
*/

let brojevi = [10, 20, 30, 40, 50];

brojevi.forEach(function (pojedinacni_clan_liste, redno_mjesto_clana_liste) {
  console.log(pojedinacni_clan_liste, redno_mjesto_clana_liste);
});

// idemo vidjeti kako ovo napisati kao arrow funkciju

brojevi.forEach((vrijednost, index, lista) => {
  console.log(`${index} - ${vrijednost} i cijela lista ${lista}`);
});

// idemo vidjeti kako bi upotrijebili metodu listi na objektima

const useri = [
  { ime: "Davor", prezime: "Horvat", godine: 30 },
  { ime: "Maja", prezime: "Majić", godine: 25 },
  { ime: "Stjepan", prezime: "Stjepić", godine: 25 },
];

useri.forEach((user) => console.log(user.ime));
