import { Component, OnInit } from '@angular/core';
import { SasitiosService } from 'src/app/services/sasitios.service';
// import { saUsuarios } from 'src/app/interfaces/saUsuarios';
import { Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';

/**
  * Componente para la administración de sitios por parte de un superadministrador.
  */
@Component({
  selector: 'app-admin-sites',
  templateUrl: './admin-sites-management.component.html',
  styleUrls: ['./admin-sites-management.component.css'],
})
export class AdminSitesComponent implements OnInit {
  protected userSiteCounts: { userId: string; siteCount: number }[] = [];
  protected saUsuarios: any[] = [];

  private sasitiosService!: SasitiosService;
  private router: Router;
  private siteService: SiteService;

  constructor(
    sasitiosServiceParam: SasitiosService,
    siteServiceParam: SiteService,
    routerParam: Router
  ) {
    this.sasitiosService = sasitiosServiceParam;
    this.router = routerParam;
    this.siteService = siteServiceParam;
  }

  /**
    * Método que se ejecuta al inicializar el componente.
    */
  ngOnInit() {
    this.sasitiosService.getUsers().subscribe((data: any[]) => {
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
    * Carga los datos de un usuario y la cantidad de sitios asociados.
    * @param userId El ID del usuario.
    * @param name El nombre del usuario.
    */
  private async loadData(userId: string, name: string): Promise<void> {
    if (userId) {
      try {
        const response = await this.siteService.getSitesForUser(userId).toPromise();
        const siteCount = response.sites.length;
        const userSiteCount = {
          userId: userId,
          siteCount: siteCount,
        };

        this.userSiteCounts.push(userSiteCount);
        const button = document.createElement('button');
        button.classList.add('btn', 'btn-primary', 'rounded-pill', 'text-white');

        const link = document.createElement('a');
        link.classList.add('text-white', 'text-decoration-none');
        link.href = `/sausuarios/${userId}`;
        link.textContent = 'Ver Usuario';

        button.appendChild(link);

        // Agregar datos a la tabla
        const dataTable = document.getElementById('example') as HTMLTableElement;
        var tableBody = dataTable.querySelector('tbody');

        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        nameCell.textContent = name;
        const siteCountCell = document.createElement('td');
        siteCountCell.textContent = siteCount.toString();
        const buttonCell = document.createElement('td');
        buttonCell.appendChild(button);

        row.appendChild(nameCell);
        row.appendChild(siteCountCell);
        row.appendChild(buttonCell);

        if (!tableBody) {
          tableBody = document.createElement('tbody');
          dataTable.appendChild(tableBody);
        }

        tableBody.appendChild(row);
      } catch (error) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/sasitios']);
    }
  }
}

