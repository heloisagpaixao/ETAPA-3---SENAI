const express = require('express')
const pool = require('./config/database')

const app = express()
app.use(express.json())

app.get('/', (req,res) => {
    res.send("API CINEMA")
})

app.get('/filmes', (req,res) => {
    pool.query('SELECT * FROM filme', (err, results) =>{
        res.json(results)
    })
})

app.get('/filmes/:id', (req,res) => {
    const {id} = req.params

    pool.query('SELECT * FROM filme WHERE id = ?', [id],(err, results) =>{
        res.json(results)
    })
})

module.exports = app