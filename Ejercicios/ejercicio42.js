let libros = parseInt(prompt("INGRESE LA CANTIDAD DE LIBROS"));
let cuadernos = parseInt(prompt("INGRESE LA CANTIDAD DE CUADERNOS"))
let lapiceros = parseInt(prompt("INGRESE LA CANTIDAD DE LAPICEROS"))
const lb = 10000;
const cd = 7550;
const lpx = 5550;
let sumalb = libros * lb;
let sumacd = cuadernos * cd;
let sumalpx = lapiceros * lpx;
alert(`EL NUMERO DE LIBROS VENDIDOS FUERON ${libros} POR UN VALOR DE ${sumalb} \n EL NUMERO DE CUADERNOS VENDIDOS FUE ${cuadernos} POR UN VALOR DE ${sumacd} \n EL NUMERO DE LAPICEROS VENDIDOS FUE ${lapiceros} POR UN VALOR DE ${sumalpx}`);