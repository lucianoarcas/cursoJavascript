const comprarProductos = () => {
    let producto = 0
    let cantEmpa = 0
    let tipoPizza = ""
    let tipoEmpanada = ""
    let cantidad = 0
    let precioEmpa = 0
    let precioPizza = 0
    let subtotalPizza = 0
    let subtotalEmpanada = 0
    let total = 0
    let seguirComprando = false
    
    do {
        producto = parseInt(prompt("Elija que desea ordenar. '1' para Pizza o bien '2' para Empanadas"))
        
        switch (producto) {

            case 1: 

                tipoPizza = parseInt(prompt("ingrese '1' para pizza cuatro quesos ($1000), o bien '2' para pizza especial ($1200)"))

                if (tipoPizza === 1) {
                    precioPizza = 1000
                    cantidad = parseInt(prompt("¿cuantas pizza cuatro quesos desea ordenar?"))
                } else if (tipoPizza === 2) {
                    precioPizza = 1200
                    cantidad = parseInt(prompt("cuantas pizza especial desea ordenar?"))
                } else {
                    alert("alguno de los datos ingresados es incorrecto; por favor elija '1' para pizza cuatro quesos o '2' para pizza especial") 
                    return comprarProductos()             
                }                     
                subtotalPizza += cantidad * precioPizza
                alert("el total de sus pizzas sería: $"+ subtotalPizza)
                seguirComprando = confirm("desea sumar algo mas a su pedido?")

            break;
        
            case 2:

                tipoEmpanada = parseInt(prompt("ingrese '1' para empanada de carne ($220), o bien '2' para empanada de pollo ($200)"))

                if (tipoEmpanada === 1) {
                    precioEmpa = 220
                    cantEmpa = parseInt(prompt("¿cuantas empanadas de carne desea ordenar?"))            
                } else if (tipoEmpanada === 2) {
                    precioEmpa = 200
                    cantEmpa = parseInt(prompt("¿cuantas empanadas de pollo desea ordenar?"))
                } else {
                    alert("alguno de los datos ingresados es incorrecto; por favor ingrese '1' para empanada de carne o '2' para empanada de pollo") 
                    return comprarProductos() 
                }
                subtotalEmpanada += precioEmpa * cantEmpa
                alert ("el total de sus empanadas sería: $"+ subtotalEmpanada)
                seguirComprando = confirm("desea sumar algo mas a su pedido?")

            break;

            default:
                alert("por favor, ingrese '1' para ordenar pizza; o bien '2' para pedir empanadas")
                seguirComprando = true
               
        }
    } while (seguirComprando);

    total = subtotalEmpanada + subtotalPizza
    alert("El total de su pedido sería de: $"+ total)

};

const comprar = comprarProductos()

