let contraseña = prompt("INGRESE UNA CONTRASEÑA FUERTE ")
let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,12}$/
if(regex.test(contraseña)){
    alert("CONTRASEÑA SEGURA")
}
else{
    alert("CONTRASEÑA NO SEGURA")
}