const championsServices = require('../services/championsServices');

const getAllChampions = (req, res) => {
    const champions = championsServices.getAllChampions();
    res.send({
        status: "OK",
        data: champions
    })
};

module.exports = {
    getAllChampions
}