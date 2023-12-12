/* eslint-disable no-unused-vars */
import { Observable } from 'rxjs';
import { Site } from '../entities/site.entity';

export abstract class GatewaySite {
    abstract getSite(siteId: string): Observable<Site>;
    abstract getSiteByUrl(url: string): Observable<Site>;
    abstract getSitesForUser(userId: string): Observable<Site>;
    abstract getAllSitesForCurrentUser(): Observable<Site>;
    abstract createSite(site: Site): Observable<Site>;
    abstract updateState (siteId:number, state:string): Observable<Site>;
}