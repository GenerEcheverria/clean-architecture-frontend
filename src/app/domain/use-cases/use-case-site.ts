import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Site } from '../entities/site.entity';
import { GatewaySite } from '../gateways/gateway-site';



@Injectable({
  providedIn: 'root'
})

export class UseCaseSites {
  private gatewaySite!: GatewaySite;
  constructor (gatewaySiteParam: GatewaySite){
    this.gatewaySite = gatewaySiteParam;
  }

  getSite(siteId: string): Observable<Site> {
    return this.gatewaySite.getSite(siteId);
  }

  getSiteByUrl(url: string): Observable<Site> {
    return this.gatewaySite.getSiteByUrl(url);
  }
  getSitesForUser(userId: string): Observable<Site> {
    return this.gatewaySite.getSitesForUser(userId);
  }
  getAllSitesForCurrentUser(): Observable<Site> {
    return this.gatewaySite.getAllSitesForCurrentUser();
  }
  createSite(site: Site): Observable<Site> {
    return this.gatewaySite.createSite(site);
  }
  updateState (siteId:number, state:string): Observable<Site> {
    return this.gatewaySite.updateState(siteId, state);
  }
}