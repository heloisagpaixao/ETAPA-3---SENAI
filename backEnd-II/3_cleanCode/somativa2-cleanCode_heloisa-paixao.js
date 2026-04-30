// =============================================================================
// ROTA DE AGENDAMENTOS
// =============================================================================

const validarExistencia = (reserva, res) => {
  if (reserva.length === 0) {
    mensagem(res);
    return false;
  }
  return true;
};

const validarSala = (sala, res) => {
  if (sala <= 0) {
    res.status(400).json({
      sucesso: false,
      mensagem: "Sala deve ser um número positivo.",
    });
    return false;
  }
  return true;
};

// RN: Não é possível deixar a data vazia ou menor que a de agora.
const validarDataHoje = (data, res) => {
  if (data === "") {
    res.status(400).json({
      sucesso: false,
      mensagem: "Data deve ser colocada com antecedência.",
    });
    return false;
  }
  return true;
};

const validarDadosAtualizados = (dadosDaReserva, res) => {
  if (Object.keys(dadosDaReserva).length === 0) {
    res.status(400).json({
      sucesso: false,
      mensagem: "Nenhum dado enviado.",
    });
    return false;
  }
  return true;
};

app.put("/reservas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const dadosDaReserva = req.body;

    const reserva = await queryAsync("SELECT * FROM reservas WHERE id = ?", [
      id,
    ]);

    if (!validarExistencia(reserva, res)) {
      return;
    }

    if (!validarSala(dadosDaReserva.sala, res)) {
      return;
    }

    if (!validarDataHoje(dadosDaReserva.data, res)) {
      return;
    }

    if (!validarDadosAtualizados(dadosDaReserva, res)) {
      return;
    }

    await queryAsync("UPDATE reservas SET ? WHERE id = ?", [
      dadosDaReserva,
      id,
    ]);

    res.status(200).json({
      sucesso: true,
      mensagem: "Reserva de sala atualizada!",
    });

  } catch (erro) {
    res.status(500).json({
      sucesso: false,
      mensagem: erro,
    });
  }
});

// NOTA: Fazer o filtro de busca por data.
