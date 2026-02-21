const people = [
  { name: 'Paolo', age: 35 },
  { name: 'Giulia', age: 24 },
  { name: 'Marco', age: 67 }
];

// Stampa in console tutti i nomi
// Risultato: 'Paolo', 'Giulia', 'Marco'

//console.log(people.name); non va bene perchè people è un array quindinon ha direttamente la proprietà nameù

//.map
console.log(people.map(person => person.name)); // va bene perchè con map creo un nuovo array (person) con solo i nom  -> .map restituisce un nuovo array 
//person è una variabile temporanea 


//.forEach
people.forEach(person => console.log(person.name)); // stampa i nomi -> non rstituisce nulla
// se avessi avuto più istruzioni da eseguire dovevo usare le {} e ndare a capo dopo ogni istruzione
//ES:
//people.forEach(person => {
//  console.log(person.name);
//  console.log(person.age);
//});


// for 
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name);
}


//.forEach cosa serve davvero? Si usa quando vuoi:
// + stampare dati
// + modificare variabili esterne
// + fare operazioni su ogni elemento
// + eseguire codice (side effects)

//.forEach vs .map
//forEach = "Fai qualcosa per ogni elemento"
//map = "Trasforma ogni elemento e da un nuovo array"


//.forEach vs for
//forEach = PUOI: fare qualcosa per ogni elemento/ Meno codice/ Non devi gestire indice manualmente
//          NON PUOI: usare break/ Non puoi usare continue /Non puoi fermarlo prima che finisca /Non funziona su oggetti normali (solo array)
//for =     PUOI: fare qualcosa per ogni elemento/ Usare break/ Usare continue / Fermarlo quando vuoi / Funziona su qualsiasi iterabile (array, stringhe, oggetti con iteratore)
//          NON PUOI: non gestire indice manualmente/ Più codice