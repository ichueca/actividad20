import { Component, Input } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeriesService } from '../../servicios/series.service';
import { Programa } from '../../app/interfaces/programa.interface';

@Component({
  selector: 'app-programa',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './programa.component.html',
  styles: ``
})
export class ProgramaComponent {
  @Input() public programa?:Programa;
  @Input() css:string="width:36rem";

  constructor(private ruta: ActivatedRoute, private servicio:SeriesService){
    if (ruta.params){
      ruta.params.subscribe( param => {
        servicio.getPrograma(param['id'])
          .subscribe(programa => {
            console.log(programa);
            this.programa = programa
          });
      })
    }
  }
}
