export class Livro {
    [x: string]: any;
    map(arg0: (l: any) => any) {
      throw new Error('Method not implemented.');
    }
    codigo: number;
    codEditora: number;
    titulo: string;
    resumo: string;
    autores: string[];

    constructor(codigo: number, codEditora: number, titulo: string, resumo: string, autores: string[]) {
      this.codigo = codigo;
      this.codEditora = codEditora;
      this.titulo = titulo;
      this.resumo = resumo;
      this.autores = autores;
    }
  }
