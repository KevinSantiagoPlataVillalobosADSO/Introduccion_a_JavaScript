let notas_n = parseInt(prompt("INGRESE EL NUMERO DE NOTAS A INGRESAR"));
let nota = [];
for (let i = 0; i < notas_n; i++) {
    nota[i] = parseFloat(prompt("INGRESE LA NOTA"))
}
let a=0;
let b=0;
let c=0;
let d=0;
for (let i = 0; i < nota.length; i++) {
    if(nota[i] >= 100 && nota[i] <= 100){
        a+=1;
    }
    else if(nota[i] < 90 && nota[i] >= 80){
        b+=1;
    }
    else if(nota[i] < 80 && nota[i] >= 70){
        c+=1;
    }
    else{
        d+=1;
    }
}
console.log(nota)
let mayor = nota[0]
for (let j = 0; j < nota.length; j++) {
        if (nota[j] > mayor) {
            mayor = nota[j];
        }
}

let menor = nota[0]
for (let j = 0; j < nota.length; j++) {
        if (nota[j] < menor) {
            menor = nota[j];
        }
}

alert(`LA NOTA MAYOR ES ${mayor} \n LA NOTA MENOR ES ${menor} \n ALUMNOS CON A: ${a} \n ALUMNOS CON B: ${b} \n ALUMNOS CON C: ${c} \n ALUMNOS CON D: ${d}`)