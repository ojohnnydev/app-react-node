const Celulares = require('../models/celulares');

// Busca todos os celulares
exports.findAll = (req, res) => {
    Celulares.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a busca dos celulares!"
            });
        else res.send(data);
    });
};
