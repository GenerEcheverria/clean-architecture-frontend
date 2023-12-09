import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/**
 * Servicio para realizar operaciones relacionadas con usuarios.
 */
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL: string = 'http://localhost:8000/api/account';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  /**
   * Constructor del servicio UserService.
   * @param httpClient Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  /**
   * Obtiene la información de un usuario.
   * @param userId Identificador del usuario a obtener.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public getUser(userId: string) {
    return this.httpClient.get<any>(this.URL + '/users/' + userId, this.httpOptions);
  }

  /**
   * Elimina un usuario.
   * @param userId Identificador del usuario a eliminar.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public deleteUser(userId: string) {
    return this.httpClient.delete<any>(this.URL + '/users/' + userId, this.httpOptions);
  }
}
