const Computadores = require('../models/computadores');

// Busca todos os computadores
exports.findAll = (req, res) => {
    Computadores.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a busca dos computadores!"
            });
        else res.send(data);
    });
};
