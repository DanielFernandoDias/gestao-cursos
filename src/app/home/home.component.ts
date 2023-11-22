import { Component, OnInit } from '@angular/core';
import { CursoService } from '../services/curso.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public cursos : any[] = [];
  public disciplinas : any[] = [];
  public novoCurso: any = {}; 

  public mostrarCurso : any = {};

  public inputSelecionado: string = '';

  public cursoEscolhido = 0;
  public disciplinaEscolhido = '';

  constructor(private cursoService: CursoService, private router: Router) {}


  ngOnInit(): void {
    this.carregarCursos();
    this.carregarDisciplinas();
  }

  public carregarCursos(): void {
    this.cursoService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  public carregarDisciplinas(): void {
    this.cursoService.getDisciplinas().subscribe(data => {
      this.disciplinas = data;
    });
  }

  public adicionarCurso(): void {
    this.cursoService.addCurso(this.novoCurso).subscribe(() => {
      // Limpar o formulário ou realizar outras ações após a adição bem-sucedida
      this.novoCurso = {};
    });
  }

  public mostrarCursoDisciplina : any[] = [];

  public mensagemNenhumCurso = false;

  public buscar() {
    this.mostrarCurso = {};
    this.mostrarCursoDisciplina = [];
    if(this.inputSelecionado === "curso"){
    this.mensagemNenhumCurso = false;
    this.cursoService.getCursosById(this.cursoEscolhido).subscribe(data => {
      this.mostrarCurso = data;
    });
  }
  if(this.inputSelecionado === "disciplina"){
    this.mensagemNenhumCurso = true;
    this.mostrarCurso = {};
    this.cursoService.getCursosByDisciplinaId(this.disciplinaEscolhido).subscribe(data => {
      this.mostrarCursoDisciplina = data;
    });
  }
  }

  public criarNovoCurso() {
    // Lógica para redirecionar para o formulário de novo curso
    this.router.navigate(['/cadastrar-curso']);
  }

  public editarCurso(): void {
    this.router.navigate(['/editar-curso'], {queryParams: {cursoId: this.cursoEscolhido}});
  }

  public acessarCurso(){
    this.router.navigate(['/info-curso'], { queryParams: { curso: JSON.stringify(this.mostrarCurso) } });
  }
}
