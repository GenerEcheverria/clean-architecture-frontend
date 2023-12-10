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

  /**
   * Comprueba si el usuario ha iniciado sesión.
   * @returns Observable que indica si el usuario ha iniciado sesión o no.
   */
  public isLoggedIn() {
    const token = this.getToken();
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

  /**
   * Comprueba si el usuario tiene el rol especificado.
   * @param requiredRole Rol requerido.
   * @returns True si el usuario tiene el rol, False en caso contrario.
   */
  public hasRole(requiredRole: string): boolean {
    const userRole: string | null = localStorage.getItem('role');
    if (userRole) {
      return userRole === requiredRole;
    }
    return false;
  }

  private getToken(): string | null {
    return localStorage.getItem('token');
  }

}
