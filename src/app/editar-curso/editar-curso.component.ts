import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrl: './editar-curso.component.scss'
})
export class EditarCursoComponent implements OnInit{

  public cursoEditado: any = [];

  public nomeCurso = '';
  public descricaoCurso = '';
  public coordenadorCurso = '';
  public mensalidadeCurso = '';
  public duracaoCurso = '';
  public vagasCurso = '';

  public cursoId = '';


  constructor(private router: Router, private cursoService: CursoService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.cursoId = JSON.parse(params['cursoId']);
    });

    this.cursoService.getCursosById(this.cursoId).subscribe(curso => {
      this.cursoEditado = curso;
      this.preencherCampos();
    })
  }
  preencherCampos() {
    this.nomeCurso = this.cursoEditado.nome;
    this.descricaoCurso = this.cursoEditado.descricao;
    this.coordenadorCurso = this.cursoEditado.coordenador;
    this.mensalidadeCurso = this.cursoEditado.mensalidadeCurso;
    this.duracaoCurso = this.cursoEditado.duracao;
    this.vagasCurso = this.cursoEditado.vagas;
  }

  public voltarPagina() {
    this.router.navigateByUrl('/');
  }

  public editarCurso() {
    if (!this.nomeCurso || !this.descricaoCurso || !this.coordenadorCurso || !this.mensalidadeCurso || !this.duracaoCurso || !this.vagasCurso) {
      alert('Preencha todos os campos antes de enviar o formulário.');
      return;
    }

    const curso = {
      id: this.cursoEditado.id,
      nome: this.nomeCurso,
      descricao: this.descricaoCurso,
      coordenador: this.coordenadorCurso,
      mensalidadeCurso: this.mensalidadeCurso,
      duracao: this.duracaoCurso,
      vagas: this.vagasCurso
    };

    this.cursoService.putCurso(curso).subscribe({
      next: response => {
        console.log('Curso editado com sucesso:', response);
        alert("Curso editado com Sucesso!!!");
        this.router.navigateByUrl('/');
      },
      error: error => {
        console.error('Erro ao criar curso:', error);
        // Trate o erro conforme necessário
      }
    });
  }
}
