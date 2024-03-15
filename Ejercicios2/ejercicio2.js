// • Crea una función que tome un número como argumento y devuelva la cadena si el
// numero es par o impar.
let numero = parseFloat(prompt("INGRESE EL NUMERO"))
function pares(num){
    if(num % 2 == 0){
        par = "ES NUMERO PAR";
    }
    else if(num % 2 != 0){
        par = "ES NUMERO IMPAR"
    }
    else{
        par = "NUMERO INVALIDO"
    }
    return(par);
}
alert(pares(numero))