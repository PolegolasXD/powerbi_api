document.addEventListener("DOMContentLoaded", () => {
  const btnVerTabela = document.getElementById("btn-ver-tabela");
  const btnVerPowerBI = document.getElementById("btn-ver-powerbi");
  const btnVoltarTabela = document.getElementById("btn-voltar-tabela");
  const btnVoltarPowerBI = document.getElementById("btn-voltar-powerbi");
  const btnLimparTabela = document.getElementById("btn-limpar-tabela");

  const tabelaContainer = document.getElementById("tabela-step");
  const powerbiContainer = document.getElementById("powerbi-embed");
  const formContainer = document.getElementById("form-step");

  if (btnVerTabela) {
    btnVerTabela.addEventListener("click", () => {
      tabelaContainer.classList.remove("hidden");
      powerbiContainer.classList.add("hidden");
      formContainer.classList.add("hidden");
    });
  }

  if (btnVerPowerBI) {
    btnVerPowerBI.addEventListener("click", () => {
      powerbiContainer.classList.remove("hidden");
      tabelaContainer.classList.add("hidden");
      formContainer.classList.add("hidden");

      const iframe = powerbiContainer.querySelector("iframe");
      if (iframe) {
        const src = iframe.src;
        iframe.src = "";
        iframe.src = src;
      }
    });
  }

  if (btnVoltarTabela) {
    btnVoltarTabela.addEventListener("click", () => {
      tabelaContainer.classList.add("hidden");
      powerbiContainer.classList.add("hidden");
      formContainer.classList.remove("hidden");
    });
  }

  if (btnVoltarPowerBI) {
    btnVoltarPowerBI.addEventListener("click", () => {
      powerbiContainer.classList.add("hidden");
      tabelaContainer.classList.add("hidden");
      formContainer.classList.remove("hidden");
    });
  }

  if (btnLimparTabela) {
    btnLimparTabela.addEventListener("click", () => {
      fetch('/limpar_tabela', { method: 'POST' })
        .then(response => response.json())
        .then(data => {
          alert("Tabela limpa com sucesso!");

          tabelaContainer.querySelector("table tbody").innerHTML = '';

          const iframe = powerbiContainer.querySelector("iframe");
          if (iframe) {
            const src = iframe.src;
            iframe.src = "";
            iframe.src = src;
          }

          tabelaContainer.classList.add("hidden");
          powerbiContainer.classList.add("hidden");
          formContainer.classList.remove("hidden");
        })
        .catch(error => {
          console.error("Erro ao limpar a tabela:", error);
          alert("Erro ao limpar a tabela.");
        });
    });
  }

  window.toggleTheme = () => {
    document.body.classList.toggle("dark");
  };

  if (tabelaContainer && powerbiContainer && formContainer) {
    tabelaContainer.classList.add("hidden");
    powerbiContainer.classList.add("hidden");
    formContainer.classList.remove("hidden");
  }
});
