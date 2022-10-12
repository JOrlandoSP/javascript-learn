// Porposto o seguinte objeto, que vamos considerar como informação bruta proveniente de uma API
// onde o objetivo seja tratar os dados de forma que se possa manipular os valores numericos nela contidos
// Utilizaremos os metodos filter map e reduce

const precos = [
    "Crédito",
    "R$ 200",
    "R$ 1200",
    "Valores a receber",
    "R$ 300",
    "R$ 450",
    "R$ 2500",
    "Investimento",
    "R$ 1000000",
    "R$ 500000"
];


// CONSTANTE: constrante que armazenará o resultado da filtragem
// ORIGEN: origem dos dados sem tratamento
// METOD: metododo para tratar os dados, no caso FILTER
// FUNCAO: funçao de calback que determina a condição para que cada iteração do item no objeto seja retornado
// a condição utiliza booleanos para incluir ou não os objetos
// no caso vericia se p item contem(.includes) "R$"

//    [constante]   [origen][metod]         [funcao]
const precosFilter = precos.filter(function (preco){
    return preco.includes("R$ ")
});



// MAP segue basicamente a mesma estrutura do filter, porem ao invés de retornar cada iteração com base em uma resposta booleana
// MAP realiza ALTERAÇÃO em cada item, com base no que for especificado dentro da função
// Neste caso estamos removendo o "R$ " e transformando o valor em NUMERO
const precosMap = precosFilter.map(function (preco){
    return Number(preco.replace("R$ ", ""))
});

// REDUCE diferente de MAP e FILTER recebe dois parametros, sendo o PRIMEIRO o valor inical, que funciona
// como um acumulador dos valores subsequentes, enquanto o SEGUNDO funciona como um cursor que itera ao longo
// dos demais itens que compõe o ARRAY a ser processado, no caso a variavel precosMap
// Um outro detalhe importante é que REDUCE retorna um unico valor ao final da operação

const total = precosMap.reduce(function (acumulador, atual){
    return (acumulador + atual)
});

console.log("Codigo simples")
console.log(total)


// Exatamente o mesmo codigo executado acima, só que otimizado
// Funções foram declaradas como arrow function
// A conversão de valore em numero foi feita utilizando o sinal de "+"

const precosFilter2 = precos.filter(preco=> preco.includes("R$ "));
const precosMap2 = precosFilter.map(preco => +preco.replace("R$ ", ""));
const total2 = precosMap.reduce((acc, item)=> acc + item);
console.log("Codigo otimizado")
console.log(total2)