const app = require("./app");
const pool = require("./config/database");

const PORT = 3000;

// Testando a conexão usando Promises (compatível com mysql2/promise)
pool
  .getConnection()
  .then((connection) => {
    console.log("Conectado ao MySQL com sucesso!");
    connection.release(); // Libera a conexão de volta para o pool

    // Inicia o servidor após garantir que o banco está online
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Erro ao conectar no banco de dados:", err.message);
    process.exit(1);
  });
