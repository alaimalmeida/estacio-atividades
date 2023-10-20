import Editora from '../modelo/Editora';

const editoras: Editora[] = [
  new Editora(1, 'Alta Books'),
  new Editora(2, 'Bookaman'),
  new Editora(3, 'Addison Wesley'),
  new Editora(4, 'Pearson'),
];

class ControleEditora {
  static getEditoras() {
    return editoras;
  }

  static getNomeEditora(codEditora: number) {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}

export default ControleEditora;
