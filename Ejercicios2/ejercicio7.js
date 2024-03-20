// Crea una función que tome una cadena como parámetro y devuelva la cadena en orden
// inverso, por ejemplo, si la cadena de entrada es ‘Hola’, la función debería retornar ‘aloH’.
console.log("asd")
let palabra = prompt("INGRESE LA PALABRA A REVERTIR")

function revers(palabra){
    let reverse = '';
    for (let i = palabra.length -1; i >= 0; i--) {
        reverse += palabra[i];
    }
    return reverse;
}
alert(revers(palabra))
// let mostrar = reverse