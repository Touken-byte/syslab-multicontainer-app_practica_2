const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.usuario.create({
    data: {
      nombre: 'Admin Principal',
      email: 'admin@biblioteca.com',
      password: 'admin123',
      rol: 'ADMIN',
    },
  });

  const cliente = await prisma.usuario.create({
    data: {
      nombre: 'Juan Perez',
      email: 'juan@correo.com',
      password: 'cliente123',
      rol: 'CLIENTE',
    },
  });

  const libro1 = await prisma.libro.create({
    data: {
      titulo: 'Cien Años de Soledad',
      autor: 'Gabriel García Márquez',
      categoria: 'Novela',
      stock: 3,
    },
  });

  const libro2 = await prisma.libro.create({
    data: {
      titulo: 'El Principito',
      autor: 'Antoine de Saint-Exupéry',
      categoria: 'Infantil',
      stock: 5,
    },
  });

  await prisma.prestamo.create({
    data: {
      usuarioId: cliente.id,
      libroId: libro1.id,
      estado: 'ACTIVO',
    },
  });

  console.log('Seed ejecutado correctamente');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());