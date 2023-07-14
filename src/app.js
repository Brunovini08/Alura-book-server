import express, {json} from "express"
import mongoose from "mongoose";
import db from "./config/dbConnect.js";
import livros from "./model/Livro.js";
import livro from "./model/Livro.js";
const app = express()

db.on("error", console.log.bind(console, 'erro de conexão'))
db.once("open", () => {
    console.log("Conectado com mongoDB")
})



app.use(express.json())

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.json(livros)
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.json(livros)
})

app.get('/livros/:id', (req, res) =>{
    let index = buscaLivro(req.params.id)
    res.json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros.splice(index, 1)
    res.json(livros)
})

function buscaLivro(id) {
    livros.findIndex(livro => livro.id === id)
}

app.listen(3000, () => {
    console.log("rodando")
})
