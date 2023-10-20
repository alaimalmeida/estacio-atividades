import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivros from '../../../classes/controle/ControleLivros';

const controleLivro = new ControleLivros();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'DELETE') {
    try {
      const codigo = Number(req.query.codigo);
      if (!isNaN(codigo)) {
        ControleLivros.excluir(codigo);
        res.status(200).json({ message: 'Livro excluído com sucesso' });
      } else {
        res.status(400).json({ error: 'Código de livro inválido' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Erro no servidor' });
    }
  } else {
    res.status(405).end();
  }
};
