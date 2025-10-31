# Configuração do Formulário de Contato

O formulário de contato do seu portfolio usa o **FormSubmit**, um serviço gratuito que envia os dados do formulário diretamente para o seu e-mail sem necessidade de backend.

## 🎯 Como Funciona

Quando um visitante preenche e envia o formulário:
1. Os dados são enviados para o FormSubmit
2. O FormSubmit encaminha os dados para o seu e-mail
3. O visitante é redirecionado de volta ao site com uma mensagem de sucesso

## 📧 Ativação do E-mail (Primeira Vez)

**IMPORTANTE**: Na primeira vez que alguém enviar uma mensagem, você precisará confirmar seu e-mail.

### Passo a Passo:

1. **Primeiro envio**: Quando alguém enviar a primeira mensagem pelo formulário, o FormSubmit enviará um e-mail de confirmação para `gabriel.thier@gmail.com`

2. **Verifique sua caixa de entrada**: Procure por um e-mail do FormSubmit com assunto similar a:
   ```
   FormSubmit - Activate your form
   ```

3. **Clique no link de ativação**: Abra o e-mail e clique no botão/link de ativação

4. **Pronto!**: Após a ativação, todas as mensagens futuras serão enviadas automaticamente para o seu e-mail

**Nota**: Você só precisa fazer isso UMA VEZ. Depois da ativação, o formulário funcionará automaticamente para sempre.

## 📬 Como Você Receberá as Mensagens

Após a ativação, você receberá um e-mail para cada mensagem enviada pelo formulário, contendo:

- **Assunto**: "New Portfolio Contact Message"
- **Remetente**: FormSubmit (noreply@formsubmit.co)
- **Conteúdo**: Uma tabela formatada com:
  - Nome do visitante
  - E-mail do visitante
  - Mensagem completa

**Exemplo de e-mail recebido:**
```
From: FormSubmit <noreply@formsubmit.co>
Subject: New Portfolio Contact Message

Name: João Silva
Email: joao@exemplo.com
Message: Olá! Gostaria de conversar sobre um projeto...
```

## ⚙️ Configurações Atuais

O formulário está configurado com:

- **E-mail de destino**: `gabriel.thier@gmail.com`
- **Assunto do e-mail**: "New Portfolio Contact Message"
- **Captcha**: Desativado (para melhor experiência do usuário)
- **Formato**: Tabela (mais fácil de ler)
- **Redirecionamento**: Volta para a homepage com mensagem de sucesso

## 🔧 Como Alterar o E-mail de Destino

Se você quiser mudar o e-mail que recebe as mensagens:

1. Abra o arquivo: `client/src/pages/Home.tsx`

2. Encontre a linha (aproximadamente linha 136):
```tsx
action="https://formsubmit.co/gabriel.thier@gmail.com"
```

3. Substitua `gabriel.thier@gmail.com` pelo novo e-mail:
```tsx
action="https://formsubmit.co/seu-novo-email@exemplo.com"
```

4. Salve o arquivo

5. **IMPORTANTE**: Você precisará ativar o novo e-mail seguindo o processo de ativação novamente

## 🎨 Personalizações Disponíveis

Você pode personalizar o formulário editando os campos hidden no arquivo `Home.tsx`:

### Mudar o assunto do e-mail:
```tsx
<input type="hidden" name="_subject" value="Seu Novo Assunto Aqui" />
```

### Ativar Captcha (proteção anti-spam):
```tsx
<input type="hidden" name="_captcha" value="true" />
```

### Mudar página de redirecionamento:
```tsx
<input type="hidden" name="_next" value="https://seusite.com/obrigado" />
```

### Adicionar CC (cópia do e-mail):
```tsx
<input type="hidden" name="_cc" value="outro-email@exemplo.com" />
```

## 🚫 Proteção Anti-Spam

O FormSubmit já inclui proteção básica contra spam. Se você começar a receber spam:

1. **Ative o Captcha**: Mude `_captcha` para `true`
2. **Use Honeypot**: Adicione um campo invisível:
```tsx
<input type="text" name="_honey" style={{display: 'none'}} />
```

## 📊 Limitações do Plano Gratuito

O FormSubmit gratuito tem:
- ✅ **Envios ilimitados**
- ✅ **Sem limite de formulários**
- ✅ **Sem branding obrigatório**
- ✅ **SSL/HTTPS incluído**
- ❌ Não tem painel de administração
- ❌ Não armazena histórico de envios

**Dica**: Se você precisar de histórico, considere usar o Gmail com filtros para organizar automaticamente as mensagens do formulário em uma pasta específica.

## 🔍 Testando o Formulário

### Teste Local:

1. Rode o projeto: `pnpm dev`
2. Acesse: `http://localhost:3000`
3. Role até a seção "Get In Touch"
4. Preencha o formulário com dados de teste
5. Clique em "Send Message"
6. Você será redirecionado e verá uma mensagem de sucesso
7. Verifique seu e-mail (pode levar 1-2 minutos)

### Teste em Produção:

Após publicar o site, faça o mesmo teste usando o URL público.

## ❓ Solução de Problemas

### Não recebi o e-mail de ativação

**Soluções**:
1. Verifique a pasta de spam/lixo eletrônico
2. Aguarde até 10 minutos (pode haver atraso)
3. Tente enviar o formulário novamente
4. Verifique se o e-mail no código está correto

### Não estou recebendo as mensagens

**Verificações**:
1. Você ativou o e-mail? (Clicou no link de ativação?)
2. Verifique a pasta de spam
3. Adicione `noreply@formsubmit.co` aos contatos confiáveis
4. Teste enviando uma mensagem você mesmo

### O formulário não envia

**Verificações**:
1. Todos os campos estão preenchidos?
2. O e-mail está em formato válido?
3. Há conexão com a internet?
4. Abra o Console do navegador (F12) e veja se há erros

### Mensagem de sucesso não aparece

**Solução**:
O redirecionamento pode estar falhando. Verifique se a URL em `_next` está correta:
```tsx
<input type="hidden" name="_next" value={window.location.href + "?success=true"} />
```

## 🔄 Alternativas ao FormSubmit

Se você quiser experimentar outros serviços:

### Formspree (Gratuito até 50 envios/mês)
```tsx
action="https://formspree.io/f/SEU_FORM_ID"
```

### Web3Forms (Gratuito até 250 envios/mês)
```tsx
action="https://api.web3forms.com/submit"
// Requer access_key
```

### EmailJS (Gratuito até 200 envios/mês)
Requer JavaScript e configuração mais complexa.

## 📞 Suporte

- **Documentação FormSubmit**: https://formsubmit.co/
- **FAQ FormSubmit**: https://formsubmit.co/#faq
- **Status do Serviço**: https://status.formsubmit.co/

## ✅ Checklist de Configuração

Antes de publicar:

- [ ] Verifiquei que o e-mail no código está correto
- [ ] Testei o formulário localmente
- [ ] Enviei uma mensagem de teste
- [ ] Recebi e cliquei no e-mail de ativação do FormSubmit
- [ ] Recebi a mensagem de teste no meu e-mail
- [ ] Adicionei `noreply@formsubmit.co` aos contatos confiáveis
- [ ] Testei em produção após publicar

---

**Pronto! Seu formulário de contato está configurado e funcionando! 📧**
