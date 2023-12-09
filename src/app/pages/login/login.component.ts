import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Crypto } from 'src/app/util/crypto';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Componente para la página de inicio de sesión.
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.css' ]
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  private crypto = new Crypto;

  private router!: Router;
  private formBuilder!: FormBuilder;
  private authService!: AuthService;

  // eslint-disable-next-line no-magic-numbers
  private readonly MINIMUM_INPUT_VALUE: number = 8;

  constructor(routerParam: Router, formBuilderParam: FormBuilder, authServiceParam: AuthService) {
    this.router = routerParam;
    this.formBuilder = formBuilderParam;
    this.authService = authServiceParam;
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: [ '', [ Validators.required, this.emailValidator() ] ],
      password: [ '', [ Validators.required, Validators.minLength(this.MINIMUM_INPUT_VALUE) ] ]
    });
  }

  protected login(): void {
    const formUser = this.formLogin.value;
    const user = {
      'email' : formUser.email,
      'password' : this.crypto.encrypted(formUser.password)
    };
    this.authService.login(user.email, user.password).subscribe(
      (response) => {
        localStorage.setItem('token', response.access_token);
        this.authService.setUserRoles(response.role);
        if (response.role === 'superadmin') {
          this.router.navigate([ '/sasitios' ]);
        } else if (response.role === 'admin') {
          this.router.navigate([ '/misSitios' ]);
        } else {
          // Redirigir a otra página en caso de otro tipo de usuario
          this.router.navigate([ '/login' ]);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { emailInvalid: true };
    };
  }

}
