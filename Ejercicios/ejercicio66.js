let cant = parseInt(prompt("CANTIDAD A INVERTIR"));
let interes = parseFloat(prompt("INTERES ANUAL"));
let anios = parseInt(prompt("INGRESE LOS AÑOS DE INVERSION"));
for (let i = 1; i <= anios; i++) {
    let perc = interes * 0.001;
    let ganan = cant + (cant * interes);
    alert(`LA GANANCIA EN EL AÑO ${i} ES DE: ${ganan}`)
}
