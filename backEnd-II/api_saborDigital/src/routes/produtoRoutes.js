const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/produtoController");
const uploadImagem = require("../config/multer"); // Já é o middleware pronto!

router.get("/", ProdutoController.listarProdutos);
router.get("/:id", ProdutoController.buscarProdutoPorId);
router.delete("/:id", ProdutoController.deletarProduto);

// Aplicando o middleware do multer diretamente nas rotas que recebem arquivos
router.post("/", uploadImagem, ProdutoController.cadastrarProduto);
router.put("/:id", uploadImagem, ProdutoController.atualizarProduto);

module.exports = router;
