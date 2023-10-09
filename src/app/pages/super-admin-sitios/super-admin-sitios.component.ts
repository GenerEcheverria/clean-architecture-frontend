import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SasitiosService } from 'src/app/services/sasitios.service';
import { saUsuarios } from 'src/app/interfaces/saUsuarios';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs5';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';
import { UserService } from 'src/app/services/user.service';
import DataTables from 'datatables.net';

/**
 * Componente para la administración de sitios por parte de un superadministrador.
 */
@Component({
  selector: 'app-super-admin-sitios',
  templateUrl: './super-admin-sitios.component.html',
  styleUrls: ['./super-admin-sitios.component.css']
})
export class SuperAdminSitiosComponent implements OnInit {
  public userSiteCounts: { userId: string, siteCount: number }[] = [];
  public saUsuarios: saUsuarios[] = [];
  public nombre: string[] = [];
  public nsitios: number[] = [];
  id!:string | null;
  protected name!:string;
  protected email!:string;
  protected phone!:string;
  public dataTable: any;
  

  constructor(private sasitiosService: SasitiosService, private route: ActivatedRoute, private userService: UserService,private siteService: SiteService, private router: Router) { }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit() {
    this.sasitiosService.getUsuarios().subscribe((data: saUsuarios[]) => {
      this.saUsuarios = data;
      // Obtener los ID de todos los usuarios y llamar a loadData() para cada uno
      this.saUsuarios.forEach((user) => {
        const userId = user.id;
        const nom = user.name;
        this.loadData(userId, nom);
      });
    });

  }

  
  /**
   * Carga los datos de un usuario y la cantidad de sitios asociados.
   * @param userId El ID del usuario.
   * @param nom El nombre del usuario.
   */
  async loadData(userId: string, nom: string): Promise<void> {
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
  
        const boton = '<button type="button" class="btn btn-primary rounded-pill text-white"><a class="text-white text-decoration-none" href="http://localhost:4200/sausuarios/'+ userId +'">Ver Usuario</a></button>'
        this.dataTable.row.add([
          nom,
          siteCount.toString(),
          boton
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

  
  /**
   * Método que se ejecuta después de que los componentes de la vista se inicializan completamente.
   */
  ngAfterViewInit() {
        this.dataTable = $('#example').DataTable({
  
          "language": {
            "search": "",
            "searchPlaceholder": "Buscar",
          },
          "dom": '<"d-flex justify-content-end"f>t<"d-flex justify-content-between"ipl>',
  
          "pagingType": "simple_numbers",
        });
      
    }
  }


