const zucchine = [
  { type: 'Napoletana', weight: 10, length: 4 },
  { type: 'Trombetta', weight: 13, length: 16 },
  { type: 'Napoletana', weight: 4, length: 23 },
  { type: 'Trombetta', weight: 11, length: 6 },
  { type: 'Napoletana', weight: 2, length: 17 },
  { type: 'Romana', weight: 5, length: 10 },
  { type: 'Romana', weight: 7, length: 9 },
  { type: 'Trombetta', weight: 3, length: 8 },
  { type: 'Calabrese', weight: 6, length: 27 },
  { type: 'Calabrese', weight: 14, length: 4 },
];

// A partire dall'array fornito, crea due array. Uno con le zucchine più lunghe di almeno 15cm. L'altro con le restanti.

//col for
let arrayZucchineLunghe = [];
let arrayZucchineCorte = [];

for (let i=0; i<zucchine.length; i++){
  if(zucchine[i].length>=15){
    arrayZucchineLunghe.push(zucchine[i]);
  }else{
    arrayZucchineCorte.push(zucchine[i]);
  }
}

console.log(arrayZucchineLunghe, arrayZucchineCorte);


//con .filter e no .map perchè non filtra 
const arrayZucchineLunghe1 = zucchine.filter(zucchina =>zucchina.length>=15);
const arrayZucchineCorte1 = zucchine.filter(zucchina =>zucchina.length<15);

console.log(arrayZucchineLunghe1, arrayZucchineCorte1);
//destrutturazione con .filter
//1 senza nome = i due array non vengono salvati quindi non sono riutilizzabili
console.log(zucchine.filter(({length}) => length>=15));
console.log(zucchine.filter(({length}) => length<15));
//2 con nome
const arrayZucchineLunghe3 = zucchine.filter(({ length }) => length >= 15);
const arrayZucchineCorte3 = zucchine.filter(({ length }) => length < 15);

console.log( arrayZucchineLunghe3, arrayZucchineCorte3);
