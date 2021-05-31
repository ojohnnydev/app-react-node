module.exports = app => {
    const celulares = require('../controllers/celulares.controller');

    // Busca todos os computadores
    app.get("/celulares", celulares.findAll);
}
