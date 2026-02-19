# React Email Client

Aplicaci�n React para consultar un candidato por email y enviar aplicaciones a vacantes con un repositorio de GitHub.

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
2. En el input **Candidate Email**, escribe un correo v�lido (por ejemplo: `nombre@dominio.com`).
3. Haz click en **Search**.

Validaci�n de email:

- Si el formato no es v�lido, la app muestra error (`Invalid email format`).
- Si es v�lido, consulta el candidato en el backend.

### 2) Ver datos del candidato y validar bot�n `Job Applications`

Despu�s de buscar correctamente, se muestran estos campos del candidato:

- UUID
- Candidate ID
- Application ID
- First Name
- Last Name
- Email

El bot�n **Job Applications** solo aparece cuando:

- Existe candidato cargado.
- No hay loading.
- No hay error.

Esto confirma que el candidato es v�lido para continuar al flujo de aplicaci�n.

### 3) Ir a la lista de trabajos (`/jobs`)

Al hacer click en **Job Applications**, la app redirige a:

- `http://localhost:3000/jobs`

En esta pantalla ver�s la tabla de vacantes.

### 4) Aplicar a un trabajo

Por cada vacante:

1. En **Repo Git**, pega el link del repositorio donde est� alojada esta app.
2. Haz click en **Enviar**.

Ejemplo de URL v�lida:

- `https://github.com/tu-usuario/react-email-client`

Validaci�n para aplicar:

- `repoUrl` es obligatorio.
- Debe contener `github.com`.

Si todo est� correcto, se muestra mensaje de �xito. Si falla, se muestra el error correspondiente.

## Rutas

- `/`: b�squeda y validaci�n de candidato.
- `/jobs`: listado de trabajos y env�o de aplicaci�n.
