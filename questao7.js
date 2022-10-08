/*Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não. 
Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30.

*/

function ehprimo(n) {

   for (let i = 2; i <=n-1; i++) {
       if (n % i === 0 ) {
            return false;
       }
   
   }       
        return true;

}

console.log("O Número é Primo?", ehprimo(7))

for (let i = 2; i <= 30; i++) {

     if (ehprimo(i)) {
          console.log(i);
     }
    
   // console.log("Numero: " +i+ " "+ ehprimo(i))
}



