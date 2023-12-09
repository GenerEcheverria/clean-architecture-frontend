import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { saUsuarios } from '../interfaces/saUsuarios';

/**
 * Servicio para realizar operaciones relacionadas con los usuarios del sistema SASitios.
 */
@Injectable({
  providedIn: 'root'
})
export class SasitiosService {

  private readonly URL: string = 'http://localhost:8000/api';

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

  /**
   * Obtiene la lista de usuarios del sistema SASitios.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public getUsers(){
    return this.httpClient.get<saUsuarios[]>(this.URL + '/account/sausers', this.httpOptions);
  }

}
