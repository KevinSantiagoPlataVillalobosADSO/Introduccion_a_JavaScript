let contraseña = prompt("Cree la contraseña")


let regex = /^["a-zA-Z0-9"]*$/;

if (regex.test(contraseña)) {
    let contra2 = prompt("Ingrese su contraseña")
    if(contra2 === contraseña){
        alert("Ingresado con exito")
        
    }
    else{
        alert("contraseña incorrecta")
    }
} 
else {
    alert("No debe contener caracteres especiales")
}
