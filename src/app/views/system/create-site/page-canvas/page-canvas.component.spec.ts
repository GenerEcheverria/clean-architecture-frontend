import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCanvasComponent } from './page-canvas.component';

describe('LienzoPaginaComponent', () => {
  let component: PageCanvasComponent;
  let fixture: ComponentFixture<PageCanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageCanvasComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PageCanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
