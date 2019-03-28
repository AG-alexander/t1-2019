import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelojComponent } from './reloj/reloj.component';
import { HorariosListComponent } from './horarios-list/horarios-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NoticiasLoadComponent } from './noticias-load/noticias-load.component';

@NgModule({
  declarations: [RelojComponent, HorariosListComponent, NoticiasLoadComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
    
  ],
  exports: [
    RelojComponent,
    HorariosListComponent
  ]
})
export class ExtraModule { }
