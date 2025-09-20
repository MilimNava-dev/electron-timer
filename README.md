# Electron Timer ⏱️
[![Node](https://img.shields.io/badge/node-%3E%3D16-green)](https://nodejs.org/)
![Electron](https://img.shields.io/badge/electron-25-blue)
![License](https://img.shields.io/badge/license-MIT-yellow)

Un temporizador de escritorio simple construido con [Electron](https://www.electronjs.org/) y ReactJS. Permite gestionar tu tiempo de manera simple.

## Características

- ⏲️ Temporizador personalizable  
- ⏱️ Cronómetro  
- 🎨 UI sencilla y amigable  
- 💻 Puede descargarse como ejecutable para Windows (fácilmente adaptable a Mac y Linux)  

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/MilimNava-dev/electron-timer.git
   cd electron-timer
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Inicia la aplicación:**
   ```bash
   npm start
   ```
Esto arranca **Vite + Electron** automáticamente.
> En desarrollo, la aplicación carga desde `http://localhost:5173`.
   
## Construir el ejecutable
Este proyecto utiliza [electron-builder](https://www.electron.build/) para construir el ejecutable (.exe) de la aplicación.

1.  **Genera el build del frontend:**
    
    ``` bash
    npm run build
    ``` 
    
    Esto crea la carpeta `dist/` con los archivos listos.
    
2.  **Empaqueta la app en un ejecutable:**
    
    ``` bash
    npm run electron:build
    ```
    
    > Esto crea el `.exe` en la carpeta `releases/`.

## Estructura del proyecto

- `/electron/main.js` — Proceso principal de Electron.
- `/src/components` — Las páginas de la aplicación 
	- `Home.jsx`
	- `Timer.jsx`
	- `Stopwatch.jsx`
- `/src/index.css` — El CSS para todas las páginas
- `/src/assets` — Iconos e imágenes

## Contribución

¡Las contribuciones son bienvenidas! Si tienes ideas o mejoras, abre un [issue](https://github.com/MilimNava-dev/electron-timer/issues) o haz un pull request.

---

Hecho por [MilimNava-dev](https://github.com/MilimNava-dev)
