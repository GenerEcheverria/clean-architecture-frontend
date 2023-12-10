import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/core/domain/user.dto';

/**
 * Servicio de autenticación y gestión de usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly URL: string = 'http://localhost:8000/api/auth';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }


  public register(user: User) {

    const { name, email, password, role, phone } = user;

    return this.httpClient.post<any>(this.URL + '/register', { name, email, password, role, phone }, this.httpOptions);
  }

  public login(user: User) {

    const { email, password } = user;

    return this.httpClient.post<any>(this.URL + '/login', { email, password });
  }

  public logout() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<any>(this.URL + '/logout', {}, httpOptions);
  }

  public getActualUser() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<any>(this.URL + '/me', {}, httpOptions);
  }

  public setUserRoles(role: string) {
    localStorage.setItem('role', role);
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

}
