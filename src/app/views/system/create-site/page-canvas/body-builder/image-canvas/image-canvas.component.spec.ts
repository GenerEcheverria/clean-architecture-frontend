import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCanvasComponent } from './image-canvas.component';

describe('ImagenLienzoComponent', () => {
  let component: ImageCanvasComponent;
  let fixture: ComponentFixture<ImageCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageCanvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ImageCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
