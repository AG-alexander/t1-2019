import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/clases/noticia';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  nombre: string = "AAG";
  curso: string = "Programación Web - UNA";
  number: number = 1257840.149854;
  fechaNacimiento = new Date(1995, 2, 13);
  fechaActual = new Date();
  dinero: number = 0.25;
  dineroAntes: number = 0.89;
  noticias$: Observable<Noticia[]>;
  urlYoutube = "https://www.youtube.com/embed/1Nq_MbsQL4I";

  constructor(private _serviceData: DataStorageService) { }

  ngOnInit() {
    this.urlYoutube = this.urlYoutube.replace("watch?v=", "v/");
    this.noticias$ = this._serviceData.getNoticiasAsync();
    //this.noticias = this._serviceData.getObjectValue('noticias');
  }

}
