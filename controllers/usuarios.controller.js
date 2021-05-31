const Usuarios = require('../models/usuarios');

// Cria e Salva um novo laboratório
exports.create = (req, res) => {
    // Valida a requisição
    if (!req.body) {
        res.status(400).send({
            message: "Os dados não podem ser vazios!"
        });
    }

    // Cria um novo usuário
    const usuario = new Usuarios({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    });

    // Salva usuário criado no banco
    Usuarios.create(usuario, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Ocorreu algum erro durante a criação do usuário!"
            });
        else res.send(data);
    });
};

// Busca usuário pelos dados de login
exports.login = (req, res) => {
    Usuarios.realizalogin(req.params.userName, req.params.userPassword, (err, data) => {
        if (err) {
            if (err.kind === "Usuário não encontrado!") {
                res.status(404).send({
                    message: `Não foi possível encontrar o usuário com o login ${req.params.userName}!`
                });
            } else {
                res.status(500).send({
                    message: "Erro ao buscar usuário com o login " + req.params.userName
                });
            }
        }

        else res.send(data);
    });
};
