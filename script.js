// Envio simples do formulário
document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();

  // Simula envio
  document.getElementById('mensagemSucesso').style.display = 'block';

  // Limpa os campos
  this.reset();

  // Esconde a mensagem depois de 5 segundos
  setTimeout(() => {
    document.getElementById('mensagemSucesso').style.display = 'none';
  }, 5000);
});
