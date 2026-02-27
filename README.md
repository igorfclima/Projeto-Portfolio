# 🌑 Portfolio Pessoal

## 📌 Descrição do Projeto

Este projeto tem como objetivo desenvolver um site de portfólio pessoal para exibir habilidades técnicas, experiências profissionais, projetos realizados e formas de contato.

O site é desenvolvido com tecnologias modernas, e está dividido em secções como **Home**, **Sobre mim**, **Experiencia**, **Projetos** e **Contato**.

---

## 🛠️ Tecnologias Utilizadas

Para garantir escalabilidade, tipagem forte e um visual premium, utilizei as seguintes tecnologias:

* **Design:** [Figma](https://www.figma.com/) (Prototipagem e Design System)
* **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
* **Linguagem:** [TypeScript](https://www.typescriptlang.org/)
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/)
* **Componentes:** [shadcn/ui](https://ui.shadcn.com/)
* **Animações:** [Framer Motion](https://www.framer.com/motion/)
* **Deployment:** [Vercel](https://vercel.com/)

---

## 🧱 Estrutura Inicial do Site

- **Cabeçalho fixo:** nome, navegação.
- **Sobre Mim:** parágrafo de introdução, contexto profissional e habilidades tecnicas.
- **Projetos:** cards com os principais trabalhos, com título e descrição.
- **Experiência:** descrição das empresas onde trabalhou e principais responsabilidades.
- **Contato:** form de contato.

---

## ✨ Funcionalidades Principais

* **Dark Mode Nativo:** Interface otimizada para baixo cansaço visual com foco em contrastes sutis.
* **Mobile First:** Design totalmente responsivo para dispositivos móveis, tablets e desktop.
* **Performance:** Código otimizado para atingir pontuação máxima no Google Lighthouse.
* **Componentização:** Interface construída com componentes reutilizáveis e limpos.

---

## 🖼️ Protótipos Iniciais

### Tela Inicial
<img width="800" height="418" alt="image" src="https://github.com/user-attachments/assets/9b92ea1f-d24b-4256-9bd2-dd7579f84013" />

### Sobre mim
<img width="800" height="580" alt="image" src="https://github.com/user-attachments/assets/98a5707f-82b2-4712-8d62-2da170df3ffb" />

### Experiencia e contato
<img width="800" height="797" alt="image" src="https://github.com/user-attachments/assets/f64b9f35-eba3-4cfc-947b-367fded4b897" />

🔗 [Acessar protótipo no Figma](https://www.figma.com/design/072NlKWi8EwXG3EHE3A2c6/Portfolio?node-id=0-1&p=f&t=tmBUu5rtRkCScVxe-0)

---

## 📁 Estrutura de Pastas

```tree
src/
├── app/                  # Rotas, layouts e páginas da aplicação
│   ├── favicon.ico       # Ícone do navegador
│   ├── globals.css       # Estilos globais
│   ├── layout.tsx        # Layout principal
│   └── page.tsx          # Home Page
├── components/           # Componentes React reutilizáveis
│   ├── ui/               # Componentes base do shadcn/ui (Button, Card, Input)
│   ├── sections/         # Seções da página (Hero, Projects, Skills, Contact)
│   └── shared/           # Componentes globais (Navbar, Footer, ThemeToggle)
├── constants/            # Dados estáticos (Links, textos de projetos, redes sociais)
├── contexts/             # Contextos
├── lib/                  # Configurações de bibliotecas externas (utils.ts do shadcn)
│   └── utils.ts          # Funções utilitárias (clsx + tailwind-merge)
├── i18n                  # Traduções
└── assets/               # Imagens, vetores e ícones locais
```
