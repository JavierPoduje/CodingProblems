# Ejercicios de Algoritmos en Typescript

Problemas tipo `coding interviews` resueltos con Typescript.

## Empezar

Copiar el proyecto:

```sh
git clone https://github.com/JavierPoduje/CodingProblems.git
```

Instalar dependencias:

```sh
npm install
```

## Para agregar un problema

1. Elegir un tópico a partir de el problema que queramos agregar, por ejemplo: `strings`.
2. Crear una carpeta con el nombre del problema, por ejemplo: `capitalize-first`
3. Dentro de la carpeta creada agregaremos tres archivos:
  - `description.md`: Markdown con la descripción del problema.
  - `solution.ts`: Typescript con la solución del problema.
  - `solution.test.js`: Javascript con los test del problema.

## Tests

Para correr todos los test:

```sh
npm run test
```

Para correr un test específico, agregar el nombre del archivo al final del comando:

Ejemplo:

```sh
npm run test arrays/merges/meeting-room-ii/solution.test.js
```
