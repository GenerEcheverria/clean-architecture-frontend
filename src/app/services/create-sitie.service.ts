import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Site } from '../interfaces/create-site';

/**
 * Servicio para crear un nuevo sitio.
 */
@Injectable({
  providedIn: 'root'
})
export class CreateSiteService {

  private readonly URL: string = 'http://localhost:8000/api';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  };

  /**
   * Constructor del servicio CrearSitioService.
   * @param httpClientParam, Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  /**
   * Crea un nuevo sitio.
   * @param site Información del nuevo sitio a crear.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public createSite(site: any) {
    return this.httpClient.post<any>(this.URL + '/media/sites', { newCrearSitio: site }, this.httpOptions);
  }

}
