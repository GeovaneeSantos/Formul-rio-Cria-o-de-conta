// Document object model
// Pegar qualque conteúdo da página e passar para o JS - Manipular
// Inserir novos conteúdos na página
// Excluir, alterar, listar qualquer conteúdo via DOM
// Grande Árvore de tags tem como nó de raiz o HTML

// pegar os elementos usamos: 
// Tag = usa uma tag html para traze-la ao dom (traz todas ou só a primeira que for localizada) 
// class = pegar todas as class ou somente a primeira
// id = pega o primeiro e unico id que foi declarado - NÃO PODEMOS TER ELEMENTOS COM O MESMO ID NA MESMA PÁGINA
// Quando pegamos um elemento = ele carega todo seus descendentes, seus atributos, suas classes e seus valores

// pegar valores no documento html por id 
const dados1 = document.getElementById('dados');
console.log(dados1);



// pegar valores no documento html por query 
const dados2 = document.querySelector('#dados');
console.log(dados2);

// pegar valores no documento html por class 
const personagem1 = document.getElementsByClassName('personagem');
console.log(personagem1);

// query selector retorna o priemeiro que ele encontra - para pegar todos use querySelectorAll
const personagem2 = document.querySelectorAll('.personagem');
console.log(personagem2);

// pegar pela tag
const getTD1 = document.getElementsByTagName('td');
console.log(getTD1);


const getTD2 = document.querySelectorAll('td');
console.log(getTD2[0]);







