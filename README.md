# 🏦 **Sistema Bancário - Automação e CI/CD**

![CI/CD Pipeline](https://github.com/GuiSonnenberg/Automatizacao_Documentacao_Testes/actions/workflows/pipeline.yml/badge.svg)

Este projeto consiste numa aplicação de sistema bancário com **Backend em Java** e **testes End-to-End (E2E) automatizados no Frontend** utilizando Cypress. O projeto conta com um pipeline de CI/CD configurado via GitHub Actions para garantir a qualidade do código a cada push.

---

## 🚀 **Tecnologias Utilizadas**

- **Backend:** Java 17 (Maven)
- **Frontend/Testes:** Node.js 20, Cypress
- **CI/CD:** GitHub Actions
- **Servidor Local:** http-server

---

## 📂 **Estrutura do Projeto**

O código-fonte da aplicação encontra-se dentro do diretório `banco/`.

```text
/
├── .github/workflows/   # Configuração do Pipeline (CI/CD)
├── banco/               # Código Fonte do Projeto
│   ├── src/             # Código Java
│   ├── cypress/         # Testes automatizados E2E
│   ├── pom.xml          # Dependências Maven
│   └── package.json     # Dependências Node/Cypress
└── README.md            # Documentação

```

---
### Como Executar (Backend e Instalação)
#### 🛠️ **Como Executar Localmente**

Como o projeto está dentro da pasta `banco`, você deve acessá-la antes de rodar qualquer comando.

### Pré-requisitos
- Java JDK 17
- Maven
- Node.js 20+
  
---

### 1. Testar o Backend (Java)

```bash
cd banco
mvn clean verify
```

---

### 2. Rodar Testes de Frontend (Cypress)
Primeiro, instale as dependências:

```bash
cd banco
npm install
```

---

### Execução Cypress e CI/CD

Para abrir o Cypress (modo interativo):

```bash
npx cypress open
```

---

Para rodar os testes em modo "headless" (igual ao CI):

```bash
# Necessário subir o servidor primeiro em outro terminal:
# npx http-server . -p 8080

npx cypress run
```

---

## 🤖 **Pipeline CI/CD (GitHub Actions)**
O pipeline é acionado automaticamente em push ou pull_request para as branches main e master. Ele é dividido em dois jobs:

### 1. Backend Check
Configura Java 17.

Executa mvn clean verify para compilar e rodar testes unitários.

---

### 2. Frontend Check
(Só roda se o Backend passar)

Configura Node.js.

Instala dependências (npm install).

Sobe um servidor local (http-server).

Executa os testes automatizados do Cypress.

---
