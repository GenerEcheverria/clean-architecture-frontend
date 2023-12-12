import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from 'src/app/domain/entities/admin.entity';
import { GatewayAdmin } from 'src/app/domain/gateways/gateway-admin';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService extends GatewayAdmin {

  private readonly URL: string = 'http://localhost:8000/api';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(httpClientParam: HttpClient) {
    super();
    this.httpClient = httpClientParam;
  }

  public getUser(userId: string) {
    return this.httpClient.get<Admin>(this.URL + '/users/' + userId, this.httpOptions);
  }

  public getUsers() : Observable <Admin>{
    return this.httpClient.get<Admin>(this.URL + '/account/sausers', this.httpOptions);
  }

  public deleteUser(userId: string) : Observable <Admin>{
    return this.httpClient.delete<Admin>(this.URL + '/users/' + userId, this.httpOptions);
  }

}
