import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

/**
 * Componente para la visualización de sitios.
 */
@Component({
  selector: 'app-sitios',
  templateUrl: './sitios.component.html',
  styleUrls: ['./sitios.component.css']
})
export class SitiosComponent {
  public webContent: any;
  protected full: any;
  protected fullType!: string;
  protected left: any;
  protected leftType!: string;
  protected right: any;
  protected rightType!: string;
  protected columns: any;
  private url!: string | null;
  public isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private siteService: SiteService, private router: Router) { }

  
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
    this.url = this.route.snapshot.paramMap.get('url');
    let id: string = "";
    if (this.url) {
      try {
        const response = await this.siteService.getSiteIdbyUrl(this.url.toString()).toPromise();
        if (response.state !== 'publicada') {
          this.router.navigate(['/misSitios']);
          return
        }
        id = response.id;
        this.webContent = await this.siteService.getSite(id).toPromise();
        this.isDataLoaded = true; // Marcar los datos como cargados
      } catch (error) {
      }
    } else {
      this.router.navigate(['/login']);
    }
  }
}
