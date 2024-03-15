// • Crea una función que reciba dos números como parámetros y devuelva el mayor de
// ellos.
let a = parseInt(prompt("INGRESE EL PRIMER NUMERO ENTERO"))
let b = parseInt(prompt("INGRESE EL SEGUNDO NUMERO ENTERO"))

function num_mayor(a, b){
    if(a > b){
        mayor = a;
    }
    else if(b > a){
        mayor = b;
    }
    else if(a === b){
        alert("SON IGUALES") 
    }
    else{
        alert("NUMERO INVALIDO")
    }
    return(mayor)
}

// function num_mayor(a, b){
//     let mayor = Math.max(a, b)
//     return mayor
// }

alert(num_mayor(a, b))