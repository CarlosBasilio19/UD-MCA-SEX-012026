let produtos = [
{ nome: 'Mouse', preco: 50, estoque: 30 },
{ nome: 'Teclado', preco: 120, estoque: 20 },
{ nome: 'Monitor', preco: 900, estoque: 10 },
{ nome: 'Notebook', preco: 3500, estoque: 5 },
{ nome: 'Headset', preco: 200, estoque: 15 },
{ nome: 'Webcam', preco: 180, estoque: 12 },
{ nome: 'Microfone', preco: 250, estoque: 8 },
{ nome: 'Cadeira Gamer', preco: 1200, estoque: 6 },
{ nome: 'HD Externo', preco: 400, estoque: 14 },
{ nome: 'Pen Drive', preco: 60, estoque: 40 }
];

// A
console.log("Preço do segundo objeto:", produtos[1].preco);

// B
console.log("Nome do terceiro objeto:", produtos[2].nome);

// C
console.log("Quantidade de itens:", produtos.length);

// D
for(let i = 0; i < produtos.length; i++){
console.log(produtos[i].nome);
}

// E
let totalEstoque = 0;

for(let i = 0; i < produtos.length; i++){
totalEstoque += produtos[i].estoque;
}

console.log("Total de estoque:", totalEstoque);

// F
let maiorEstoque = produtos[0];

for(let i = 1; i < produtos.length; i++){
if(produtos[i].estoque > maiorEstoque.estoque){
maiorEstoque = produtos[i];
}
}

console.log("Produto com maior estoque:", maiorEstoque);