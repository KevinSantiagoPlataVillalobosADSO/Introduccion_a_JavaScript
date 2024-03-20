// • Crea una función para validar un pin que acepte 4 o 6 caracteres de longitud, solo se
// aceptan números, la función debe devolver true si el pin es valido y false si no es válido.
let contraseña = prompt("INGRESE SU PIN")

function num_pim(contraseña) {
  regex = /^[\w]{4,6}$/;
  if (regex.test(contraseña)==true){
    return "true" 
  }
  else{
    return "false"
  }
}
alert(num_pim(contraseña))