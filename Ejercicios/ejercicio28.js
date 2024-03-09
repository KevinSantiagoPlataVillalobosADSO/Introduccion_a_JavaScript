alert("CALCULAR EL SALARIO DE UN EMPLEADO");
let nombre = prompt("INGRESE EL NOMBRE");
let horas = parseFloat(prompt("INGRESE LAS HORAS TRABAJADAS"));
let salario = parseInt(prompt("INGRESE EL SALARIO POR HORAS"));
let sal_c = salario * horas;
alert(`EL SALARIO DEL EMPLEADO ES: ${sal_c}`);
