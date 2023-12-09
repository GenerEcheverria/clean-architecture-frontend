import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Servicio para obtener la lista de sitios del usuario actual.
 */
@Injectable({
  providedIn: 'root'
})
export class MySitesService {

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
   * Obtiene todos los sitios del usuario actual.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getAll() {
    return this.httpClient.get<any>(this.URL+'/media/mySites', this.httpOptions);
  }

}
