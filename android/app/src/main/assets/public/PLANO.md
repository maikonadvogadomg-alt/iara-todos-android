# PLANO DO PROJETO: HTML/CSS/JS

> Gerado automaticamente pelo SK Code Editor em 20/05/2026, 04:00:10
> **191 arquivo(s)** | **~40.691 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React, TypeScript
- **Versao:** 2.0.0
- **Descricao:** Iara Suite — Code Editor, Terminal Linux, APK Builder, Site Extractor

**Para rodar o projeto:**
```bash
# Abra index.html no Preview (botao Play)
```

---

## ESTRUTURA DE ARQUIVOS

```
HTML/CSS/JS/
├── .github/
│   └── workflows/
│       └── build-apk.yml
├── android/
│   ├── app/
│   │   ├── src/
│   │   │   └── main/
│   │   │       ├── java/
│   │   │       │   └── br/
│   │   │       │       └── adv/
│   │   │       │           └── maikoncaldeira/
│   │   │       │               └── iarasuite/
│   │   │       │                   └── MainActivity.java
│   │   │       ├── res/
│   │   │       │   └── values/
│   │   │       │       ├── colors.xml
│   │   │       │       ├── strings.xml
│   │   │       │       └── styles.xml
│   │   │       └── AndroidManifest.xml
│   │   ├── build.gradle
│   │   └── proguard-rules.pro
│   ├── gradle/
│   │   └── wrapper/
│   │       └── gradle-wrapper.properties
│   ├── build.gradle
│   ├── gradle.properties
│   └── settings.gradle
├── iara-suite (2)/
│   ├── index.html
│   ├── iniciar.bat
│   ├── iniciar.sh
│   └── LEIA-ME.txt
├── MANUAL-IARA-SUITE (1)/
│   └── MANUAL-IARA-SUITE.html
├── site-extractor/
│   ├── .replit-artifact/
│   │   └── artifact.toml
│   ├── public/
│   │   ├── favicon.svg
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   └── ui/
│   │   │       ├── accordion.tsx
│   │   │       ├── alert-dialog.tsx
│   │   │       ├── alert.tsx
│   │   │       ├── aspect-ratio.tsx
│   │   │       ├── avatar.tsx
│   │   │       ├── badge.tsx
│   │   │       ├── breadcrumb.tsx
│   │   │       ├── button-group.tsx
│   │   │       ├── button.tsx
│   │   │       ├── calendar.tsx
│   │   │       ├── card.tsx
│   │   │       ├── carousel.tsx
│   │   │       ├── chart.tsx
│   │   │       ├── checkbox.tsx
│   │   │       ├── collapsible.tsx
│   │   │       ├── command.tsx
│   │   │       ├── context-menu.tsx
│   │   │       ├── dialog.tsx
│   │   │       ├── drawer.tsx
│   │   │       ├── dropdown-menu.tsx
│   │   │       ├── empty.tsx
│   │   │       ├── field.tsx
│   │   │       ├── form.tsx
│   │   │       ├── hover-card.tsx
│   │   │       ├── input-group.tsx
│   │   │       ├── input-otp.tsx
│   │   │       ├── input.tsx
│   │   │       ├── item.tsx
│   │   │       ├── kbd.tsx
│   │   │       ├── label.tsx
│   │   │       ├── menubar.tsx
│   │   │       ├── navigation-menu.tsx
│   │   │       ├── pagination.tsx
│   │   │       ├── popover.tsx
│   │   │       ├── progress.tsx
│   │   │       ├── radio-group.tsx
│   │   │       ├── resizable.tsx
│   │   │       ├── scroll-area.tsx
│   │   │       ├── select.tsx
│   │   │       ├── separator.tsx
│   │   │       ├── sheet.tsx
│   │   │       ├── sidebar.tsx
│   │   │       ├── skeleton.tsx
│   │   │       ├── slider.tsx
│   │   │       ├── sonner.tsx
│   │   │       ├── spinner.tsx
│   │   │       ├── switch.tsx
│   │   │       ├── table.tsx
│   │   │       ├── tabs.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toast.tsx
│   │   │       ├── toaster.tsx
│   │   │       ├── toggle-group.tsx
│   │   │       ├── toggle.tsx
│   │   │       └── tooltip.tsx
│   │   ├── hooks/
│   │   │   ├── use-local-storage.ts
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── not-found.tsx
│   │   │   └── Result.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── components.json
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── SK-Juridico/
│   ├── public/
│   │   ├── auditoria.html
│   │   ├── codigo-formatacao.txt
│   │   ├── comparador.html
│   │   ├── manifest.json
│   │   └── sw.js
│   ├── replit_integrations/
│   │   └── audio/
│   │       ├── audio-playback-worklet.js
│   │       ├── audio-utils.ts
│   │       ├── index.ts
│   │       ├── useAudioPlayback.ts
│   │       ├── useVoiceRecorder.ts
│   │       └── useVoiceStream.ts
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   ├── accordion.tsx
│   │   │   │   ├── alert-dialog.tsx
│   │   │   │   ├── alert.tsx
│   │   │   │   ├── aspect-ratio.tsx
│   │   │   │   ├── avatar.tsx
│   │   │   │   ├── badge.tsx
│   │   │   │   ├── breadcrumb.tsx
│   │   │   │   ├── button.tsx
│   │   │   │   ├── calendar.tsx
│   │   │   │   ├── card.tsx
│   │   │   │   ├── carousel.tsx
│   │   │   │   ├── chart.tsx
│   │   │   │   ├── checkbox.tsx
│   │   │   │   ├── collapsible.tsx
│   │   │   │   ├── command.tsx
│   │   │   │   ├── context-menu.tsx
│   │   │   │   ├── dialog.tsx
│   │   │   │   ├── drawer.tsx
│   │   │   │   ├── dropdown-menu.tsx
│   │   │   │   ├── form.tsx
│   │   │   │   ├── hover-card.tsx
│   │   │   │   ├── input-otp.tsx
│   │   │   │   ├── input.tsx
│   │   │   │   ├── label.tsx
│   │   │   │   ├── menubar.tsx
│   │   │   │   ├── navigation-menu.tsx
│   │   │   │   ├── pagination.tsx
│   │   │   │   ├── popover.tsx
│   │   │   │   ├── progress.tsx
│   │   │   │   ├── radio-group.tsx
│   │   │   │   ├── resizable.tsx
│   │   │   │   ├── scroll-area.tsx
│   │   │   │   ├── select.tsx
│   │   │   │   ├── separator.tsx
│   │   │   │   ├── sheet.tsx
│   │   │   │   ├── sidebar.tsx
│   │   │   │   ├── skeleton.tsx
│   │   │   │   ├── slider.tsx
│   │   │   │   ├── switch.tsx
│   │   │   │   ├── table.tsx
│   │   │   │   ├── tabs.tsx
│   │   │   │   ├── textarea.tsx
│   │   │   │   ├── toast.tsx
│   │   │   │   ├── toaster.tsx
│   │   │   │   ├── toggle-group.tsx
│   │   │   │   ├── toggle.tsx
│   │   │   │   └── tooltip.tsx
│   │   │   ├── pwa-install.tsx
│   │   │   ├── settings-panel.tsx
│   │   │   ├── theme-provider.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── tiptap-editor.tsx
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   ├── ai-service.ts
│   │   │   ├── queryClient.ts
│   │   │   ├── settings.ts
│   │   │   └── utils.ts
│   │   ├── pages/
│   │   │   ├── auditoria-financeira.tsx
│   │   │   ├── campo-livre.tsx
│   │   │   ├── code-assistant.tsx
│   │   │   ├── comparador-juridico.tsx
│   │   │   ├── comunicacoes-cnj.tsx
│   │   │   ├── consulta-corporativo.tsx
│   │   │   ├── consulta-pdpj.tsx
│   │   │   ├── consulta-processual.tsx
│   │   │   ├── filtrador.tsx
│   │   │   ├── jurisprudencia.tsx
│   │   │   ├── legal-assistant.tsx
│   │   │   ├── legal-assistant.tsx.recovered
│   │   │   ├── login.tsx
│   │   │   ├── not-found.tsx
│   │   │   ├── painel-processos.tsx
│   │   │   ├── playground.tsx
│   │   │   ├── previdenciario.tsx
│   │   │   ├── robo-djen.tsx
│   │   │   ├── token-generator.tsx
│   │   │   └── tramitacao.tsx
│   │   ├── App.tsx
│   │   ├── index.css
│   │   └── main.tsx
│   ├── capacitor.config.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   ├── vite.config.apk.ts
│   └── vite.config.ts
├── capacitor.config.js
├── COMPILAR-APK.md
└── package.json
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React, TypeScript
- **Todos os pacotes (3):** @capacitor/android, @capacitor/core, @capacitor/cli

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run copy          # npx cap copy android
npm run open          # npx cap open android
npm run build         # cd android && ./gradlew assembleDebug --no-daemon
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
PORT=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `SK-Juridico/index.html` — Arquivo principal
- `SK-Juridico/replit_integrations/audio/index.ts` — Arquivo principal
- `SK-Juridico/src/App.tsx` — Componente raiz do frontend
- `SK-Juridico/src/main.tsx` — Arquivo principal
- `iara-suite (2)/index.html` — Arquivo principal
- `site-extractor/index.html` — Arquivo principal
- `site-extractor/src/App.tsx` — Componente raiz do frontend
- `site-extractor/src/main.tsx` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`COMPILAR-APK.md`** _(99 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`capacitor.config.js`** _(24 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`package.json`** _(19 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

---

### 📁 `android/`
> Pasta 'android' — agrupamento de arquivos relacionados.

**`build.gradle`** _(21 linhas)_
Arquivo GRADLE — parte do projeto.

**`gradle.properties`** _(5 linhas)_
Arquivo PROPERTIES — parte do projeto.

**`settings.gradle`** _(3 linhas)_
Arquivo GRADLE — parte do projeto.

---

### 📁 `iara-suite (2)/`
> Pasta 'iara-suite (2)' — agrupamento de arquivos relacionados.

**`LEIA-ME.txt`** _(109 linhas)_
Arquivo TXT — parte do projeto.

**`index.html`** _(1574 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`iniciar.bat`** _(33 linhas)_
Arquivo BAT — parte do projeto.

**`iniciar.sh`** _(40 linhas)_
Arquivo SH — parte do projeto.

---

### 📁 `MANUAL-IARA-SUITE (1)/`
> Pasta 'MANUAL-IARA-SUITE (1)' — agrupamento de arquivos relacionados.

**`MANUAL-IARA-SUITE.html`** _(528 linhas)_
Arquivo HTML — parte do projeto.

---

### 📁 `site-extractor/`
> Pasta 'site-extractor' — agrupamento de arquivos relacionados.

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(25 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(81 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(23 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(76 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `SK-Juridico/`
> Pasta 'SK-Juridico' — agrupamento de arquivos relacionados.

**`capacitor.config.ts`** _(13 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`index.html`** _(33 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(90 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`tsconfig.json`** _(22 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.apk.ts`** _(21 linhas)_
Arquivo de CONSTANTES/CONFIGURACAO — valores fixos usados em varios lugares do projeto.

