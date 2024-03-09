alert("CALCULAR DISTANCIA ENTRE DOS PUNTOS");
let x1 = parseFloat(prompt("INGRESE EL VALOR DE X1"));
let y1 = parseFloat(prompt("INGRESE EL VALOR DE Y1"));
let x2 = parseFloat(prompt("INGRESE EL VALOR DE X2"));
let y2 = parseFloat(prompt("INGRESE EL VALOR DE Y2"));
let dist = ((x2 - x1)*(x2 - x1)) + ((y2 + y1) * (y2 + y1))
let dist_f = Math.sqrt(dist);
alert(`LA DISTANCIA ENTRE DOS PUNTOS ES: ${dist_f}`)