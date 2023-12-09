import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesComponent } from './sites.component';

describe('SitiosComponent', () => {
  let component: SitesComponent;
  let fixture: ComponentFixture<SitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SitesComponent ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
