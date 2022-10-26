const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
//Obtener listado
module.exports.get = async (request, response, next) => {
  const platillos = await prisma.platillo.findMany({
    orderBy: {
      nombre: 'asc',
    },
  });
  response.json(platillos);
}; 

//Obtener por Id
module.exports.getById = async (request, response, next) => {
  let id = parseInt(request.params.id);
  const platillo = await prisma.platillo.findUnique({
    where: { id: id },
    include: {
      categoria: true,
      ingredientes:true,
    },
  });
  response.json(platillo);
};
//Crear un platillo
module.exports.create = async (request, response, next) => {
  let platillo = request.body;
  const newplatillo = await prisma.platillo.create({
    data: {
      nombre: platillo.nombre,
      descripcion: platillo.descripcion,
      precio: platillo.precio,
      publicar: platillo.publicar,
      categoria: {
        //categorias tiene que ser {id:valor}
        connect: platillo.categoria,
      },
      ingredientes: {
        //categorias tiene que ser {id:valor}
        connect: platillo.ingredientes,
      },
    },
  });
  response.json(newplatillo);
};
//Actualizar un platillo
module.exports.update = async (request, response, next) => {
  let platillo = request.body;
  let idplatillo = parseInt(request.params.id);
  //Obtener platillo viejo
  const platilloViejo = await prisma.platillo.findUnique({
    where: { id: idplatillo },
    include: {
      categoria: {
        select:{
          id:true
        }
      },
      ingredientes: {
        select:{
          id:true
        }
      }
    }
  });

  const newplatillo = await prisma.platillo.update({
    where: {
      id: idplatillo,
    },
    data: {
      nombre: platillo.nombre,
      descripcion: platillo.descripcion,
      precio: platillo.precio,
      publicar: platillo.publicar,
      categoria: {
        //categorias tiene que ser {id:valor}
        disconnect:platilloViejo.categoria,
        connect: platillo.categoria,
      },
      ingredientes: {
        //categorias tiene que ser {id:valor}
        disconnect:platilloViejo.ingredientes,
        connect: platillo.ingredientes,
      },
    },
  });
  response.json(newplatillo);
};