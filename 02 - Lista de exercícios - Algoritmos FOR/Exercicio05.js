//Faça um algoritmo que receba 5 números e para cada um deles exibir na tela qual o
//resultado da sua multiplicação pelos próximos 5 números em sequência.
//Ex.: Números de entrada: 3, 11, 8, 21, 6
//Saída:
//Número: 3 Número: 11 ... ... Número: 6
//3 x 4 = 12 ...11 x 12 = 132 ...6 x 7 = 42
//3 x 5 = 15 ...11 x 13 = 143 ...6 x 8 = 48
//3 x 6 = 18 ...11 x 14 = 154 ...6 x 9 = 54
//3 x 7 = 21 ...11 x 15 = 165 ...6 x 10 = 60
//3 x 8 = 24 ...11 x 16 = 176 ...6 x 11 = 66

var numeroDaTabuada = 0

for (var contador = 0; contador < 5; contador++) {
    numeroDaTabuada = parseInt(prompt("Qual tabuada você deseja?"))
    
  
    for (var multiplicador = numeroDaTabuada + 1; multiplicador <= numeroDaTabuada + 5; multiplicador++) {
    
        console.log(numeroDaTabuada, " X ", multiplicador, " = ", numeroDaTabuada * multiplicador)
    }
}