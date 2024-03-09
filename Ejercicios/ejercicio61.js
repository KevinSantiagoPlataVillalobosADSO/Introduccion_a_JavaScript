let notas_n = parseInt(prompt("INGRESE EL NUMERO DE NOTAS A INGRESAR"));
let nota = [];
for (let i = 0; i < notas_n; i++) {
    nota[i] = parseFloat(prompt("INGRESE LA NOTA"))
}
console.log(nota)
let mayor = nota[0]
for (let j = 0; j < nota.length; j++) {
        if (nota[j] > mayor) {
            mayor = nota[j];
        }
}

alert(`LA NOTA MAYOR ES ${mayor}`)