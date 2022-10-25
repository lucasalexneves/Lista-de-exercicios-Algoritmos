//Imagine que você trabalha num banco e sua missão é fazer um algoritmo para prever o
//aumento de salário de seus clientes.
//1. Peça para seu cliente informar seu nome, idade e salário atual e exibe essas
//informações em tela.
//2. Faça a previsão do salário dele para os próximos 10 anos considerando que:
//O cliente recebe, anualmente, aumento salarial.
//Sabe-se que: no primeiro ano, ele receberá um aumento de 1,5%, sobre o
//seu salário atual; A partir do segundo ano, os aumentos salariais sempre
//corresponderam ao dobro do percentual do ano anterior. Apresente todos os
//valores com o ano correspondente ex: 2023 - R$1500.
//3. Peça para que seu cliente confirme as informações, se ele informar que digitou
//errado, peça para colocar TODAS as informações novamente, se o cliente errar 4
//vezes o programa deve ser encerrado.

var nome 
var idade 
var salario 
var reset


for (var i = 0; i < 4; i++) {
    nome = prompt ("Digite o seu nome:")
    idade = parseInt(prompt("Digite a sua idade:"))
    salario = parseFloat(prompt ("Digite o seu salário:"))
    console.log("Nome: ", nome, " - Idade: ", idade, " - Salário: ", salario)
    reset = prompt ("As informações estão corretas? (S ou N)")
    if (reset == "S"){
        i = 4
    }
}

if (reset == "N"){
    console.log("O programa será encerrado.")
} else{
    var anoPrevisao
    var salarioPrevisao
    var aumento = 0.015

    console.log("2022 - ", salario)

    for (var i = 2023; i < 2033; i++) {
        
        salarioPrevisao = salario + (aumento * salario)

        console.log(i, " - ", " R$ ", salarioPrevisao)

        aumento = aumento * 2
        salario = salarioPrevisao
        
    }

}


