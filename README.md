# 🧩 Componente de Perfil (React + Sass)

Este é um componente reutilizável de **Perfil de Usuário**, projetado para ser implementado em aplicações React. Desenvolvido com foco em responsividade, clareza visual e estrutura limpa de código.

---

## ✨ Funcionalidades

- Avatar redondo com fallback de iniciais
- Nome, cargo, localização e bio
- Ações com botões: **Seguir** e **Mensagem**
- Layout responsivo (mobile e desktop)
- Estados de carregamento, erro e vazio
- Estilização feita com **Sass** e **variáveis de tema**

---

## 🚀 Tecnologias

- **React 18+**
- **Sass (SCSS modular ou BEM)**
- Sem dependências externas de UI (zero Bootstrap/Material/etc.)

---

## 🧱 Estrutura do Projeto



---

## ⚙️ Props do Componente

| Prop         | Tipo     | Obrigatório | Descrição                                   |
|--------------|----------|-------------|---------------------------------------------|
| `nome`       | string   | ✅           | Nome do usuário                             |
| `foto`       | string   | ❌           | URL da imagem (fallback com iniciais)       |
| `cargo`      | string   | ❌           | Cargo do usuário                            |
| `localizacao`| string   | ❌           | Cidade e país                               |
| `bio`        | string   | ❌           | Breve descrição do usuário (máx. 2 linhas)  |
| `carregando` | boolean  | ❌           | Mostra estado de loading com skeleton       |
| `erro`       | boolean  | ❌           | Mostra mensagem de erro                     |
| `onSeguir`   | function | ❌           | Callback do botão "Seguir"                  |
| `onMensagem` | function | ❌           | Callback do botão "Mensagem"                |

---

## 🎨 Estilização

As variáveis de cor e tipografia estão centralizadas em `_variables.scss`.

### Exemplo de uso no SCSS:
```scss
@import './variables';

.nome {
  color: $cinza-escuro;
  font-size: 24px;
  font-weight: 700;
}
```

📱 Responsividade
Mobile (<=768px): Layout centralizado, botões empilhados

Desktop: Layout alinhado à esquerda, botões lado a lado

---
## 🛠️ Como usar
Instale as dependências do projeto principal se necessário:

```bash

```
