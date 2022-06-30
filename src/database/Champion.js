// "Importar" la base de datos
const DB = require('./db.json');

const getAllChampions = () => {
    return DB
};

// missfortune, amummu
const getChampionById = (id) => {
    return DB.find(c => c.id == id);
}

const getChampionsByTag = (tag) => {
    return DB.filter(c => c.tags.some(t => t.toLowerCase() == tag.toLowerCase()));
}


module.exports = {
    getAllChampions,
    getChampionById,
    getChampionsByTag
}

