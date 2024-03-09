function convertirMoneda(pesos) {
    let dolares = pesos * 0.00026;
    let euros = pesos * 0.00023;
    euros.toFixed(2);
    dolares.toFixed(2); 
    alert(`VALOR DE PESOS A DOLARES: ${pesos} PESOS ES IGUAL A ${dolares} DOLARES \n VALOR DE PESOS A EUROS: ${pesos} PESOS ES IGUAL A ${euros} EUROS`)
}

let pesos = parseInt(prompt("INGRESE LA CANTIDAD DE PESOS"));
convertirMoneda(pesos)

