const sql = require("./db");

// Constructor
const Celulares = function (Celular) {
    this.tipo_produto_id_INT = Celular.tipo_produto_id_INT;
    this.marca = Celular.marca;
    this.modelo = Celular.modelo;
    this.preco = Celular.preco;
    this.cor = Celular.cor;
}

Celulares.getAll = result => {
    sql.query("SELECT * FROM celulares", (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Celulares: ", res);
        result(null, res);
    });
};

module.exports = Celulares;
