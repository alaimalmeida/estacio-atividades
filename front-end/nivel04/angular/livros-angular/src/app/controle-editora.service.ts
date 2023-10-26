import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditoraService {
  getEditora() {
    throw new Error('Method not implemented.');
  }
  editoras: Array<Editora> = [
    new Editora(1, 'Alta Books'),
    new Editora(2, 'Bookaman'),
    new Editora(3, 'Addison Wesley'),
    new Editora(4, 'Pearson'),
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : '';
  }
}
