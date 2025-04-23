# CI/CD Web App con GitHub Actions 🚀

Este es un proyecto simple de aplicación web con Node.js que demuestra la implementación de un pipeline básico de CI/CD usando GitHub Actions.

---

## 🛠 Tecnologías utilizadas

- Node.js
- Jest (para pruebas unitarias)
- GitHub Actions (para CI/CD)

---

## 📦 Estructura del proyecto

ci-cd-web-app/
│
├── src/
│   └── index.js         # Función principal (ej: suma)
│
├── tests/
│   └── index.test.js    # Pruebas unitarias
│
├── .github/
│   └── workflows/
│       └── nodejs.yml   # Pipeline CI/CD
│
├── package.json
└── README.md

---

## 🧪 Cómo ejecutar pruebas

npm install
npm test

⚙️ Automatización CI/CD
Cada vez que se realiza un push o pull request a la rama main, se ejecuta automáticamente el workflow definido en .github/workflows/nodejs.yml, el cual:

Descarga el código (checkout)

Instala dependencias (npm install)

Ejecuta pruebas (npm test)

Despliega a GitHub Pages

🔁 Flujo del pipeline

Push o Pull Request → GitHub Actions → Build → Test → [Deploy]

---

📄 Informe de Implementación
Este pipeline fue implementado utilizando GitHub Actions para automatizar la ejecución de pruebas cada vez que se realiza un push o pull request. A continuación, se describe su configuración:

📂 Ubicación del workflow

.github/workflows/nodejs.yml

🧩 Etapas del pipeline
🔹 1. Activación automática
Se activa con:

push a la rama main

pull request hacia main

🔹 2. Entorno de ejecución

runs-on: ubuntu-latest

🔹 3. Pasos principales del workflow

- name: Checkout del código
  uses: actions/checkout@v3

  Clona el repositorio.

- name: Instalar Node.js
  uses: actions/setup-node@v3
  with:
    node-version: '18'

Instala la versión de Node.js necesaria.

- name: Instalar dependencias
  run: npm install

Instala los paquetes listados en package.json.

- name: Ejecutar pruebas
  run: npm test

Ejecuta las pruebas con Jest y genera el reporte de cobertura.

✅ Resultado esperado
Al finalizar el pipeline:

Si todas las pruebas pasan → el workflow se marca como exitoso.

Si alguna falla → el workflow se marca como fallido y GitHub notifica el error.

Puedes ver los resultados en la pestaña Actions del repositorio.

✨ Autores
Yerelin Rosario / Hector Martinez

GitHub: @YerelinRosario