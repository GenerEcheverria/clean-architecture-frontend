import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn } from '@angular/forms';
import { User } from 'src/app/core/domain/user.dto';
import { Crypto } from 'src/app/features/session/crypto';
import { SessionService } from 'src/app/features/session/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  protected formLogin!: FormGroup;
  protected password: string = '';
  protected passwordConfirmation: string = '';

  private crypto = new Crypto;

  private formBuilder!: FormBuilder;
  private sessionService!: SessionService;
  private router!: Router;

  // eslint-disable-next-line no-magic-numbers
  private readonly MINIMUM_INPUT_LENGTH: number = 8;
  // eslint-disable-next-line no-magic-numbers
  private readonly MINIMUM_CELLPHONE_NUMBER_LENGTH: number = 10;
  // eslint-disable-next-line no-magic-numbers
  private readonly MAXIMUM_CELLPHONE_NUMBER_LENGTH: number = 10;

  constructor(formBuilderParam: FormBuilder, sessionServiceParam: SessionService, routeParam: Router) {
    this.formBuilder = formBuilderParam;
    this.sessionService = sessionServiceParam;
    this.router = routeParam;
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      email: ['', [Validators.required, this.emailValidator()]],
      phone: ['', [Validators.required, Validators.minLength(this.MINIMUM_CELLPHONE_NUMBER_LENGTH), Validators.maxLength(this.MAXIMUM_CELLPHONE_NUMBER_LENGTH)]],
      password: ['', [Validators.required, Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      confirmPassword: ['', [Validators.required]]
    }, { validator: this.passwordsMatchValidator });
  }

  protected registerUser() {

    const { name, email, password, role, phone } = this.formLogin.value;

    const user: User = new User(email, this.crypto.encrypted(password), name, role, phone);

    this.sessionService.register(user).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  private passwordsMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password != '' && confirmPassword != '') {
      if (password && confirmPassword && password !== confirmPassword) {
        formGroup.get('confirmPassword')?.setErrors({ passwordsNotMatch: true });
      } else {
        formGroup.get('confirmPassword')?.setErrors(null);
      }
    }
  }

  private emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const isValid = emailPattern.test(control.value);
      return isValid ? null : { emailInvalid: true };
    };
  }

}