const express = require('express')
const pool = require('./config/database')

const app = express()
app.use(express.json())

const queryAsync=(sql, values = []) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if(err) reject(err)
            else resolve(results)
        })
    })
}

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

app.get('/salas', async(req,res) => {
    try{
        const salas = await queryAsync('SELECT * FROM sala')
        res.json({
            sucesso: true,
            dados: salas,
            total: salas.length
        })
    } catch (erro) {
        console.error(`Erro ao listar salas: ${erro}.`)
        res.status(500).json({
            sucesso: false,
            mensagem: `Erro ao listar salas.`,
            erro: erro.message
        })
        
    }
    // pool.query('SELECT * FROM filme', (err, results) =>{
    //     res.json(results)
    // })
})

app.get('/salas/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID da sala inválida.'
            })
        }

        const sala = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])

        if (sala.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrada.'
            })
        }

        res.json({
            sucesso: true,
            dados: sala[0]
        })

    } catch (erro) {
        console.error('Erro ao encontrar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao encontrar sala.',
            erro: erro.message
        })
    }
})

app.post('/salas', async(req,res) => {
    try {
        const {nome, capacidade} = req.body

        if(!nome || !capacidade){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nome da sala é obrigatória!'
            })
        }

        if(typeof capacidade !== 'number' || capacidade <= 0 ){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'A capacidade deve ser um número positivo.'
            })
        }

        const novaSala = {
            nome: nome.trim(),
            capacidade: capacidade
        }

        const resultado = await queryAsync('INSERT INTO sala SET ?',[novaSala])

        res.status(201).json({
            sucesso: true,
            mensagem: 'Sala cadastrada com sucesso.',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao salvar sala:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao salvar sala.',
            erro: erro.message
        })
    }
} )

app.put('/salas/:id', async (req,res) =>{
    try {
        const {id} = req.params
        const {nome, capacidade} = req.body

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de sala inválido.'
            })
        }

        const salaExiste = await queryAsync('SELECT * FROM sala WHERE id = ?', [id])
       
        if(salaExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Sala não encontrada.'
            })
        }

        const salaAtualizada = {}

////////////////////////////////////////////////////////////////////////////////////
        
        if(titulo !== undefined) filmeAtualizado.titulo = titulo.trim()
        if(genero !== undefined) filmeAtualizado.genero = genero.trim()
        if(duracao !== undefined){
            if(typeof duracao !== 'number' || duracao <= 0){
                return res.status(400).json({
                    sucesso: false,
                    mensagem: 'Duracao deve ser um número positivo.'
                })
            }
            filmeAtualizado.duracao = duracao
        }
        if(classificacao !== undefined) filmeAtualizado.classificacao = classificacao
        if(data_lancamento !== undefined) filmeAtualizado.data_lancamento = data_lancamento

        if(Object.keys(filmeAtualizado).length === 0){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Nenhum campo para atualizar'
            })
        }

        await queryAsync('UPDATE filme SET ? WHERE id = ?',[filmeAtualizado, id])
        res.json({
            sucesso: true,
            mensagem: 'Filme atualizado.'
        })

    } catch (erro) {
        console.error('Erro ao atualizar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao atualizar filme.',
            erro: erro.message
        })
    }
})

app.delete('/filmes/:id', async (req,res) =>{
    try {
        const {id} = req.params

        if(!id || isNaN(id)){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID filme inválido.'
            })
        }

        const filmeExiste = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])
       
        if(filmeExiste.length === 0){
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado.'
            })
        }

        await queryAsync('DELETE FROM filme WHERE id = ?', [id])

        res.status(200).json({
            sucesso: true,
            mensagem:'Filme apagado'
        })
    } catch (erro) {
        console.error('Erro ao apagar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao apagar filme.',
            erro: erro.message
        })
    }
})

module.exports = app