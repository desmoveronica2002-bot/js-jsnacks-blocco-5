const numbers = [2, 8, 4, 7, 2, 87];

// Crea un nuovo array in cui tutti i numeri siano incrementati di 1
// Risultato: [3, 9, 5, 8, 3, 88]


//col for
let newArray =[];

for (let i=0; i<numbers.length; i++) {
    newArray[i] = numbers[i] + 1;
}

console.log(newArray.join(" ,"))

//col .map 
// console.log(numbers.map(newArray1 => numbers + 1)); perchè non va bene? sommo numbers + 1 (tutto l'array) invece dell’elemento ...
console.log(numbers.map(num => num + 1));

//col .forEach non crea un nuovo array
numbers.forEach(num => console.log(num + 1));