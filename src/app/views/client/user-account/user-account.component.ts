import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ClientService } from 'src/app/infrastructure/api-v1/client.service';
import { Router } from '@angular/router';
import { User } from 'src/app/domain/entities/user.entity';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {

  protected userDataForm!: FormGroup;
  protected passwordForm!: FormGroup;

  protected userData!: User;
  protected idUser: string | undefined = '';
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

  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^((\\+52-?)|0)?[0-9]{10}$')]]
    });
    this.passwordForm = this.formBuilder.group({
      confirmPassword: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]],
      newPassword: ['', [Validators.required, Validators.maxLength(this.MAXIMUM_INPUT_LENGTH), Validators.minLength(this.MINIMUM_INPUT_LENGTH)]]
    }, { validator: this.passwordValidator });

    this.clientService.getActualUser().subscribe((data: User) => {
      this.userData = data;
      this.idUser = data.id;

      this.userDataForm.patchValue({
        name: data.name,
        phone: data.phone,
        email: data.email,
      });
    });

  }

  protected submitUserDataChange() {
    const userDataForm = this.userDataForm.value;

    userDataForm.url = userDataForm.name;
    userDataForm.views = 0;
    this.clientService.editUser(userDataForm, this.idUser).subscribe(
      (response: User) => {
        console.log(response);
        this.router.navigate(['/misSitios']);
      },
      (error: string) => {
        console.error(JSON.stringify(JSON.parse(error), null, this.JSON_SPACING));
      }
    );
  }

  protected submitPasswordChange() {
    const passwordForm = this.passwordForm.value;
    passwordForm.url = passwordForm.name;
    passwordForm.views = 0;
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

  private passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { 'passwordsDoNotMatch': true };
    }

    return null;
  }

}
