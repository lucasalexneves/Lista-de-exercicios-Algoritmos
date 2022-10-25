//Escreva um algoritmo onde seu usuário deve informar nome, idade, peso, altura e
//profissão, a partir disso você deve exibir um texto com todas essas informações pra ele
var nome = prompt ("Digite o seu Nome:")
var idade = prompt ("Digite a sua idade:")
var peso = prompt ("Digite o seu peso")
var altura = prompt ("Digite a sua altura")
var profissão = prompt ("Digite a sua profissão")

console.log ("Usuário inseriu nome: ", nome, ", idade: ", idade, ", peso: ", peso, ", Profissão: ", profissão, ", altura: ", altura)

//Utilizando o algoritmo anterior verifique se o usuário é maior ou menor de idade, se
//ele for maior exiba na tela “Está liberado para tomar umas geladas”, se ele for
//menos exiba “Sem gelada para você”

if (idade >= 18){
    console.log("Está liberado para tomar umas geladas")
}else{
    console.log("Sem gelada para você")
}