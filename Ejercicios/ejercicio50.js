let t = parseFloat(prompt("INGRESE LA TEMPERATURA: "));
let p = parseFloat(prompt("INGRESE LA PRESION "));

if(p >200 || t >100){
    alert(`ALARMA!!!`)
}
else{
    alert(`NORMAL :)`)
}