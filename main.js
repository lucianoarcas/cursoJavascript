const comprarProductos = () => {
    let producto = ""
    let cantEmpa = 0
    let cantidad = 0
    let precioEmpa = 0
    let precioPizza = 0
    let subtotalPizza = 0
    let subtotalEmpanada = 0
    let total = 0
    let seguirComprando = false
    
    do {
        producto = prompt("Elija que desea ordenar. ¿Pizza o Empanada?")
        producto = producto.toLowerCase()

        if (producto === "pizza") {
            let tipoPizza = prompt("las pizzas disponibles son: cuatro quesos $1200 y especial $1300")
            tipoPizza = tipoPizza.toLowerCase()

            switch (tipoPizza) {
                case "cuatro quesos":
                    precioPizza = 1200
                    cantidad = parseInt(prompt("¿cuantas pizzas cuatro quesos pedirá?"))
                    
                break;
            
                case "especial": 
                    precioPizza = 1300
                    cantidad = parseInt(prompt("¿cuantas pizzas especiales pedirá?"))
                break;

                default:
                    precioPizza = 0
                    cantidad = 0
                    alert("algún dato es incorrecto, por favor ingresar cuatro quesos o especial")
                    tipoPizza = prompt("las pizzas disponibles son: cuatro quesos $1200 y especial $1300")
            }
            subtotalPizza += precioPizza * cantidad
            alert("el total de sus pizzas sería: $" + subtotalPizza)
            seguirComprando = confirm("¿Desea ordenar algo más?")

        }        

        else if (producto === "empanada") {
            let tipoEmpanada = prompt("las variedades disponibles son: carne ($220 la unidad) o pollo ($200 la unidad)")
            tipoEmpanada = tipoEmpanada.toLowerCase()

            switch (tipoEmpanada) {
                case "carne":
                    precioEmpa = 220
                    cantEmpa = parseInt(prompt("¿cuantas empanadas de carne llevará?"))
                break;
            
                case "pollo":
                    precioEmpa = 200
                    cantEmpa = parseInt(prompt("¿cuantas empanadas de pollo llevará?"))
                break;
                
                default:
                    precioEmpa = 0
                    cantEmpa = 0
                    alert("algún dato es incorrecto, por favor ingresar carne o pollo")
                    tipoEmpanada = prompt("las variedades disponibles son: carne ($220 la unidad) o pollo ($200 la unidad)")
            }
            subtotalEmpanada += precioEmpa * cantEmpa
            alert("El total de sus empanadas sería: $" + subtotalEmpanada)
            seguirComprando = confirm("¿Desea ordenar algo más?")
            
        }else {
            alert("alguno de los datos ingresados es incorrecto, por favor ingrese pizza o empanada")
            seguirComprando = true
        }

        total = subtotalEmpanada + subtotalPizza


    } while (seguirComprando);

    alert("El total de su pedido sería de: $"+total)

};

const comprar = comprarProductos()

