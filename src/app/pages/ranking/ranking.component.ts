import { Component } from '@angular/core';
import { MisSitiosService } from 'src/app/services/mis-sitios.service';

/**
 * Componente para mostrar el ranking de sitios.
 */
@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: [ './ranking.component.css' ]
})
export class RankingComponent {
  public bibliotecaSitios: any[] = [];  
  private misSitiosService!: MisSitiosService;


  constructor(protected misSitiosServiceParam: MisSitiosService) {
    this.misSitiosService = misSitiosServiceParam;
  }

  /**
   * Se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.misSitiosService.getAll().subscribe(data => {
      this.bibliotecaSitios = data.sites;
      this.bibliotecaSitios.sort((a, b) => b.views - a.views);
    });
  }
}
