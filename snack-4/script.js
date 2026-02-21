const posts = [
  { author: 'Marco', date: '12/3/2021', content: 'lorem ipsum...' },
  { author: 'Luca', date: '30/6/2021', content: 'lorem ipsum...' },
  { author: 'Fabrizio', date: '12/9/2020', content: 'lorem ipsum...' },
  { author: 'Enrico', date: '09/12/2021', content: 'lorem ipsum...' },
]

// Crea un nuovo array coi nomi di tutti gli autori
// Risultato: ['Marco', 'Luca', 'Fabrizio', 'Enrico']

//col for
let nomiAutori = [];

for (let i=0; i<posts.length; i++){
  nomiAutori.push(posts[i].author); 
}

console.log(nomiAutori.join(" ,"))


//col .map
console.log(posts.map(post =>post.author))
//destrutturazione con map
//1
console.log(posts.map(({ author }) => author));// il mio array non ha un nome ed è temporaneo solo per console.log
//2
const autori = posts.map(({ author }) => author); // il mio array ha un nome
console.log(autori);

//col .forEach non restituisce un array ma stampa e basta
posts.forEach(post => console.log(post.author));
//destrutturazione col forEach
posts.forEach(({ author }) => console.log(author));

