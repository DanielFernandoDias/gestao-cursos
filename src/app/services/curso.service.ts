import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private apiUrl = 'http://localhost:8080/api/';
  private pathCursoGet = 'curso/get';
  private pathCursoPost = 'curso/post';
  private pathCursoDelete = 'curso';
  private pathDisciplinaByCursoId = 'cursoDisciplina/deleteRelacoesByCursoId'
  private pathDisciplinaGet = 'disciplina/get';
  private pathCursosByDisciplina = 'cursoDisciplina/cursos';
  private pathDisciplinaByCursos = 'cursoDisciplina/disciplina';
  private pathDisciplinaCursosPost = 'cursoDisciplina/post';
  private pathCursoPut = "curso";
  private pathCursoDeleteRelacao = "cursoDisciplina/deleteRelacao";

  constructor(private http: HttpClient) {}

  getCursos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathCursoGet);
  }

  putCurso(curso: any): Observable<any> {
    const url = `${this.apiUrl+this.pathCursoPut}/${curso.id}`; // Monta a URL com o id do curso a ser atualizado
    return this.http.put(url, curso);
  }

  getDisciplinas(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathDisciplinaGet);
  }

  getDisciplinasById(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathDisciplinaGet + '/'+ id);
  }

  getCursosByDisciplinaId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathCursosByDisciplina+ '/'+ id);
  }


  getCursosById(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathCursoGet+ '/'+ id);
  }
  
  deleteCurso(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${this.pathCursoDelete}/${id}`);
  }

  deleterelacao(cursoId: any, disciplinaId:any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${this.pathCursoDeleteRelacao}/${cursoId}/${disciplinaId}`);
  }

  deleteRelacaoDisciplinainCurso(id: any): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}${this.pathDisciplinaByCursoId}/${id}`);
  }

  getDisciplinaByCursoId(id: any): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+this.pathDisciplinaByCursos+ '/'+ id);
  }

  addCurso(curso: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+this.pathCursoPost, curso);
  }

  addCursoDisciplina(curso: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+this.pathDisciplinaCursosPost, curso);
  }
}
