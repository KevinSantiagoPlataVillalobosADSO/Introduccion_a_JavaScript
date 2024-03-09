let edad = parseInt(prompt("INGRESE LA EDAD"));
let altura = parseFloat(prompt("INGRESE LA ESTATURA EN CM"));
let peso = parseFloat(prompt("INGRESE EL PESO"));
if(edad <= 19 && altura >= 175 && peso <= 80 && peso >= 75){
    alert("CUMPLE LOS REQUISITOS")
}
else{
    alert("NO CUMPLE")
}