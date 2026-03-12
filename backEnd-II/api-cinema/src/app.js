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

app.get('/filmes', async(req,res) => {
    try{
        const filmes = await queryAsync('SELECT * FROM filme')
        res.json({
            sucesso: true,
            dados: filmes,
            total: filmes.length
        })
    } catch (erro) {
        console.error(`Erro ao listar filmes: ${erro}.`)
        res.status(500).json({
            sucesso: false,
            mensagem: `Erro ao listar filmes.`,
            erro: erro.message
        })
        
    }
    // pool.query('SELECT * FROM filme', (err, results) =>{
    //     res.json(results)
    // })
})

// app.get('/filmes/:id', async(req,res) => {
//     try{
//         const {id} = req.params
//         if(!id ||  isNaN(id)){
//             return res.status(400).json({
//                 sucesso: false,
//                 mensagem: `ID de filme inválido!`
//             })
//         }
//         const filme = await query.async(`SELECT * FROM filme WHERE id = ?`,[id])
//         if (filme.length === 0){
//             return res.status (404).json({
//                 sucesso: false,
//                 mensagem: `Filme não encontrado.`
//             })
//         }
//         res.json({
//             sucesso: true,
//             dados: filme[0]
//         })
//     } catch (erro) {
//         console.error(`Erro ao encontrar filme: ${erro}.`)
//         res.status(500).json({
//             sucesso: false,
//             mensagem: `Erro ao encontrar filme.`,
//             erro: erro.message
//         })
//     }
//     // const {id} = req.params

//     // pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
//     //     res.json(results)
//     // })
// })

app.get('/filmes/:id', async (req, res) => {
    try {
        const { id } = req.params

        if (!id || isNaN(id)) {
            return res.status(400).json({
                sucesso: false,
                mensagem: 'ID de filme inválido.'
            })
        }

        const filme = await queryAsync('SELECT * FROM filme WHERE id = ?', [id])

        if (filme.length === 0) {
            return res.status(404).json({
                sucesso: false,
                mensagem: 'Filme não encontrado'
            })
        }

        res.json({
            sucesso: true,
            dados: filme[0]
        })

    } catch (erro) {
        console.error('Erro ao encontrar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao encontrar filme',
            erro: erro.message
        })
    }
})

app.post('/filmes', async(req,res) =>{
    try {
        const {titulo, genero, duracao, classificacao, data_lancamento} = req.body

        if(!titulo || !genero || !duracao){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Título, genero e ducação são obrigatórios'
            })
        }

        if(typeof duracao !== 'number' || duracao <= 0 ){
            return res.status(400).json({
                sucesso: false,
                mensagem: 'Duração deve ser um número positivo.'
            })
        }

        const novoFilme = {
            titulo: titulo.trim(),
            genero: genero.trim(),
            duracao,
            classificacao: classificacao || null,
            data_lancamento: data_lancamento || null
        }

        const resultado = await queryAsync('INSERT INTO filme SET ?',[novoFilme])

        res.status(201).json({
            sucesso: true,
            mensagem: 'Filme cadastrado com sucesso.',
            id: resultado.insertId
        })
    } catch (erro) {
        console.error('Erro ao salvar filme:', erro)
        res.status(500).json({
            sucesso: false,
            mensagem: 'Erro ao salvar filme.',
            erro: erro.message
        })
    }
} )

module.exports = app