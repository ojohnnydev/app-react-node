module.exports = app => {
    const usuarios = require('../controllers/usuarios.controller');

    // Cria um novo usuario
    /*app.post("/usuarios", usuarios.create);*/

    // Busca usuário pelos dados passados
    app.post("/usuarioLogin/:userName/:userPassword", usuarios.login);
}
