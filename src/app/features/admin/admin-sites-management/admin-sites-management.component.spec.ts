import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSitesComponent } from './admin-sites-management.component';

describe('SuperAdminSitiosComponent', () => {
  let component: AdminSitesComponent;
  let fixture: ComponentFixture<AdminSitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminSitesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AdminSitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
