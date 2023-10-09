import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyElementComponent } from './body-element.component';

describe('BodyElementComponent', () => {
  let component: BodyElementComponent;
  let fixture: ComponentFixture<BodyElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
