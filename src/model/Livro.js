import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
    {
        id: {type: String},
        titulo: {type: String, required: true},
        autor: {type: String, required: true},
        numeroPgs: {type: Number}
    }
)


const livros = mongoose.model('livro', livroSchema)

export default livros