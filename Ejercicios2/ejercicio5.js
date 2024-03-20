// • Crea una función que genere la tabla de multiplicar del número 5, no se debe mostrar 5
// * 5, nos debe mostrar el resultado para las demás multiplicaciones.

function tabla5 (){
    for (let i = 1; i <= 10; i++) {
        const mult = 5;
        if(mult == i){
            console.log("---")
        }
        else{
            console.log(`${mult} x ${i}`)
        }
    }
}

tabla5();