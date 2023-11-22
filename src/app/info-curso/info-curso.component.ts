import { Component, OnInit, TemplateRef, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '../services/curso.service';
import { ModalDismissReasons, NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-info-curso',
  templateUrl: './info-curso.component.html',
  styleUrl: './info-curso.component.scss'
})
export class InfoCursoComponent  implements OnInit {
  public voltarParaBusca(){
    this.router.navigateByUrl('/');
  }

  

  public disciplinaSalva: any = {};

  public async addDiciplinaInCurso() {
    try {
        const disciplinas = await this.cursoService.getDisciplinasById(this.selectedDisciplina).toPromise();
        this.disciplinaSalva = disciplinas;

        const cursoDisciplinaObject = {
            curso: {
                id: this.dadosRecebido.id,
                nome: this.dadosRecebido.nome,
                descricao: this.dadosRecebido.descricao,
                coordenador: this.dadosRecebido.coordenador,
                mensalidadeCurso: this.dadosRecebido.mensalidadeCurso,
                duracao: this.dadosRecebido.duracao,
                vagas: this.dadosRecebido.vagas
            },
            disciplina: {
                id: this.disciplinaSalva.id,
                nome: this.disciplinaSalva.nome,
                professor: this.disciplinaSalva.professor,
                cargaHoraria: this.disciplinaSalva.cargaHoraria,
                tipoDisciplina: this.disciplinaSalva.tipoDisciplina,
                modalidade: this.disciplinaSalva.modalidade
            }
        };

        this.cursoService.addCursoDisciplina(cursoDisciplinaObject).subscribe({
            next: response => {
                console.log('Curso criado com sucesso:', response);
                alert("Disciplina Adicionada");
                this.getDisciplinaInCurso();
            },
            error: error => {
                console.error('Erro ao criar curso:', error);
                // Trate o erro conforme necessário
            }
        });
    } catch (error) {
        console.error('Erro ao obter disciplinas:', error);
    }
}


  public dadosRecebido: any = {};

  public disciplinasCurso: any[] = [];


  constructor(private cursoService: CursoService,
    private router: Router, private route: ActivatedRoute) {}



    public deletarCurso(){
      this.cursoService.deleteCurso(this.dadosRecebido.id).subscribe(
        (response) => {
          // Tratar a resposta de sucesso, se necessário
          alert('Curso excluído com sucesso:');
          this.router.navigateByUrl('/');
        },
        (error) => {
          // Tratar o erro, se necessário
          console.error('Erro ao excluir curso:', error);
        }
      );
    }

    public deleteRelacao(disciplinaId: any){
      this.cursoService.deleterelacao(this.dadosRecebido.id, disciplinaId).subscribe(
        (response) => {
          // Tratar a resposta de sucesso, se necessário
          alert('Disciplina excluído do curso');
          this.getDisciplinaInCurso();
        },
        (error) => {
          // Tratar o erro, se necessário
          console.error('Erro ao excluir curso:', error);
        }
      );
    }

    public deletarCursoRelacionadoDiscplina(){
      if(this.disciplinas.length){
        this.cursoService.deleteRelacaoDisciplinainCurso(this.dadosRecebido.id).subscribe(
          (response) => {
            this.deletarCurso();
            // Tratar a resposta de sucesso, se necessário
            console.log('Curso excluído com sucesso:', response);
          },
          (error) => {
            this.deletarCurso();
            // Tratar o erro, se necessário
            console.error('Erro ao excluir curso:', error);
          }
        );
      }else{
        this.deletarCurso();
      }
    }

    public selectedDisciplina = '';



  ngOnInit(): void {
     this.cursoService.getDisciplinas().subscribe(disciplinas => {
      this.disciplinas = disciplinas;
    });

    this.route.queryParams.subscribe(params => {
      this.dadosRecebido = JSON.parse(params['curso']);
    });

    this.getDisciplinaInCurso();
  }

  public disciplinas: any[] = [];

  public addDiciplina = true;

  private getDisciplinaInCurso() {
    this.cursoService.getDisciplinaByCursoId(this.dadosRecebido.id).subscribe(data => {
      this.disciplinasCurso = data;
      console.log(this.disciplinasCurso);
    });
  }

  public exibirAddDisciplina(){
    this.addDiciplina = false;
  }

  public deletarDisciplina(disciplina: any){
    
  }
}
