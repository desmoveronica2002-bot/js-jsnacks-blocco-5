const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

//col for
let numeriPari = [];

for(let i=0; i<nums.length; i++){
    if(nums[i]%2==0){
        numeriPari.push(nums[i]);
    }
}

console.log(numeriPari);

//col .filter 
const numeriPari2 = nums.filter(num => num%2===0);
console.log(numeriPari2);
//perchè filter e non map?
//map serve per trasformare ogni elemento, non per filtrare
//map cambia ogni elemento in qualcosa di nuovo, mantenendo la lunghezza dell’array
//filter creau un nuovo array e seleziona solo gli elementi che soddisfano una condizione

//col forEach ma non crea un nuovo array
nums.forEach(num => { // num è il mio parametro
    if (num % 2 === 0) {
        console.log(num);
    }
});
// ho più istruzioni da eseguire quindi devo andare a capo e usare le {}
