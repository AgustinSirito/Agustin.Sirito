const btnComprar = document.getElementById("btnComprar");
btnComprar.addEventListener("click", () => {
    // let contador = 0
    // function Planta(nombre, color, tipo, size, nro) {
    //     this.numero = nro;
    //     this.nombre = nombre;
    //     this.color = color;
    //     this.tipo = tipo;
    //     this.size = size;
    //     this.ver = function() {
    //         console.log("Ver planta " + this.numero);
    //         console.log("Nombre: " + this.nombre);
    //         console.log("Color: " + this.color);
    //         console.log("Tipo: " + this.tipo);
    //         console.log("Size: " + this.size);
    //         console.log(" ")
    //     };
    // }

    // const solicitarDatos = (mensaje) => prompt(mensaje);

    // const crearPlanta = () => {
    //     const nombre = solicitarDatos("Ingrese nombre");
    //     const color = solicitarDatos("Color");
    //     const tipo = solicitarDatos("Tipo");
    //     const size = solicitarDatos("Size");
    //     return new Planta(nombre, color, tipo, size, ++contador);
    // };

    // const planta1 = crearPlanta();
    // const planta2 = crearPlanta();

    // planta1.ver();
    // planta2.ver();
    class planta{
        constructor(planta, color, size, precio, cantidad){
            this.planta = planta;
            this.color = color;
            this.size = size;
            this.precio = parseFloat(precio);
            this.cantidad = cantidad;
        }
        sumarIva(){
            this.precio = this.precio * 1.21;
        }
        vender(){
            this.cantidad--;
        }
    }
    const planta1 = new planta("echeveria", "roja", "m", "500", "10")
    const planta2 = new planta("limonero", "verde", "s", "3000", "3")


    planta1.sumarIva();
    planta2.sumarIva();

    console.log(planta1)
    console.log(planta2)

    planta1.vender()
    planta2.vender()

    console.log(planta1)
    console.log(planta2)
});
