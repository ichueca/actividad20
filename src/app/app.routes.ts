import { Routes } from '@angular/router';
import { ListaEpisodiosComponent } from '../componentes/lista-episodios/lista-episodios.component';
import { ProgramaComponent } from '../componentes/programa/programa.component';
import { ListaShowsComponent } from '../componentes/lista-shows/lista-shows.component';

export const routes: Routes = [
  {path:'episodios', component: ListaEpisodiosComponent},
  {path:'programas/:id', component: ProgramaComponent},
  {path:'buscar/:texto', component: ListaShowsComponent},
  {path:'**', redirectTo:"episodios"}
];
