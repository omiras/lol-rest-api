const championsServices = require('../services/championsServices');

const getAllChampions = (req, res) => {
    const champions = championsServices.getAllChampions();
    res.send({
        status: "OK",
        data: champions
    })
};

const getChampionById = (req, res) => {
    // 1. Obtener el id del la Request
    //const id = req.params.id;

    // JavaScript ES6+
    const { id } = req.params;

    // 2. Invocar al servicio para pedirle el campeón
    // El servicio nos va a devolver el valor undefined si no encuentra el campeón identificado con el id
    const champion = championsServices.getChamptionById(id);

    // Si no he podido encontrar el campeón, devolver un error
    if (!champion) {
        return res.status(404).send({
            status: "KO",
            error: `Champion ${id} not found.`
        })
    }

    // 3. Devolver una respuesta al cliente
    res.send({
        status: "OK",
        data: champion
    })
}

module.exports = {
    getAllChampions,
    getChampionById
}