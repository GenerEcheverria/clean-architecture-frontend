import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienzoPaginaComponent } from './lienzo-pagina.component';

describe('LienzoPaginaComponent', () => {
  let component: LienzoPaginaComponent;
  let fixture: ComponentFixture<LienzoPaginaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienzoPaginaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienzoPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
