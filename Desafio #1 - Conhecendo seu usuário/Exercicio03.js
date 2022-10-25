//Faça um algoritmo que utilize a idade informada pelo usuário, e nos mostre sua
//idade em meses, semanas e dias. Considerar ano com 365 dias, mês com 30 dias e
//semana com 7 dias.

var idade = parseInt(prompt("Digite a sua idade:"))
var dias = idade * 365 // 10220
var semanas = parseInt(dias / 7)
var meses = idade * 12 // 336 meses

console.log ("Você tem ", meses, " meses e ", semanas, " semanas e ", dias, " dias de vida.")




