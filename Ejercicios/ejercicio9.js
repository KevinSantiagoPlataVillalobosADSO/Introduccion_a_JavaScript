let edad = prompt("Digite su edad");
if(edad < 4){
    alert("Entra gratis")
}

else if(edad >= 4 && edad < 18){
    alert("Paga 4€.")
}

else if(edad > 18){
    alert("Paga 10€.")
}

else{
    alert("Edad invalida")
}