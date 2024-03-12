const frase = prompt("Introduce una frase:");
const letra = prompt("Introduce una letra:");
const letraMinuscula = letra.toLowerCase();
let contador = 0;

for (let i = 0; i < frase.length; i++) {
    const caracterMinuscula = frase[i].toLowerCase();
    if (caracterMinuscula === letraMinuscula) {
        contador++;
    }
}

alert("La letra '" + letra + "' aparece " + contador + " veces en la frase.");
