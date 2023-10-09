import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

/**
 * Servicio para realizar operaciones relacionadas con los sitios.
 */
@Injectable({
  providedIn: 'root'
})
export class SiteService {
  url: string = 'http://localhost:8000/api';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    })
  }

  /**
   * Constructor del servicio SiteService.
   * @param http Instancia de HttpClient para realizar las peticiones HTTP.
   */
  constructor(private http: HttpClient) { }
  
  /**
   * Obtiene la información de un sitio.
   * @param id Identificador del sitio a obtener.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSite(id: string) {
    return this.http.get<any>(this.url + '/media/site/'+id, {});
  }

  /**
   * Obtiene el identificador de un sitio por su URL.
   * @param url URL del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSiteIdbyUrl(url: string) {
    return this.http.get<any>(this.url + '/media/id/'+url, {});
  }

  /**
   * Actualiza el estado de un sitio.
   * @param id Identificador del sitio a actualizar.
   * @param state Nuevo estado del sitio.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  updateState(id:number, state: string){
    return this.http.post<any>(this.url + '/media/updateState', {id, state});
  }

  /**
   * Obtiene los sitios de un usuario.
   * @param id Identificador del usuario.
   * @returns Un Observable que emite la respuesta de la petición HTTP.
   */
  getSitesForUser(id: string){
    return this.http.get<any>(this.url + '/media/userSites/'+id, this.httpOptions);
  }
}
