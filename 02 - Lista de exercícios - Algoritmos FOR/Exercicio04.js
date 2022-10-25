//Desenvolva um programa que receba a nota, de 0 a 10, e o sexo de 10 alunos,
//usando a estrutura FOR. No final, exiba no console:
//a. A média geral dos alunos
//b. Quantos homens enviaram as notas
//c. Quantas mulheres tiveram nota acima de 7
//d. Qual a maior nota entre os homens
//Obs.: para obter a média geral deve somar todas as notas e dividir pelo número de alunos!

var nota = 0
var sexo = " "
var homem = 0 
var mulher = 0 
var mulher7 = 0
var somaNota = 0
var media = 0
var maiorNota = 0

for (var contador = 1; contador <= 10; contador++) {
    nota = parseInt(prompt("Digite a nota do aluno"))
    sexo = prompt("Digite o sexo do aluno")
    
    console.log("Aluno ", contador, " - ", nota, " - ", sexo)
    
    somaNota = somaNota + nota
    
    if(sexo == "Homem"|| sexo == "homem"){
        homem++
    }if(sexo == "Mulher"|| sexo == "mulher"){
        mulher++
    }

    if(sexo == "Mulher" && nota > 7){
        mulher7++
    }

    if(sexo == "Homem" && nota > maiorNota){
        maiorNota = nota
    }


}

media = somaNota / 10
console.log("A média da turma é: ", media)
console.log("Quantidade de alunos homens: ", homem)
console.log("Quantidade de mulheres que tiraram nota acima de 7: ", mulher7)
console.log("A maior nota entre os Homens foi: ",maiorNota)