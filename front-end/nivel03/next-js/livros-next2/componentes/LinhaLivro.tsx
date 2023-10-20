import React from 'react';
import Livro from '../classes/modelo/Livro';
import ControleEditora  from '../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const { livro, excluir } = props;
  
  return (
    <tr>
      <td>{livro.codigo}</td>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{ControleEditora.getNomeEditora(livro.codEditora)}</td>
      <td>
        <button className="btn btn-danger" onClick={excluir}>
          Excluir
        </button>
      </td>
    </tr>
  );
};
