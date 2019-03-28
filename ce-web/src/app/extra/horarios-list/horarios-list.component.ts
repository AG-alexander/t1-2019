import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horarios-list',
  templateUrl: './horarios-list.component.html',
  styleUrls: ['./horarios-list.component.css']
})
export class HorariosListComponent implements OnInit {
  reloj = []
  huso:number = 0;
  constructor() { }
  showDate($event){
    alert(new DatePipe("en-US").transform($event,'hh:mm a'));
  }
  add(){
    this.reloj.push(this.huso);
  }
  ngOnInit() {
  }

}
