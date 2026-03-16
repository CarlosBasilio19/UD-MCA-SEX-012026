let produto = {
nome: 'Camisa',
cor: 'Preta',
preco: 59.90,
estoque: 50
};

// A
console.log("Nome do produto:", produto.nome);

// B
console.log("Preço:", produto['preco']);

// C
produto.estoque = 80;

// D
console.log("Produto completo:");
console.log(produto);