let div;
try{
    let dividendo = prompt("Ingrese el dividendo");
    let divisor = prompt("ingrese el divisor");
    div = dividendo / divisor;
    if(divisor == 0){
        throw Error("eRror divisor es 0")
    }
    alert(`El resultado es ${div}`)
    
}
catch(e){
    alert("El divisor es 0, por favor intente con otro numero")
}
