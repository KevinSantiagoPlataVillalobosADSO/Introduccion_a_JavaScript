function group (nombre, sexo){
    nombre_1 = nombre.toLowerCase().charAt(0); 
    sexo.toLowerCase();
    if(sexo == "mujer" && nombre_1 <= "m"){
        alert("grupo A")
    }
    else if(sexo == "hombre" && nombre_1 >= "n"){
        alert("grupo A")
    }
    else{
        alert("grupo B")
    }
}

nombre = prompt("Ingrese el nombre");
sexo = prompt("Ingrese el sexo(Hombre, Mujer)");

group(nombre, sexo)