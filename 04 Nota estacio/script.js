document.getElementById("media-form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Obter as notas S1, S2 e AV dos inputs
  const s1 = parseFloat(document.getElementById("s1").value);
  const s2 = parseFloat(document.getElementById("s2").value);
  const av = parseFloat(document.getElementById("av").value);

  // Calcular a média
  const media = s1 + s2 + av;

  // Determinar se passou ou não
  let resultado = "";
  if (media >= 6) {
    resultado = `Média: ${media.toFixed(2)} - Você passou!`;
  } else {
    resultado = `Média: ${media.toFixed(2)} - Você não passou.`;
  }

  // Exibir o resultado
  document.getElementById("resultado").innerText = resultado;
});
