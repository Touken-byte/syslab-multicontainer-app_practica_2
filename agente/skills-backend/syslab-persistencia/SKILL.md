# Skill: Persistencia SysLab 2.0

## Objetivo
Definir cómo el agente de IA debe generar y mantener el código de persistencia del backend (Prisma + PostgreSQL) para el sistema de biblioteca.

## Reglas
- Todo modelo de datos debe definirse en `backend/prisma/schema.prisma`.
- Las relaciones entre modelos deben ser explícitas (foreign keys documentadas).
- Cada cambio de esquema requiere una migración con `prisma migrate dev`.
- Los datos de prueba se cargan únicamente mediante `backend/prisma/seed.js`.
- Las contraseñas de usuario nunca se devuelven en las respuestas de la API.
