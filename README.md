# Formulário para criação de contas

Esse é um formulário para criação de conta, ele armazena em um array os dados adicionados e exibe-os em forma de tabela.

Nele eu uso a framework bootstrap para estilização e responsividade 
Uso também JS para manipulação dos dados
A lógica usada no app.js é o mapeamento do tbody da página e dos campos de inserção de dados, uso a função .addFunctionListener para substituir a função padrão do botão criado para envés de fazer um refresh na página finalizar a criação/ fazer upload para o array.

Sequencialmente, os dados inseridos são armazenados em um array (campos), esses serão as instâncias que ao receberem os valores dos campos serão direcionados para a tabela na area superior da pagina.

o botão confirmar finaliza a inserção de dados e envia para o array
