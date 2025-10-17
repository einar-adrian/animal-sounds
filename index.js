let audioAtivo = null

function tocarSom(parametroFormal) {
    const novoAudio = document.getElementById(parametroFormal) //O parametroFormal, esta criando o espaço onde chegara o argumento da função, no caso pode ser som-gato, som-tambor, etc.

    if (audioAtivo && audioAtivo !== novoAudio) {
        audioAtivo.pause()
        audioAtivo.currentTime = 0
    }
    
    if (novoAudio) {
        novoAudio.currentTime = 0
        novoAudio.play()
        audioAtivo = novoAudio
    } else {
        console.log('Erro: Elemento de Áudio com ID `${idElementoAudio}` não encontrado no HTML.')
    }
}

/* Essa aqui foi a linha anterior de teste
    function tocarSom(idElementoAudio) {
        const audio = document.getElementById(idElementoAudio);

        if (audio) {
            audio.currentTime = 0;
            audio.play();
        } else {
            console.log(`Erro: Elemento de áudio com ID '${idElementAudio}' não encontrado no HTML.`)
        }
    }
*/