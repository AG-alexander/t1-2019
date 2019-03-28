import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  @Input() huso: number;
  @Output() dateEmitter= new EventEmitter<Date>();
  fecha = new Date();
  fechaN = new Date();
  emitDate () {
  this.dateEmitter.emit(this.fechaN); 
  } 
  constructor() { }

  ngOnInit() {
    this.fechaN = this.fechaN;
    this.fecha.setHours(this.fecha.getHours() + this.huso);
  }

}