**`vite.config.ts`** _(34 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `.github/workflows/`
> Pasta 'workflows' — agrupamento de arquivos relacionados.

**`build-apk.yml`** _(99 linhas)_
Arquivo YML — parte do projeto.

---

### 📁 `android/app/`
> Pasta 'app' — agrupamento de arquivos relacionados.

**`build.gradle`** _(55 linhas)_
Arquivo GRADLE — parte do projeto.

**`proguard-rules.pro`** _(4 linhas)_
Arquivo PRO — parte do projeto.

---

### 📁 `site-extractor/.replit-artifact/`
> Pasta '.replit-artifact' — agrupamento de arquivos relacionados.

**`artifact.toml`** _(32 linhas)_
Arquivo TOML — parte do projeto.

---

### 📁 `site-extractor/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`favicon.svg`** _(4 linhas)_
Imagem vetorial (icone ou ilustracao que nao perde qualidade ao ampliar).

**`robots.txt`** _(3 linhas)_
Arquivo TXT — parte do projeto.

---

### 📁 `site-extractor/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(35 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(142 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `SK-Juridico/public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`auditoria.html`** _(259 linhas)_
Arquivo HTML — parte do projeto.

**`codigo-formatacao.txt`** _(123 linhas)_
Arquivo TXT — parte do projeto.

**`comparador.html`** _(494 linhas)_
Arquivo HTML — parte do projeto.

**`manifest.json`** _(28 linhas)_
Manifesto do PWA — define nome, icone e configuracoes para instalar o app no celular.

**`sw.js`** _(56 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `SK-Juridico/src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(124 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(108 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(23 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `android/gradle/wrapper/`
> Pasta 'wrapper' — agrupamento de arquivos relacionados.

**`gradle-wrapper.properties`** _(8 linhas)_
Arquivo PROPERTIES — parte do projeto.

---

### 📁 `site-extractor/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-local-storage.ts`** _(32 linhas)_
HOOK de armazenamento local — salva e recupera dados do localStorage do browser.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `site-extractor/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `site-extractor/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`Home.tsx`** _(152 linhas)_
Componente HOME — pagina/tela inicial do app.

**`Result.tsx`** _(561 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`not-found.tsx`** _(22 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SK-Juridico/replit_integrations/audio/`
> Pasta 'audio' — agrupamento de arquivos relacionados.

**`audio-playback-worklet.js`** _(113 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`audio-utils.ts`** _(37 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`index.ts`** _(46 linhas)_
Arquivo INDEX — ponto de entrada da pasta, exporta tudo que esta dentro.

**`useAudioPlayback.ts`** _(106 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'audioplayback'.

**`useVoiceRecorder.ts`** _(53 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicerecorder'.

**`useVoiceStream.ts`** _(92 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de 'voicestream'.

---

### 📁 `SK-Juridico/src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`pwa-install.tsx`** _(86 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`settings-panel.tsx`** _(180 linhas)_
Componente de CONFIGURACOES — tela onde o usuario ajusta preferencias do app.

**`theme-provider.tsx`** _(47 linhas)_
Componente PROVIDER — 'fornece' dados/funcoes para todos os componentes filhos via Context API do React.

**`theme-toggle.tsx`** _(19 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tiptap-editor.tsx`** _(542 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

---

### 📁 `SK-Juridico/src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `SK-Juridico/src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(55 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`queryClient.ts`** _(71 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`settings.ts`** _(30 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

---

### 📁 `SK-Juridico/src/pages/`
> Telas completas do app — cada arquivo aqui e uma pagina navegavel.

**`auditoria-financeira.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`campo-livre.tsx`** _(165 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`code-assistant.tsx`** _(749 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comparador-juridico.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`comunicacoes-cnj.tsx`** _(403 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-corporativo.tsx`** _(479 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-pdpj.tsx`** _(1108 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`consulta-processual.tsx`** _(656 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`filtrador.tsx`** _(732 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`jurisprudencia.tsx`** _(3860 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx`** _(5404 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`legal-assistant.tsx.recovered`** _(3763 linhas)_
Arquivo RECOVERED — parte do projeto.

**`login.tsx`** _(100 linhas)_
Componente de LOGIN/AUTENTICACAO — tela de entrada com usuario e senha.

**`not-found.tsx`** _(17 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`painel-processos.tsx`** _(758 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`playground.tsx`** _(1473 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`previdenciario.tsx`** _(770 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`robo-djen.tsx`** _(1052 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`token-generator.tsx`** _(450 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tramitacao.tsx`** _(829 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `android/app/src/main/`
> Pasta 'main' — agrupamento de arquivos relacionados.

**`AndroidManifest.xml`** _(39 linhas)_
Arquivo XML — parte do projeto.

---

### 📁 `site-extractor/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `SK-Juridico/src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(57 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(52 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(39 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button.tsx`** _(63 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(69 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(86 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(366 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(152 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(123 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(119 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(199 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`form.tsx`** _(179 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(30 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(24 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`label.tsx`** _(25 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(257 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(161 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(118 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(31 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `android/app/src/main/res/values/`
> Pasta 'values' — agrupamento de arquivos relacionados.

**`colors.xml`** _(7 linhas)_
Arquivo XML — parte do projeto.

**`strings.xml`** _(7 linhas)_
Arquivo XML — parte do projeto.

**`styles.xml`** _(15 linhas)_
Arquivo XML — parte do projeto.

---

### 📁 `android/app/src/main/java/br/adv/maikoncaldeira/iarasuite/`
> Pasta 'iarasuite' — agrupamento de arquivos relacionados.

**`MainActivity.java`** _(6 linhas)_
Arquivo JAVA — parte do projeto.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: HTML/CSS/JS
Tipo: Aplicacao Web Frontend (React)
Stack: React, TypeScript
Arquivos: 191 | Linhas: ~40.691
Variaveis de ambiente necessarias: PORT, BASE_PATH, REPL_ID

Estrutura principal:
  .github/workflows/build-apk.yml
  COMPILAR-APK.md
  MANUAL-IARA-SUITE (1)/MANUAL-IARA-SUITE.html
  SK-Juridico/capacitor.config.ts
  SK-Juridico/index.html
  SK-Juridico/package.json
  SK-Juridico/public/auditoria.html
  SK-Juridico/public/codigo-formatacao.txt
  SK-Juridico/public/comparador.html
  SK-Juridico/public/manifest.json
  SK-Juridico/public/sw.js
  SK-Juridico/replit_integrations/audio/audio-playback-worklet.js
  SK-Juridico/replit_integrations/audio/audio-utils.ts
  SK-Juridico/replit_integrations/audio/index.ts
  SK-Juridico/replit_integrations/audio/useAudioPlayback.ts
  SK-Juridico/replit_integrations/audio/useVoiceRecorder.ts
  SK-Juridico/replit_integrations/audio/useVoiceStream.ts
  SK-Juridico/src/App.tsx
  SK-Juridico/src/components/pwa-install.tsx
  SK-Juridico/src/components/settings-panel.tsx
  SK-Juridico/src/components/theme-provider.tsx
  SK-Juridico/src/components/theme-toggle.tsx
  SK-Juridico/src/components/tiptap-editor.tsx
  SK-Juridico/src/components/ui/accordion.tsx
  SK-Juridico/src/components/ui/alert-dialog.tsx
  SK-Juridico/src/components/ui/alert.tsx
  SK-Juridico/src/components/ui/aspect-ratio.tsx
  SK-Juridico/src/components/ui/avatar.tsx
  SK-Juridico/src/components/ui/badge.tsx
  SK-Juridico/src/components/ui/breadcrumb.tsx
  SK-Juridico/src/components/ui/button.tsx
  SK-Juridico/src/components/ui/calendar.tsx
  SK-Juridico/src/components/ui/card.tsx
  SK-Juridico/src/components/ui/carousel.tsx
  SK-Juridico/src/components/ui/chart.tsx
  SK-Juridico/src/components/ui/checkbox.tsx
  SK-Juridico/src/components/ui/collapsible.tsx
  SK-Juridico/src/components/ui/command.tsx
  SK-Juridico/src/components/ui/context-menu.tsx
  SK-Juridico/src/components/ui/dialog.tsx
  SK-Juridico/src/components/ui/drawer.tsx
  SK-Juridico/src/components/ui/dropdown-menu.tsx
  SK-Juridico/src/components/ui/form.tsx
  SK-Juridico/src/components/ui/hover-card.tsx
  SK-Juridico/src/components/ui/input-otp.tsx
  SK-Juridico/src/components/ui/input.tsx
  SK-Juridico/src/components/ui/label.tsx
  SK-Juridico/src/components/ui/menubar.tsx
  SK-Juridico/src/components/ui/navigation-menu.tsx
  SK-Juridico/src/components/ui/pagination.tsx
  SK-Juridico/src/components/ui/popover.tsx
  SK-Juridico/src/components/ui/progress.tsx
  SK-Juridico/src/components/ui/radio-group.tsx
  SK-Juridico/src/components/ui/resizable.tsx
  SK-Juridico/src/components/ui/scroll-area.tsx
  SK-Juridico/src/components/ui/select.tsx
  SK-Juridico/src/components/ui/separator.tsx
  SK-Juridico/src/components/ui/sheet.tsx
  SK-Juridico/src/components/ui/sidebar.tsx
  SK-Juridico/src/components/ui/skeleton.tsx
  SK-Juridico/src/components/ui/slider.tsx
  SK-Juridico/src/components/ui/switch.tsx
  SK-Juridico/src/components/ui/table.tsx
  SK-Juridico/src/components/ui/tabs.tsx
  SK-Juridico/src/components/ui/textarea.tsx
  SK-Juridico/src/components/ui/toast.tsx
  SK-Juridico/src/components/ui/toaster.tsx
  SK-Juridico/src/components/ui/toggle-group.tsx
  SK-Juridico/src/components/ui/toggle.tsx
  SK-Juridico/src/components/ui/tooltip.tsx
  SK-Juridico/src/hooks/use-mobile.tsx
  SK-Juridico/src/hooks/use-toast.ts
  SK-Juridico/src/index.css
  SK-Juridico/src/lib/ai-service.ts
  SK-Juridico/src/lib/queryClient.ts
  SK-Juridico/src/lib/settings.ts
  SK-Juridico/src/lib/utils.ts
  SK-Juridico/src/main.tsx
  SK-Juridico/src/pages/auditoria-financeira.tsx
  SK-Juridico/src/pages/campo-livre.tsx
  SK-Juridico/src/pages/code-assistant.tsx
  SK-Juridico/src/pages/comparador-juridico.tsx
  SK-Juridico/src/pages/comunicacoes-cnj.tsx
  SK-Juridico/src/pages/consulta-corporativo.tsx
  SK-Juridico/src/pages/consulta-pdpj.tsx
  SK-Juridico/src/pages/consulta-processual.tsx
  SK-Juridico/src/pages/filtrador.tsx
  SK-Juridico/src/pages/jurisprudencia.tsx
  SK-Juridico/src/pages/legal-assistant.tsx
  SK-Juridico/src/pages/legal-assistant.tsx.recovered
  SK-Juridico/src/pages/login.tsx
  SK-Juridico/src/pages/not-found.tsx
  SK-Juridico/src/pages/painel-processos.tsx
  SK-Juridico/src/pages/playground.tsx
  SK-Juridico/src/pages/previdenciario.tsx
  SK-Juridico/src/pages/robo-djen.tsx
  SK-Juridico/src/pages/token-generator.tsx
  SK-Juridico/src/pages/tramitacao.tsx
  SK-Juridico/tsconfig.json
  SK-Juridico/vite.config.apk.ts
  SK-Juridico/vite.config.ts
  android/app/build.gradle
  android/app/proguard-rules.pro
  android/app/src/main/AndroidManifest.xml
  android/app/src/main/java/br/adv/maikoncaldeira/iarasuite/MainActivity.java
  android/app/src/main/res/values/colors.xml
  android/app/src/main/res/values/strings.xml
  android/app/src/main/res/values/styles.xml
  android/build.gradle
  android/gradle.properties
  android/gradle/wrapper/gradle-wrapper.properties
  android/settings.gradle
  capacitor.config.js
  iara-suite (2)/LEIA-ME.txt
  iara-suite (2)/index.html
  iara-suite (2)/iniciar.bat
  iara-suite (2)/iniciar.sh
  package.json
  site-extractor/.replit-artifact/artifact.toml
  site-extractor/components.json
  site-extractor/index.html
  site-extractor/package.json
  site-extractor/public/favicon.svg
  site-extractor/public/robots.txt
  site-extractor/src/App.tsx
  site-extractor/src/components/ui/accordion.tsx
  site-extractor/src/components/ui/alert-dialog.tsx
  site-extractor/src/components/ui/alert.tsx
  site-extractor/src/components/ui/aspect-ratio.tsx
  site-extractor/src/components/ui/avatar.tsx
  site-extractor/src/components/ui/badge.tsx
  site-extractor/src/components/ui/breadcrumb.tsx
  site-extractor/src/components/ui/button-group.tsx
  site-extractor/src/components/ui/button.tsx
  site-extractor/src/components/ui/calendar.tsx
  site-extractor/src/components/ui/card.tsx
  site-extractor/src/components/ui/carousel.tsx
  site-extractor/src/components/ui/chart.tsx
  site-extractor/src/components/ui/checkbox.tsx
  site-extractor/src/components/ui/collapsible.tsx
  site-extractor/src/components/ui/command.tsx
  site-extractor/src/components/ui/context-menu.tsx
  site-extractor/src/components/ui/dialog.tsx
  site-extractor/src/components/ui/drawer.tsx
  site-extractor/src/components/ui/dropdown-menu.tsx
  site-extractor/src/components/ui/empty.tsx
  site-extractor/src/components/ui/field.tsx
  site-extractor/src/components/ui/form.tsx
  site-extractor/src/components/ui/hover-card.tsx
  site-extractor/src/components/ui/input-group.tsx
  site-extractor/src/components/ui/input-otp.tsx
  site-extractor/src/components/ui/input.tsx
  site-extractor/src/components/ui/item.tsx
  site-extractor/src/components/ui/kbd.tsx
  site-extractor/src/components/ui/label.tsx
  site-extractor/src/components/ui/menubar.tsx
  site-extractor/src/components/ui/navigation-menu.tsx
  site-extractor/src/components/ui/pagination.tsx
  site-extractor/src/components/ui/popover.tsx
  site-extractor/src/components/ui/progress.tsx
  site-extractor/src/components/ui/radio-group.tsx
  site-extractor/src/components/ui/resizable.tsx
  site-extractor/src/components/ui/scroll-area.tsx
  site-extractor/src/components/ui/select.tsx
  site-extractor/src/components/ui/separator.tsx
  site-extractor/src/components/ui/sheet.tsx
  site-extractor/src/components/ui/sidebar.tsx
  site-extractor/src/components/ui/skeleton.tsx
  site-extractor/src/components/ui/slider.tsx
  site-extractor/src/components/ui/sonner.tsx
  site-extractor/src/components/ui/spinner.tsx
  site-extractor/src/components/ui/switch.tsx
  site-extractor/src/components/ui/table.tsx
  site-extractor/src/components/ui/tabs.tsx
  site-extractor/src/components/ui/textarea.tsx
  site-extractor/src/components/ui/toast.tsx
  site-extractor/src/components/ui/toaster.tsx
  site-extractor/src/components/ui/toggle-group.tsx
  site-extractor/src/components/ui/toggle.tsx
  site-extractor/src/components/ui/tooltip.tsx
  site-extractor/src/hooks/use-local-storage.ts
  site-extractor/src/hooks/use-mobile.tsx
  site-extractor/src/hooks/use-toast.ts
  site-extractor/src/index.css
  site-extractor/src/lib/utils.ts
  site-extractor/src/main.tsx
  site-extractor/src/pages/Home.tsx
  site-extractor/src/pages/Result.tsx
  site-extractor/src/pages/not-found.tsx
  site-extractor/tsconfig.json
  site-extractor/vite.config.ts
```

---

*Plano gerado pelo SK Code Editor — 20/05/2026, 04:00:10*