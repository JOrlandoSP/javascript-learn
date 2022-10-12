// Utilizando as palavras reservadas TRY e CATCH, fazemos respectivamente a verificação das informações
// podendo retornar erros personalizados, através do metodo throw
// caso não sejam encontrados erros, o array é retornado

// Utilizando CATCH filtramos o que deve acontecer, dependendo do tipo do erro apresentado, que é referenciado
// apos a palavra InstanceOf
// Detalhe para o ELSE final que retorna uma mensagem padrão caso o tipo de erro não seja previsto

function arrSize(arr, tamanho){
try{
    if (arr === false && tamanho === false) throw new ReferenceError("Informe um array e um numero")
    if (typeof(arr) != "object") throw new TypeError("Array precisa ser do tipo array") 
    if (typeof(tamanho) != "number") throw TypeError("Tamanho precisa ser do tipo numero")
    if (arr.length !== tamanho) throw RangeError("Tamanho invalido")
    return arr
}
catch(e){
    if (e instanceof ReferenceError){
        console.log("Este é um ReferenceError")
        console.log(e.message)
        console.log(e.stack)
    }
    else if (e instanceof TypeError){
        console.log("Este é um TypeError")
        console.log(e.message)
        console.log(e.stack)
    }
    else if (e instanceof RangeError){
        console.log("Este é um RangeError")
        console.log(e.message)
        console.log(e.stack)
    }
    else {
        console.log("Erro não esperado" + e)
    }
}
}

console.log(arrSize([1,2,3,4], 4))