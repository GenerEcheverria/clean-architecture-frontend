import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminSitiosComponent } from './super-admin-sitios.component';

describe('SuperAdminSitiosComponent', () => {
  let component: SuperAdminSitiosComponent;
  let fixture: ComponentFixture<SuperAdminSitiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminSitiosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminSitiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
