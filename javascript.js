class Planta2 {
    constructor( id, tipo, nombre, descripcion, precio, stock, size, imagen) {
        this.id = id
        this.tipo = tipo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.size = size;
        this.cantidad = 0;
        this.imagen = imagen;
    }

    gethtml(){
        return(
        `<div class="card">` +
        `<img class="cardImg" src="${this.imagen}" alt="Avatar">` +
        `<div class="cardContainer">` +
        `<h4><b>${this.nombre}</b></h4>`+
        `<p><b>${this.descripcion}</b></p>`+
        `<p>Precio: <b>${this.precio} $ </b></p>`+
        `<p>Cantidad: </p>`+
        `<input value=${this.cantidad} min="0" id="productPrice-${this.id}" type="number">`+
        `</div>`+
        `</div>`)
    }


    getResumenRowHtml(){
        return(
            `<tr>`+
            `<td><b>${this.nombre}</b></td>`+
            `<td>${this.precio} $ </td>`+
            `<td>${this.cantidad}</td>`+
            `<td>${this.cantidad * this.precio} $ </td>`+
            `</tr>`)
    }
}

function renderizarListaProductos(){
    listaDeProductos = ""
    for(let planta of plantas){
        listaDeProductos += planta.gethtml()
    }
    document.getElementById("listaDeplantas").innerHTML = listaDeProductos
}

function actualizarListaComprasAnteriores(){
    let comprasLocalStorage=JSON.parse(localStorage.getItem("carrito"))
    if (comprasLocalStorage!=undefined ){
        compras = comprasLocalStorage
        actualizarCarrito()
        document.getElementById("compras").classList.replace("hide", "show")
    }
}

function comprar(){
    let precioFinal = 0;
        for(let planta of plantas){
            let cantidad = document.getElementById(`productPrice-${planta.id}`).value
            planta.cantidad = cantidad
            precioFinal += planta.precio * planta.cantidad
        }
        // console.log("precio final: ", precioFinal)
    
        let productosAComprar = plantas.filter((planta)=>{return(planta.cantidad!=0)})
    
        let listasDeProductosAComprarHtml = 
        `<tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        <th>Subtotal</th>
        </tr>`
    
        for(let planta of productosAComprar){
            listasDeProductosAComprarHtml += planta.getResumenRowHtml()
        }
        listasDeProductosAComprarHtml += 
        `<tr>`+
        `<td></td>`+
        `<td></td>`+
        `<td>Subtotal: </td>`+
        `<td>${Math.round(precioFinal * 100)/100} $ </td>`+
        `</tr>`+
        `<tr>`+
        `<td></td>`+
        `<td></td>`+
        `<td>Precio final: </td>`+
        `<td>${Math.round(precioFinal * 1.21 * 100)/100} $ </td>`+
        `</tr>`
    
    
        document.getElementById("resumenDeCompra").innerHTML = listasDeProductosAComprarHtml
        document.getElementById("resumen").classList = ""
        guardarDatosDeCompra(productosAComprar)
        actualizarListaComprasAnteriores()
    
        //reseteo de contadores
        for(let planta of plantas){
            planta.cantidad=0
        }
        renderizarListaProductos()
    }

    function guardarDatosDeCompra(productosDeCompra){
        if(productosDeCompra.length!=0){
            compras.push(productosDeCompra)
            localStorage.setItem("carrito", JSON.stringify(compras));
            actualizarCarrito()
        }
    }

    function actualizarCarrito(){
        let comprasAnterioresHTML = 
        `<tr>
        <th>Producto</th>
        <th>Precio</th>
        <th>Cantidad</th>
        </tr>`
        for(let compra of compras){
            let precioFinalCompra = 0
            for(let productoComprado of compra){
                comprasAnterioresHTML += 
                (
                    `<tr>`+
                    `<td><b>${productoComprado.nombre}</b></td>`+
                    `<td>${productoComprado.precio} $ </td>`+
                    `<td>${productoComprado.cantidad}</td>`+
                    `</tr>`
                )
                precioFinalCompra += productoComprado.precio * productoComprado.cantidad
            }
            comprasAnterioresHTML+= 
            `<tr>`+
            `<td></td>`+
            `<td></td>`+
            `<td>Precio final: </td>`+
            `<td>${Math.round(precioFinalCompra * 1.21 * 100)/100} $ </td>`+
            `</tr>`
            
        }
        document.getElementById("comprasAnteriores").innerHTML = comprasAnterioresHTML
    }
    
    
    function vaciar() {
        localStorage.clear();
        compras = []
        actualizarCarrito()
        document.getElementById("compras").classList = "hide"
    
    }


//ejecucion
let listaDeProductos = ""
const plantas = []
let compras=[]

//lectura json via fetch
fetch('./productosDB.json')
.then(response => response.json())
.then(productosDB => {
    for (let producto of productosDB.productos){
        let planta = new Planta2(producto.id, producto.tipo, producto.nombre, producto.descripcion, producto.precio, producto.stock, producto.size, producto.imagen)
        plantas.push(planta)
    }
    renderizarListaProductos()
})

actualizarListaComprasAnteriores() //localstorage

document.getElementById("botonComprar").onclick = comprar
document.getElementById("botonVaciar").onclick = vaciar
