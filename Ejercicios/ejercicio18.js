alert("EVALUAR EXPRESION (a+7*c) / (b+2-a) + 2*b");
let a = parseInt(prompt("Ingrese el valor de a"));
let b = parseInt(prompt("Ingrese el valor de b"));
let c = parseInt(prompt("Ingrese el valor de c"));

let eval = (a + 7 *c) / (b + 2 - a) + 2*b;
alert(`EL RESULTADO ES: ${eval}`)