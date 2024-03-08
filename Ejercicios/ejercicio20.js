// a * x2 + b + x + c
let x = 13;
let a = parseInt(prompt("INGRESE EL VALOR DE A"));
let b = parseInt(prompt("INGRESE EL VALOR DE B"));
let c = parseInt(prompt("INGRESE EL VALOR DE C"));
let exp = a * Math.pow(x, 2) + b + x + c;
alert(`EL RESULTADO DE LA EXPRESION ES: ${exp}`)