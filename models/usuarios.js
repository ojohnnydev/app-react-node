const sql = require("./db");

// Constructor
const Usuarios = function (Usuario) {
    this.nome = Usuario.nome;
    this.email = Usuario.email;
    this.senha = Usuario.senha;
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
    sql.query('SELECT * FROM usuarios WHERE nome = ? AND senha = ?', [userName, userPassword] , (err, res) => {

        if (err) {
            console.log("Erro: ", err);
            result(err, null);
        } else if (res.length === 0) {
            console.log("Usuário não cadastrado!");
            result(null, { message : "Usuário não cadastrado!" });
        } else {
            console.log("Usuário logado: ", res);
            result(null, res);
        }
    });
};

module.exports = Usuarios;
