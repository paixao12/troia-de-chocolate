document.addEventListener('DOMContentLoaded', function() {
    const passos = document.querySelectorAll('.Passo');
    const botoes = document.querySelectorAll('.btn-proximo');

    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const proximoPassoId = this.getAttribute('data-proximo');
            
            // Ocultar todos os passos
            passos.forEach(passo => {
                passo.style.display = 'none';
            });
   // Mostrar o passo selecionado
const passoAtual = document.getElementById(`Passo-${proximoPassoId}`);
if (passoAtual) {
    passoAtual.style.display = 'block';
}
});
});

// Mostrar o primeiro passo inicialmente
document.getElementById('Passo-0').style.display = 'block';
});