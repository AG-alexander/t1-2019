import { Component, OnInit } from '@angular/core';
import { Noticia } from 'src/app/clases/noticia';
import { DataStorageService } from 'src/app/services/data-storage.service';
import Noticias from '../../../assets/data/noticias.json';

@Component({
  selector: 'app-noticias-list',
  templateUrl: './noticias-list.component.html',
  styleUrls: ['./noticias-list.component.css']
})
export class NoticiasListComponent implements OnInit {

  noticias: Noticia[];
  key: string = "noticias";
  flagNoticias = false;
  constructor(private _data: DataStorageService) {
    this._data.setObjectValue(this.key, Noticias);
    //window.localStorage.clear();
  }

  ngOnInit() {
    this.noticias = this._data.getObjectValue(this.key);
    this.flagNoticias = !(this.noticias == null);
  }

}
