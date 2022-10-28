const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports.get = async (request, response, next) => {
  const mesas = await prisma.mesa.findMany({
    orderBy: {
      codigo: "asc",
    },
    include: {
      estado: true
    }
  });
  response.json(mesas);
};
module.exports.getById = async (request, response, next) => {
  let id = parseInt(request.params.id);
  const mesa = await prisma.mesa.findUnique({
    where: {
      id: id,
    },
    include: {
      estado: true,
      restaurante:true
    }
  });
  response.json(mesa);
};