try {
    let edad = prompt("Digite su edad");
    if(edad < 16){
    alert("No tiene la edad requerida")
    throw Error("");   
    }
    let salario = prompt("Ingrese sus ingresos");
    salario >= 1000 ? alert("Debe tributar"): alert("no debe tributar")
}
catch (error) {
    console.error("edad no suficiente")
}