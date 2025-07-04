//recuperar o tbody -- Precisamos dele para criar a tr e as tds dos dados

const tbody = document.querySelector('tbody');
// console.log(tbody);

//pegar o form para cancelar o envio dos dados(EVENTO), quando o evento submit for disparado pare esse evento
//para executar uma função que estará ligada ao formulário

document.querySelector('form').addEventListener('submit', function(e) {
    // cancela o evento padrão - Receber na função o evento
    e.preventDefault();

    // recuperar os campos do formulário - armazenar em um array
    const campos = [
        document.querySelector('#usuario'),
        document.querySelector('#email'),
        document.querySelector('#dataCadastro'),
        document.querySelector('#tipoConta')
    ];

    // console.log(campos);

    //criar a linha que receberá as colunas da tabela
    const tr = document.createElement('tr');
    // percorrer o array campos e pegar em cada um dos ìndices a informação digitada
    // cria um td para cada campo
    // e coloca essa td na tr

    campos.forEach((campo) => {
        // criar a coluna
        const td = document.createElement('td');

        // pegar o que foi digitado no campo
        td.textContent = campo.value;

        // adicionar td na tr
        tr.appendChild(td);
    });

    // colocar na tbody a tr criada
    tbody.appendChild(tr);
    
    //limpar o form
    this.reset();
});

