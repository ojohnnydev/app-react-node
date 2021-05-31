module.exports = app => {
    const computadores = require('../controllers/computadores.controller');

    // Busca todos os computadores
    app.get("/computadores", computadores.findAll);
}
