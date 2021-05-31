const sql = require("./db");

// Constructor
const Usuarios = function (Usuario) {
    this.nome = Usuario.nome;
    this.email = Usuario.email;
    this.senha = new Buffer(Usuario.senha).toString('base64'); // Faz criptografia da senha
}

Usuarios.create = (newUser, result) => {
    sql.query("INSERT INTO usuarios SET ?", newUser, (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Usuário criado: ", { id: res.insertId, ...newUser });
        result(null, { id: res.insertId, ...newUser });
    });
};

Usuarios.realizalogin = (userName, userPassword, result) => {

    var senha = new Buffer(userPassword).toString('base64'); // Faz criptografia da senha para validação no select

    sql.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?', [userName, senha] , (err, res) => {

        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Usuário logado: ", res);
        result(null, res);
    });
};

module.exports = Usuarios;
