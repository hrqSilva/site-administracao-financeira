// Animação ao rolar a página
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  const trigger = window.innerHeight * 0.8;
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) sec.classList.add("show");
  });
});

// Simulação envio de formulário
document.getElementById("contatoForm").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Mensagem enviada com sucesso! Em breve entraremos em contato.");
  this.reset();
});

// Botão WhatsApp
document.getElementById("whatsappBtn").addEventListener("click", () => {
  window.open("https://wa.me/5599999999999?text=Olá, gostaria de mais informações!", "_blank");
});

// MENU MOBILE
const menuToggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});
