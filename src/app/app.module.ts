import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { CadastrarCursoComponent } from './cadastrar-curso/cadastrar-curso.component';
import { HttpClientModule } from '@angular/common/http';
import { InfoCursoComponent } from './info-curso/info-curso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditarCursoComponent } from './editar-curso/editar-curso.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarCursoComponent,
    InfoCursoComponent,
    EditarCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
