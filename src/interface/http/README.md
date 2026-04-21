# Countries Locations API

API REST que expone información de países del mundo (nombre, capital, banderas, monedas y coordenadas geográficas) a partir de un archivo JSON (`all-1.json`).

## 1. Descripción

Este proyecto carga un archivo `all-1.json` que contiene una lista de países con sus datos principales (nombre común, nombre oficial, capital, moneda, banderas y coordenadas `[lat, lng]`). La API permite consultar todos los países o acceder a la información de un país concreto, incluyendo su ubicación geográfica.

## 2. Tecnologías usadas

- Node.js y npm  
- Framework HTTP (por ejemplo Express o similar)  
- TypeScript/JavaScript (según tu preferencia)  

> Nota: adapta esta sección a las tecnologías reales que uses.

## 3. Estructura de carpetas (arquitectura limpia)

Dentro de `src/` se sigue una estructura por capas:

- `domain/`  
  - Entidad `Country` y tipos relacionados.  
  - Interfaces de repositorio, por ejemplo `ICountriesRepository`.

- `application/`  
  - Casos de uso (use cases), por ejemplo:  
    - `ListCountriesUseCase`  
    - `GetCountryByNameUseCase`  
    - `GetCountryLocationUseCase`

- `infrastructure/`  
  - Implementaciones de los repositorios usando el archivo `all-1.json`, por ejemplo:  
    - `FileCountriesRepository` que lee el JSON desde `data/all-1.json`.

- `interfaces/`  
  - Capa HTTP de la API:  
    - Rutas (`routes`) como `/countries`, `/countries/:name`, etc.  
    - Controladores que reciben la petición, llaman a los casos de uso y devuelven la respuesta HTTP.

- `main.ts`  
  - Punto de entrada de la aplicación.  
  - Configura el servidor HTTP, registra las rutas y levanta el servidor.

Además, el archivo `all-1.json` se encuentra en una carpeta como `data/` en la raíz del proyecto.

## 4. Instalación

Clona el repositorio e instala dependencias:

```bash
git clone <URL-de-tu-repo>
cd <nombre-del-proyecto>
npm install
```

Si usas TypeScript:

```bash
npm run build
```

## 5. Ejecución

Modo desarrollo (ajusta el script según tu `package.json`):

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

La API quedará escuchando en un puerto (por defecto 3000, configurable por variable de entorno `PORT`).

## 6. Endpoints

### `GET /countries`

Devuelve una lista con todos los países del archivo `all-1.json`.  
Cada elemento incluye, como mínimo:

- `name.common`  
- `capital`  
- `latlng` (array `[latitud, longitud]`)  
- `currencies`  
- `flags`  

Los campos dependen de la estructura original del JSON. [file:42]

### `GET /countries/:name`

Devuelve los datos del país cuyo `name.common` coincida con `:name` (búsqueda case-insensitive recomendada).

Ejemplo:

- `GET /countries/Spain`  
- `GET /countries/Italy`

### `GET /countries/:name/location`

Devuelve solo la ubicación de un país concreto (latitud, longitud y capital) a partir de los datos `latlng` y `capital` del JSON. [file:42]

Ejemplo de respuesta (esquema):

```json
{
  "name": "Spain",
  "capital": "Madrid",
  "latlng": [40.0, -4.0]
}
```

## 7. Variables de entorno

Puedes usar un archivo `.env` en la raíz:

- `PORT`: puerto en el que se levantará la API (por defecto 3000).

## 8. Futuras mejoras

- Filtros por moneda, continente o región.  
- Paginación en `GET /countries`.  
- Cache de resultados.  
- Autenticación si se necesita limitar el acceso.

---

Este README es un punto de partida; modifícalo para que refleje exactamente tu stack (por ejemplo, si usas FastAPI en vez de Node, cambia comandos y secciones de tecnología).

Para que el README quede 100 % alineado contigo: ¿en qué lenguaje y framework concreto piensas implementar esta API (Node + Express, NestJS, FastAPI, otro)?
