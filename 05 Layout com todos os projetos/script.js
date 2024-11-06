// Seleciona todos os links com a classe "show-details"
document.querySelectorAll(".show-details").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Evita o comportamento padrão do link
    const url = this.getAttribute("data-url"); // Pega a URL do atributo data-url
    window.open(url, "_blank"); // Abre a URL em uma nova guia
  });
});
