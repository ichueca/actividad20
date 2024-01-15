import { Component } from '@angular/core';
import { Programa } from '../../app/interfaces/programa.interface';
import { ProgramaComponent } from "../programa/programa.component";
import { SeriesService } from '../../servicios/series.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-shows',
  standalone: true,
  templateUrl: './lista-shows.component.html',
  styles: ``,
  imports: [ProgramaComponent]
})
export class ListaShowsComponent {
  public programas: Programa[] = [];

  constructor(private service: SeriesService,
    ruta: ActivatedRoute) {
    ruta.params.subscribe(param => {
      this.service.buscarProgramas(param['texto'])
        .subscribe(datos => {
          datos.forEach(
            d => this.programas.push(d.show)
          );
        })
    })


  }



}
