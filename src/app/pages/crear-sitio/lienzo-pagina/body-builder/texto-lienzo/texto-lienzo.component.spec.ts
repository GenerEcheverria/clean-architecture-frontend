import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoLienzoComponent } from './texto-lienzo.component';

describe('TextoLienzoComponent', () => {
  let component: TextoLienzoComponent;
  let fixture: ComponentFixture<TextoLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextoLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextoLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
