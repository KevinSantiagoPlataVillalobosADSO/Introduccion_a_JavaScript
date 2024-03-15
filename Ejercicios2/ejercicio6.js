// Crea una función de nos devuelva el elemento mayor de un arreglo de números.
let numer = parseInt(prompt("INGRESE LOS NUMEROS A MIRAR"));
let array = [];
for (let i = 0; i < numer; i++) {
    let number = parseFloat(prompt("INGRESE EL NUMERO"))
    array[i] = number;
}

function max (){
    let mayor = 0;
    for (let i = 0; i < array.length; i++) {
        if(array[i] > mayor){
            mayor = array[i]
        }
    }
    return mayor;
}

alert(max());