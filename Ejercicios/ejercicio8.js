let nivel = parseFloat(prompt("Ingrese el nivel de empleado - 0.0 - 0.4 - 0.6 - 0.8 - 1.0 \n (No valores intermedios)"))
let suma;

    if(nivel == 0.0){
        alert("Nivel inaceptable")

    }

    else if(nivel == 0.4){
        alert("Nivel aceptable")
        suma  = 2400 * 0.4
        alert(`El dinero a recibir es ${suma} $`)
    }

    else if(nivel == 0.6){
        alert("Nivel bueno")
        suma  = (2400*2) * 0.6
        alert(`El dinero a recibir es ${suma} $`)
    }

    else if (nivel == 0.8){
        alert("Nivel meritorio")
        suma = (2400*3) * 0.8
        alert(`El dinero a recibir es ${suma} $`)
    }

    else if(nivel == 1.0){
        alert("Nivel excelente")
        suma = (2400*4) * 1
        alert(`El dinero a recibir es ${suma} $`)    
    }

    else{
        alert("Nivel no valido")
    }
