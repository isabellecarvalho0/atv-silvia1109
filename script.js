function lerDescricao(texto) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(texto);
    utterance.lang = 'pt-BR';
    synth.speak(utterance);
}

function aumentarImagem(src) {
    const modal = document.getElementById('imagem-modal');
    const modalImg = document.getElementById('img01');
    modal.style.display = 'block';
    modalImg.src = src;
}

function fecharModal() {
    const modal = document.getElementById('imagem-modal');
    modal.style.display = 'none';
}

// Fecha o modal se o usuário clicar fora da imagem
window.onclick = function(event) {
    const modal = document.getElementById('imagem-modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}
