// static/script.js

document.addEventListener("DOMContentLoaded", () => {
  const btnVerTabela = document.getElementById("btn-ver-tabela");
  const btnVerPowerBI = document.getElementById("btn-ver-powerbi");
  const btnVoltarTabela = document.getElementById("btn-voltar-tabela");
  const btnVoltarPowerBI = document.getElementById("btn-voltar-powerbi");

  const tabelaContainer = document.getElementById("tabela-step");
  const powerbiContainer = document.getElementById("powerbi-embed");

  // Mostrar Tabela
  btnVerTabela?.addEventListener("click", () => {
    tabelaContainer.classList.remove("hidden");
    powerbiContainer.classList.add("hidden");
  });

  // Mostrar Power BI
  btnVerPowerBI?.addEventListener("click", () => {
    powerbiContainer.classList.remove("hidden");
    tabelaContainer.classList.add("hidden");

    const iframe = powerbiContainer.querySelector("iframe");
    if (iframe) iframe.src = iframe.src;
  });

  btnVoltarTabela?.addEventListener("click", () => {
    tabelaContainer.classList.add("hidden");
  });

  btnVoltarPowerBI?.addEventListener("click", () => {
    powerbiContainer.classList.add("hidden");
  });

  window.toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  tabelaContainer.classList.add("hidden");
  powerbiContainer.classList.add("hidden");
});
