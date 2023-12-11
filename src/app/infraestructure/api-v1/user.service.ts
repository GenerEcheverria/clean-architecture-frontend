import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from 'src/app/domain/entities/user.entity';
import { GatewayUser } from 'src/app/domain/gateways/gateway-user';
import { Observable } from 'rxjs';

/**
 * Servicio de autenticación y gestión de usuarios.
 */
@Injectable({
  providedIn: 'root'
})

export class UserService extends GatewayUser{

  private readonly URL: string = 'http://localhost:8000/api/auth';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(httpClientParam: HttpClient) {
    super ();
    this.httpClient = httpClientParam;
  }

  public login(user: User) : Observable <User> {

    const { email, password } = user;

    return this.httpClient.post<User>(this.URL + '/login', { email, password });
  }

  public logout() : Observable <User> {
    const token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<User>(this.URL + '/logout', {}, httpOptions);
  }

}