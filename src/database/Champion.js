// "Importar" la base de datos
const DB = require('./db.json');

const getAllChampions = () => {
    return DB
};

// missfortune, amummu
const getChampionById = (id) => {
    return DB.find(c => c.id == id);
}

module.exports = {
    getAllChampions,
    getChampionById
}

