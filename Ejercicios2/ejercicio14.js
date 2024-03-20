// Escribe una función que genere de forma aleatoria un numero entre 1 y 10, y verifica si 
// este numero es par o impar.

function pares() {
    let random = Math.floor(Math.random()*10 + 1);

    if(random % 2 == 0){
        alert(`El numero ${random} es par`)
    }else{
        alert(`El numero ${random} es impar`)
    }
    return random;
}
pares();