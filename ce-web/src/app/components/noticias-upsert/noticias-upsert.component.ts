import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';
import { Noticia } from 'src/app/clases/noticia';

@Component({
  selector: 'app-noticias-upsert',
  templateUrl: './noticias-upsert.component.html',
  styleUrls: ['./noticias-upsert.component.css']
})
export class NoticiasUpsertComponent implements OnInit {
  
  formGroup: FormGroup;
  formBuilder: FormBuilder;
  noticiaId: number;
  constructor(private _route: ActivatedRoute, private _data: DataStorageService) { 
    this.formBuilder  = new FormBuilder();
    this.noticiaId = +this._route.snapshot.params['id'];
    this.noticiaId > 0? this.cargarNoticia(this.noticiaId) : this.iniciarNoticia();
  }

  iniciarNoticia = () => {
    this.formGroup = this.formBuilder.group({
      id: ['(nueva)', [Validators.required],],
      titulo: ['', [Validators.required]],
      imagen: ['', [Validators.required]],
      descripcion: ['', [Validators.required, Validators.minLength(15)]],
      fechaCreacion: [new Date()],
      ultimaModificacion: [new Date()],
    });
  }
  cargarNoticia = (id: number) => {
    const listaNoticias = this._data.getObjectValue("noticias") as Noticia[];
    listaNoticias.forEach(noticia => {
      if (noticia.id == id) {
        this.formGroup = this.formBuilder.group({
          id: [id, [Validators.required],],
          titulo: [noticia.titulo, [Validators.required]],
          imagen: [noticia.imagen, [Validators.required]],
          descripcion: [noticia.descripcion, [Validators.required, Validators.minLength(15)]],
          fechaCreacion: [noticia.fechaCreacion],
          ultimaModificacion: [noticia.ultimaModificacion],
        });
      }
    });
  } 

  guardarData = () => {
    if (this.formGroup.valid) {
      let noticiaIndex = -1;
      const listaNoticias = this._data.getObjectValue("noticias") as Noticia[];
      listaNoticias.forEach((noticia, index) => {
        if (noticia.id == this.formGroup.value.id) {
          noticiaIndex = index;
        }
      });

      if (noticiaIndex >= 0) {
        listaNoticias[noticiaIndex] = this.formGroup.value;
      } else {
        this.formGroup.value.id = listaNoticias.length;
        listaNoticias.push(this.formGroup.value);
      }
      this.formGroup.patchValue({ "ultimaModificacion": new Date() });

      this._data.setObjectValue("noticias", listaNoticias);

      alert("Información guardada");
    } else {
      alert("Debe completar la información correctamente");
    }
  }

  
  ngOnInit() {
  }

}
