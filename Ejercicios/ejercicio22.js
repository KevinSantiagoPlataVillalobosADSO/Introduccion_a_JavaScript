let minutos = parseFloat(prompt("INGRESE EL NUMERO DE MINUTOS"));
let min = 335;
let iva = 0.20;
let calc = (minutos * min) + ((minutos * min) * iva);
alert(`EL COSTO POR LOS MINUTOS ES DE: ${calc}`)