import Livro from '../modelo/Livro';

const livros: Livro[] = [
  new Livro(1, 1, 'Livro 1', 'Resumo do Livro 1', ['Autor 1', 'Autor 2']),
  new Livro(2, 2, 'Livro 2', 'Resumo do Livro 2', ['Autor 3', 'Autor 4']),
  new Livro(3, 3, 'Livro 3', 'Resumo do Livro 3', ['Autor 5', 'Autor 6']),
];

class ControleLivros {
  static obterLivros() {
    return livros;
  }

  static incluir(livro: Livro) {
    const codigo = Math.max(...livros.map((l) => l.codigo)) + 1;
    livro.codigo = codigo;
    livros.push(livro);
  }

  static excluir(codigo: number) {
    const index = livros.findIndex((l) => l.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
