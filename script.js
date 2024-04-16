function tocarSom (selertorAudio) {

    const elemento = document.querySelector(selertorAudio)
    //console.log(selertorAudio)
    if (elemento != null && elemento.localName === 'audio') {
        elemento.play()
    } else {
        console.log('Som não encontrado')
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla')

//console.log(listaDeTeclas)
for(let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    //console.log(contador);
    //console.log(tecla);
    const instrumento = tecla.classList[1]
    //console.log(instrumento);
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio);

    tecla.onclick = function(e) {
        tocarSom(idAudio)
    }

    
}
