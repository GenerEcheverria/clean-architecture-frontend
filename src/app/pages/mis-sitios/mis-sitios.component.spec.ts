import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSitiosComponent } from './mis-sitios.component';

describe('MisSitiosComponent', () => {
  let component: MisSitiosComponent;
  let fixture: ComponentFixture<MisSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSitiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
