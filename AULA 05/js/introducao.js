// o JS é case sensitive 
// não precisa de ';' no final da linha, mas por boa prática é recomendado usá-lo
// O Browser interpreta o código

// Variáveis em JS palavra reservada | identificador | valor - Em JS não é necessário declarar o tipo da variável
//usando a palavrada reservada var - Usar somente agora
var diaSemana = "Quarta-feira";
// o var é uma variável redeclarável, ou seja, pode ser declarada mais de uma vez
// var deixa a variável no escopo global

//console do navegador - F12 ou inspecionar
console.log(diaSemana); //exibe uma mensagem no console do navegador
//Apenas agora
console.log('Hoje é ' + diaSemana); //concatenação de string

// envés de var usar a cláusula let
let nomeUsuario = 'Geovane';
// let possui escopo de bloco ou 'local', ou seja, só pode ser acessada dentro do bloco onde foi declarada, e não pode ser redeclarado, ao tentar declarar novamente a variável com let, o JS irá gerar um erro
let idadeUsuario = 30;
let noite = true;
let email = 'geovane.geors@gmail.com'
const dataNascimento = '02/12';
// let dataNascimento = '02/12'; para valores que não serão alterados, usar a palavra reservada const, que é uma constante, ou seja, não pode ser alterada após a declaração

console.log(nomeUsuario);

// template string, envés de uma concatenação '+' USAR A CRASE ` PARA CONCATENAR

// usar sempre assim ${nome da variável} para concatenar
console.log(`Nomde do usuário: ${nomeUsuario}, email: ${email}`);

// typeof mostra o tipo que foi atribuido automaticamente
console.log(noite, typeof noite);
console.log(email, typeof email);
console.log(idadeUsuario, typeof idadeUsuario);
 //string
 console.log(dataNascimento);
 //  gera um erro pois dataNascimento é uma constante e não pode ser alterada
//  const dataNascimento = '02/12';
//  console.log(dataNascimento);

//array 
const pessoas = ["Eu", "Tu", "Ele", "Nós", "Vós", "Eles"];
console.log(pessoas);
console.log(pessoas[2]);
// array recebe qualquer coisa pois não possui tipagem, ou seja, pode receber strings, números, booleanos, objetos, etc.
// para ir para frmaeworks deve-se saber bem arrays + function + objetos + consumir APIs 

const coisas = ['tati', 17, 'Mouse', true, 1.75, 'Gato'];
console.log(coisas);
console.table(coisas); // exibe o array em formato de tabela no console
if(nomeUsuario === 'Geovane'){
    console.log('Olá Geovane, seja bem-vindo!');
}
else if(nomeUsuario === 'Tati'){
    console.log('Olá Tati, seja bem-vinda!');
}





 
