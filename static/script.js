lucide.createIcons();

function mostrarTabela() {
  document.getElementById('form-step').classList.add('hidden');
  document.getElementById('tabela-step').classList.remove('hidden');
}

function mostrarFormulario() {
  document.getElementById('tabela-step').classList.add('hidden');
  document.getElementById('form-step').classList.remove('hidden');
}

function exibirMensagem() {
  const msg = document.getElementById("success-message");
  msg.classList.remove("hidden");
  setTimeout(() => msg.classList.add("hidden"), 3000);
  return true;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}
