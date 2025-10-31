# Manual Completo do Portfolio - Guia Passo a Passo

Este manual foi criado para ajudá-lo a gerenciar, atualizar e publicar seu portfolio profissional, mesmo sem conhecimento técnico avançado.

---

## 📋 Índice

1. [Como Atualizar o Conteúdo dos Cases](#1-como-atualizar-o-conteúdo-dos-cases)
2. [Como Adicionar Novos Cases](#2-como-adicionar-novos-cases)
3. [Como Baixar os Arquivos do Projeto](#3-como-baixar-os-arquivos-do-projeto)
4. [Como Rodar o Projeto na Sua Máquina](#4-como-rodar-o-projeto-na-sua-máquina)
5. [Como Publicar o Projeto de Forma Independente](#5-como-publicar-o-projeto-de-forma-independente)
6. [Como Usar Serviços de Hospedagem](#6-como-usar-serviços-de-hospedagem)

---

## 1. Como Atualizar o Conteúdo dos Cases

### Passo 1: Localize o arquivo de conteúdo

Todos os cases estão em um único arquivo localizado em:
```
client/src/data/caseStudies.ts
```

### Passo 2: Abra o arquivo

Você pode abrir este arquivo com qualquer editor de texto:
- **Windows**: Notepad++, Visual Studio Code, ou até o Bloco de Notas
- **Mac**: TextEdit, Visual Studio Code, ou Sublime Text
- **Linux**: gedit, Visual Studio Code, ou nano

### Passo 3: Entenda a estrutura

Cada case tem esta estrutura:

```typescript
{
  id: "case-1",                    // Identificador único (não mude!)
  title: "Case Study 1",           // Título do case
  subtitle: "Digital Product Design", // Categoria/subtítulo
  description: "Uma breve descrição...", // Descrição curta
  coverImage: "/placeholder-case-1.jpg", // Imagem de capa
  content: `
    ## Título da Seção
    
    Seu texto aqui...
    
    ![Descrição da imagem](/sua-imagem.jpg)
  `
}
```

### Passo 4: Edite o conteúdo

**Para editar texto:**
- Mude o texto entre aspas `"` ou crases `` ` ``
- Mantenha as aspas no lugar!

**Para adicionar imagens:**
1. Coloque sua imagem na pasta `client/public/`
2. No conteúdo, use: `![Descrição](/nome-da-imagem.jpg)`

**Para adicionar vídeos do YouTube:**
```markdown
<iframe width="100%" height="500" src="https://www.youtube.com/embed/SEU_VIDEO_ID" frameborder="0" allowfullscreen></iframe>
```

**Dica**: Substitua `SEU_VIDEO_ID` pelo código do vídeo do YouTube (a parte depois de `watch?v=`)

### Passo 5: Formatação do texto (Markdown)

O conteúdo usa Markdown. Aqui estão os comandos básicos:

```markdown
## Título Grande
### Título Médio

**Texto em negrito**
*Texto em itálico*

- Item de lista 1
- Item de lista 2

1. Item numerado 1
2. Item numerado 2

[Link para site](https://exemplo.com)

![Imagem](/caminho/imagem.jpg)
```

---

## 2. Como Adicionar Novos Cases

### Passo 1: Abra o arquivo caseStudies.ts

Localize: `client/src/data/caseStudies.ts`

### Passo 2: Copie um case existente

Copie todo o bloco de um case, desde a abertura `{` até o fechamento `},`

### Passo 3: Cole no final do array

Cole antes do último `]` do arquivo.

### Passo 4: Atualize as informações

```typescript
{
  id: "case-4",  // ⚠️ IMPORTANTE: Use um ID único! (case-4, case-5, etc.)
  title: "Seu Novo Case",
  subtitle: "Categoria do Projeto",
  description: "Descrição breve do projeto",
  coverImage: "/seu-novo-case.jpg",  // Adicione a imagem em client/public/
  content: `
    ## Contexto
    
    Escreva sobre o problema que você resolveu...
    
    ## Solução
    
    Descreva sua solução...
    
    ![Imagem do projeto](/imagem-projeto.jpg)
  `
},
```

### Passo 5: Adicione a vírgula

Certifique-se de que há uma vírgula `,` no final do bloco (exceto no último case).

### Exemplo completo:

```typescript
export const caseStudies = [
  {
    id: "case-1",
    title: "Case Existente",
    // ... resto do conteúdo
  },
  {
    id: "case-2",
    title: "Outro Case Existente",
    // ... resto do conteúdo
  },
  {
    id: "case-4",  // ⬅️ Novo case aqui!
    title: "Meu Novo Projeto",
    subtitle: "UX Design",
    description: "Um projeto incrível que desenvolvi",
    coverImage: "/novo-projeto.jpg",
    content: `
      ## O Desafio
      
      Descreva o desafio...
    `
  }
];
```

---

## 3. Como Baixar os Arquivos do Projeto

### Opção 1: Através da Interface Manus

1. **Localize o painel "Code"** no lado direito da interface
2. **Clique no botão "Download"** ou "Download All Files"
3. Um arquivo `.zip` será baixado para seu computador
4. **Descompacte o arquivo** clicando com botão direito > "Extrair aqui" (Windows) ou duplo clique (Mac)

### Opção 2: Através do Arquivo Compactado

Se você recebeu um arquivo `designer-portfolio-files.tar.gz`:

**Windows:**
1. Baixe o 7-Zip (gratuito): https://www.7-zip.org/
2. Clique com botão direito no arquivo > 7-Zip > "Extrair aqui"

**Mac:**
1. Duplo clique no arquivo
2. Ele será extraído automaticamente

**Linux:**
```bash
tar -xzf designer-portfolio-files.tar.gz
```

---

## 4. Como Rodar o Projeto na Sua Máquina

### Pré-requisitos

Você precisa instalar duas ferramentas:

#### 4.1. Instalar Node.js

**Windows/Mac:**
1. Acesse: https://nodejs.org/
2. Baixe a versão **LTS** (recomendada)
3. Execute o instalador e siga as instruções
4. Clique "Next" em tudo, mantenha as opções padrão

**Linux (Ubuntu/Debian):**
```bash
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs
```

**Verificar instalação:**
Abra o Terminal (Mac/Linux) ou Prompt de Comando (Windows) e digite:
```bash
node --version
npm --version
```

Se aparecer números de versão, está instalado corretamente!

#### 4.2. Instalar pnpm

No Terminal/Prompt de Comando, execute:
```bash
npm install -g pnpm
```

Aguarde a instalação terminar.

### Passo a Passo para Rodar

#### Passo 1: Abra o Terminal/Prompt na pasta do projeto

**Windows:**
1. Abra a pasta `designer-portfolio`
2. Clique na barra de endereço no topo
3. Digite `cmd` e pressione Enter

**Mac:**
1. Abra o Finder e navegue até a pasta `designer-portfolio`
2. Clique com botão direito na pasta
3. Selecione "Novo Terminal na Pasta"

**Linux:**
1. Navegue até a pasta `designer-portfolio`
2. Clique com botão direito > "Abrir no Terminal"

#### Passo 2: Instale as dependências

No Terminal/Prompt, digite:
```bash
pnpm install
```

**Aguarde**: Isso pode levar alguns minutos. Você verá muitas linhas de texto passando.

#### Passo 3: Inicie o servidor de desenvolvimento

Quando a instalação terminar, digite:
```bash
pnpm dev
```

#### Passo 4: Abra no navegador

Você verá uma mensagem como:
```
➜  Local:   http://localhost:3000/
```

Abra seu navegador (Chrome, Firefox, Safari, etc.) e acesse:
```
http://localhost:3000
```

**Pronto!** Seu portfolio está rodando localmente!

### Fazendo Alterações

Enquanto o servidor estiver rodando:
1. Faça alterações nos arquivos
2. Salve o arquivo
3. O navegador atualizará automaticamente!

### Para Parar o Servidor

No Terminal/Prompt, pressione:
```
Ctrl + C
```

---

## 5. Como Publicar o Projeto de Forma Independente

Existem várias opções gratuitas e pagas para publicar seu portfolio:

### Opção 1: Vercel (Recomendado - Gratuito)

**Por que Vercel?**
- ✅ Totalmente gratuito para projetos pessoais
- ✅ Domínio gratuito (.vercel.app)
- ✅ SSL/HTTPS automático
- ✅ Deploy em segundos
- ✅ Atualizações automáticas

**Passo a Passo:**

1. **Crie uma conta**
   - Acesse: https://vercel.com/signup
   - Clique em "Continue with GitHub" (recomendado)
   - Ou use seu email

2. **Prepare seu projeto**
   
   Primeiro, você precisa colocar seu código no GitHub:
   
   a. Crie uma conta no GitHub: https://github.com/signup
   
   b. Instale o Git:
      - **Windows**: https://git-scm.com/download/win
      - **Mac**: Já vem instalado
      - **Linux**: `sudo apt-get install git`
   
   c. No Terminal/Prompt, na pasta do projeto:
   ```bash
   git init
   git add .
   git commit -m "Primeiro commit do meu portfolio"
   ```
   
   d. No GitHub, clique em "New Repository"
      - Nome: `meu-portfolio`
      - Deixe como público
      - Clique em "Create repository"
   
   e. Copie os comandos que aparecem e execute no Terminal:
   ```bash
   git remote add origin https://github.com/SEU_USUARIO/meu-portfolio.git
   git branch -M main
   git push -u origin main
   ```

3. **Deploy no Vercel**
   
   a. No Vercel, clique em "New Project"
   
   b. Clique em "Import Git Repository"
   
   c. Selecione seu repositório `meu-portfolio`
   
   d. Configure o projeto:
      - **Framework Preset**: Vite
      - **Root Directory**: `./`
      - **Build Command**: `pnpm build`
      - **Output Directory**: `client/dist`
   
   e. Clique em "Deploy"
   
   f. Aguarde 2-3 minutos

4. **Acesse seu site**
   
   Você receberá um link como:
   ```
   https://meu-portfolio.vercel.app
   ```
   
   **Pronto!** Seu portfolio está no ar!

### Opção 2: Netlify (Alternativa Gratuita)

1. Acesse: https://www.netlify.com/
2. Clique em "Sign up"
3. Conecte com GitHub
4. Clique em "New site from Git"
5. Selecione seu repositório
6. Configure:
   - **Build command**: `pnpm build`
   - **Publish directory**: `client/dist`
7. Clique em "Deploy site"

### Opção 3: GitHub Pages (Gratuito)

**Método Automático (Recomendado):**

O projeto já está configurado com GitHub Actions para deploy automático!

1. **Faça push do código para o GitHub** (siga os passos da seção Vercel para criar o repositório)

2. **Configure o GitHub Pages**:
   - No GitHub, vá no seu repositório
   - Clique em "Settings" > "Pages"
   - Em "Source", selecione "GitHub Actions"

3. **Faça qualquer commit**:
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push
   ```

4. **Aguarde o deploy**:
   - Vá em "Actions" no seu repositório
   - Aguarde o workflow "Deploy to GitHub Pages" terminar (~2-3 minutos)

5. **Acesse seu site**:
   ```
   https://SEU_USUARIO.github.io/designer-portfolio/
   ```

**Nota Importante**: O projeto agora usa a pasta `/docs` para o GitHub Pages. Sempre que fizer alterações:

1. Execute `pnpm build:docs` para gerar os arquivos
2. Faça commit da pasta docs:
   ```bash
   git add docs/
   git commit -m "Update build"
   git push
   ```

**Método Manual (Alternativo):**

Se preferir fazer deploy manual:

1. Execute o build:
```bash
pnpm build:gh-pages
```

2. Instale gh-pages:
```bash
pnpm add -D gh-pages
```

3. Adicione ao `package.json`:
```json
"scripts": {
  "deploy": "gh-pages -d dist/public"
}
```

4. Execute:
```bash
pnpm deploy
```

---

## 6. Como Usar Serviços de Hospedagem

### Domínio Personalizado

Depois de publicar, você pode usar seu próprio domínio (ex: `gabrielthier.com`).

#### Passo 1: Compre um domínio

**Registradores recomendados:**
- **Registro.br** (Brasil): https://registro.br/ - R$ 40/ano
- **Namecheap**: https://www.namecheap.com/ - $8-12/ano
- **Google Domains**: https://domains.google/ - $12/ano
- **GoDaddy**: https://www.godaddy.com/ - Varia

**Como comprar:**
1. Acesse um dos sites acima
2. Pesquise o domínio desejado (ex: `gabrielthier.com`)
3. Adicione ao carrinho
4. Preencha seus dados
5. Pague com cartão de crédito

#### Passo 2: Configure o domínio

**Se você usou Vercel:**

1. No Vercel, vá em seu projeto
2. Clique em "Settings" > "Domains"
3. Digite seu domínio e clique "Add"
4. Vercel mostrará os registros DNS necessários

5. No seu registrador de domínio:
   - Vá em "DNS Settings" ou "Gerenciar DNS"
   - Adicione um registro **A**:
     - **Type**: A
     - **Name**: @
     - **Value**: `76.76.21.21` (IP do Vercel)
   
   - Adicione um registro **CNAME**:
     - **Type**: CNAME
     - **Name**: www
     - **Value**: `cname.vercel-dns.com`

6. Aguarde 24-48 horas para propagação

**Se você usou Netlify:**

1. No Netlify, vá em "Domain settings"
2. Clique em "Add custom domain"
3. Digite seu domínio
4. Netlify mostrará os registros DNS

5. No seu registrador:
   - Adicione um registro **A**:
     - **Type**: A
     - **Name**: @
     - **Value**: `75.2.60.5` (IP do Netlify)
   
   - Adicione um registro **CNAME**:
     - **Type**: CNAME
     - **Name**: www
     - **Value**: `SEU_SITE.netlify.app`

### Hospedagem Tradicional (cPanel/FTP)

Se você preferir hospedagem tradicional como HostGator, Hostinger, etc:

#### Passo 1: Compile o projeto

No Terminal/Prompt, na pasta do projeto:
```bash
pnpm build
```

Isso criará uma pasta `client/dist` com os arquivos finais.

#### Passo 2: Faça upload via FTP

1. **Obtenha credenciais FTP** do seu provedor de hospedagem

2. **Baixe um cliente FTP**:
   - **FileZilla** (gratuito): https://filezilla-project.org/
   - Ou use o gerenciador de arquivos do cPanel

3. **Conecte ao servidor**:
   - Host: `ftp.seudominio.com`
   - Usuário: (fornecido pela hospedagem)
   - Senha: (fornecida pela hospedagem)
   - Porta: 21

4. **Faça upload**:
   - Navegue até a pasta `public_html` ou `www` no servidor
   - Arraste todos os arquivos de `client/dist` para lá
   - Aguarde o upload terminar

5. **Acesse seu domínio**:
   - `https://seudominio.com`

---

## 🔧 Solução de Problemas Comuns

### Erro: "command not found: pnpm"

**Solução:**
```bash
npm install -g pnpm
```

### Erro: "port 3000 is already in use"

**Solução:**
Outra aplicação está usando a porta 3000.

**Windows:**
```bash
netstat -ano | findstr :3000
taskkill /PID [número_do_processo] /F
```

**Mac/Linux:**
```bash
lsof -ti:3000 | xargs kill -9
```

Ou simplesmente reinicie o computador.

### Imagens não aparecem

**Verificações:**
1. As imagens estão na pasta `client/public/`?
2. O caminho começa com `/`? (ex: `/imagem.jpg`)
3. O nome do arquivo está correto? (maiúsculas/minúsculas importam!)

### Alterações não aparecem

**Soluções:**
1. Salve o arquivo (Ctrl+S / Cmd+S)
2. Limpe o cache do navegador (Ctrl+Shift+R / Cmd+Shift+R)
3. Pare o servidor (Ctrl+C) e inicie novamente (`pnpm dev`)

### Build falha

**Verificações:**
1. Você executou `pnpm install`?
2. Há erros de sintaxe no código?
3. Todos os arquivos estão salvos?

**Solução geral:**
```bash
rm -rf node_modules
pnpm install
pnpm build
```

---

## 📞 Recursos Adicionais

### Documentação

- **Markdown Guide**: https://www.markdownguide.org/
- **Vercel Docs**: https://vercel.com/docs
- **Netlify Docs**: https://docs.netlify.com/
- **Git Tutorial**: https://git-scm.com/book/pt-br/v2

### Vídeos Tutoriais (YouTube)

Pesquise por:
- "Como usar Git e GitHub"
- "Deploy no Vercel tutorial"
- "Como comprar domínio"
- "Markdown tutorial português"

### Editores de Código Recomendados

- **Visual Studio Code** (gratuito): https://code.visualstudio.com/
  - Melhor opção para iniciantes
  - Muitas extensões úteis
  - Disponível para Windows, Mac e Linux

---

## ✅ Checklist Final

Antes de publicar, verifique:

- [ ] Substituí todos os textos placeholder pelos meus conteúdos
- [ ] Adicionei minhas imagens na pasta `client/public/`
- [ ] Atualizei os 3 cases com meus projetos reais
- [ ] Coloquei minha foto na seção "About Me"
- [ ] Adicionei meu currículo como `client/public/resume.pdf`
- [ ] Testei o formulário de contato (abre o email corretamente?)
- [ ] Testei em mobile (responsivo?)
- [ ] Testei o modo escuro
- [ ] Todos os links funcionam
- [ ] Não há erros no console do navegador (F12)

---

## 🎉 Parabéns!

Você agora tem todas as ferramentas necessárias para gerenciar e publicar seu portfolio profissional!

Se tiver dúvidas, consulte este manual ou pesquise no Google/YouTube pelos termos específicos.

**Boa sorte com seu portfolio! 🚀**
