// Crea una función para calcular cuantas silabas tiene cada palabra, imprime el resultado
// en la consola.
let palabra = prompt("INGRESE LA PALABRA");
let minu = palabra.toLowerCase();
function silaba (palabra){
    let silabas = 0;
    for (let i = 0; i < palabra.length; i++) {
        let vocal = palabra[i]
        if('aeiou'.includes(vocal)){
            silabas ++;
        }
    }
    return(`EL NUMERO DE SILABAS QUE CONTIENE ${palabra} ES ${silabas}`);
}   
alert(silaba(minu))