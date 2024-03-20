//Crea una función que convierta números del 0 al 5 en su representación textual, por
// ejemplo: “cero”, “uno”, “dos”, “tres” etc.

function text(num) {

    try {
       if (num < 0 || num > 5) {
            throw Error;   
        }  
        const texto = ['cero', 'uno', 'dos', 'tres', 'cuatro', 'cinco'];
        return texto[num];  
        
    } 
    catch (error) {
        alert("NUMEROS ENTRE 0 A 5")    
    }
}

    
let num = prompt("Ingrese el numero");
alert(text(num));