const carrito = []
const subtotales = []
const total = 0

const ordenarMenorMayor = () => {
    productos.sort((a, b) => a.tipo - b.tipo)
    mostrarListaProductos()
};

const mostrarListaProductos = () => {
    const listaProductos = productos.map(producto => {
        return producto.id+ " - " +producto.tipo+ " "+producto.nombre+" $"+ producto.precio
    })
    alert("Lista de productos:"+"\n\n"+listaProductos.join("\n"))
    comprarProductos(listaProductos)
    
};


const comprarProductos = (listaProductos) => {

    let productoId = 0
    let productoCantidad = 0
    let otroProducto = true
    let subtotal = 0



    do {
        productoId = parseInt(prompt("¿Que producto desea comprar? Ingrese el número correspondiente al mismo'"+"\n\n"+listaProductos.join("\n")))

        productoCantidad = parseInt(prompt("¿Cuantos queres comprar?"))  // variable que ingresa el usuario
  
        
        const producto = productos.find(productos => productos.id === productoId)  // producto = elemento del array cuyo id = a id que ingresa usuario
        
      

    
        if (producto) {
            agregarAlCarrito(producto, productoCantidad)
        
            subtotal = producto.precio*producto.cantidad
            subtotales.push(subtotal)
            console.log("se agregó un total de: "+producto.cantidad+" "+producto.tipo+" "+producto.nombre+" por:"+subtotal)

    

        } else {
            alert("Por favor elija una de las opciones disponibles")
        }
        
        otroProducto = confirm("¿Desea comprar otro producto?")

        

        
    } while (otroProducto);

    if (!otroProducto) {
        
        let confirmarPedido = false
        const carritoFinal= carrito.map(producto => {
            return "\n"+" - "+producto.cantidad+ " " +producto.tipo+ " "+producto.nombre
        })

        const total = subtotales.reduce((total, subtotal) => total + subtotal)

        console.log("El total es de: $"+total)

        return confirmarPedido = confirm("Por favor controle su pedido: "+"\n"+carritoFinal.join("\n")+"\n"+"\n"+"TOTAL: $"+total)
    }
    

}



const agregarAlCarrito = (producto, productoCantidad,) => {
  const productoRepetido = carrito.find(productos => productos === producto)


    if (productoRepetido){
        productoRepetido.cantidad += productoCantidad
        
        
    } else {
        producto.cantidad += productoCantidad
        carrito.push(producto)
        
    }
        console.log(carrito)

    
};

ordenarMenorMayor()



    
