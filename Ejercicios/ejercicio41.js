function invertirCadena(cad) {
    let separarCadena = cad.split(""); 
    let invertirArreglo = separarCadena.reverse(); 
    let unirArreglo = invertirArreglo.join(""); 
    alert(unirArreglo)
}
let frase = prompt("INGRESE LA PALABRA")
invertirCadena(frase);