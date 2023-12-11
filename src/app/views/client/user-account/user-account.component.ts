import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { passwordValidator } from './password.validator';
import { ClientService } from 'src/app/infraestructure/api-v1/client.service';
import { Router } from '@angular/router';

/**
 * Componente encargado de administrar la cuenta del usuario.
 */
@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  protected userDataForm!: FormGroup;
  protected passwordForm!: FormGroup;

  /**
   * Formulario para el cambio de contraseña del usuario.
  */

  protected userData: any;
  protected idUser: string = '';
  protected nameUser: string = '';
  protected emailUser: string = '';
  protected phoneUser: string = '';


  // eslint-disable-next-line no-magic-numbers
  private readonly JSON_SPACING: number = 2;
  // eslint-disable-next-line no-magic-numbers
  private readonly MINIMUM_INPUT_LENGTH: number = 8;
  // eslint-disable-next-line no-magic-numbers
  private readonly MAXIMUM_INPUT_LENGTH: number = 32;


  private formBuilder!: FormBuilder;
  private clientService!: ClientService;
  private router!: Router;

  constructor(formBuilderParam: FormBuilder, clientServiceParam: ClientService, routerParam: Router) {
    this.formBuilder = formBuilderParam;
    this.clientService = clientServiceParam;
    this.router = routerParam;
  }

  /**
   * Método de ciclo de vida de Angular que se ejecuta al iniciar el componente.
   * Se encarga de inicializar los formularios y definir las validaciones.
   */
  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+52-?)|0)?[0-9]{10}$')]]
    });
    this.passwordForm = this.formBuilder.group({
      confirmPassword: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      newPassword: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]]
    }, { validator: passwordValidator });

    this.clientService.getActualUser().subscribe((data: any) => {
      this.userData = data;
      this.idUser = data.id;

      this.userDataForm.patchValue({
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
    });

  }

  /**
   * Método que se ejecuta al enviar el formulario de datos de cuenta.
   * Guarda los cambios realizados en la cuenta del usuario.
   */
  protected submitUserDataChange() {
    console.log(this.userDataForm.value);
    const userDataForm = this.userDataForm.value;

    userDataForm.url = userDataForm.name;
    userDataForm.views = 0;
    console.log('Sitio forme es: ', userDataForm);
    this.clientService.editUser(userDataForm, this.idUser).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigate(['/misSitios']);
      },
      (error: any) => {
        console.error(JSON.stringify(JSON.parse(error), null, this.JSON_SPACING));
      }
    );
  }

  /**
   * Método que se ejecuta al enviar el formulario de cambio de contraseñas.
   * Guarda la nueva contraseña del usuario.
   */
  protected submitPasswordChange() {
    const passwordForm = this.passwordForm.value;
    passwordForm.url = passwordForm.name;
    passwordForm.views = 0;
    console.log('Sitio forme es: ' + passwordForm);
    this.clientService.editUser(passwordForm, this.idUser).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/misSitios']);
      },
      (error) => {
        console.error(JSON.stringify(JSON.parse(error), null, this.JSON_SPACING));
      }
    );
  }
}