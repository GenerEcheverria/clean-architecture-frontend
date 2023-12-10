import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';
import { UserService } from 'src/app/services/user.service';
import { DatePipe } from '@angular/common';

/**
 * Componente para la administración de cuentas de usuario por parte de un superadministrador.
 */
@Component({
  selector: 'app-admin-account',
  templateUrl: './admin-account.component.html',
  styleUrls: ['./admin-account.component.css']
})
export class AdminAccountComponent implements OnInit {

  protected id!: string | null;
  protected name!: string;
  protected email!: string;
  protected phone!: string;
  protected sites: any;
  protected isDeleteUser!: boolean;

  private route!: ActivatedRoute;
  private userService!: UserService;
  private siteService!: SiteService;
  private router!: Router;
  private datePipe!: DatePipe;

  constructor(
    routeParam: ActivatedRoute,
    userServiceParam: UserService,
    siteServiceParam: SiteService,
    routerParam: Router,
    datePipeParam: DatePipe
  ) {
    this.route = routeParam;
    this.userService = userServiceParam;
    this.siteService = siteServiceParam;
    this.router = routerParam;
    this.datePipe = datePipeParam;
  }

  /**
   * Método que se ejecuta al inicializar el componente.
   */
  ngOnInit(): void {
    this.isDeleteUser = false;
    this.loadData();
  }

  /**
   * Carga los datos del usuario y los sitios asociados.
   */
  private async loadData(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      try {
        const response = await this.userService.getUser(this.id.toString()).toPromise();
        this.email = response.email;
        this.name = response.name;
        this.phone = response.phone;
      } catch (error) {
        this.router.navigate(['/sasitios']);
      }
      try {
        const response = await this.siteService.getSitesForUser(this.id.toString()).toPromise();
        this.sites = response.sites;
      } catch (error) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/sasitios']);
    }
  }

  /**
   * Elimina el usuario actual.
   */
  protected deleteUser(): void {
    if (this.id) {
      this.userService.deleteUser(this.id).subscribe(
        () => {
          this.router.navigate(['/sasitios']);
        },
        (error) => {
          console.error(error);
          alert('No pudo borrarse el usuario');
        }
      );
    }
  }

  /**
   * Formatea una fecha en el formato 'dd/MM/yyyy HH:mm:ss'.
   * @param date La fecha a formatear.
   * @returns La fecha formateada en formato de cadena de texto.
   */
  protected formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate || '';
  }

}
