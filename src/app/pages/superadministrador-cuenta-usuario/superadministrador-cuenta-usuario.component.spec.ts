import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadministradorCuentaUsuarioComponent } from './superadministrador-cuenta-usuario.component';

describe('SuperadministradorCuentaUsuarioComponent', () => {
  let component: SuperadministradorCuentaUsuarioComponent;
  let fixture: ComponentFixture<SuperadministradorCuentaUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperadministradorCuentaUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperadministradorCuentaUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
