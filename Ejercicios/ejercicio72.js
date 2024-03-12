const palabra = prompt("Introduce una palabra:");

// Iterar sobre la palabra desde el último caracter hasta el primero
for (let i = palabra.length - 1; i >= 0; i--) {
    alert(palabra[i]);
}