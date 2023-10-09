import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBuilderComponent } from './body-builder.component';

describe('BodyBuilderComponent', () => {
  let component: BodyBuilderComponent;
  let fixture: ComponentFixture<BodyBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyBuilderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
