import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CursoService } from '../services/curso.service';

@Component({
  selector: 'app-cadastrar-curso',
  templateUrl: './cadastrar-curso.component.html',
  styleUrl: './cadastrar-curso.component.scss'
})
export class CadastrarCursoComponent {

  public nomeCurso = '';
  public descricaoCurso = '';
  public coordenadorCurso = '';
  public mensalidadeCurso = '';
  public duracaoCurso = '';
  public vagasCurso = '';


  constructor(private router: Router, private cursoService: CursoService) {}

  public voltarPagina(){
    this.router.navigateByUrl('/');
  }

  public criarCurso(){

    if (!this.nomeCurso || !this.descricaoCurso || !this.coordenadorCurso || !this.mensalidadeCurso || !this.duracaoCurso || !this.vagasCurso) {
      alert('Preencha todos os campos antes de enviar o formulário.');
      return;
    }

    const novoCurso = {
      nome: this.nomeCurso,
      descricao: this.descricaoCurso,
      coordenador: this.coordenadorCurso,
      mensalidadeCurso: this.mensalidadeCurso,
      duracao: this.duracaoCurso,
      vagas: this.vagasCurso
    };

    this.cursoService.addCurso(novoCurso).subscribe({
      next: response => {
        console.log('Curso criado com sucesso:', response);
        alert("Curso Criado com Sucesso!!!");
        this.router.navigateByUrl('/');
      },
      error: error => {
        console.error('Erro ao criar curso:', error);
        // Trate o erro conforme necessário
      }
    });
  }

}
