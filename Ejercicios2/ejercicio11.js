// Implemente una función que sume dos números y devuelva su suma en binario, el
// número binario devuelto debe ser una cadena.

let n1 = parseInt(prompt("INGRESE EL PRIMER NUMERO"))
let n2 = parseInt(prompt("INGRESE EL SEGUNDO NUMERO"))
function convertir(n1, n2) {
  let dividendo = n1 + n2;
  let binario = (dividendo % 2).toString();
  for (; dividendo > 1;) {
    dividendo = parseInt(dividendo / 2)
    binario = (dividendo % 2) + (binario)
  }
  alert(binario)
}
convertir(num1, num2);

