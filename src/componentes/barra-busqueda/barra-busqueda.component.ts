import { Show } from './../../app/interfaces/episodio.interface';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SeriesService } from '../../servicios/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-busqueda',
  standalone: true,
  imports: [],
  templateUrl: './barra-busqueda.component.html',
  styles: ''
})
export class BarraBusquedaComponent  {

  @ViewChild('texto')
  private texto!:ElementRef<HTMLInputElement>;

  constructor(private router:Router){

  }

  buscar(){
    const buscar=this.texto.nativeElement.value;
    this.router.navigate(['buscar',buscar]);
  }
}
