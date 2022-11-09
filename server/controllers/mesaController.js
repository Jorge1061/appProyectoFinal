const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

module.exports.get = async (request, response, next) => {
  const mesas = await prisma.mesa.findMany({
    orderBy: {
      codigo: "asc",
    },
    include: {
      estado:{
        select:{descripcion:true}
      },
      restaurante: {
        select:{nombre:true}
      }, 
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

//Crear un mesa
module.exports.create = async (request, response, next) => {
  let mesa = request.body;
  const newmesa = await prisma.mesa.create({
    data: {
      nombre: mesa.codigo,
      capacidad: mesa.capacidad,
      estado: {
       connect: mesa.estado,
      },
      restaurantes: {
        //categorias tiene que ser {id:valor}
        connect: mesa.restaurantes,
      },
    },
  });
  response.json(newmesa);
};
//Actualizar un mesa
module.exports.update = async (request, response, next) => {
  let mesa = request.body;
  let idmesa = parseInt(request.params.id);
  //Obtener mesa viejo
  const mesaViejo = await prisma.mesa.findUnique({
    where: { id: idmesa },
    include: {
      estado: {
        select:{
          id:true
        }
      },
      restaurantes: {
        select:{
          id:true
        }
      }
    }
  });

  const newmesa = await prisma.mesa.update({
    where: {
      id: idmesa,
    },
    data: {
      nombre: mesa.codigo,
      capacidad: mesa.capacidad,
      estado: {
        //categorias tiene que ser {id:valor}
        disconnect:mesaViejo.restaurantes,
        connect: mesa.restaurantes,
      },
      restaurantes: {
        //categorias tiene que ser {id:valor}
        disconnect:mesaViejo.restaurantes,
        connect: mesa.restaurantes,
      },
    },
  });
  response.json(newmesa);
};