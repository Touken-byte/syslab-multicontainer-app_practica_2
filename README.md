# Sistema de Biblioteca - SysLab 2.0

Proyecto académico para la materia **Sistemas Paralelos**.
Despliegue de arquitectura multi-contenedor (Backend, Frontend, PostgreSQL) con Prisma ORM e integración de agentes de IA.

## 📌 Descripción

Sistema de gestión de biblioteca con dos roles:
- **Administrador**: gestiona el catálogo de libros (crear, editar, eliminar) y controla los préstamos activos.
- **Cliente**: consulta el catálogo, solicita préstamos y revisa su historial.

## 🏗️ Arquitectura

- **Backend**: Node.js + Express + Prisma ORM
- **Frontend**: HTML estático servido con Nginx
- **Base de datos**: PostgreSQL 15
- **Orquestación**: Docker Compose
- **Agente IA**: Skills configuradas en `agente/` (TasteSkill + skills personalizadas SysLab 2.0)

## 📂 Estructura del Proyecto

syslab-multicontainer-app_practica_2/
├── backend/
│ ├── prisma/
│ │ ├── schema.prisma
│ │ ├── seed.js
│ │ └── migrations/
│ ├── index.js
│ ├── Dockerfile
│ └── .env
├── frontend/
│ ├── index.html
│ ├── Dockerfile
│ └── .env
├── agente/
│ ├── .agents/skills/design-taste-frontend/
│ ├── skills-backend/syslab-persistencia/
│ └── rules.md
├── docker-compose.yml
└── README.md


## 🗄️ Modelos de Datos

- **Usuario**: id, nombre, email, password, rol (ADMIN/CLIENTE)
- **Libro**: id, titulo, autor, categoria, stock
- **Prestamo**: relaciona Usuario y Libro, con fecha y estado (ACTIVO/DEVUELTO)

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos
- Docker y Docker Compose instalados

### Pasos

1. Clonar el repositorio:
```bash
git clone https://github.com/Touken-byte/syslab-multicontainer-app_practica_2.git
cd syslab-multicontainer-app_practica_2
```

2. Levantar los contenedores:
```bash
docker compose up --build -d
```

3. Verificar que los 3 contenedores estén activos:
```bash
docker compose ps
```

4. Ejecutar las migraciones de Prisma:
```bash
docker compose exec backend npx prisma migrate dev --name init
```

5. Poblar la base de datos con datos iniciales:
```bash
docker compose exec backend node prisma/seed.js
```

6. Acceder a los servicios:
- Backend API: [http://localhost:4000](http://localhost:4000)
- Frontend: [http://localhost:3000](http://localhost:3000)
- PostgreSQL: puerto 5432

## 🤖 Agente de IA

En la carpeta `agente/` se integran:
- **TasteSkill** (`design-taste-frontend`): skill para mejorar la calidad del diseño frontend generado por IA.
- **Skill personalizada** (`skills-backend/syslab-persistencia`): reglas propias para la gestión de persistencia con Prisma, alineadas a la arquitectura SysLab 2.0.
- **rules.md**: reglas generales que gobiernan el comportamiento del backend y la persistencia.

## 📝 Convenciones de Git

Este proyecto sigue **Conventional Commits** en español:
- `feat`: nuevas características
- `fix`: corrección de errores
- `docs`: cambios en documentación
- `chore`: mantenimiento y configuración

## 👤 Autor

- **Estudiante**: Lizzy Leyla Baron Barrero
- **Materia**: Sistemas Paralelos
- **Docente**: Ing. Elias Cassal Baldiviezo
