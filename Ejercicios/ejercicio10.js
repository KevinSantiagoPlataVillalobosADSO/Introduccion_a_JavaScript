let pizza = prompt("Elija su pizza: \n a. Vegetariana \n b. No vegetariana").toLowerCase();

if(pizza == "a" || pizza == "vegetariana"){
    ingrediente = prompt("Elija su ingrediente(solo uno): \n 1. Pimiento \n 2. tofu").toLowerCase();
    if(ingrediente == "1" || ingrediente == "pimiento"){
        alert("Su pizza es vegetariana... \n Ingredientes: \n Mozarella, tomate, Pimiento")
    }

    else if(ingrediente == "2" || ingrediente == "tofu"){
        alert("Su pizza es vegetariana... \n Ingredientes: \n Mozarella, tomate, Tofu")
    }

    else{
        alert("Ingrediente invalido")
    }
}

else if(pizza == "b" || pizza == "no vegetariana"){
    ingrediente = prompt("Elija su ingrediente(solo uno): \n 1. Peperonni \n 2. Jamón \n 3. Salmón")
    if(ingrediente == "1" || ingrediente == "peperonni"){
        alert("Su pizza es NO vegetariana... \n Ingredientes: \n Mozarella, tomate, Peperonni")
    }

    else if(ingrediente == "2" || ingrediente == "jamon"){
        alert("Su pizza es NO vegetariana... \n Ingredientes: \n Mozarella, tomate, Jamón")
    }

    else if(ingrediente == "3" || ingrediente == "salmon"){
        alert("Su pizza es NO vegetariana... \n Ingredientes: \n Mozarella, tomate, Salmón")
    }

    else{
        alert("Ingrediente invalido")
    }
}

else{
    alert("Pizza no valida")
}