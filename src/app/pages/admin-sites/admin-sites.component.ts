import { Component, OnInit } from '@angular/core';
import { SasitiosService } from 'src/app/services/sasitios.service';
import { saUsuarios } from 'src/app/interfaces/saUsuarios';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';


/**
 * Componente para la administración de sitios por parte de un superadministrador.
 */
@Component({
  selector: 'app-admin-sites',
  templateUrl: './admin-sites.component.html',
  styleUrls: ['./admin-sites.component.css']
})
export class AdminSitesComponent implements OnInit {

  protected userSiteCounts: { userId: string, siteCount: number }[] = [];
  protected saUsuarios: saUsuarios[] = [];
  protected dataTable: any;

  private sasitiosService!: SasitiosService;
  private router: Router;
  private siteService: SiteService;



  constructor(sasitiosServiceParam: SasitiosService, siteServiceParam: SiteService, routerParam: Router) {
    this.sasitiosService = sasitiosServiceParam;
    this.router = routerParam;
    this.siteService = siteServiceParam;
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit() {
    this.sasitiosService.getUsers().subscribe((data: saUsuarios[]) => {
      this.saUsuarios = data;
      // Obtener los ID de todos los usuarios y llamar a loadData() para cada uno
      this.saUsuarios.forEach((user) => {
        const userId = user.id;
        const name = user.name;
        this.loadData(userId, name);
      });
    });

  }

  /**
  * Método que se ejecuta después de que los componentes de la vista se inicializan completamente.
  */
  ngAfterViewInit() {
    this.dataTable = $('#example').DataTable({

      'language': {
        'search': '',
        'searchPlaceholder': 'Buscar',
      },
      'dom': '<"d-flex justify-content-end"f>t<"d-flex justify-content-between"ipl>',

      'pagingType': 'simple_numbers',
    });

  }


  /**
   * Carga los datos de un usuario y la cantidad de sitios asociados.
   * @param userId El ID del usuario.
   * @param name El nombre del usuario.
   */
  private async loadData(userId: string, name: string): Promise<void> {
    if (userId) {
      try {
        const response = await this.siteService.getSitesForUser(userId).toPromise();
        const siteCount = response.sites.length; // Obtener la cantidad de sitios
        // Guardar el ID del usuario y la cantidad de sitios en un objeto
        const userSiteCount = {
          userId: userId,
          siteCount: siteCount
        };

        console.log(userSiteCount); // Aquí puedes ver el objeto con el ID y la cantidad de sitios

        const button = '<button type="button" class="btn btn-primary rounded-pill text-white"><a class="text-white text-decoration-none" href="http://localhost:4200/sausuarios/' + userId + '">Ver Usuario</a></button>';

        this.dataTable.row.add([
          name,
          siteCount.toString(),
          button
        ]);

        this.dataTable.draw();
        // Puedes almacenar userSiteCount en un arreglo si necesitas mantener un registro de todos los usuarios con sus respectivas cantidades de sitios
        //this.userSiteCounts.push(userSiteCount);


      } catch (error) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/sasitios']);
    }
  }

}


