class Planta2 {
    constructor( id, tipo, nombre, descripcion, precio, stock, size) {
        this.id = id
        this.tipo = tipo;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.size = size;
        this.cantidad = 0;
    }

    gethtml(){
        return(
        `<div class="card">` +
        `<img class="cardImg" src="./img/favicon.gif" alt="Avatar">` +
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

const plantas2 = [
    new Planta2(1, "planta", "Suculenta Haworthia", "Pequeña planta suculenta", 10.5, 5, "Pequeño"),
    new Planta2(2, "planta", "Helecho Nephrolepis exaltata", "Helecho colgante", 15.0, 4, "Mediano"),
    new Planta2(3, "planta", "Orquídea Phalaenopsis", "Orquídea de flores grandes", 20.75, 4, "Grande"),
    new Planta2(4, "planta", "Poto Epipremnum aureum", "Planta trepadora de hojas verdes", 12.99, 2, "Mediano"),
    new Planta2(5, "planta", "Cactus Echinocactus grusonii", "Cactus Barril", 25.5, 5, "Grande"),
];

let listaDeProductos = ""
for(planta of plantas2){
    listaDeProductos += planta.gethtml()
}

function deBug(){
let precioFinal = 0;
    for(planta of plantas2){
        let cantidad = document.getElementById(`productPrice-${planta.id}`).value
        planta.cantidad = cantidad
        precioFinal += planta.precio * planta.cantidad
    }
    console.log("precio final: ", precioFinal)


    let productosAComprar = plantas2.filter((planta)=>{return(planta.cantidad!=0)})
    

    let listasDeProductosAComprarHtml = 
    `<tr>
    <th>Producto</th>
    <th>Precio</th>
    <th>Cantidad</th>
    <th>Subtotal</th>
    </tr>`


    for(planta of productosAComprar){
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
    
}



document.getElementById("listaDeBusqueda").innerHTML = listaDeProductos
document.getElementById("botonDebug").onclick = deBug