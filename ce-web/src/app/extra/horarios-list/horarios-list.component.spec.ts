import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosListComponent } from './horarios-list.component';

describe('HorariosListComponent', () => {
  let component: HorariosListComponent;
  let fixture: ComponentFixture<HorariosListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorariosListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
