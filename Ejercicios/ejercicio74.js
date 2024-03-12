while (true) {
    const entrada = prompt("Escribe algo (o escribe 'salir' para terminar):");
    if (entrada.toLowerCase() === "salir") {
        break;
    } else {
        alert  (entrada);
    }
}