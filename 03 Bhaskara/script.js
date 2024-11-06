document
  .getElementById("bhaskara-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    // Obter os valores de A, B e C dos inputs
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    // Calcular o discriminante
    const delta = b * b - 4 * a * c;

    // Obter o resultado
    let resultado = "";
    if (delta < 0) {
      resultado = "Não existem raízes reais.";
    } else if (delta === 0) {
      const x = -b / (2 * a);
      resultado = `A raiz única é: x = ${x.toFixed(2)}`;
    } else {
      const x1 = (-b + Math.sqrt(delta)) / (2 * a);
      const x2 = (-b - Math.sqrt(delta)) / (2 * a);
      resultado = `As raízes são: x1 = ${x1.toFixed(2)}, x2 = ${x2.toFixed(2)}`;
    }

    // Exibir o resultado
    document.getElementById("resultado").innerText = resultado;
  });
