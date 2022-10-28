import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {

  await prisma.restaurante.create({
    data: {
      nombre:'Sucursal Alajuela',
      direccion:'La Agonía, 100mts sur de plaza real',
      telefono:'24242424'
    }
  });
  await prisma.restaurante.create({
    data: {
      nombre:'Sucursal Heredia',
      direccion:'Heredia Centro, 50mts sur de la Universidad Nacional',
      telefono:'24242425'
    }
  });
  await prisma.restaurante.create({
    data: {
      nombre:'Sucursal SanJose',
      direccion:'Sabana Sur, perpendicular a la Sala Constitucional',
      telefono:'24242426'
    }
  });





  await prisma.rol.create({
    data: {
      descripcion:"Administrador",
    }
  });
  await prisma.rol.create({
    data: {
      descripcion:"Mesero",
    }
  });
  await prisma.rol.create({
    data: {
      descripcion:"Cliente",
    }
  });





  await prisma.usuario.create({
    data: {
      nombre:'Jorge21',
      email:'jduran@auraportal.com',
      password:'1235',
      direccion:'Coyol de Alajuela, 50mts sur de entrada calle la margarita',
      rol : {
        connect:{
          id:1
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });  




  await prisma.cliente.create({
    data: {
      nombre:'Jorge',
      apellido1:'Durán',
      apellido2:"Acuña",
      descripcion:"Cliente inicial",
      direccion:'Coyol de Alajuela, 50mts sur de entrada calle la margarita',
      email:'jduran@auraportal.com'
    }
  });  





  await prisma.ingrediente.create({
    data: {
      descripcion:"Ajo",
    }
  });  
  await prisma.ingrediente.create({
    data: {
      descripcion:"Anchoa",
    }
  });  
  await prisma.ingrediente.create({
    data: {
      descripcion:"Aceite extra",
    }
  });  
  await prisma.ingrediente.create({
    data: {
      descripcion:"Crema de leche",
    }
  });  
  await prisma.ingrediente.create({
    data: {
      descripcion:"Nuez",
    }
  });  
  await prisma.ingrediente.create({
    data: {
      descripcion:"Blocoli",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Coliflor",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Papa",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Milanesa",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Raviol",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Zanahoria",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Apio",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Repollito de Bruselas",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Pan",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Aceite de Oliva",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Leche",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Yema",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Azúcar",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Escencia de vainilla",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Puré de fresa",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Chispa de chocolate",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Masa de pizza italiana",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Quezo mozzarella",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Albahaca",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Salsa de tomate natural triturado",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Sal",
    }
  }); 
  await prisma.ingrediente.create({
    data: {
      descripcion:"Pimienta",
    }
  }); 




  await prisma.categoria.create({
    data: {
      descripcion:'Platos de verdura',
    }
  });
  await prisma.categoria.create({
    data: {
      descripcion:'Platos de pasta',
    }
  });
  await prisma.categoria.create({
    data: {
      descripcion:'Pizzas',
    }
  });
  await prisma.categoria.create({
    data: {
      descripcion:'Postres',
    }
  });





  await prisma.platillo.create({
    data: {
      nombre:'Bagna Cauda',
      descripcion:'Sopa caliente típica de Piamonte hecha con verduras, quesos y anchoas. ',
      precio:1000,
      categoria : {
        connect:{
          id:1
        }
      },
      ingredientes: {
        createMany: {
          data: [
            { cantidad: '5 dientes', ingredienteId: 1 },
            { cantidad: '5', ingredienteId: 2 },
            { cantidad: '1', ingredienteId: 3 },
            { cantidad: '1/2', ingredienteId: 4 },
            { cantidad: '1', ingredienteId: 5 },
            { cantidad: '1/2', ingredienteId: 6 },
            { cantidad: '1/2', ingredienteId: 7 },
            { cantidad: '2 chicas', ingredienteId: 8 },
            { cantidad: '2', ingredienteId: 9 },
            { cantidad: '1 caja', ingredienteId: 10 },
            { cantidad: '1', ingredienteId: 11 },
            { cantidad: '3 tallos', ingredienteId: 12 },
            { cantidad: '200g', ingredienteId: 13 },
            { cantidad: '3/4', ingredienteId: 14 },
            { cantidad: '1', ingredienteId: 15 },
          ]
        }
      },
      restaurantes:{
        connect:[{id:1},{id:2},{id:3}]
      }, 
    }
  });
  await prisma.platillo.create({
    data: {
      nombre:'Gelato',
      descripcion:'Uno de los postres tradicionales en toda Italia es el gelato (helado típico italiano), Está elaborado con una base de 3,25% de grasa láctea, leche entera y azúcar, pudiendo incluir frutas, frutos secos, chocolate, huevos, café, u otros ingredientes frescos en función del sabor específico que se desea obtener',
      precio:2000,
      categoria : {
        connect:{
          id:4
        }
      },
      ingredientes: {
        createMany: {
          data: [
            { cantidad: '750ml', ingredienteId: 16 },
            { cantidad: '5', ingredienteId: 17 },
            { cantidad: '200 gr', ingredienteId: 18 },
            { cantidad: '1 cucharadita', ingredienteId: 19 },
            { cantidad: '1 taza', ingredienteId: 20 },
            { cantidad: '1 taza', ingredienteId: 3 },
          ]
        }
      },
      restaurantes:{
        connect:[{id:2}]
      }, 
    }
  });
  await prisma.platillo.create({
    data: {
      nombre:'Margherita',
      descripcion:'No hay mucho que decir. Es la reina de la mesa. Ya sea en su simple versión con mozzarella fiordilatte o mozzarella de bufala (en este caso se llamará BUFALINA), la pizza margherita es sin duda la pizza preferida por los italianos.Además de la mozzarella, los otros ingredientes son tomate, aceite y albahaca, combinados de forma artesanal por los pizzeros (pizzaioli) italianos.',
      precio:8000,
      categoria : {
        connect:{
          id:3
        }
      },
      ingredientes: {
        createMany: {
          data: [
            { cantidad: '220gr', ingredienteId: 22 },
            { cantidad: '90gr', ingredienteId: 23 },
            { cantidad: '1', ingredienteId: 24 },
            { cantidad: '100gr', ingredienteId: 25 },
            { cantidad: 'al gusto', ingredienteId: 26 },
            { cantidad: 'al gusto', ingredienteId: 27 },
            { cantidad: 'al gusto', ingredienteId: 3 },
          ]
        }
      },
      restaurantes:{
        connect:[{id:1}]
      }, 
    }
  });




  await prisma.estadoPedidos.create({
    data: {
      descripcion:"Registrado",
    }
  });
  await prisma.estadoPedidos.create({
    data: {
      descripcion:"En proceso",
    }
  });
  await prisma.estadoPedidos.create({
    data: {
      descripcion:"Pendiente",
    }
  });
  await prisma.estadoPedidos.create({
    data: {
      descripcion:"Entregado",
    }
  });
  await prisma.estadoPedidos.create({
    data: {
      descripcion:"Por pagar",
    }
  });





  await prisma.estadoMesas.create({
    data: {
      descripcion:"Libre",
    }
  });
  await prisma.estadoMesas.create({
    data: {
      descripcion:"Reservada",
    }
  });
  await prisma.estadoMesas.create({
    data: {
      descripcion:"Ocupada",
    }
  });
  await prisma.estadoMesas.create({
    data: {
      descripcion:"Pedido registrado",
    }
  });
  await prisma.estadoMesas.create({
    data: {
      descripcion:"Por pagar",
    }
  });
  await prisma.estadoMesas.create({
    data: {
      descripcion:"Inactiva",
    }
  });



  await prisma.mesa.create({
    data: {
      codigo:'A1',
      capacidad:6,
      estado : {
        connect:{
          id:1
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });

  await prisma.mesa.create({
    data: {
      codigo:'A2',
      capacidad:4,
      estado : {
        connect:{
          id:2
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });

  await prisma.mesa.create({
    data: {
      codigo:'A3',
      capacidad:6,
      estado : {
        connect:{
          id:3
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'A4',
      capacidad:4,
      estado : {
        connect:{
          id:4
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'A5',
      capacidad:6,
      estado : {
        connect:{
          id:5
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'A6',
      capacidad:4,
      estado : {
        connect:{
          id:6
        }
      },
      restaurante : {
        connect:{
          id:1
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'H1',
      capacidad:6,
      estado : {
        connect:{
          id:1
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });

  await prisma.mesa.create({
    data: {
      codigo:'H2',
      capacidad:4,
      estado : {
        connect:{
          id:2
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });

  await prisma.mesa.create({
    data: {
      codigo:'H3',
      capacidad:6,
      estado : {
        connect:{
          id:3
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'H4',
      capacidad:4,
      estado : {
        connect:{
          id:4
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'H5',
      capacidad:6,
      estado : {
        connect:{
          id:5
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });
  await prisma.mesa.create({
    data: {
      codigo:'H6',
      capacidad:6,
      estado : {
        connect:{
          id:6
        }
      },
      restaurante : {
        connect:{
          id:2
        }
      }
    }
  });



  await prisma.pedido.create({
    data: {
      usuario : {
        connect:{
          id:1
        }
      },
      cliente : {
        connect:{
          id:1
        }
      },
      platillos : {
        createMany: {
          data: [
            { cantidad: 2, total:2000, platilloId: 1 },
            { cantidad: 8, total:8000, platilloId: 2 }
          ]
        }
      },
      mesa : {
        connect:{
          id:1
        }
      },
      estado : {
        connect:{
          id:1
        }
      },
      comentarios:'Sin albondigas',
      descuento:15,
      total:10000
    }
  });


  await prisma.pedido.create({
    data: {
      usuario : {
        connect:{
          id:1
        }
      },
      cliente : {
        connect:{
          id:1
        }
      },
      platillos : {
        createMany: {
          data: [
            { cantidad: 4, total:8000, platilloId: 2 },
            { cantidad: 2, total:16000, platilloId: 3 }
          ]
        }
      },
      mesa : {
        connect:{
          id:8
        }
      },
      estado : {
        connect:{
          id:2
        }
      },
      comentarios:'Sin queso',
      descuento:1,
      total:24000
    }
  });





  await prisma.opcionPago.create({
    data: {
      descripcion:"Efectivo",
    }
  });
  await prisma.opcionPago.create({
    data: {
      descripcion:"Tarjeta",
    }
  });
  await prisma.opcionPago.create({
    data: {
      descripcion:"Ambas",
    }
  });




  await prisma.factura.create({
    data: {
      pedido : {
        connect:{
          id:1
        }
      },
      opcionPago : {
        connect:{
          id:1
        }
      },
      impuesto:1950,
      total:16950
    }
  });
}





main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async e => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
