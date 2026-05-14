const express = require("express")
const router = express.Router() //  responsável por verificar o endereçamento
const PedidoController = require("../controllers/pedidoController")

router.get("/", PedidoController.listarPedidos) // NÃO precisa mandar os atributos (req, res)
router.get("/:id", PedidoController.buscarPedidoPorId)
router.post("/", PedidoController.cadastrarPedido)
router.put("/:id", PedidoController.atualizarPedido)
router.delete("/:id", PedidoController.deletarPedido)

module.exports = router 