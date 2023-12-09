import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SiteService {

  private readonly URL: string = 'http://localhost:8000/api';

  private httpClient!: HttpClient;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  /**
   * Constructor del servicio SiteService.
   * @param httpClient Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor() { }

  /**
   * Obtiene la información de un sitio.
   * @param id Identificador del sitio a obtener.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSite(id: string) {
    return this.httpClient.get<any>(this.URL + '/media/site/' + id, {});
  }

  /**
   * Obtiene el identificador de un sitio por su URL.
   * @param url URL del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSiteIdByUrl(url: string) {
    return this.httpClient.get<any>(this.URL + '/media/id/' + url, {});
  }

  /**
   * Actualiza el estado de un sitio.
   * @param id Identificador del sitio a actualizar.
   * @param state Nuevo estado del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  updateState(id:number, state: string){
    return this.httpClient.post<any>(this.URL + '/media/updateState', { id, state });
  }

  /**
   * Obtiene los sitios de un usuario.
   * @param id Identificador del usuario.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSitesForUser(id: string){
    return this.httpClient.get<any>(this.URL + '/media/userSites/'+id, this.httpOptions);
  }
}
