import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Servicio para obtener la lista de sitios del usuario actual.
 */
@Injectable({
  providedIn: 'root'
})
export class MisSitiosService {
  url: string = 'http://localhost:8000/api';
  
  /**
   * Constructor del servicio MisSitiosService.
   * @param http Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  /**
   * Obtiene todos los sitios del usuario actual.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getAll() {
    return this.http.get<any>(this.url+'/media/mySites', this.httpOptions);
  }

}
