let suma = 0;

for (let i = 1; i <= 4; i++) {
    numero = parseInt(prompt("Ingrese el numero"));
    suma += numero;
}

let media = suma / 4;
alert(`La media es ${media}`)