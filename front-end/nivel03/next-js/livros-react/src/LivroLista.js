import React, { useState, useEffect } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditora from './controle/ControleEditora';

function LinhaLivro({ livro, excluir }) {
    const nomeEditora = ControleEditora.getNomeEditora(livro.codEditora);

    return (
        <tr class='botao'>
            <td>{livro.titulo} <br />
                <span class='botao'>
                    <button  onClick={() => excluir(livro.codigo)}>Excluir</button>
                </span>
            </td>
            <td>{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
}

function LivroLista() {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        setLivros(ControleLivros.obterLivros());
        setCarregado(true);
    }, [carregado]);

    const excluir = (codigo) => {
        ControleLivros.excluir(codigo);
        setCarregado(false);
    };

    return (
        <main class="conteudo">
            <h1>Catálogo de Livros</h1>
            <table class='col-md-9'>
                <thead class='titulo-tabela'>
                    <tr class="titulo">
                        <th class="botao">Título</th>
                        <th>Resumo</th>
                        <th>Editora</th>
                        <th>Autor(es)</th>
                    </tr>
                </thead>
                <tbody class="secao_livro">
                    {livros.map((livro) => (
                        <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
}

export default LivroLista;
