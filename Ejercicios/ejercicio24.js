let num = parseFloat(prompt("INGRESE EL NUMERO"))
let regex = /[0-9,]+[^.]/;

if (regex.test(num)){
    alert("FLOAT")
}
else{
    alert("NO FLOAT")
}