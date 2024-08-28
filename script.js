function encriptar() {
    let texto = document.getElementById("texto").value;
    if (texto === "") return;
    
    let textoEncriptado = "";
    
    for (let i = 0; i < texto.length; i++) {
        textoEncriptado += String.fromCharCode(texto.charCodeAt(i) + 1);
    }
    
    mostrarResultado(textoEncriptado);
}

function desencriptar() {
    let texto = document.getElementById("texto").value;
    if (texto === "") return;
    
    let textoDesencriptado = "";
    
    for (let i = 0; i < texto.length; i++) {
        textoDesencriptado += String.fromCharCode(texto.charCodeAt(i) - 1);
    }
    
    mostrarResultado(textoDesencriptado);
}

function mostrarResultado(texto) {
    // Remover cualquier botón de copiar existente
    let botonCopiarExistente = document.querySelector(".copiar");
    if (botonCopiarExistente) {
        botonCopiarExistente.remove();
    }
    
    document.getElementById("imagen").style.display = "none";
    document.getElementById("mensaje").innerHTML = texto;
    
    // Crear un nuevo botón de copiar
    let botonCopiar = document.createElement("button");
    botonCopiar.textContent = "Copiar";
    botonCopiar.classList.add("copiar");
    botonCopiar.onclick = function() {
        navigator.clipboard.writeText(texto);
        alert("Texto copiado al portapapeles");
    };
    
    let resultadoContainer = document.getElementById("resultado-container");
    resultadoContainer.appendChild(botonCopiar);
}

document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = encryptText(inputText);
    displayResult(encryptedText);
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    const decryptedText = decryptText(inputText);
    displayResult(decryptedText);
});

document.getElementById('copyButton').addEventListener('click', function() {
    const resultText = document.getElementById('resultText').innerText;
    navigator.clipboard.writeText(resultText);
});

function encryptText(text) {
    let encryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        
        // Solo encriptar letras minúsculas
        if (char >= 97 && char <= 122) {
            char = ((char - 97 + 1) % 26) + 97;
        }
        
        encryptedText += String.fromCharCode(char);
    }
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = '';
    for (let i = 0; i < text.length; i++) {
        let char = text.charCodeAt(i);
        
        // Solo desencriptar letras minúsculas
        if (char >= 97 && char <= 122) {
            char = ((char - 97 - 1 + 26) % 26) + 97;
        }
        
        decryptedText += String.fromCharCode(char);
    }
    return decryptedText;
}

function displayResult(result) {
    const resultPanel = document.getElementById('resultPanel');
    const resultText = document.getElementById('resultText');
    const resultImage = document.getElementById('resultImage');
    const copyButton = document.getElementById('copyButton');

    resultText.innerText = result;
    resultImage.style.display = 'none'; // Esconde la imagen
    resultText.style.display = 'block'; // Muestra el texto
    copyButton.style.display = 'block'; // Muestra el botón de copiar
}
