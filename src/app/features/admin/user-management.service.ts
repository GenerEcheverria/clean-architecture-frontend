import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Servicio para realizar operaciones relacionadas con usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class UserManagementService {

  private readonly URL: string = 'http://localhost:8000/api/account';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  public getUser(userId: string) {
    return this.httpClient.get<any>(this.URL + '/users/' + userId, this.httpOptions);
  }

  public deleteUser(userId: string) {
    return this.httpClient.delete<any>(this.URL + '/users/' + userId, this.httpOptions);
  }
}
