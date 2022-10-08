/*Modifique a resposta anterior para que a chamada de função 
receba parâmetros passados na linha de comando.

*/

let nota1 =  parseInt(process.argv[2]);
let nota2 =  parseInt(process.argv[3]);
let nota3 =  parseInt(process.argv[4]);

function media3(nota1, nota2, nota3) {
    
    return (nota1 + nota2 + nota3)/ 3;;
    
}

console.log(media3(nota1, nota2, nota3))