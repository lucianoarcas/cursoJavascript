const comprarProductos = () => {
    let producto = ""
    let cantidad = 0
    let precio = 0
    let subtotal = 0
    let seguirComprando = false


    
    do {
        producto = prompt("Elija que desea ordenar. ¿Pizza o Empanada?")

        if (producto === "pizza") {
            let tipoPizza = prompt("las pizzas disponibles son: cuatro quesos y especial")

            switch (tipoPizza) {
                case "cuatro quesos":
                    precio = 1200
                    cantidad = parseInt(prompt("¿cuantas pizzas cuatro quesos pedirá?"))
                break;
            
                case "especial": 
                    precio = 1300
                    cantidad = parseInt(prompt("¿cuantas pizzas especiales pedirá?"))
                break;

                default:
                    precio = 0
                    cantidad = 0
                    alert("algún dato es incorrecto, por favor ingresar cuatro quesos o especial")
                    tipoPizza = prompt("las pizzas disponibles son: cuatro quesos y especial")
            }
        }

        else if (producto === "empanada") {
            let tipoEmpanada = prompt("las variedades disponibles son: carne o pollo")
            switch (tipoEmpanada) {
                case "carne":
                    precio = 220
                    cantidad = parseInt(prompt("¿cuantas empanadas de carne llevará?"))
                break;
            
                case "pollo":
                    precio = 200
                    cantidad = parseInt(prompt("¿cuantas empanadas de pollo llevará?"))
                break;
                
                default:
                    precio = 0
                    cantidad = 0
                    alert("algún dato es incorrecto, por favor ingresar carne o pollo")
                    tipoEmpanada = prompt("las variedades disponibles son: carne o pollo")
            }
            
        }else {
            alert("alguno de los datos ingresados es incorrecto, por favor ingrese pizza o empanada")
            seguirComprando = true
        }

        subtotal += precio * cantidad
        alert("El total sería de: $"+subtotal)
        seguirComprando = confirm("¿Desea ordenar algo más?")


    } while (seguirComprando);

    
};

const comprar = comprarProductos()


