import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloLienzoComponent } from './titulo-lienzo.component';

describe('TituloLienzoComponent', () => {
  let component: TituloLienzoComponent;
  let fixture: ComponentFixture<TituloLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
