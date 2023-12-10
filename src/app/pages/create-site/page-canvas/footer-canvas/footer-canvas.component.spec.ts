import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCanvasComponent } from './footer-canvas.component';

describe('FooterLienzoComponent', () => {
  let component: FooterCanvasComponent;
  let fixture: ComponentFixture<FooterCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterCanvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(FooterCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
