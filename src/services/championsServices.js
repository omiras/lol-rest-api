// Importarimos todos los servicios que necesitamos: llamadas a otras API, acceso a base de datos, acceder al sistema operativa.
// En nuestro, lo único que vamos a hacer es manejar el fichero db.json que se encuentra en database/db.json

const Champion = require('../database/Champion');

const getAllChampions = () => {
    return Champion.getAllChampions();
}

module.exports = {
    getAllChampions
}

