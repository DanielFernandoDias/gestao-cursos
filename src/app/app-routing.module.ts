import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cadastrar-curso', component: CadastrarCursoComponent },
  { path: 'editar-curso', component: EditarCursoComponent },
  { path: 'info-curso', component: InfoCursoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
