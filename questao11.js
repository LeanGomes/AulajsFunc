/*Escreva a função calc(op,a,b) em que o primeiro parâmetro define a operação a ser 
feita (0 → adição, 1 → subtração, 2 → multiplicação, 3 → divisão) e a e b são os operandos.
 Na implementação, defina uma função interna sem parâmetros para realizar cada operação (adiciona(), etc.).

Ex.: calc(2, 15,10) deve retornar 150.

*/

function calc(op, a, b) {

    function adicao() {
        console.log(a + b);
    }
    function subtracao() {
        console.log(a - b);
    }
    function multiplicacao() {
        console.log(a * b);
    }

    switch (op) {
        case 0:
            adicao();
            break;
        case 1:
            subtracao();
            break;
        case 2:
            multiplicacao();
            break;
    
        default:
            break;
    }
    
}
calc(0, 1, 10);
calc(1, 10, 10);
calc(2, 15, 10);