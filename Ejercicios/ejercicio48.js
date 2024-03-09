let figura = prompt("¿DESEA CALCULAR TRIANGULO O CIRCULO? \n t - o - c ").toLowerCase();
const pi = 3.14;
let a;
switch (figura) {
    case "c":
        let radio = parseFloat(prompt("INGRESE EL RADIO"))
        a = pi*Math.pow(radio, 2)
        alert(`EL AREA DEL CIRCULO ES  ${a}`)
        break;
    
    case "t":
        let b = parseFloat(prompt("INGRESE LA BASE DEL TRIANGULO"))
        let h = parseFloat(prompt("INGRESE LA ALTURA DEL TRIANGULO"))
        a = (b * h)/2;
        alert(`EL AREA DEL TRIANGULO ES ${a}`)
        break;
}
