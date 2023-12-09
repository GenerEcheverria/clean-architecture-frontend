import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CrearSitio } from '../interfaces/crear-sitio';

/**
 * Servicio para crear un nuevo sitio.
 */
@Injectable({
  providedIn: 'root'
})
export class CrearSitioService {
  url: string = 'http://localhost:8000/api';
  http!: HttpClient;

  /**
   * Constructor del servicio CrearSitioService.
   * @param httpParam, Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor() { 
  }

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
