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
  };

  /**
   * Constructor del servicio SiteService.
   * @param httpClient Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(httpClientParam: HttpClient) {
    this.httpClient = httpClientParam;
  }

  /**
   * Obtiene la información de un sitio.
   * @param siteId Identificador del sitio a obtener.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public getSite(siteId: string) {
    return this.httpClient.get<any>(this.URL + '/media/site/' + siteId, {});
  }

  /**
   * Obtiene el identificador de un sitio por su URL.
   * @param url URL del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public getSiteIdByUrl(url: string) {
    return this.httpClient.get<any>(this.URL + '/media/id/' + url, {});
  }

  /**
   * Actualiza el estado de un sitio.
   * @param siteId Identificador del sitio a actualizar.
   * @param state Nuevo estado del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public updateState(siteId:number, state: string){
    return this.httpClient.post<any>(this.URL + '/media/updateState', { id: siteId, state });
  }

  /**
   * Obtiene los sitios de un usuario.
   * @param userId Identificador del usuario.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  public getSitesForUser(userId: string){
    return this.httpClient.get<any>(this.URL + '/media/userSites/'+userId, this.httpOptions);
  }
}
