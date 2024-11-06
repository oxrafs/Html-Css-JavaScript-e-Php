// Função para copiar o conteúdo de um campo para a área de transferência
function copiarTexto(id) {
  const elemento = document.getElementById(id);
  const texto = elemento.innerText;

  // Cria um elemento temporário para selecionar o texto
  const inputTemp = document.createElement("input");
  inputTemp.value = texto;
  document.body.appendChild(inputTemp);
  inputTemp.select();
  document.execCommand("copy");
  document.body.removeChild(inputTemp);

  // Alerta de cópia bem-sucedida
  alert("Copiado: " + texto);
}
