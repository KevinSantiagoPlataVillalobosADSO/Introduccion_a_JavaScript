for (let i = 1; i > 0; i++) {
    let num1 = parseInt(prompt("INGRESE EL NUMERO 1"));
    let num2 = parseInt(prompt("INGRESE EL NUMERO 2"));
    if (num1 >= num2){
        let resta = num1 - num2;
        alert(`RESULTADO DE LA RESTA ${resta}`)

    }
    else{
        alert("RESTA NO SE PUEDE HACER")
        i = NaN;
    }
}