const numero = parseInt(prompt("Ingrese un número entero:"));

if (!isNaN(numero) && numero > 0) {
    for (let i = 1; i <= numero; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
        linea += '*';
    }
    console.log(linea);
    }
} else {
    console.log("El número ingresado no es válido. Debe ser un entero positivo.");
}