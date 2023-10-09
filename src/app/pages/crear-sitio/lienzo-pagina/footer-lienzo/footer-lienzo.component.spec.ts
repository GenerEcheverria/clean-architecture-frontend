import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLienzoComponent } from './footer-lienzo.component';

describe('FooterLienzoComponent', () => {
  let component: FooterLienzoComponent;
  let fixture: ComponentFixture<FooterLienzoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterLienzoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterLienzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
