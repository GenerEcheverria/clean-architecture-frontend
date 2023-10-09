import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenLienzoComponent } from './imagen-lienzo.component';

describe('ImagenLienzoComponent', () => {
  let component: ImagenLienzoComponent;
  let fixture: ComponentFixture<ImagenLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagenLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
