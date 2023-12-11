import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Crypto } from 'src/app/util/crypto';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/entities/user.entity';
import { UserService } from 'src/app/infrastructure/api-v1/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formLogin!: FormGroup;

  private crypto = new Crypto;

  private router!: Router;
  private formBuilder!: FormBuilder;
  private userService!: UserService;

  // eslint-disable-next-line no-magic-numbers
  private readonly MINIMUM_INPUT_VALUE: number = 8;

  constructor(routerParam: Router, formBuilderParam: FormBuilder, userServiceParam: UserService) {
    this.router = routerParam;
    this.formBuilder = formBuilderParam;
    this.userService = userServiceParam;
  }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, this.emailValidator()]],
      password: ['', [Validators.required, Validators.minLength(this.MINIMUM_INPUT_VALUE)]]
    });
  }

  protected login(): void {

    const { email, password } = this.formLogin.value;

    const user: User = new User(email, this.crypto.encrypted(password));

    this.userService.login(user).subscribe(
      (response: any) => {
        localStorage.setItem('token', response.access_token);
        this.setUserRoles(response.role);
        if (response.role === 'superadmin') {
          this.router.navigate(['/sasitios']);
        } else if (response.role === 'admin') {
          this.router.navigate(['/misSitios']);
        } else {
          this.router.navigate(['/login']);
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

  private setUserRoles(role: string) {
    localStorage.setItem('role', role);
  }

}
