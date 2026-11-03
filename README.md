# Movie Vault - Source Code Recovery

Recovered from `MovieVault.apk` using Reverse Engineering Analysis (REA) & JADX decompilation.

## Project Architecture

Movie Vault (`com.reelvault.app`, Version 1.7.3, Build 84) is a hybrid **Capacitor** application consisting of:
1. **Frontend Core Web Application (`www/index.html`)**:
   - Contains the complete UI, styles, state management, and application logic.
   - Completely unminified and fully readable with original comments and structure.
   - Built-in Catalog, state persistence (`localStorage`), TMDB discover & metadata integration, Claude AI autofill, JustWatch streaming availability, Firebase Cloud Sync (email/password + Firestore), Google Drive Backup & Restore (hidden app folder), Material 3 design components, and custom poster art generation.

2. **Android Native Bridge (`android/app/src/main/`)**:
   - **`MainActivity.java`**: Extends `BridgeActivity`. Implements the `RVNative` (`window.RVNative`) JavaScript interface for:
     - Edge-to-edge transparent system bar insets (`insets()`, `rvInsets`)
     - Light/Dark system bar status controller (`setBars()`)
     - In-app background APK update downloader and installer (`download()`, `cancel()`, `install()`, `rvUpd`)
   - **`RVFileProvider.java`**: Custom `FileProvider` authority (`com.reelvault.app.rvfiles`) for opening update APK files securely.
   - **`AndroidManifest.xml`**: Complete manifest declarations with internet and package installation permissions, file providers, and intent filters.
   - **`res/`**: Complete decoded drawables, mipmaps, XML paths (`rv_paths.xml`, `file_paths.xml`), values, and styles.

3. **Capacitor Configuration**:
   - `capacitor.config.json`
   - `capacitor.plugins.json` (Includes `@capacitor/app` and `@capacitor/browser`)

4. **Full Decompiled Tree (`decompiled_src/`)**:
   - Contains the full decompiled sources and resources if you need any decompiled library reference.
