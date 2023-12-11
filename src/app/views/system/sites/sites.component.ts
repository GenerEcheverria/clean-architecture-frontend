import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

/**
 * Componente para la visualización de sitios.
 */
@Component({
  selector: 'app-sites',
  templateUrl: './sites.component.html',
  styleUrls: ['./sites.component.css']
})
export class SitesComponent {
  protected webContent: any;
  protected full: any;
  protected fullType!: string;
  protected left: any;
  protected leftType!: string;
  protected right: any;
  protected rightType!: string;
  protected columns: any;
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


  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.loadData();
  }


  /**
   * Carga los datos del sitio a partir de la URL proporcionada.
   */
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
