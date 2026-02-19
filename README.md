# React Email Client

Aplicación React para consultar un candidato por email y enviar aplicaciones a vacantes con un repositorio de GitHub.

## Requisitos

- Node.js 18+
- npm

## Ejecutar el proyecto

```bash
npm install
npm start
```

App local: `http://localhost:3000`

## Flujo principal

### 1) Buscar candidato en `/`

1. Entra a `http://localhost:3000/`.
2. En el input **Candidate Email**, escribe un correo valido (por ejemplo: `nombre@dominio.com`).
3. Haz click en **Search**.

Validación de email:

- Si el formato no es valido, la app muestra error (`Invalid email format`).
- Si es valido, consulta el candidato en el backend.

### 2) Ver datos del candidato y validar botón `Job Applications`

Despues de buscar correctamente, se muestran estos campos del candidato:

- UUID
- Candidate ID
- Application ID
- First Name
- Last Name
- Email

El botón **Job Applications** solo aparece cuando:

- Existe candidato cargado.
- No hay loading.
- No hay error.

Esto confirma que el candidato es valido para continuar al flujo de aplicación.

### 3) Ir a la lista de trabajos (`/jobs`)

Al hacer click en **Job Applications**, la app redirige a:

- `http://localhost:3000/jobs`

En esta pantalla ver la tabla de vacantes.

### 4) Aplicar a un trabajo

Por cada vacante:

1. En **Repo Git**, pega el link del repositorio donde esta alojada esta app.
2. Haz click en **Enviar**.

Ejemplo de URL valida:

- `https://github.com/tu-usuario/react-email-client`

Validación para aplicar:

- `repoUrl` es obligatorio.
- Debe contener `github.com`.

Si todo esta correcto, se muestra mensaje de exito. Si falla, se muestra el error correspondiente.

## Rutas

- `/`: busqueda y validación de candidato.
- `/jobs`: listado de trabajos y envio de aplicación.
