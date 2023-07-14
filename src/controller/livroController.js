import livros from "../model/Livro.js";
import livro from "../model/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            const livros = await livro.find()
            res.status(200).json(livros)
        } catch (erro) {
            console.error(erro)
            res.status(500).json({ error: "Ocorreu um erro ao buscar os livros." })
        }
    }
}

export default LivroController