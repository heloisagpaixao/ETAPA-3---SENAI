const pool = require("../config/database");

// ============================================================ //

class ProdutoRepository {
  async listarProdutos() {
    // Adicionado [listaProdutos] para desestruturar
    const [listaProdutos] = await pool.query("SELECT * FROM produto");
    return listaProdutos;
  }

  // ============================================================ //

  async buscarProdutoPorId(id) {
    // Adicionado [mostrarProduto] para pegar as linhas retornadas
    const [mostrarProduto] = await pool.query(
      "SELECT * FROM produto WHERE id = ?",
      [id],
    );
    return mostrarProduto;
  }

  // ============================================================ //

  async cadastrarProduto(dadosDoProduto) {
    const sql =
      "INSERT INTO produto (nome, descricao, preco, disponivel, foto_produto, categoria) VALUES (?, ?, ?, ?, ?, ?)";

    const valores = [
      dadosDoProduto.nome,
      dadosDoProduto.descricao,
      dadosDoProduto.preco,
      dadosDoProduto.disponivel,
      dadosDoProduto.foto_produto,
      dadosDoProduto.categoria,
    ];

    const [resultadoCadastroDeProduto] = await pool.query(sql, valores);
    return resultadoCadastroDeProduto.insertId;
  }

  // ============================================================ //

  async atualizarProduto(id, dadosDoProduto) {
    const camposProduto = [];
    const dadoProduto = [];

    for (const [key, value] of Object.entries(dadosDoProduto)) {
      camposProduto.push(`${key} = ?`);
      dadoProduto.push(value);
    }

    if (camposProduto.length === 0) return null;

    dadoProduto.push(id);

    const query = `UPDATE produto SET ${camposProduto.join(",")} WHERE id = ?`;

    // Adicionado [resultado] para ler corretamente as linhas afetadas
    const [resultado] = await pool.query(query, dadoProduto);
    return resultado.affectedRows;
  }

  // ============================================================ //

  async apagarProduto(id) {
    await pool.query("DELETE FROM produto WHERE id = ?", [id]);
    return true;
  }
}

module.exports = new ProdutoRepository();
