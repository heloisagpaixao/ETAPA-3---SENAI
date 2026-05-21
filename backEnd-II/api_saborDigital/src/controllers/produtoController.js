const ProdutoService = require("../services/produtoService");

class ProdutoController {
  async listarProdutos(req, res) {
    try {
      const resultado = await ProdutoService.listarProdutos();
      res.status(200).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor.",
        erro: erro.stack || erro,
      });
    }
  }

  // =============================================================== //

  async buscarProdutoPorId(req, res) {
    try {
      const resultado = await ProdutoService.buscarProdutoPorId(req.params.id);
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor.",
        erro: erro.stack || erro,
      });
    }
  }

  // =============================================================== //
  // MODIFICADO: Passa o arquivo e o corpo juntos para o Service
  async cadastrarProduto(req, res) {
    try {
      const resultado = await ProdutoService.cadastrarProduto({
        corpo: req.body,
        arquivo: req.file,
      });
      res.status(201).json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor.",
        erro: erro.stack || erro,
      });
    }
  }

  // =============================================================== //
  // MODIFICADO: Passa o ID da URL, o arquivo e o corpo juntos para o Service
  async atualizarProduto(req, res) {
    try {
      const resultado = await ProdutoService.atualizarProduto(req.params.id, {
        corpo: req.body,
        arquivo: req.file,
      });
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor.",
        erro: erro.stack || erro,
      });
    }
  }

  // =============================================================== //

  async deletarProduto(req, res) {
    try {
      const resultado = await ProdutoService.deletarProduto(req.params.id);
      res.json(resultado);
    } catch (erro) {
      res.status(erro.status || 500).json({
        sucesso: false,
        mensagem: erro.mensagem || "Erro interno do servidor.",
        erro: erro.stack || erro,
      });
    }
  }
}

module.exports = new ProdutoController();
