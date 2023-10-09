import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saUsuarios } from '../interfaces/saUsuarios';

/**
 * Servicio para realizar operaciones relacionadas con los usuarios del sistema SASitios.
 */
@Injectable({
  providedIn: 'root'
})
export class SasitiosService {
  url: string = 'http://localhost:8000/api';

   /**
   * Constructor del servicio SasitiosService.
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
   * Obtiene la lista de usuarios del sistema SASitios.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getUsuarios(){
    return this.http.get<saUsuarios[]>(this.url + '/account/sausers', this.httpOptions);
  }
  
}
