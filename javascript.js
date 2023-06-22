const btnCuadro = document.getElementById("btnCuadro")

function obtenerNumeros() {
    let num1;
    let num2;
    let noSonNumeros = true;
    do {
        num1 = parseFloat(prompt("Introduce el primer número"))
        num2 = parseFloat(prompt("Introduce el segundo número"))
        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, ingresa valores numéricos válidos.")
        } else {
            noSonNumeros = false;
        }
    } while (noSonNumeros);
    return {
        numero1: num1,
        numero2: num2
    }
}


btnCuadro.addEventListener("click", () => {

    //Cuadro pide Nombre
    let nombre = prompt("Introduce tu nombre")
    let apellido = prompt("Introduce tu apellido")
    let calculadora = true
    while (calculadora) {
    //Cuadro pide Numeros
    const { numero1:num1 , numero2:num2 } = obtenerNumeros()

    //Cuadro de operacion
        let operacion = null
        let resultado;
        let operando;
        do {
            operacion = prompt("Elige la operación a realizar: suma (+), resta (-), multiplicación (x) o división (/) \n Salir: (s)").toLowerCase();
            console.log(operacion, typeof (operacion));
            switch (operacion) {
                case '+':
                case 'suma':
                    operando = '+'
                    resultado = num1 + num2;
                    break;

                case '-':
                case 'resta':
                    operando = '-'
                    resultado = num1 - num2;
                    break;

                case '*':
                case 'multiplicacion':
                case 'x':
                    operando = 'x'
                    resultado = num1 * num2;
                    break;

                case '/':
                case 'division':
                    operando = '/'
                    resultado = num1 / num2;
                    break;

                case 's':
                    calculadora = false
                    break;
                default:
                    alert("Operación no válida");
                    operacion = null
                    // salir del ciclo si la operacion no es valida
                    //calculadora = false;
            }
        } while (operacion == null)
        if (operacion !== 's') {
            alert(nombre + " " + apellido + ", el resultado de la operación: " + num1 + " " + operando + " " + num2 + " = " + resultado);
        }

        //Cuadro de descuento
        if (calculadora) {
            let tries = 0; // Código de descuento con 3 oportunidades
            let codigoOK = false;
            let seAplicoDescuento = false;
            let descuentoSN
            while (tries < 3 && !codigoOK) {
                descuentoSN = prompt("¿Tenes un código de descuento? (si/no)").toLowerCase();
                if (descuentoSN === "si") {
                    let codigoDescuento = prompt("Ingresa el código de descuento:");
                    // 25% de descuento
                    if (codigoDescuento === "25OFF") {
                        resultado = resultado - (resultado * 0.25); // Aplica descuento del 25%
                        codigoOK = true;
                        seAplicoDescuento = true;
                    }
                    // 50% de descuento
                    else if (codigoDescuento === "50OFF") {
                        resultado = resultado - (resultado * 0.5); // Aplica descuento del 50%
                        codigoOK = true;
                        seAplicoDescuento = true;
                    } else {
                        let intentosRestantes = 2 - tries;
                        alert(nombre + " " + apellido + ", el código de descuento inválido. Intenta nuevamente, quedan " + intentosRestantes + " intentos");
                        tries++;
                    }
                } else if (descuentoSN === "no") {
                    alert(nombre + " " + apellido + ", el resultado final sin descuento es: " + resultado);
                    tries=4
                } else {
                    alert(nombre + " la respuesta es inválida. Por favor, responde 'si' o 'no'.");
                    
                }
                if (tries === 3 && !codigoOK) {
                    alert(nombre + " has superado el número máximo de intentos para ingresar el código de descuento. Volviendo al inicio.");
                    calculadora = false
                }
                if (seAplicoDescuento) {
                    alert(nombre + " " + apellido + ", el resultado final después de aplicar el descuento es: " + resultado);
                }
            }
            if(!(tries === 3 && !codigoOK))
            {
                let opcion;
                do {
                    opcion = prompt("¿Qué deseas hacer ahora? 1. Aplicar otro descuento, 2. Realizar otra operación, 3. Cerrar");
                    if (opcion === "1") {
                        tries = 0;
                        codigoOK = false;
                        seAplicoDescuento = false;
                    } else if (opcion === "2") {
                        seAplicoDescuento = false;
                    } else if (opcion === "3") {
                        calculadora = false;
                    } else {
                        alert("Opción no válida. Por favor, selecciona una opción válida.");
                    }
                } while (opcion !== "1" && opcion !== "2" && opcion !== "3");
            }
        }
    }
})