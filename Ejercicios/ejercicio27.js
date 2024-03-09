alert("CALCULAR PROMEDIO DE ESTUDIANTE")

let nota1 = parseFloat(prompt("INGRESE LA NOTA 1"));
let nota2 = parseFloat(prompt("INGRESE LA NOTA 2"));
let nota3 = parseFloat(prompt("INGRESE LA NOTA 3"));
let notap = (nota1 + nota2 + nota3) / 3
let ex_f = parseFloat(prompt("INGRESE LA NOTA DEL EXAMEN FINAL"));
let trab_f = parseFloat(prompt("INGRESE LA NOTA DEL TRABAJO FINAL"));

let prom = (notap + ex_f + trab_f) / 3;
alert(`EL PROMEDIO DEL ESTUDIANTE ES ${prom}`);
