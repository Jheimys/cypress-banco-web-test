# 🏦 Automação de Testes - Banco Web (Cypress)

Este projeto contém os testes End-to-End (E2E) automatizados utilizando o **Cypress** para a aplicação **Banco Web**. O objetivo deste repositório é garantir o correto funcionamento das funcionalidades principais do sistema bancário simulado, como autenticação de usuários e transações financeiras.

---

## 🛠️ Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)** (v14+) - Framework de testes automatizados E2E.
- **Node.js** e **npm** - Para gerenciamento e execução de pacotes.
- **JavaScript** - Linguagem de programação utilizada na escrita dos testes.
- **[Cypress Mochawesome Reporter](https://www.npmjs.com/package/cypress-mochawesome-reporter)** - Para a geração de relatórios de testes bem estruturados em HTML.

---

## 🎯 Cenários Cobertos

Os testes englobam os seguintes módulos e fluxos da aplicação:

**🔐 Login (`login.cy.js`)**
- ✅ Autenticação com credenciais válidas.
- ❌ Bloqueio de acesso e validação de mensagem de erro com credenciais inválidas.

**💸 Transferências (`transferencia.cy.js`)**
- ✅ Realização de transferência para outro usuário com valores permitidos.
- ❌ Validação de bloqueio/erro ao tentar transferir valores superiores a R$ 5.000,00 sem token de autenticação.

---

## ⚠️ Pré-requisitos (Importante)

Para que os testes funcionem corretamente, a automação depende que o **Front-end** e o **Back-end** do sistema estejam em execução na sua máquina local antes de rodar o Cypress.

### 1️⃣ Inicializar o Back-end (banco-api)
O repositório da API do banco fornece a base de dados e os serviços que a interface consome.
- Clone o repositório: [banco-api](https://github.com/juliodelimas/banco-api)
- Siga as instruções do `README.md` do repositório para instalar as dependências e subir a aplicação servidor.

### 2️⃣ Inicializar o Front-end (banco-web)
A interface de usuário precisa estar rodando localmente (normalmente em `http://localhost:4000`, conforme configurado no projeto) para que o Cypress possa interagir com as telas.
- Clone o repositório: [banco-web](https://github.com/juliodelimas/banco-web)
- Siga as instruções do repositório para rodar o site.

---

## ⚙️ Instalação do Projeto de Testes

Com os pré-requisitos online, realize a clonagem e configuração deste projeto de testes:

1. Clone este repositório:
   ```bash
   git clone https://github.com/Jheimys/cypress-banco-web-test.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd cypress-banco-web-test
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

---

## 🚀 Como Executar os Testes

O projeto possui comandos (scripts) configurados no `package.json` para facilitar a execução.

### Executar em Modo Interativo (Cypress UI)
Abre a interface visual do Cypress, excelente para acompanhar a execução passo a passo ou desenvolver novos testes.
```bash
npm run cy:open
```

### Executar em Modo Automático (Headless / Background)
Roda todos os testes pelo terminal, ideal para integração contínua (CI) ou testes rápidos.
```bash
npm run test
```

---

## 📊 Relatórios de Execução

Este projeto está configurado com o **Cypress Mochawesome Reporter**. 
Sempre que você executar os testes no modo automático (`npm run test`), um relatório completo em formato HTML será gerado, detalhando as evidências das execuções, tempos, suítes e status.

O relatório pode ser encontrado no seu repositório local logo após a execução técnica no caminho (geralizado):
📂 `cypress/reports/html/index.html`

Basta dar dois cliques no `index.html` para abrir diretamente no seu navegador.
