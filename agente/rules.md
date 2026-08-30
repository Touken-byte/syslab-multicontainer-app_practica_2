# Reglas del Agente - Arquitectura SysLab 2.0

## Alcance
Estas reglas gobiernan el comportamiento del backend y la capa de persistencia del sistema de biblioteca (Usuario, Libro, Préstamo).

## Reglas Generales
1. El backend debe seguir una arquitectura en capas: rutas → controladores → servicios → acceso a datos (Prisma).
2. Toda interacción con la base de datos debe pasar por Prisma Client, nunca queries SQL crudas salvo justificación explícita.
3. Los roles (ADMIN, CLIENTE) determinan los permisos de cada endpoint.
4. Las variables sensibles (credenciales de base de datos) se gestionan mediante archivos `.env`, nunca hardcodeadas.
5. Toda nueva funcionalidad debe documentarse con un commit siguiendo Conventional Commits.

## Persistencia
- Ver `agente/skills-backend/syslab-persistencia/SKILL.md` para las reglas específicas de Prisma.
