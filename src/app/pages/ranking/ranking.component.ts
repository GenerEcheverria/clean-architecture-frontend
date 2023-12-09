import { Component } from '@angular/core';
import { MySitesService } from 'src/app/services/my-sites.service';

/**
 * Componente para mostrar el ranking de sitios.
 */
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: [ './ranking.component.css' ]
})
export class RankingComponent {

  protected siteLibrary: any[] = [];
  private mySitesService!: MySitesService;

  constructor() {}

  ngOnInit(): void {
    this.mySitesService.getAll().subscribe(data => {
      this.siteLibrary = data.sites;
      this.siteLibrary.sort((firstSite, secondSite) => secondSite.views - firstSite.views);
    });
  }

}
