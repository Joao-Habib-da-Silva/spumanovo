# 🧽 Spuma
<img src="./Assets/IMG/logo.png">

<br>

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Status](https://img.shields.io/badge/status-desenvolvido-blue)]()
[![Firebase](https://img.shields.io/badge/Powered%20by-Firebase-orange)]()

## 📖 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Objetivo](#objetivo)
- [Funcionamento do Site](#funcionamento-do-site)
- [Arquitetura e Tecnologias](#arquitetura-e-tecnologias)
- [Instalação & Uso](#instalação--uso)
- [Contribuição](#contribuição)
- [Licença](#licença)

---

## 🧩 Sobre o Projeto

**Spuma** é um projeto web criado como parte de um trabalho acadêmico voltado ao empreendedorismo e tecnologia.  
Seu foco é apresentar uma **plataforma moderna** e **interativa** que conecta usuários e profissionais, fornecendo uma experiência fluida e segura dentro do ecossistema do Firebase.

O projeto combina **front-end responsivo** com **recursos de autenticação, armazenamento e banco de dados em nuvem**.

---

## 🎯 Objetivo

O objetivo principal do Spuma é desenvolver uma aplicação web funcional que:

- Permita **cadastro e login seguro** de usuários usando **Firebase Authentication**.  
- Armazene dados de forma estruturada e em tempo real via **Firebase Firestore**.  
- Utilize **integração com APIs externas** (como API de CEP e consultas automotivas).  
- Sirva de base para futuras versões mobile do projeto.

---

## ⚙️ Funcionamento do Site

O Spuma é um **site dinâmico** construído com **HTML, CSS e JavaScript puro**, integrado com o **Firebase** para fornecer funcionalidades de backend sem necessidade de servidor próprio.

### 🔐 Autenticação
O sistema utiliza **Firebase Authentication** para gerenciar:
- **Cadastro de novos usuários** com e-mail e senha.  
- **Login e logout seguro**, com persistência de sessão.  
- **Recuperação de senha** via e-mail (“Esqueceu sua senha?”).  
- **Login com Google** (opcional).

O processo garante que nenhum dado sensível (como senha) fique visível para o time de desenvolvimento.

### 🗂️ Banco de Dados (Firestore)
Os dados dos usuários são armazenados no **Firebase Firestore**, permitindo leitura e escrita em tempo real.  
Alguns exemplos de informações salvas:
- E-mail e dados de autenticação (seguro, via Firebase).  
- CEP, cidade e endereço do usuário (para localização).  
- Outras informações complementares, dependendo da etapa do projeto.

O Firestore possibilita:
- Sincronização instantânea entre usuários e sistema.  
- Armazenamento em nuvem com escalabilidade.  
- Consultas rápidas e seguras.

### 📦 Integração com APIs
O projeto também consome APIs externas, incluindo:
- **API de CEP (Correios)** → para preencher automaticamente endereço.  
- **API Car Query** → para obter informações automotivas (modelo, tamanho, etc).

Essas integrações aumentam a usabilidade e reduzem erros de entrada de dados.

### 🧠 Interface e Lógica
A interface é **responsiva** e adaptada para diferentes dispositivos.  
O JavaScript gerencia:
- Exibição dinâmica de componentes.  
- Validação de formulários.  
- Ações de navegação baseadas em login (por exemplo, `history.back()` após autenticação bem-sucedida).  
- Atualizações automáticas de dados vindos do Firestore.

---

## 🧱 Arquitetura e Tecnologias

| Categoria | Tecnologia | Descrição |
|------------|-------------|------------|
| **Frontend** | HTML5 / CSS3 / JavaScript (ES6+) | Base da aplicação e interatividade. |
| **Backend-as-a-Service** | Firebase | Autenticação, banco de dados e hospedagem. |
| **Banco de Dados** | Firestore | Armazenamento em nuvem em tempo real. |
| **APIs Externas** | ViaCEP / Car Query API | Obtenção de CEP e dados automotivos. |
| **Hospedagem** | Firebase Hosting (ou GitHub Pages) | Deploy do site acessível online. |

---

## 💻 Instalação & Uso

### 1️⃣ Clone o Repositório
```bash
git clone https://github.com/Joao-Habib-da-Silva/spumanovo.git
cd spumanovo
