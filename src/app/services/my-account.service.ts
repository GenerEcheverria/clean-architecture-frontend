import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Servicio para realizar operaciones relacionadas con la cuenta del usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  private readonly URL: string = 'http://localhost:8000/api';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  /**
   * Constructor del servicio MiCuentaService.
   * @param httpClient Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  /**
   * Actualiza la cuenta del usuario.
   * @param account Información de la cuenta a actualizar.
   * @param userId Identificador del usuario.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public editAccount(account: any, userId: string) {
    return this.httpClient.put<any>(this.URL + '/account/users/' + userId, { account, id: userId }, this.httpOptions);
  }
}
