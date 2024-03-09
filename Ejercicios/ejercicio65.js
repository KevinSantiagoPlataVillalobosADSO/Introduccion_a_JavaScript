let num = parseInt(prompt("INGRESE EL NUMERO"))
let numero = [];
for (let i = 1; i <= num; i++) {
    numero[i] = i;
    console.log(numero[i])
}

let reversa = numero.reverse();
alert(` ${reversa.join(', ')}`)