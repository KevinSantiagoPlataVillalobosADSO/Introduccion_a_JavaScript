// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de un
// depósito. (yo no me iba a memorizar otra vez las formulas :v)
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
let tiempo = parseFloat(prompt("INGRESE EL TIEMPO"));
let altura = parseFloat(prompt("INGRESE LA ALTURA"));
let radio = parseFloat(prompt("INGRESE EL RADIO"))
const pi = 3.14 /// no vuelvo a usar el signo de pi pq me quita mucho tiempo :b
/////////////////calc vol
let vol = pi * (Math.pow(radio, 2)) * altura;

///////////////////calc q
let caudal = vol / tiempo;

alert(`EL TIEMPO DE LLENADO ES DE: ${caudal} m`)
