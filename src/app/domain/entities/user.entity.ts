export class User {

  public name?: string;
  public email?: string;
  public password?: string;
  public role?: string;
  public phone?: string;
  public id?: string;
  public accessToken?: string;

  constructor(emailParam?: string, passwordParam?: string, nameParam?: string, roleParam?: string, phoneParam?: string, userIdParam?: string, accessTokenParam?: string) {
    this.email = emailParam;
    this.password = passwordParam;
    this.name = nameParam;
    this.role = roleParam;
    this.phone = phoneParam;
    this.id = userIdParam;
    this.accessToken = accessTokenParam;
  }

}
