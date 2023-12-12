import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCanvasComponent } from './title-canvas.component';

describe('TituloLienzoComponent', () => {
  let component: TitleCanvasComponent;
  let fixture: ComponentFixture<TitleCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TitleCanvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TitleCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
