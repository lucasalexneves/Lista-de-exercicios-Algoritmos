//Utilizando os algoritmos já realizados como base, calcule o IMC do seu usuário e
//informe a faixa dele, segue detalhes do cálculo do IMC e suas faixas.
//O IMC é a relação entre peso e altura e o cálculo é feito de acordo com a fórmula:
//IMC = peso / (altura x altura)
//O peso deve estar em kg e a altura em metros, e o resultado é dado em kg/m2.
//Depois de obter o resultado, é possível verificar em que faixa o IMC se encontra, podendo
//indicar:
//- Magreza, quando o resultado é menor que 18,5 kg/m2;
//- Normal, quando o resultado está entre 18,5 e 24,9 kg/m2;
//- Sobrepeso, quando o resultado está entre 24,9 e 30 kg/m2;
//- Obesidade, quando o resultado é maior que 30 kg/m2.

var peso = 0.0
var altura = 0.0
var imc = 0.0

peso = prompt("Digite o seu peso em KG:")
altura = prompt ("Digite a sua altura em M:")
imc = peso / (altura * altura)

console.log("Seu IMC é: ", imc)

if(imc < 18.5){
    console.log("IMC corresponde a Magreza")
}if(imc >= 18.5 && imc < 24.9){
    console.log("IMC corresponde a Normal")
}if(imc >= 24.9 && imc < 30){
    console.log("IMC corresponde a Sobrepeso")
}if(imc >= 30){
    console.log("IMC corresponde a Obesidade")
}