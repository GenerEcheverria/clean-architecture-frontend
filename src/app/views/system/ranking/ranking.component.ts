import { Component } from '@angular/core';
import { SiteService } from 'src/app/infraestructure/api-v1/site.service';

/**
 * Componente para mostrar el ranking de sitios.
 */
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  protected siteLibrary: any[] = [];
  private mySitesService!: SiteService;

  constructor(mySitesServiceParam: SiteService) {
    this.mySitesService = mySitesServiceParam;
  }

  ngOnInit(): void {
    this.mySitesService.getAllSitesForCurrentUser().subscribe((data: any) => {
      this.siteLibrary = data.sites;
      this.siteLibrary.sort((firstSite, secondSite) => secondSite.views - firstSite.views);
    });
  }

}
