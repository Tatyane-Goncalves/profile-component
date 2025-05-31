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

```bash
profile-component/
├── Perfil.jsx
├── Perfil.module.scss
├── AvatarFallback.jsx
├── LoadingSkeleton.jsx
├── perfil.types.js
└── README.md

```

---

## ⚙️ Props do Componente

| Prop         | Tipo     | Obrigatório  | Descrição                                   |
|--------------|----------|--------------|---------------------------------------------|
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

---

## 📱 Responsividade

* **Mobile (<=768px):** Layout centralizado, botões empilhados
* **Desktop:** Layout alinhado à esquerda, botões lado a lado

---

## 🛠️ Como usar

1. **Clone o repositório e instale as dependências do projeto principal se necessário:**

```bash
git clone https://github.com/Tatyane-Goncalves/profile-component.git
cdd profile-component
npm install 
```

2. **Importe e use o componente:**

```jsx
import Perfil from './components/Perfil/Perfil';

<Perfil
  nome="Joana Mendes"
  foto="https://..."
  cargo="Desenvolvedora Front-End"
  localizacao="São Paulo, Brasil"
  bio="Apaixonada por criar experiências web acessíveis e responsivas."
  onSeguir={() => console.log('Seguir clicado')}
  onMensagem={() => console.log('Mensagem clicada')}
/>
```

---

## 🧪 Estados Especiais

```jsx
<Perfil carregando />
<Perfil erro />
<Perfil bio="" /> // mostra estado vazio
```

---

## ✅ To Do / Melhorias Futuras

* [ ] Adicionar tooltip para ações
* [ ] Suporte a dark mode
* [ ] Internacionalização (i18n)

---

## 🤝 Contribuição

Pull requests são bem-vindos! Siga o padrão de código, use tipagem clara e prefira nomes de classe no formato BEM ou escopo modular (`.module.scss`).

---

## 📄 Licença

MIT — pode usar, modificar e espalhar à vontade (só não diz que foi você que fez 😎)