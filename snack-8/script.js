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

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

//col for

for (let i=0; i<students.length; i++){
  if(students[i].name=='Marco Lanci'){
    console.log(students[i].class);
    break;
  }
}

// o 
 let classeStudente ='';
  for (let i=0; i<students.length; i++){
    if (students[i].name=='Marco Lanci'){
      classeStudente= students[i].class;
      break;
    }
  }
  console.log(classeStudente);

  //con .find
  const student1 = students.find(studente=>studente.name==='Marco Lanci').class;
  console.log(student1);

  //DESTRUTTURAZIONE
  const {class : classeStudente1 } = students.find(studente=>studente.name==='Marco Lanci'); //class è una parola riservata in JavaScript, quindi non posso usarla direttamente come nome di variabile nella destrutturazione, la rinomino usando i due punti :
  console.log (classeStudente1); 