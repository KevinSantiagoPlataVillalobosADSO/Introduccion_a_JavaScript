let prod1 = parseFloat(prompt("INGRESE EL VALOR DEL PRIMER PRODUCTO"));
let prod2 = parseFloat(prompt("INGRESE EL VALOR DEL SEGUNDO PRODUCTO"));
let prod3 = parseFloat(prompt("INGRESE EL VALOR DEL TERCER PRODUCTO"));
let prod4 = parseFloat(prompt("INGRESE EL VALOR DEL CUARTO PRODUCTO"));
let prod5 = parseFloat(prompt("INGRESE EL VALOR DEL QUINTO PRODUCTO"));

let desc1 = prod1 - (prod1 * 0.05);
let desc2 = prod2 - (prod2 * 0.05);
let desc4 = prod4 - (prod4 * 0.02);
let desc5 = prod5 - (prod5 * 0.02);
let total = prod1 + prod2 + prod3 + prod4 + prod5;
alert(`EL TOTAL A PAGAR ES: ${total} \n el producto 1 costó: ${desc1} \n el producto 2 costó: ${desc2} \n el producto 3 costó: ${prod3} \n el producto 4 costó: ${desc4} \n el producto 5 costó: ${desc5} `)