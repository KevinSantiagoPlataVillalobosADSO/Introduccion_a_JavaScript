
const num = parseInt(prompt("Ingrese un número entero:"));
if (!isNaN(num) && num > 0) {
    let linea = '';
    for (let i = 1; i <= num; i++) {
        if (i % 2 !== 0 || i === 1) {
        linea = i + linea;
        console.log(linea);
        }
    }
} else {
    console.log("El número ingresado no es válido. Debe ser un entero positivo.");
}