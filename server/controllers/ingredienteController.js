const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports.get = async (request, response, next) => {
  const ingredientes = await prisma.ingrediente.findMany({
    orderBy: {
      descripcion: "asc",
    },
  });
  response.json(ingredientes);
};
module.exports.getById = async (request, response, next) => {
  let id = parseInt(request.params.id);
  const ingrediente = await prisma.ingrediente.findUnique({
    where: {
      id: id,
    }
  });
  response.json(ingrediente);
};