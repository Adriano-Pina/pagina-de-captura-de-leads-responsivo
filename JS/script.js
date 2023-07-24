 // Função que exibe a mensagem de aviso para o usuário
function exibirMensagem() {
  alert('Copiar o conteúdo deste site é proibido!');
}

  // Desabilita o botão direito do mouse na página
document.addEventListener('contextmenu', event => {
  event.preventDefault();
  exibirMensagem();
});
