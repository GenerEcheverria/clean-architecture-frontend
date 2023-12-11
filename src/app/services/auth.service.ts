import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private readonly URL: string = 'http://localhost:8000/api/auth';

  private httpClient!: HttpClient;

  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  public isLoggedIn() {
    const token = localStorage.getItem('token');
    if (token) {
      const httpOptions = {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        })
      };
      return this.httpClient.get<any>(this.URL + '/check', httpOptions);
    }
    return of({ valid: false });
  }

  public hasRole(requiredRole: string): boolean {
    const userRole: string | null = localStorage.getItem('role');
    if (userRole) {
      return userRole === requiredRole;
    }
    return false;
  }

}
