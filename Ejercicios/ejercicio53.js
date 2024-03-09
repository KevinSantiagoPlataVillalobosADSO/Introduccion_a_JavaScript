let prod1 = parseFloat(prompt("INGRESE EL VALOR DEL PRIMER PRODUCTO"));
let prod2 = parseFloat(prompt("INGRESE EL VALOR DEL SEGUNDO PRODUCTO"));
let prod3 = parseFloat(prompt("INGRESE EL VALOR DEL TERCER PRODUCTO"));
let prod4 = parseFloat(prompt("INGRESE EL VALOR DEL CUARTO PRODUCTO"));
let prod5 = parseFloat(prompt("INGRESE EL VALOR DEL QUINTO PRODUCTO"));

let iva = 0.20;

let total_iv = prod1*iva + prod2*iva + prod3*iva + prod4*iva + prod5*iva;
let sub_total = prod1 + prod2 + prod3 + prod4 + prod5;
let total = prod1 + prod2 + prod3 + prod4 + prod5 + total_iv;
alert(`EL IVA POR LOS PRODUCTOS ES ${total_iv} \n EL SUBTOTAL ES ${sub_total} \n EL TOTAL ES ${total}`)