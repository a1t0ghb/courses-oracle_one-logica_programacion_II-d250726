// Declaración de variables, con alcance 'global'.
let numeroMaximoPosible = 10;
let numeroMinimoPosible = 1;
let numeroSecreto = 0; // Solo declaración, para que exista variable; 'no importa' valor inicial.
let intentos = 0; // Solo declaración, para que exista variable; 'no importa' valor inicial.
let listaNumerosSorteados = []; // Declara array de lista de numeros sorteados, SIN INICIALIZAR.

// Declaración de funciones.

// Función que usa document.querySelector() para seleccionar elementos HTML en con tags; e.g. 'h1', 'p', etc.
// Desventaja: selecciona TODOS los elementos que hay, si hay más de 1, lo cual es común.
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Crea objeto HTML, llamado 'elementoHTML'.
    elementoHTML.innerHTML = texto; // Asigna el valor de la etiqueta definida por 'texto'.
    return; // No retorna nada; buena práctica.
}

function verificarIntento() {
    intentos ++; // Aumenta en 1 la cantidad de intentos, cada vez que verifica.
    console.log(intentos) // LOG: numero actual de intentos.
    // let numeroDeUsuario = document.querySelector('input');
    // let numeroDeUsuario = document.getElementById('valorUsuario').value; // Selecciona HTML tags por IDs, definidos previamente, y obtienge su VALOR (.value). Por default, devuelve 'string' / texto.
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Selecciona HTML tags por IDs, definidos previamente, y obtienge su VALOR (.value). Luego lo convierte en 'int' / entero.
    // console.log(typeof(numeroDeUsuario)); // LOG: tipo entrada ingresado por usuario.
    // console.log(numeroDeUsuario); // LOG: numero ingresado por usuario.
    // console.log(numeroDeUsuario == numeroSecreto); // LOG: validación comparativa; sólo valor. Devuelve booleano; 'true' o 'false'.
    // console.log(numeroDeUsuario === numeroSecreto); // LOG: validación comparativa; tanto en valor como tipo de datos. Devuelve booleano; 'true' o 'false'.

    if (numeroDeUsuario  === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}.`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Atributo html de 'disabled', deshabilita botón. Se remueve al acertar, para dejar botón habilitado.
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor.');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor.');
        }
        limpiarCaja(); // Limpiamos text box (i.e. 'valorUsuario') que contiene 'numeroDeUsuario'.
    }
    return;
}

function limpiarCaja() {
    // OP1: explicito.
    // let valorCaja = document.querySelector('#valorUsuario'); // Selecciona HTML tag por ID, usando '.querySelector', en lugar de '.getElementById'.
    // valorCaja.value = ''; // Define valor en blanco / empty / null.
    // OP2: compacto.
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*((numeroMaximoPosible - numeroMinimoPosible) + 1) + numeroMinimoPosible); // Obtiene un número aleatorio, entre 1 y 10. Ref. 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values_inclusive'.
    console.log(numeroGenerado); // LOG: generación numeroGenerado.
    // Si ya sorteamos todos los números. => Pseudo 'Condición de salida' de la recursividad.
    if (listaNumerosSorteados.length == ((numeroMaximoPosible - numeroMinimoPosible) + 1)) {
        asignarTextoElemento('p', 'Ya se sortearon TODOS los números posibles.')
    } else {
        // Si numeroGenerado esta en lista.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Recursividad. IMPORTANTE: con recursividad, asegurarse SIEMPRE de que haya un 'return' apropiado Y una 'condición de salida'.
        } else {
            listaNumerosSorteados.push(numeroGenerado); // Agrega numeroGenerado a lista.
            console.log(listaNumerosSorteados); // LOG: visualizar lista.
            return numeroGenerado;  // Retorna variable creada; en este caso tiene alcance 'local' o de 'bloque'.
        }
    }
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto.');
    asignarTextoElemento('p', `Indica un número del ${numeroMinimoPosible} al ${numeroMaximoPosible}.`);
    // Generar número aleatorio.
    numeroSecreto = generarNumeroSecreto();
    // console.log(numeroSecreto); // LOG: generación numeroSecreto.
    // Inicializar el número de intentos.
    intentos = 0; // Default: inicialización en 0 intentos.
}

function reiniciarJuego() {
    // Limpiar caja.
    limpiarCaja();
    // Indicar mensaje de inicio, de intervalo de números.
    condicionesIniciales();
    // Deshabilitar botón de nuevo juego.
    document.querySelector('#reiniciar').setAttribute('disabled', true); // Selecciona HTML tag por ID, usando '.querySelector', en lugar de '.getElementById', y se define su atributo html de 'disabled', que deshabilita botón. Se agrega al reiniciar el juego, para dejar botón des-habilitado.
}

// Ejecución de código.
condicionesIniciales();