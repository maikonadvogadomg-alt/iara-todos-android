# Iara Suite v2.0 — Compilar APK

**Advogado Maikon Caldeira — OAB/MG 183712**

---

## Opção A — GitHub Actions (recomendado, sem instalar nada)

1. Certifique que a pasta `dist/` está presente com o `index.html` do Iara Suite
2. Crie um repositório no GitHub (pode ser público, grátis)
3. Faça o push do código:
   ```bash
   git init
   git add .
   git commit -m "Iara Suite v2.0"
   git remote add origin https://github.com/SEU-USUARIO/iara-suite.git
   git branch -M main
   git push -u origin main
   ```
4. O GitHub Actions inicia automaticamente
5. Aguarde ~10-15 minutos
6. Baixe o APK em: **GitHub → Releases → latest-apk → iara-suite-v2.apk**

---

## Opção B — Android Studio (local)

### Pré-requisitos
- Node.js 18+ → https://nodejs.org
- Android Studio Hedgehog+ → https://developer.android.com/studio
- JDK 17+ (incluído no Android Studio)
- Android SDK 34

### Passos
```bash
# 1. Instalar dependências Capacitor
npm install

# 2. Copiar arquivos web para o projeto Android
npx cap copy android

# 3. Abrir no Android Studio
npx cap open android
# (ou abra manualmente: Android Studio → File → Open → pasta android/)
```

4. Aguarde o Gradle sync (~5 min na primeira vez)
5. **Build → Build Bundle(s)/APK(s) → Build APK(s)**
6. APK em: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## Estrutura do Projeto

```
iara-suite-capacitor/
├── dist/                    ← Arquivos web (index.html, etc.)
├── android/                 ← Projeto Android Studio
│   ├── app/
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       └── java/br/adv/maikoncaldeira/iarasuite/
│   │           └── MainActivity.java
│   ├── build.gradle
│   └── settings.gradle
├── capacitor.config.js
├── package.json
├── .github/workflows/build-apk.yml  ← GitHub Actions
└── COMPILAR-APK.md
```

---

## Configuração do APK

| Campo | Valor |
|-------|-------|
| Package ID | `br.adv.maikoncaldeira.iarasuite` |
| App Name | Iara Suite |
| Versão | 2.0.0 (code: 2) |
| Min SDK | Android 5.1+ (API 22) |
| Target SDK | Android 14 (API 34) |
| Orientação | Ambas (retrato + paisagem) |

---

## Instalar no celular

1. Transfira o `.apk` para o celular
2. **Configurações → Segurança → Fontes desconhecidas** ✓
3. Abra o arquivo `.apk` → Instalar

## Assinar para o Google Play (opcional)

```bash
# Build → Generate Signed Bundle / APK
# Crie um keystore e guarde com segurança
```
