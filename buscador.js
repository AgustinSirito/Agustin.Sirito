// Clase para plantas
class Planta {
    constructor(tipo, nombre, descripcion, precio, stock, size) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.size = size;
}
}

// Clase para accesorios
class Accesorio {
constructor(tipo, nombre, descripcion, precio, stock, size) {
    this.tipo = tipo;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.stock = stock;
    this.size = size;
}
}

// Crear instancias de plantas
const plantas = [
    new Planta("planta", "Suculenta Haworthia", "Pequeña planta suculenta", 10.5, 5, "Pequeño"),
    new Planta("planta", "Helecho Nephrolepis exaltata", "Helecho colgante", 15.0, 4, "Mediano"),
    new Planta("planta", "Orquídea Phalaenopsis", "Orquídea de flores grandes", 20.75, 4, "Grande"),
    new Planta("planta", "Poto Epipremnum aureum", "Planta trepadora de hojas verdes", 12.99, 2, "Mediano"),
    new Planta("planta", "Cactus Echinocactus grusonii", "Cactus Barril", 25.5, 5, "Grande"),
];

// Crear instancias de accesorios
const accesorios = [
    new Accesorio("accesorio", "Maceta de cerámica", "Maceta de cerámica para plantas", 5.0, 20, "Pequeño"),
    new Accesorio("accesorio", "Regadera de plástico", "Regadera para riego de plantas", 8.0, 5, "Mediano"),
    new Accesorio("accesorio", "Fertilizante líquido", "Fertilizante líquido para plantas", 12.5, 15, "Pequeño"),
    new Accesorio("accesorio", "Herramientas de jardinería", "Set de herramientas de jardinería", 20.99, 5, "Mediano"),
    new Accesorio("accesorio", "Malla antihierbas", "Malla para evitar el crecimiento de malas hierbas", 6.75, 7, "Grande"),
];

function searchItems() {
    const filter = document.getElementById("buscarInput").value.toLowerCase();
    const listaDeBusqueda = document.getElementById("listaDeBusqueda");
    listaDeBusqueda.innerHTML = ""; // Limpiar los resultados anteriores

    const resultadoDeBusqueda = [...plantas, ...accesorios].filter(item =>
        item.nombre.toLowerCase().includes(filter) || item.descripcion.toLowerCase().includes(filter)
    );

    if (resultadoDeBusqueda.length > 0) {
        resultadoDeBusqueda.forEach(item => {
        console.log("Tipo: " + item.tipo);
        console.log("Nombre: " + item.nombre);
        console.log("Descripción: " + item.descripcion);
        console.log("Precio: $" + item.precio);
        console.log("Stock disponible: " + item.stock);
        console.log("Size: " + item.size);
        console.log("-----------------------");
        });
    } else {
        console.log("No se encontraron resultados.");
    }
}


