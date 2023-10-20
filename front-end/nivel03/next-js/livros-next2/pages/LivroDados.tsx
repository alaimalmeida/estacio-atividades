import { useState } from 'react';
import Head from 'next/head';
import { Menu } from '../componentes/Menu';
import  ControleEditora  from '../classes/controle/ControleEditora';
import  Livro  from '../classes/modelo/Livro';

const baseURL = "http://localhost:3000/api/livros";

async function incluirLivro(livro: Livro) {
  const resposta = await fetch(baseURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(livro),
  });
  return resposta.ok;
}

export default function LivroDados() {
  const controleEditora = ControleEditora.useControleEditora();
  const opcoes = controleEditora.getEditoras().map((editora) => ({ value: editora.codEditora, text: editora.nome }));
  
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);

  const navigate = useNavigate(); //

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = async (event) => {
    event.preventDefault();
    const livro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };

    const sucesso = await incluirLivro(livro);
    if (sucesso) {
      navigate('/LivroLista'); 
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
      </Head>
      <Menu />
      <main>
        <h1>Adicionar Livro</h1>
        <form onSubmit={incluir}>
          <label>Título: 
            <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
          </label><br />

          <label>Resumo: 
            <textarea value={resumo} onChange={(e) => setResumo(e.target.value)} />
          </label><br />

          <label>Autores (separados por linha): 
            <textarea value={autores} onChange={(e) => setAutores(e.target.value)} />
          </label><br />

          <label>Editora: 
            <select value={codEditora} onChange={tratarCombo}>
              {opcoes.map((opcao) => (
                <option key={opcao.value} value={opcao.value}>
                  {opcao.text}
                </option>
              ))}
            </select>
          </label><br />

          <button type="submit">Incluir</button>
        </form>
      </main>
    </div>
  );
}
