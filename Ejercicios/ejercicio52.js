// En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es 
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora 
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de 
// horas trabajadas. 

let traba = parseInt(prompt("INGRESE EL CARGO \n 1. ADMINISTRATIVO \n 2. PLANTA"));
let hrs_t = parseFloat(prompt("INGRESE LAS HORAS"));
let horas;
let total;

switch(traba){   
    case 1:
        horas = 10000;
        total = hrs_t*horas;
        alert(`SU PAGO ES DE ${total.toFixed(2)}`)
        break;
    
    case 2:
        horas = 20000;
        total = hrs_t*horas;
        alert(`SU PAGO ES DE ${total.toFixed(2)}`)
        break;
    
    default:
        alert("TIPO DE EMPLEADO NO VALIDO")
}