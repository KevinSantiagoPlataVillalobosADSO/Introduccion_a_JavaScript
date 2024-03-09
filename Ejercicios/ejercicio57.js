let nota = parseFloat(prompt("INGRESE LA NOTA:"))
if(nota <= 10 && nota > 9){
    alert("EXCELENTE");
}
else if(nota <= 9 && nota > 8){
    alert("MUY BIEN");
}

else if(nota <= 8 && nota >7.5){
    alert("BIEN");
}

else if(nota < 7.5){
    alert("NA");
}

else{
    alert("NOTA INVALIDA");
}