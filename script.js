const ingresoTexto = document.querySelector(".ingreso-texto")
const textoGenerado = document.querySelector(".texto-generado")

/* 
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" 
*/

function btnEncriptar(){
    const textoEncriptado = encriptar(ingresoTexto.value)
    textoGenerado.value = textoEncriptado
    ingresoTexto.value=""
    textoGenerado.style.background = "white"
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }


    }

    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(ingresoTexto.value)
    textoGenerado.value = textoEncriptado
    ingresoTexto.value=""
    textoGenerado.style.background = "white"
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["enter","e"],["imes","e"],["ai","a"],["ober","o"],["ufat","u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i<matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }


    }

    return stringDesencriptada
}
