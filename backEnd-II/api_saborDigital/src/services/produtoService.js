const ProdutoRepository = require("../repositories/produtoRepository");
const path = require("path");

class ProdutoService {
  async listarProdutos() {
    const produtos = await ProdutoRepository.listarProdutos();
    return { sucesso: true, dados: produtos, total: produtos.length };
  }

  // =============================================================== //
  // CORRIGIDO: Agora recebe o parâmetro 'id' corretamente nos parênteses
  async buscarProdutoPorId(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    const produto = await ProdutoRepository.buscarProdutoPorId(id);

    if (!produto) {
      throw { status: 404, mensagem: "Produto não encontrado." };
    }

    return { sucesso: true, dados: produto[0] };
  }

  // =============================================================== //
  // REFEITO: Centralizando erros e validações de imagem no Cadastro
  async cadastrarProduto(pacote) {
    const { imagem, corpo } = pacote;
    const { nome, descricao, preco, categoria, disponivel } = corpo;

    // --- Validações de Imagem Obrigatória ---
    if (!imagem) {
      throw { status: 400, mensagem: "A imagem do produto é obrigatória." };
    }

    // Limite de tamanho: 2 Megabytes
    const tamanhoMaximo = 2 * 1024 * 1024;
    if (imagem.size > tamanhoMaximo) {
      throw {
        status: 400,
        mensagem: "A imagem é muito grande! O limite é de 2MB.",
      };
    }

    // Validação de Extensão
    const extensoesPermitidas = [".jpg", ".jpeg", ".png"];
    const extensaoDoArquivo = path.extname(imagem.originalname).toLowerCase();
    if (!extensoesPermitidas.includes(extensaoDoArquivo)) {
      throw {
        status: 400,
        mensagem:
          "Tipo de arquivo inválido! Apenas JPG, JPEG e PNG são permitidos.",
      };
    }

    if (!nome || !descricao || preco === undefined) {
      throw {
        status: 400,
        mensagem: "Nome, descrição e preço são obrigatórios.",
      };
    }

    // Como o form-data envia tudo como texto, convertemos o preço para número
    const precoNum = Number(preco);
    if (isNaN(precoNum) || precoNum <= 0) {
      throw { status: 400, mensagem: "Preço deve ser um número positivo." };
    }

    // Cria a string da URL virtual para salvar no banco
    const foto_produto = `/arquivos/${arquivo.filename}`;

    const novoProduto = {
      nome: nome.trim(),
      descricao: descricao.trim(),
      preco: precoNum,
      categoria: categoria || null,
      disponivel: disponivel || true,
      foto_produto: foto_produto, // Lembrar de ter essa coluna idêntica no MySQL
    };

    const resultado = await ProdutoRepository.cadastrarProduto(novoProduto);

    return {
      sucesso: true,
      mensagem: "Produto cadastrado com sucesso!",
      resultado,
    };
  }

  // =============================================================== //
  // REFEITO: Centralizando erros e validações de imagem na Atualização
  async atualizarProduto(id, pacote) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    const produtoId = await ProdutoRepository.buscarProdutoPorId(id);
    if (!produtoId) {
      throw { status: 404, mensagem: "Produto não encontrado." };
    }

    const { arquivo, corpo } = pacote;
    const { nome, descricao, preco, categoria, disponivel } = corpo;

    const produtoAtualizado = {};

    // --- Validações de Imagem (só roda se uma imagem for enviada) ---
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
          imagem:
            "Tipo de arquivo inválido! Apenas JPG, JPEG e PNG são permitidos.",
        };
      }

      // Se a imagem for válida, adiciona no objeto de alteração
      produtoAtualizado.imagem_url = `/arquivos/${arquivo.filename}`;
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

    if (categoria !== undefined) produtoAtualizado.categoria = categoria;
    if (disponivel !== undefined) produtoAtualizado.disponivel = disponivel;

    if (Object.keys(produtoAtualizado).length === 0) {
      throw {
        status: 400,
        mensagem: "Nenhum dado válido enviado para a atualização.",
      };
    }

    await ProdutoRepository.atualizarProduto(id, produtoAtualizado);
    return { sucesso: true, mensagem: "Produto atualizado!" };
  }

  // =============================================================== //

  async deletarProduto(id) {
    if (!id || isNaN(id)) {
      throw { status: 400, mensagem: "ID inválido." };
    }

    const idProduto = await ProdutoRepository.buscarProdutoPorId(id);
    if (!idProduto) {
      throw { status: 404, Extensao: "Produto não encontrado." };
    }

    await ProdutoRepository.apagarProduto(id);
    return { sucesso: true, mensagem: "Produto apagado!" };
  }
}

module.exports = new ProdutoService();
