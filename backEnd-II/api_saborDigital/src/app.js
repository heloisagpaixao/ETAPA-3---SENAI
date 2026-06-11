const express = require("express");
const path = require("path");
const app = express();
const routes = require("./routes");

// Middleware para ler JSON
app.use(express.json());

// Rotas da API
app.use("/", routes);

// Serve as imagens salvas na pasta raiz 'uploads' através da URL /arquivos/...
app.use("/arquivos", express.static(path.join(__dirname, "..", "uploads")));

module.exports = app;
