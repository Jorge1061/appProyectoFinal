const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
module.exports.get = async (request, response, next) => {
  const pedido = await prisma.pedido.findMany({
    orderBy: {
      fechaPedido: 'asc', 
    },
    include: {
      usuario:{
        select: {
          id: true,
          email: true,
          nombre: true,
          password: true,
          direccion: true,
          restauranteId: true,
          rol: true,
        },
      },
    },
  });
  response.json(pedido);
};
module.exports.getById = async (request, response, next) => {
  let id = parseInt(request.params.id);
  const pedido = await prisma.pedido.findUnique({
    where: {
      id: id,
    },
    include: {
      cliente:true,
      platillos: {
        select: {
          platillo: true,
          cantidad: true,
        },
      },
      usuario: true,
      mesa:{
        select:{
          restaurante:true,
          capacidad:true,
          codigo:true
        }
      }
    },
  });
  response.json(pedido);
};
