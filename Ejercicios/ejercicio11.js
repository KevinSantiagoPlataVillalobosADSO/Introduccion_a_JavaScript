let operacion = prompt("Elije la operacion a hacer: \n 1. suma \n 2. resta \n 3. multiplicacion \n 4. division")
let num1 = parseInt(prompt("Ingrese el Primer numero"));
let num2 = parseInt(prompt("Ingrese el segundo numero"));
if(operacion == "1" || operacion == "suma"){
    let suma = num1 + num2;
    alert(`El resultado de la suma es: ${suma}`)
}

else if(operacion == "2" || operacion == "resta"){
    let resta = num1 - num2;
    alert(`El resultado de la resta es: ${resta}`)
}

else if(operacion == "3" || operacion == "multiplicacion"){
    let mult = num1 * num2;
    alert(`El resultado de la multiplicacion es: ${mult}`)
}

else if(operacion == "4" || operacion == "division"){
    let divi = num1 / num2;
    alert(`El resultado de la division es: ${divi}`)
}

else{
    alert("operacion invalida")
}