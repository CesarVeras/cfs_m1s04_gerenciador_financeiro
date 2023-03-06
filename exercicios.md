# Gerenciador Financeiro

## Exercício 1 [x]

Conforme estudamos durante esta semana percebemos que existem 3 escopos em Javascript, que chamamos de Escopo Global, Escopo de Função e Escopo de Bloco.

Crie um código em que os 3 escopos estejam presentes e em cada um deles haja um console.log identificando o escopo atual.

Exemplo:

```js
function functionScope() {
	console.log("Estou no escopo de função;")
};

functionScope();
```

**Resposta:**

```js
let variavelEscopoGlobal = 10;

function funcaoEscopo() {
	let variavelEspocoFuncao = 20;
}

if (variavelEscopoGlobal > 5) {
	let variavelEscopoBloco = 30;
}
```

## Exercício 2 [x]

Com suas palavras descreva a importância de diferenciar as declarações var, let e const.

A descrição de cada uma delas deve responder as seguintes perguntas:

1. A declaração em questão respeita quais escopos?

1. A declaração em questão pode ser atualizada?

1. A declaração em questão pode ser declarada mais de uma vez?

1. A declaração em questão sofre hoisting?

1. A declaração em questão pode ser inicializada sem declaração?

**Resposta:**

Var: são variáveis que só podem ter escopo de função ou global, podem ser atualizadas, podem ser redeclaradas, sofrem hoisting e podem ser usadas antes da inicialização.

Let: são variáveis que podem ter escopo global, função ou de bloco, podem ser atualizadas mas não podem ser redeclaradas. sofrem hoisting e não podem ser usadas antes de inicializadas.

Const: são constantes que podem ter escopo global, função ou de bloco, não podem ser atualizadas nem redeclaradas. sofrem hoisting e não podem ser usadas antes de inicializadas.

## Exercício 3 [x]

Conforme vimos nas aulas a Programação Orientada a Objetos é um paradigma de programação.

Com suas palavras descreva o conceito do paradigma em questão e por que usamos classes em Javascript para aplicar este no desenvolvimento de uma aplicação.

**Resposta:**

Orientação a objetos nos ajuda a abstrair elementos do mundo real para ser usados no código, facilitando na criação de atributos e ações que esse objeto pode realizar e ainda organizando-as num só lugar. Podemos ter múltiplos objetos iguais com atributos diferentes, sem termos que perder nenhuma informação entre eles e não tendo que criar diversas variáveis repetidas.

## Exercício 4 [x]

Usando seu entendimento, explique o que cada um dos métodos de array abaixo executam:

1. forEach
1. map
1. filter
1. find
1. reduce
1. every

**Resposta:**

ForEach: é uma função que itera sobre todos os elementos do array e permite que realizemos algo durante o loop. Não alterar o array original e não possui retorno. Tem 3 parâmetros opcionais que são o elemento atual que se está usando no laço, o índice desse elemento e o array no qual está sendo operado o forEach. 

Map: é uma função que itera sobre todos os elementos do array e permite que realizemos algum tipo de alteração sobre cada elemento do array. Não alterar o array original mas retorna um novo array com as mudanças realizadas. Tem 3 parâmetros opcionais que são o elemento atual que se está usando no laço, o índice desse elemento e o array no qual está sendo operado o map. 

Filter: é uma função que itera sobre todos os elementos do array e permite que filtremos os elementos do array dado um algoritmo de comparação fornecido pelo programador. Retorna uma lista com o valores que passaram pela verificação. Tem  3 parâmetros opcionais que são o elemento atual, o índice desse elemento e o array no qual está sendo operado o filter.

Find: é uma função que itera sobre todos os elementos do array que retorna o primeiro valor do array que satisfaça a condição de filtro passada, ou undefined caso não encontrado. Tem  3 parâmetros opcionais que são o elemento atual, o índice desse elemento e o array no qual está sendo operado o find.

Reduce: é uma função que itera sobre todos os elementos do array e reduz seus valores a alguma operação passada. Retorna um único valor. Possui 3 parâmetros, sendo o acumulador, o valor atual e o valor inicial.

Every: é uma função que verifica se todos os elementos do array passando numa verificação fornecida e retorna um booleano. Tem  3 parâmetros opcionais que são o elemento atual, o índice desse elemento e o array no qual está sendo operado o every.

## Exercício 5 [x]

Em que momento o método constructor é chamado em uma classe?

**Resposta:**

É chamado quando chamamos um new Class(), nesse momento a instância da classe é criada e inicializada de acordo com como o construtor foi estruturado.

## Exercício 6 [ ]

Crie uma nova página na aplicação para que as despesas em grupo sejam exibidas.

Se você ainda não tem o projeto atualizado da semana, baixe aqui: 

[GitHub - FullStack-Itacorubi/M1S04: Projeto e exercícios da semana 4 no módulo 1 ;](https://github.com/FullStack-Itacorubi/M1S04)

Esta página deve atender aos seguintes requisitos:

1. Header com Botão de voltar (para voltar para a home), nome da página (Despesas em grupo) e ao lado botão para cadastro de nova despesa em grupo (por enquanto sem funcionalidade)

1. O corpo da página deve estar pronto para exibir uma listagem de despesas em grupo onde haja um título para a despesa, o valor repartido em partes iguais para o grupo e por fim o valor final da despesa;

1. Crie uma classe para criar o objeto de despesa em grupo, o qual deve conter as seguintes propriedades:

	1. Título que descreva a despesa (title)

	1. Valor parcial, a parte de cada um na despesa (partialValue)

	1. Em quantas pessoas o valor deve ser dividido, é uma propriedade privada (numberOfParticipants)

	1. O valor total da despesa (amount)

1. Por enquanto use um array com dados fictícios, o cadastro de valores será contruído na próxima tarefa.

## Exercício 7 [ ]

Crie um botão para exibir um modal para cadastro de despesas em grupo. Ao clicar no botão um modal deve ser aberto (conforme ocorre atualmente no sistema para cadastro de despesas individuais).

O modal aberto deve possuir um formulário com os seguintes campos:

1. Título que descreva a despesa (title)
1. Em quantas pessoas o valor deve ser dividido (numberOfParticipants)
1. O valor total da despesa (amount)

Abaixo do formulário deve haver um botão “Adicionar”, que ao ser clicado deve adicionar a despesa na lista de despesas (Array.push).

‌O cálculo do valor parcial deve ser feito na próxima tarefa.

## Exercício 8 [ ]

No clique do botão “Adicionar” você adicionou a despesa a listagem sem o cálculo do valor parcial. Mas, como você tem o valor total e o número de pessoas que irão dividir a despesa calcule o valor parcial (a parte de cada um)

## Exercício 9 [ ]

Crie um menu, ou botão para que o usuário possa navegar entre as despesas individuais e em grupo. Não esqueça de pensar nos dois caminhos:

1. Despesas Individuais → Despesas em grupo
1. Despesas em grupo → Despesas individuais

Use sua criatividade no layout.

## Exercício 10 [ ]

Sempre que uma despesa em grupo for adicionada adicione um alert para que o usuário seja notificado de que a ação dele funcionou.