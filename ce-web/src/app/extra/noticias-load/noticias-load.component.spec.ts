import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasLoadComponent } from './noticias-load.component';

describe('NoticiasLoadComponent', () => {
  let component: NoticiasLoadComponent;
  let fixture: ComponentFixture<NoticiasLoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiasLoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiasLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
