import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episodio } from '../app/interfaces/episodio.interface';
import { Observable } from 'rxjs';
import { Programa } from '../app/interfaces/programa.interface';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private URL:string = 'http://api.tvmaze.com/';
  constructor(private http:HttpClient) { }

  getEpisodios():Observable<Episodio[]>{
    const hoy:string = new Date().toISOString().substring(0,10);
    const params:HttpParams = new HttpParams()
      .set("date",hoy)
      .set('country','US');
    return this.http.get<Episodio[]>(this.URL+'schedule',
    {
      params
    });
  }

  getPrograma(id:number):Observable<Programa>{
    return this.http.get<Programa>(this.URL+'shows/'+id);
  }

  buscarProgramas(texto:string){
    const params:HttpParams = new HttpParams()
      .set('q',texto);
    return this.http.get<any[]>(this.URL+'search/shows', {
      params
    });
  }

}
