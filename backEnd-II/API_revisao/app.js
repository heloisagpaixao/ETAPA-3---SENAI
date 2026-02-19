import express from "express"
import { getEnvironmentData } from "node:worker_threads"

const app = express()

app.use (express.json())

const musicas = [
    {
        id: 12,
        titulo: "Chicago",
        artista: "Michael Jackson",
        genero: "pop",
        ano_publicacao: 1999
    }
]

function buscarMusica(id){
    return musicas.findIndex(m => {
        return m.id === Number(id)
    })
}

app.get("/", (req, res) => {
    res.status(200).send("CRUD Músicas")
})

app.get("/musicas", (req, res) => {
    res.status(200).json(musicas)
})

app.get("/musicas/:id", (req, res) => {
    const index = buscarMusica(req.params.id)
    res.status(200).json(musicas[index])
})

app.post("/musicas", (req, res) => {
    musicas.push(req.body)
    res.status(200).json(musicas[index])
})

export default app

