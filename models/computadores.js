const sql = require("./db");

// Constructor
const Computadores = function (Computador) {
    this.tipo_produto_id_INT = Computador.tipo_produto_id_INT;
    this.tamanho_tela = Computador.tamanho_tela;
    this.processador = Computador.processador;
    this.memoria = Computador.memoria;
    this.armazenamento = Computador.armazenamento;
    this.sistema_operacional = Computador.sistema_operacional;
    this.preco = Computador.preco;
    this.cor = Computador.cor;
}

Computadores.getAll = result => {
    sql.query("SELECT * FROM computadores", (err, res) => {
        if (err) {
            console.log("Erro: ", err);
            result(err, null);
            return;
        }

        console.log("Computadores: ", res);
        result(null, res);
    });
};

module.exports = Computadores;
