# Portfolio - Designer de Produtos Digitais

Um portfolio profissional minimalista para designers de produtos digitais, construído com React, TypeScript e Tailwind CSS.

## ✨ Características

- **Design Minimalista**: Interface limpa em preto e branco com foco no conteúdo
- **Totalmente Responsivo**: Otimizado para desktop, tablet e mobile
- **Fácil de Editar**: Todo o conteúdo está em arquivos TypeScript simples
- **Showcase de Cases**: Apresentação destacada de estudos de caso com suporte para texto, imagens e vídeos
- **Seção Sobre**: Biografia profissional com botão de download de currículo
- **Formulário de Contato**: Envio de mensagens por e-mail
- **Performance**: Carregamento rápido e otimizado

## 🚀 Como Usar

### Instalação

```bash
# Instalar dependências
pnpm install
```

### Desenvolvimento

```bash
# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Criar build de produção
pnpm build

# Visualizar build localmente
pnpm preview
```

## 📝 Editando o Conteúdo

### Cases de Estudo

Todos os cases estão em `client/src/data/caseStudies.ts`. Cada case tem:

- **id**: Identificador único (usado na URL)
- **title**: Título do case
- **subtitle**: Categoria ou tipo de projeto
- **coverImage**: Caminho da imagem de capa
- **description**: Descrição breve
- **content**: Array de blocos de conteúdo (texto, imagem ou vídeo)

Exemplo:

```typescript
{
  id: 'meu-projeto',
  title: 'Meu Projeto Incrível',
  subtitle: 'Design de App Mobile',
  coverImage: '/projetos/capa.jpg',
  description: 'Uma breve descrição do projeto.',
  content: [
    {
      type: 'text',
      content: '## O Desafio\n\nDescreva o problema...'
    },
    {
      type: 'image',
      content: '/projetos/imagem1.jpg',
      caption: 'Legenda da imagem'
    },
    {
      type: 'video',
      content: 'https://www.youtube.com/embed/VIDEO_ID',
      caption: 'Demonstração do produto'
    }
  ]
}
```

### Seção Sobre

Edite o texto em `client/src/pages/Home.tsx` na seção "About Me" (linha ~90).

### Currículo

1. Adicione seu currículo PDF em `client/public/resume.pdf`
2. Atualize a função `handleDownloadResume` em `client/src/pages/Home.tsx`:

```typescript
const handleDownloadResume = () => {
  window.open('/resume.pdf', '_blank');
};
```

### E-mail de Contato

Em `client/src/pages/Home.tsx`, na função `handleSubmit`, substitua:

```typescript
window.location.href = `mailto:seu-email@exemplo.com?subject=${subject}&body=${body}`;
```

### Imagens

Coloque todas as imagens em `client/public/`:

```
client/public/
  ├── resume.pdf
  ├── foto.jpg
  └── projetos/
      ├── projeto1-capa.jpg
      ├── projeto1-detalhe.jpg
      └── projeto2-capa.jpg
```

Referencie-as usando `/nome-arquivo.jpg` ou `/pasta/nome-arquivo.jpg`

### Links Sociais

Edite os links em `client/src/components/Footer.tsx`:

```typescript
<a href="https://linkedin.com/in/seu-perfil" ...>
<a href="https://behance.net/seu-perfil" ...>
<a href="https://dribbble.com/seu-perfil" ...>
```

## 🎨 Personalização de Design

### Cores

As cores estão definidas em `client/src/index.css` usando o formato `oklch()`:

- `:root` - tema claro (padrão)
- `.dark` - tema escuro

O primeiro número em `oklch()` controla a luminosidade (0 = preto, 1 = branco).

### Tipografia

A fonte padrão é a fonte do sistema. Para usar uma fonte customizada:

1. Adicione a fonte via Google Fonts em `client/index.html`
2. Atualize a variável `--font-sans` em `client/src/index.css`

## 📁 Estrutura do Projeto

```
designer-portfolio/
├── client/
│   ├── public/           # Arquivos estáticos
│   ├── src/
│   │   ├── components/   # Componentes reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/       # Componentes shadcn/ui
│   │   ├── data/         # Dados do conteúdo
│   │   │   └── caseStudies.ts
│   │   ├── pages/        # Páginas
│   │   │   ├── Home.tsx
│   │   │   ├── CaseStudy.tsx
│   │   │   └── NotFound.tsx
│   │   ├── App.tsx       # Rotas
│   │   ├── main.tsx      # Entry point
│   │   └── index.css     # Estilos globais
│   └── index.html
├── CONTENT_GUIDE.md      # Guia detalhado de edição
└── README.md
```

## 🛠️ Tecnologias

- **React 19**: Framework UI
- **TypeScript**: Type safety
- **Vite**: Build tool
- **Tailwind CSS 4**: Estilização
- **shadcn/ui**: Componentes UI
- **Wouter**: Roteamento
- **Streamdown**: Renderização de Markdown

## 📱 Responsividade

O site é totalmente responsivo com breakpoints:

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🚀 Deploy

Este projeto pode ser hospedado em qualquer serviço de hospedagem estática:

- **Vercel**: `vercel --prod`
- **Netlify**: Arraste a pasta `dist` após `pnpm build`
- **GitHub Pages**: Configure o workflow de deploy
- **Manus**: Clique em "Publish" na interface

## 📖 Documentação Adicional

Consulte `CONTENT_GUIDE.md` para um guia detalhado de gerenciamento de conteúdo.

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

---

**Desenvolvido com Manus AI**
