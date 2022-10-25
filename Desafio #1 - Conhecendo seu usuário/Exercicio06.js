//Utilizando os últimos exercícios como base agora você deve exibir todos os anos
//que o usuário já viveu até o ano atual e informar qual a idade dele no determinado ano.
//ATENÇÃO: Aqui você deve utilizar uma estrutura de repetição(para)
//Ex: Nasceu em 2018 você deve exibir:
//2018 - 0 anos de idade
//2019 - 1 anos de idade
//2020 - 2 anos de idade
//2021 - 3 anos de idade
//2022 - 4 anos de idade

var AnoNascimento = parseInt(prompt("Digite o seu ano de nascimento:"))
var idade = 0

for (var contador = AnoNascimento; contador <= 2022 ; contador++) {
    console.log (contador, ' - ', idade, ' anos de idade.')
    idade++
}