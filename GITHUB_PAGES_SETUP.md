# Configuração para GitHub Pages

Este guia explica como publicar seu portfolio no GitHub Pages de forma simples e gratuita.

## 📋 Pré-requisitos

- Conta no GitHub (gratuita): https://github.com/signup
- Git instalado no seu computador
- Projeto baixado e funcionando localmente

---

## 🚀 Método 1: Deploy Automático (Recomendado)

O projeto já vem configurado com GitHub Actions que faz o deploy automaticamente sempre que você fizer um push!

### Passo 1: Crie um repositório no GitHub

1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `designer-portfolio` (ou o nome que preferir)
   - **Description**: "Meu portfolio profissional"
   - Deixe como **Public**
   - **NÃO** marque "Initialize this repository with a README"
3. Clique em "Create repository"

### Passo 2: Envie seu código para o GitHub

Abra o Terminal/Prompt na pasta do projeto e execute:

```bash
# Inicialize o Git (se ainda não fez)
git init

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Primeiro commit do meu portfolio"

# Conecte ao repositório do GitHub (substitua SEU_USUARIO pelo seu nome de usuário)
git remote add origin https://github.com/SEU_USUARIO/designer-portfolio.git

# Renomeie a branch para main
git branch -M main

# Envie o código
git push -u origin main
```

**Nota**: Se pedir usuário e senha, use seu username do GitHub e um Personal Access Token (não a senha). Crie um token em: https://github.com/settings/tokens

### Passo 3: Configure o GitHub Pages

1. No seu repositório no GitHub, clique em **Settings** (Configurações)
2. No menu lateral, clique em **Pages**
3. Em **Source** (Origem), selecione **Deploy from a branch**
4. Em **Branch**, selecione **main** e a pasta **/docs**
5. Clique em **Save**
6. Pronto! Aguarde 2-3 minutos para o deploy

### Passo 4: Faça o Build Localmente

Antes de fazer push, você precisa gerar os arquivos de produção:

```bash
pnpm build:docs
```

Isso criará a pasta `/docs` com todos os arquivos necessários.

### Passo 5: Adicione a pasta docs ao Git

```bash
git add docs/
git commit -m "Add build files for GitHub Pages"
git push
```

### Passo 6: Acesse seu site

Seu portfolio estará disponível em:

```
https://SEU_USUARIO.github.io/designer-portfolio/
```

**Exemplo**: Se seu usuário é `gabrielthier`, o link será:
```
https://gabrielthier.github.io/designer-portfolio/
```

---

## 🔄 Atualizando o Site

Sempre que você fizer alterações e quiser publicar:

```bash
# Adicione as alterações
git add .

# Faça um commit descrevendo o que mudou
git commit -m "Atualizei o case study 1"

# Envie para o GitHub
git push
```

O GitHub Actions vai automaticamente fazer o deploy das novas alterações!

---

## ⚙️ Configuração Avançada

### Se você renomeou o repositório

Se você usou um nome diferente de `designer-portfolio`, precisa atualizar dois arquivos:

**1. Edite `package.json`:**

Encontre a linha:
```json
"build:gh-pages": "vite build --base=/designer-portfolio/",
```

Mude para:
```json
"build:gh-pages": "vite build --base=/SEU_NOME_DO_REPOSITORIO/",
```

**2. Edite `.github/workflows/deploy.yml`:**

Não precisa mudar nada! Ele já está configurado corretamente.

### Usando domínio customizado

Se você tem um domínio próprio (ex: `gabrielthier.com`):

1. No GitHub, vá em **Settings** > **Pages**
2. Em **Custom domain**, digite seu domínio
3. Clique em **Save**
4. No seu registrador de domínio, adicione um registro CNAME:
   - **Type**: CNAME
   - **Name**: www (ou @)
   - **Value**: `SEU_USUARIO.github.io`

Aguarde 24-48 horas para propagação do DNS.

---

## 🛠️ Método 2: Deploy Manual

Se preferir fazer deploy manual sem GitHub Actions:

### Passo 1: Instale o pacote gh-pages

```bash
pnpm add -D gh-pages
```

### Passo 2: Adicione script de deploy

Edite `package.json` e adicione:

```json
"scripts": {
  "deploy": "pnpm build:gh-pages && gh-pages -d dist/public"
}
```

### Passo 3: Faça o deploy

```bash
pnpm deploy
```

### Passo 4: Configure o GitHub Pages

1. No GitHub, vá em **Settings** > **Pages**
2. Em **Source**, selecione **Deploy from a branch**
3. Selecione a branch **gh-pages**
4. Clique em **Save**

---

## ❓ Solução de Problemas

### Erro: "Failed to deploy"

**Causa**: Permissões do GitHub Actions

**Solução**:
1. Vá em **Settings** > **Actions** > **General**
2. Em **Workflow permissions**, selecione "Read and write permissions"
3. Clique em **Save**
4. Faça um novo push para tentar novamente

### Página mostra 404

**Causa**: O base path está incorreto

**Solução**:
1. Verifique se o nome do repositório em `package.json` está correto
2. Verifique se você selecionou "GitHub Actions" em Settings > Pages

### CSS/JS não carrega

**Causa**: Caminhos relativos incorretos

**Solução**:
O projeto já está configurado corretamente com `--base` no build. Se ainda tiver problemas:

1. Verifique se usou o comando `pnpm build:gh-pages`
2. Certifique-se de que o nome do repositório está correto no `package.json`

### Deploy demora muito

**Normal**: O primeiro deploy pode levar 5-10 minutos. Deploys seguintes são mais rápidos (2-3 minutos).

---

## 📚 Recursos Adicionais

- **Documentação oficial do GitHub Pages**: https://docs.github.com/pt/pages
- **GitHub Actions**: https://docs.github.com/pt/actions
- **Vídeo tutorial Git/GitHub**: Pesquise "git github tutorial português" no YouTube

---

## ✅ Checklist

Antes de fazer o primeiro deploy:

- [ ] Criei conta no GitHub
- [ ] Instalei o Git no meu computador
- [ ] Criei o repositório no GitHub
- [ ] Fiz push do código
- [ ] Configurei GitHub Pages para usar "GitHub Actions"
- [ ] Aguardei o workflow terminar
- [ ] Testei o link do site

---

**Pronto! Seu portfolio está no ar gratuitamente! 🎉**
