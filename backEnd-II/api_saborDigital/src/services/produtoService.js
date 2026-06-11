const ProdutoRepository = require("../repositories/produtoRepository");
const path = require("path");

// ============================================================ //

class ProdutoService {
  async listarProdutos() {
    const produtos = await ProdutoRepository.listarProdutos();
    return { sucesso: true, dados: produtos, total: produtos.length };
  }

  // ============================================================ //

  async buscarProdutoPorId(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    const produto = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produto || produto.length === 0) {
      throw { status: 404, mensagem: "Produto não encontrado." };
    }

    return { sucesso: true, dados: produto[0] };
  }

  // ============================================================ //

  async cadastrarProduto(pacote) {
    const { arquivo, corpo } = pacote;
    const { nome, descricao, preco, categoria, disponivel } = corpo;

    if (!arquivo) {
      throw { status: 400, mensagem: "A imagem do produto é obrigatória." };
    }

    const tamanhoMaximo = 2 * 1024 * 1024;
    if (arquivo.size > tamanhoMaximo) {
      throw {
        status: 400,
        mensagem: "A imagem é muito grande! O limite é de 2MB.",
      };
    }

    const extensoesPermitidas = [".jpg", ".jpeg", ".png"];
    const extensaoDoArquivo = path.extname(arquivo.originalname).toLowerCase();
    if (!extensoesPermitidas.includes(extensaoDoArquivo)) {
      throw {
        status: 400,
        mensagem: "Tipo de arquivo inválido! Apenas JPG, JPEG e PNG.",
      };
    }

    if (!nome || !descricao || preco === undefined) {
      throw {
        status: 400,
        mensagem: "Nome, descrição e preço são obrigatórios.",
      };
    }

    const precoNum = Number(preco);
    if (isNaN(precoNum) || precoNum <= 0) {
      throw { status: 400, mensagem: "Preço deve ser um número positivo." };
    }

    let disponivelDB = 1;
    if (disponivel === "false" || disponivel === false || disponivel === "0") {
      disponivelDB = 0;
    }

    const novoProduto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: precoNum,
      categoria: categoria ? categoria.trim() : null,
      disponivel: disponivelDB,
      foto_produto: arquivo.filename, // Salva o nome único gerado pelo Multer
    };

    const resultado = await ProdutoRepository.cadastrarProduto(novoProduto);

    return {
      sucesso: true,
      mensagem: "Produto cadastrado com sucesso!",
      id: resultado,
    };
  }

  // ============================================================ //

  async atualizarProduto(id, pacote) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    await this.buscarProdutoPorId(id);

    const { arquivo, corpo } = pacote;
    const { nome, descricao, preco, categoria, disponivel } = corpo;

    const produtoAtualizado = {};

    if (arquivo) {
      const tamanhoMaximo = 2 * 1024 * 1024;
      if (arquivo.size > tamanhoMaximo) {
        throw {
          status: 400,
          mensagem: "A imagem é muito grande! O limite é de 2MB.",
        };
      }

      const extensoesPermitidas = [".jpg", ".jpeg", ".png"];
      const extensaoDoArquivo = path
        .extname(arquivo.originalname)
        .toLowerCase();
      if (!extensoesPermitidas.includes(extensaoDoArquivo)) {
        throw {
          status: 400,
          mensagem: "Tipo de arquivo inválido! Apenas JPG, JPEG e PNG.",
        };
      }

      // Corrigido para bater com a coluna exata do banco SQL
      produtoAtualizado.foto_produto = arquivo.filename;
    }

    if (nome !== undefined && nome.trim() !== "")
      produtoAtualizado.nome = nome.trim();
    if (descricao !== undefined) produtoAtualizado.descricao = descricao.trim();

    if (preco !== undefined) {
      const precoNum = Number(preco);
      if (isNaN(precoNum) || precoNum <= 0) {
        throw { status: 400, mensagem: "Preço deve ser um número positivo." };
      }
      produtoAtualizado.preco = precoNum;
    }

    if (categoria !== undefined)
      produtoAtualizado.categoria = categoria ? categoria.trim() : null;

    if (disponivel !== undefined) {
      produtoAtualizado.disponivel =
        disponivel === "false" || disponivel === false || disponivel === "0"
          ? 0
          : 1;
    }

    if (Object.keys(produtoAtualizado).length === 0) {
      throw {
        status: 400,
        mensagem: "Nenhum dado válido enviado para a atualização.",
      };
    }

    await ProdutoRepository.atualizarProduto(id, produtoAtualizado);
    return { sucesso: true, mensagem: "Produto atualizado!" };
  }

  // ============================================================ //

  async deletarProduto(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    await this.buscarProdutoPorId(id);
    await ProdutoRepository.apagarProduto(id);
    return { sucesso: true, mensagem: "Produto apagado!" };
  }
}

module.exports = new ProdutoService();
