import { Component, Input } from '@angular/core';
import { Episodio } from '../../app/interfaces/episodio.interface';
import { SeriesService } from '../../servicios/series.service';
import { EpisodioComponent } from "../episodio/episodio.component";

@Component({
    selector: 'app-lista-episodios',
    standalone: true,
    templateUrl: './lista-episodios.component.html',
    styles: ``,
    imports: [EpisodioComponent]
})
export class ListaEpisodiosComponent {
  @Input() episodios:Episodio[] = [];

  constructor(private servicio:SeriesService){
    this.servicio.getEpisodios().subscribe(
      datos => {
        this.episodios = datos;
        console.log(this.episodios);
      }

    )
  }
}
