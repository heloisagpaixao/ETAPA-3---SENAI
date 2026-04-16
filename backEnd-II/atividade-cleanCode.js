function erroServidor() {
  console.error("Erro do servidor. Por favor aguarde e tente novamente.");
  res.status(500).json({
    sucesso: false,
    mensagem: `Erro ao listar usuários.`,
    erro: erro.message,
  });
}

// ============================================ //
// Exercício 1 - Usuários
// ============================================ //
function validarIdUsuario(id) {
  if (!id || isNaN(id)) {
    return "ID inváido.";
  }
}

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await queryAsync("SELECT * FROM usuarios");
    res.json({
      sucesso: true,
      dados: usuarios,
    });
  } catch (erroServidor) {}
});

app.get("/produtos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const erroValidacaoUsuario = validarIdUsuario(id);

    if (erroValida) {
      return res.status(400).json({
        sucesso: false,
        mensagem: `Erro ao encontrar usuário.`,
        erro: erro.message,
      });
    }

    const usuario = await queryAsync("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);
    if (usuario.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: `Usuário não encontrado.`,
        erro: erro.message,
      });
    }
    res.json({
      sucesso: true,
      dados: usuario[0],
    });
  } catch (erroServidor) {}
});

// ============================================ //
//Exercício 2 - Pedidos
// ============================================ //
function validarCliente(cliente) {
  if (!cliente) {
    return "O campo cliente é obrigatório.";
  }
}

function validarValor(valor) {
  if (!valor || isNaN(valor)) {
    return "Valor deve ser um número positivo.";
  }
}

app.post("/pedidos", async (req, res) => {
  try {
    const { cliente, valor } = req.body;
    const erroValidacaoCliente = validarCliente(cliente);
    const erroValidacaoValor = validarValor(valor);

    if (erroValidacaoCliente) {
      res.status(400).json({
        sucesso: false,
        mensagem: `Erro ao atualizar pedido.`,
        erro: erro.message,
      });
    }

    if (erroValidacaoValor) {
      res.status(400).json({
        sucesso: false,
        mensagem: `Erro ao atualizar pedido.`,
        erro: erro.message,
      });
    }

    const novoPedido = {
      cliente: cliente.trim(),
      valor,
    };

    await queryAsync("INSERT INTO pedidos SET ?", [novoPedido]);
    res.status(201).json({
      sucesso: true,
      mensagem: "Pedido cadastrado com sucesso.",
    });
  } catch (erroServidor) {}
});

// ============================================ //
//Exercício 3 - Salas
// ============================================ //
function validarIdSala(id) {
  if (!id || isNaN(id)) {
    return "ID inváido.";
  }
}

function validarDadosSala(dados) {
  if (!dados) {
    return "Dados inváidos.";
  }
}

app.put("/salas/:id", async (req, res) => {
  try {
    const id = req.params;
    const dados = req.body;
    const erroEncontrarSala = validarIdSala(id);

    if (erroEncontrarSala) {
      return res.status(400).json({
        sucesso: false,
        mensagem: `Erro ao encontrar sala.`,
        erro: erro.message,
      });
    }

    const salaExiste = await queryAsync("SELECT * FROM salas WHERE id = ?", [
      id,
    ]);

    if (salaExiste.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: `Erro ao encontrar sala.`,
        erro: erro.message,
      });
    }

    const erroValidacaoSala = validarDadosSala(dados);
    const salaAtualizada = {};
    if (erroValidacaoSala) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Dados inválidos para atualização.",
      });
    }
    if (Object.keys(salaAtualizada).length === 0) {
      return res.status(400).json({
        sucesso: false,
        mensagem: "Nenhum campo para atualizar.",
      });
    }
    salaAtualizada.dados = dados;

    await queryAsync("UPDATE salas SET ? WHERE id = ?", [dados, id]);
    res.json({
      sucesso: true,
      mensagem: "Sala atualizada.",
    });
  } catch (erroServidor) {}
});

app.delete("/salas/:id", async (req, res) => {
  const id = req.params;

  try {
    if (erroEncontrarSala) {
      return res.status(400).json({
        sucesso: false,
        mensagem: `Erro ao encontrar sala.`,
        erro: erro.message,
      });
    }

    const sala = await queryAsync("SELECT * FROM salas WHERE id = ?", [id]);

    if (sala.length === 0) {
      return res.status(404).json({
        sucesso: false,
        mensagem: `Erro ao encontrar sala.`,
        erro: erro.message,
      });
    }

    await queryAsync("DELETE FROM salas WHERE id = ?", [id]);
    res.status(200).json({
      sucesso: true,
      mensagem: "Sala apagada com sucesso!",
    });
  } catch (erroServidor) {}
});
