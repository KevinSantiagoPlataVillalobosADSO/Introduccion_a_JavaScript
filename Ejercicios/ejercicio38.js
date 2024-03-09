let tapas = parseInt(prompt("INGRESE EL NUMERO DE TAPAS"));
const tapa = 200;
let suma = tapas * tapa;
let martin =  suma * 0.66;
let jairo = suma * 0.25;
let lorena = suma - martin - jairo;
alert(`MARTIN RECIBE ${martin}, JAIRO RECIBE ${jairo} Y LORENA RECIBE ${lorena} PESOS`)