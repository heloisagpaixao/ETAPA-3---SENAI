const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/produtoController");
const uploadImagem = require("../config/multer"); // Nosso arquivo do Multer

router.get("/", ProdutoController.listarProdutos);
router.get("/:id", ProdutoController.buscarProdutoPorId);
router.delete("/:id", ProdutoController.deletarProduto);

// Aplicando o Multer no POST e no PUT
router.post("/", uploadImagem, ProdutoController.cadastrarProduto);
router.put("/:id", uploadImagem, ProdutoController.atualizarProduto);

module.exports = router;
