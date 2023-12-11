import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  protected webContent!: any;
  protected full!: Object;
  protected fullType!: string;
  protected left!: Object;
  protected leftType!: string;
  protected right!: Object;
  protected rightType!: string;
  protected columns!: Object;
  private url!: string;
  public isDataLoaded: boolean = false;

  private route!: ActivatedRoute;
  private router!: Router;
  private siteService!: SiteService;

  constructor(routeParam: ActivatedRoute, routerParam: Router, siteServiceParam: SiteService) {
    this.route = routeParam;
    this.router = routerParam;
    this.siteService = siteServiceParam;
  }

  ngOnInit(): void {
    this.loadData();
  }

  private async loadData(): Promise<void> {
    this.url = this.route.snapshot.paramMap.get('url')!;
    let id: string = '';
    if (this.url) {
      try {
        const response : any = await this.siteService.getSiteByUrl(this.url.toString()).toPromise();
        if(response){
          if (response.state !== 'publicada') {
            this.router.navigate(['/misSitios']);
            return;
          }
          id = response.id;
          this.webContent = await this.siteService.getSite(id).toPromise();
          this.isDataLoaded = true;
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
