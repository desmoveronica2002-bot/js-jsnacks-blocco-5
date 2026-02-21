const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    class: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    class: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    class: '5B'
  },
];

// Recupera i dati dello studente con id 2
// Risultato: { id: 2, name: 'Mario Banfi', age: 34, class: '4A' }

//col for 
let student;

for (let i = 0; i < students.length; i++) {
  if (students[i].id === 2) {
    student = students[i];
    break; // si ferma appena trova lo studente
  }
}

console.log(student);

// uso .find  restituisce il primo elemento dell’array che soddisfa la condizione => in questo caso è il metodo più corretto
const student1 = students.find(studente => studente.id === 2);
console.log(student1);

//con .filter
const array = students.filter(studente => studente.id === 2);
console.log(array); //La proprietà length dell’array è 1, perché c’è un elemento dentro

//.find e .filter sembrano uguali perchè in questo caso stampano la stessa cosa ma in realtà
//si comportano in maniera differente :
//find => restituisce UN SINGOLO OGGETTO (il primo che soddisfa la condizione)
//filter => restituisce UN ARRAY di oggetti che soddisfano la condizione (anche se contiene solo 1 elemento)

//------------------------------------
//MIE PROVE
//x estrarre solo l'id (mi stampa 2)

//con .find(...).id restituisce l’oggetto completo ed accede alla proprietà id
const studentId = students.find(studente => studente.id === 2).id;
console.log(studentId); 
// PRO               //CONTRO
//Diretto             Non puoi estrarre più proprietà in una riga
//semplice 


//DESTRUTTURAZIONE
//oppure const { id } = find(...) estrae solo la proprietà id e crea una variabile chiamata id
const { id } = students.find(s => s.id === 2); // (s => s.id === 2) è la mia condizione
console.log(id); 
//con questo metodo posso estrarre anche più proprietà
const { name, age } = students.find(s => s.id === 2);
console.log(name, age);
//PRO                               //CONTRO
//Pulito                              più “verboso” per una sola proprietà
// puoi estrarre più proprietà