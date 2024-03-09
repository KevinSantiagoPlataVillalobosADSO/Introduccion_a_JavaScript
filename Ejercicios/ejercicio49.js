let h = parseFloat(prompt("INGRESE AL ALTURA"));
let b = parseFloat(prompt("INGRESE EL LARGO"))
let area = h * b;
if (b >= 0 && h >= 0){
    alert(`EL AREA ES ${area}`)
}
else{
    alert("VALORES NEGATIVOS NO SE ACEPTAN")
}