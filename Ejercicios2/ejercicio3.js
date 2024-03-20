// Crea una función que calcule la longitud de una palabra si es corta o si es larga. (palabras
//     cortas menores de 5 caracteres).

let palabra = prompt("INGRESE LA PALABRA PARA CALCULAR SU LONGITUD");
function long(pal){
    let longitud = pal.length;
    if(longitud < 5 && longitud > 0){
        longi = ("LA PALABRA ES CORTA")
    }
    else if(longitud >= 5){
        longi = ("LA PALABRA ES LARGA")
    }
    else{
        longi = ("PALABRA INVALIDA")
    }

    return longi;
}

alert(long(palabra));