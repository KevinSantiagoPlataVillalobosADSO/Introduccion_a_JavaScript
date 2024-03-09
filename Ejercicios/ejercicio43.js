let regex = /((\".*?\")|(\'.*?\'))/g
let palabra = prompt("INGRESE UNA PALABRA CON COMILLAS O SIN ELLAS")
if(regex.test(palabra)){
    alert("TIENE COMILLAS")
}
else{
    alert("NO TIENE COMILLAS")
}