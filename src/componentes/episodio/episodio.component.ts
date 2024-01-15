import { Component, Input } from '@angular/core';
import { Episodio } from '../../app/interfaces/episodio.interface';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-episodio',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './episodio.component.html',
  styles: ``
})
export class EpisodioComponent {
  @Input() episodio?:Episodio;


}
