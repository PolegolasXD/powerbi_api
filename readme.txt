# Sistema de Gestão de KPIs com Integração ao Power BI

Este é um sistema web desenvolvido em Python com Flask, que permite o cadastro e visualização de KPIs (Key Performance Indicators). Os dados são armazenados em um arquivo CSV e podem ser consumidos no Power BI Desktop para análise visual.

## Funcionalidades

- Formulário para cadastro de indicadores
- Armazenamento em `dados_kpi.csv`
- Visualização dos KPIs em uma tabela no navegador
- Exportação dos dados via endpoint `/dados_json`
- Arquivo `.pbix` incluso com dashboard pronto no Power BI Desktop

## Tecnologias Utilizadas

- Python 3.8+
- Flask
- Pandas
- HTML + CSS + JavaScript
- Power BI Desktop (para visualização)

## Como Executar Localmente

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
cd nome-do-repo
```

### 2. Criar e ativar ambiente virtual (opcional)

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

### 3. Instalar dependências

```bash
pip install flask pandas
```

### 4. Executar o projeto

```bash
python app.py
```

Acesse: [http://localhost:5000](http://localhost:5000)

---

## Integração com Power BI

1. Abrir o arquivo `dashboard.pbix` com o Power BI Desktop
2. Ir em "Transformar dados"
3. Editar a origem da consulta para:
   ```
   http://localhost:5000/dados_json
   ```
4. Aplicar e atualizar os dados para ver o dashboard com os KPIs cadastrados

> Observação: O Flask precisa estar rodando para o Power BI acessar os dados.

---

## Estrutura de Pastas

```
├── app.py
├── dados_kpi.csv
├── dashboard.pbix
├── templates/
│   └── form.html
├── static/
│   ├── style.css
│   └── script.js
```

---

## Contribuição
Pull requests são bem-vindos! Para ideias, melhorias ou sugestões, abra uma issue.

---

## Licença
Este projeto é de uso educacional e livre para fins acadêmicos.

---

**Desenvolvido por:** [Seu Nome / Time]  
**Curso:** Fatec São Paulo — Análise e Desenvolvimento de Sistemas  
**Ano:** 2025

