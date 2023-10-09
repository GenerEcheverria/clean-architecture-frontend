import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { CrearSitio } from '../interfaces/crear-sitio';

/**
 * Servicio para crear un nuevo sitio.
 */
@Injectable({
  providedIn: 'root'
})
export class CrearSitioService {
  url: string = 'http://localhost:8000/api';

  /**
   * Constructor del servicio CrearSitioService.
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
   * Crea un nuevo sitio.
   * @param newCrearSitio Información del nuevo sitio a crear.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  crearSite(newCrearSitio: CrearSitio) {
    return this.http.post<any>(this.url + '/media/sites', { newCrearSitio }, this.httpOptions);
  }
}
