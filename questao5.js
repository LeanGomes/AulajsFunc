/*Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. 
Modifique a questão 9 da lista anterior para chamar essa função dentro do loop ao construir a tabela.

*/

function temp(f) {
    return  (5/9)*(f - 32);

}

console.log("Celsius: "+temp(12));

for (let i = -50; i <= 50; i++) {
console.log(i, (5/9)*(i- 32) + i);

 i+=5;
}




