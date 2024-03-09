let pago = parseFloat(prompt("Ingrese el pago: "));

if(pago > 13000){
    let desc = pago*0.15;
    let total = pago - desc;

    alert(`EL DESCUENTO ES ${desc.toFixed(2)}`);
    alert(`TOTAL: ${total.toFixed(2)}`);

}