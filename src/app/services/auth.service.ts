import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';

/**
 * Servicio de autenticación y gestión de usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

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

  /**
   * Registra un nuevo usuario.
   * @param name Nombre del usuario.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @param role Rol del usuario.
   * @param phone Número de teléfono del usuario.
   * @param photo Foto del perfil del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  public register(name: string, email: string, password: string, role: string, phone: string, photo: string) {
    return this.httpClient.post<any>(this.URL + '/register', { name, email, password, role, phone, photo }, this.httpOptions);
  }

  /**
   * Inicia sesión con las credenciales proporcionadas.
   * @param email Correo electrónico del usuario.
   * @param password Contraseña del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  public login(email: string, password: string) {
    return this.httpClient.post<any>(this.URL + '/login', { email, password });
  }

  /**
   * Cierra la sesión del usuario.
   * @returns Observable que representa la respuesta del servidor.
   */
  public logout() {
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<any>(this.URL + '/logout', {},httpOptions);
  }

  /**
   * Obtiene la información del usuario actualmente autenticado.
   * @returns Observable que representa la información del usuario.
   */
  public getActualUser(){
    const token = this.getToken();
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      })
    };
    return this.httpClient.post<any>(this.URL+'/me', {},httpOptions);
  }

  /**
   * Obtiene el token de autenticación almacenado en el almacenamiento local.
   * @returns El token de autenticación o null si no está presente.
   */
  public getToken(): string | null {
    return localStorage.getItem('token');
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
   * Establece los roles del usuario en el almacenamiento local.
   * @param role Rol del usuario.
   */
  public setUserRoles(role: string) {
    localStorage.setItem('role', role);
  }

  /**
   * Comprueba si el usuario tiene el rol especificado.
   * @param requiredRole Rol requerido.
   * @returns True si el usuario tiene el rol, False en caso contrario.
   */
  public hasRole(requiredRole: string): boolean {
    const userRole: string | null = localStorage.getItem('role');
    if (userRole) {
      return userRole===requiredRole;
    }
    return false;
  }

}
