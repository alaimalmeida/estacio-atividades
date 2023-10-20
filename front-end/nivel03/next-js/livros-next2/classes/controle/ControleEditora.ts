import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Bookman'),
  new Editora(3, 'Addison Wesley'),
  new Editora(3, 'Pearson'),
];

class ControleEditora {
  static useControleEditora() {
      throw new Error('Method not implemented.');
  }
  static getEditoras() {
    return editoras;
  }

  static getNomeEditora(codEditora: number) {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditora;
