function iniciarButton() {
    let nombre = prompt("Introduce tu nombre");
    let apellido = prompt("Introduce tu apellido");

    let calculadora = true;

    while (calculadora) {
        let num1 = parseFloat(prompt("Introduce el primer número")); //parsefloat es para convertir a numero
        let num2 = parseFloat(prompt("Introduce el segundo número"));

        
        if (isNaN(num1) || isNaN(num2)) { // Validar si num1 y num2 son numeros validos
            alert("Por favor, ingresa valores numéricos válidos.");
            continue; //continue para comenzar ciclo de vuelta
        }

        let operacion = prompt("Elige la operación a realizar: suma (+), resta (-), multiplicación (x) o división (/)").toLowerCase();

        let resultado;

        if (operacion === "+" || "suma") {
            resultado = num1 + num2;
        } else if (operacion === "-" || "resta") {
            resultado = num1 - num2;
        } else if (operacion === "*" || "x" || "multiplicacion") {
            resultado = num1 * num2;
        } else if (operacion === "/" || "division") {
            resultado = num1 / num2;
        } else {
            alert("Operación no válida");
            // salir del ciclo si la operacion no es valida
            calculadora = false;
        }

        if (resultado !== undefined) {
            alert(nombre + " " + apellido + ", el resultado de la operación: " + num1 + " " + operacion + " " + num2 + " = " + resultado);
        }
        
        let tries = 0; // Código de descuento con 3 oportunidades
        let codigoOK = false;
        let seAplicoDescuento = false;
        
        while (tries < 3 && !codigoOK) {
            let descuentoSN = prompt("¿Tenes un código de descuento? (si/no)").toLowerCase();
        
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
                }
                else {
                    let intentosRestantes = 2 - tries;
                    alert(nombre + " " + apellido + ", el código de descuento inválido. Intenta nuevamente, quedan " + intentosRestantes + " intentos");
                    tries++;
                }
            }

            else if (descuentoSN === "no") {
                alert(nombre + " " + apellido + ", el resultado final sin descuento es: " + resultado);
            }

            else {
                alert(nombre + " la respuesta es inválida. Por favor, responde 'si' o 'no'.");
                continue; //continua el ciclo
            }
            
            if (tries === 3 && !codigoOK) {
                alert(nombre + " has superado el número máximo de intentos para ingresar el código de descuento. Volviendo al inicio.");
                break; //corta ciclo
            }
            
            if (seAplicoDescuento) {
                alert(nombre + " " + apellido + ", el resultado final después de aplicar el descuento es: " + resultado);
            }
            
            let opcion;
            do {
                opcion = prompt("¿Qué deseas hacer ahora? 1. Aplicar otro descuento, 2. Realizar otra operación, 3. Cerrar");
            
                if (opcion === "1") {
                    tries = 0;
                    codigoOK = false;
                    seAplicoDescuento = false;
                }
                else if (opcion === "2") {
                    seAplicoDescuento = false;
                }
                else if (opcion === "3") {
                    calculadora = false;
                }
                else {
                    alert("Opción no válida. Por favor, selecciona una opción válida.");
                }
            } while (opcion !== "1" && opcion !== "2" && opcion !== "3");
        }
    }
}