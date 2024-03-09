let saldo = parseInt(prompt("INGRESE EL SALDO."))
let itr, itr_p, total;
if(saldo < 100000){
    itr = 0.03;
    itr_p = saldo * itr;
    total = saldo + itr_p;
    alert(`INTERES PAGADO: ${itr_p} \n TOTAL: ${total}`)
}

else if(saldo >= 100000){
    itr = 0.04;
    itr_p = saldo * itr;
    total = saldo + itr_p;
    alert(`INTERES PAGADO: ${itr_p} \n TOTAL: ${total}`)
}

else{
    alert("SALDO INVALIDO")
}