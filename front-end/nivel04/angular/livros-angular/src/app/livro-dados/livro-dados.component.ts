import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditoraService } from '../controle-editora.service';
import { ControleLivrosService } from '../controle-livros.service';
import { Livro } from '../livro';
import { Editora } from '../editora';

@Component({
  selector: 'app-livro-dados',
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css'],
})
export class LivroDadosComponent implements OnInit {
  public livro!: Livro;
  public autoresForm: string = '';
  public editoras: Array<Editora> = [];
  editora!: Editora[];

  constructor(
    private servEditora: ControleEditoraService,
    private servLivros: ControleLivrosService,
    private router: Router
  ) {}

  ngOnInit() {
    // this.servEditora.getEditoras().subscribe((editora: Array<Editora>) => {
    //   this.editora = editora;
    // });
  }

  incluir = () => {
    this.livro.autores = this.autoresForm.split('\n');
    this.servLivros.incluir(this.livro);
    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}
