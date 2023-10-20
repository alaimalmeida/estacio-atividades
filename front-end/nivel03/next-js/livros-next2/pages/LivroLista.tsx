import { useState, useEffect } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import { LinhaLivro } from '../componentes/LinhaLivro';
import  Livro  from '../classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

async function obter() {
  const resposta = await fetch(baseURL);
  return resposta.json();
}

async function excluirLivro(codigo: number) {
  const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
  return resposta.ok;
}

export default function LivroLista() {
  const [livros, setLivros] = useState<Array<Livro>>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    obter().then((data) => {
      setLivros(data);
      setCarregado(true);
    });
  }, [carregado]);

  const excluir = async (codigo: number) => {
    const sucesso = await excluirLivro(codigo);
    if (sucesso) {
      setCarregado(false);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1>Página Inicial</h1>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Autor</th>
              <th>Editora</th>
              <th>Ano de Publicação</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {livros.map((livro) => (
              <LinhaLivro key={livro.codigo} livro={livro} excluir={() => excluir(livro.codigo)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
