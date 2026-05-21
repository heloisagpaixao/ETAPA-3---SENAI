const express = require("express");
const path = require("path"); // 1. ADICIONE ESTA LINHA SE NÃO EXISTIR
const app = express();
const routes = require("./routes");

app.use(express.json());

app.use("/", routes);

app.use("/arquivos", express.static(path.join(__dirname, "uploads")));

module.exports = app;
