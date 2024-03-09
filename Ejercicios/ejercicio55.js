let tipo_m = prompt("INGRESE EL TIPO DE MEMBRESIA PARA SABER SU DESCUENTO: \n A. \n B. \n C.");
let hel = parseFloat(prompt("INGRESE EL VALOR DEL HELADO")).toFixed(2);
let desc, valor_h;
switch (tipo_m.toUpperCase()) {
    case "A":
        alert("DESCUENTO DE 10%")
        desc = hel*0.10
        valor_h = hel - desc;
        alert(`PRECIO TOTAL: ${valor_h}`)
        break;

    case "B":
        alert("DESCUENTO DE 15%")
        desc = hel*0.15
        valor_h = hel - desc;
        alert(`PRECIO TOTAL: ${valor_h}`)
        break;

    case "C":
        alert("DESCUENTO DE 20%")
        desc = hel*0.20
        valor_h = hel - desc;
        alert(`PRECIO TOTAL: ${valor_h}`)
        break;

    default:
        alert("DESCUENTO INVALIDO")
        break;
}