import { Component } from '@angular/core';
import { Site } from 'src/app/domain/entities/site.entity';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent {

  protected siteLibrary: Site[] = [];
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