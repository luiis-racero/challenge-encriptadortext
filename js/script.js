// Funcion para encriptar el texto
function encriptarTexto(text){
    return text.replace(/e/g, "enter")
                .replace(/i/g, "imes")
                .replace(/a/g, "ai")
                .replace(/o/g, "ober")
                .replace(/u/g, "ufat"); 

}

// Funcion para desencriptar el texto
function desencriptarTexto(text){
    return text.replace(/enter/g, "e")
                .replace(/imes/g, "i")
                .replace(/ai/g, "a")
                .replace(/ober/g, "o")
                .replace(/ufat/g, "u"); 
}

// Función para limpiar y ocultar elementos después de encriptar o desencriptar
function limpiar() {
    // Oculta la imagen el mensaje y el parrafo
    document.getElementById("encriptar_Texto").style.background = "none";
    document.getElementById("mensaje").style.display = "none";
    document.getElementById("parrafo").style.display = "none";
    // Muestra el botón de copiar
    document.getElementById("boton_copiar").style.display = "block";
    // Limpia el área de entrada de texto
    document.getElementById("ingresar_Texto").value = "";
}

// Función para mostrar elementos después de copiar
function mostrar() {
    // Muestra la imagen el mensaje y el parrafo
    document.getElementById("encriptar_Texto").style.background = "";
    document.getElementById("mensaje").style.display = "";
    document.getElementById("parrafo").style.display = "";
    // Oculta el botón de copiar
    document.getElementById("boton_copiar").style.display = "none";
    // Limpia el área de entrada de texto
    document.getElementById("encriptar_Texto").value = "";
}

// FUNCION PARA MOSTRAR LAS CARTAS DE AVISOS
function showCard(id) {
    document.getElementById(id).style.display = 'flex';
    document.getElementById('fondo-opacado').style.display = 'block'; // Muestra el fondo opacado
}

// FUNCION PARA OCULTAR LAS CARTAS DE AVISOS
function hideCard(id) {
    document.getElementById(id).style.display = 'none';
    document.getElementById('fondo-opacado').style.display = 'none'; // Oculta el fondo opacado
}

// Funcion para copiar el texto encriptado
function copiar() {

    let copiarText = document.getElementById("encriptar_Texto").value;

    navigator.clipboard.writeText(copiarText)
        .then(() => {
            showCard("copiado");
            mostrar();
        })
        .catch((error) => {
            console.error('Error al copiar el texto:', error);
            showCard("copiado_error");
        });
}


// Funcion para obtener los datos, validar y encriptar
function btnEncriptador() {
    // PARA OBTENER LOS DATOS INGRESADOS DEL TEXTAREA
    let datos = document.getElementById("ingresar_Texto").value;

    // Verifica si no se han ingresado datos
    if (datos.trim() === "") {
        // Muestra un mensaje de alerta indicando que no se han ingresado datos
        showCard("error");
        // Detiene la ejecución del código
        return;
    }

    // Verifica si hay mayúsculas y acento
    if (/[A-ZÁÉÍÓÚÜ]/.test(datos) || /[á,é,í,ó,ú]/.test(datos)) {
        showCard("error_mayus");
        // LIMPIA EL CAMPO DESPUES DE AVISAR QUE HAY MAYUSCULAS
        document.getElementById("ingresar_Texto").value = "";
        // Detiene la ejecución del código
        return;
    }

    // Si los datos son válidos, procede a encriptarlos
    document.getElementById("encriptar_Texto").value = encriptarTexto(datos);
    limpiar();
}


// Funcion para desencriptar los datos 
function btnDesencriptar() {
    let textoEncriptado = document.getElementById("ingresar_Texto").value;

    // Verifica si no se han ingresado datos o si solo son espacios en blanco
    if (textoEncriptado.trim() === "") {
        // Muestra un mensaje de alerta indicando que no se han ingresado datos
        showCard("error");
        // Detiene la ejecución del código
        return;
    }

    // Si los datos son válidos, procede a desencriptarlos
    document.getElementById("encriptar_Texto").value = desencriptarTexto(textoEncriptado);
    limpiar();
}

