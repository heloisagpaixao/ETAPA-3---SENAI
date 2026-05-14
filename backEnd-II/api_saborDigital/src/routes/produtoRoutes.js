const express = require("express")
const router = express.Router() //  responsável por verificar o endereçamento
const ProdutoController = require("../controllers/produtoController")

router.get("/", ProdutoController.listarProdutos) // NÃO precisa mandar os atributos (req, res)
router.get("/:id", ProdutoController.buscarProdutoPorId)
router.post("/", ProdutoController.cadastrarProduto)
router.put("/:id", ProdutoController.atualizarProduto)
router.delete("/:id", ProdutoController.deletarProduto)

module.exports = router 