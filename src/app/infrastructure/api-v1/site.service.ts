import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Site } from 'src/app/domain/entities/site.entity';
import { GatewaySite } from 'src/app/domain/gateways/gateway-site';
import { Observable } from 'rxjs';
// import { Site } from '../interfaces/create-site';

/**
 * Servicio para crear un nuevo sitio.
 */
@Injectable({
  providedIn: 'root'
})
export class SiteService extends GatewaySite{

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
    super();
    this.httpClient = httpClientParam;
  }

  public getSite(siteId: string) : Observable<Site> {
    return this.httpClient.get<Site>(this.URL + '/media/site/' + siteId, {});
  }

  public getSiteByUrl(url: string) : Observable<Site> {
    return this.httpClient.get<Site>(this.URL + '/media/id/' + url, {});
  }

  public getSitesForUser(userId: string) : Observable<Site> {
    return this.httpClient.get<Site>(this.URL + '/media/userSites/' + userId, this.httpOptions);
  }

  public getAllSitesForCurrentUser() : Observable<Site> {
    return this.httpClient.get<Site>(this.URL + '/media/mySites', this.httpOptions);
  }

  public createSite(site: Site) : Observable<Site> {
    return this.httpClient.post<Site>(this.URL + '/media/sites', { newCrearSitio: site }, this.httpOptions);
  }

  public updateState(siteId: number, state: string) : Observable<Site> {
    return this.httpClient.post<Site>(this.URL + '/media/updateState', { id: siteId, state });
  }

  // public getUsers() {
  //   return this.httpClient.get<any[]>(this.URL + '/account/sausers', this.httpOptions);
  //   // return this.httpClient.get<saUsuarios[]>(this.URL + '/account/sausers', this.httpOptions);
  // }

}
