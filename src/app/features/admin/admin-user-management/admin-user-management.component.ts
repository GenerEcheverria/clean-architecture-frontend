import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SiteService } from 'src/app/services/site.service';
import { UserManagementService } from 'src/app/features/admin/user-management.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-admin-user-management',
  templateUrl: './admin-user-management.component.html',
  styleUrls: ['./admin-user-management.component.css']
})
export class AdminAccountComponent implements OnInit {

  protected userId!: string | null;
  protected name!: string;
  protected email!: string;
  protected phone!: string;
  protected sites: any;
  protected isDeleteUser!: boolean;

  private route!: ActivatedRoute;
  private userManagementService!: UserManagementService;
  private siteService!: SiteService;
  private router!: Router;
  private datePipe!: DatePipe;

  constructor(
    routeParam: ActivatedRoute,
    userManagementServiceParam: UserManagementService,
    siteServiceParam: SiteService,
    routerParam: Router,
    datePipeParam: DatePipe
  ) {
    this.route = routeParam;
    this.userManagementService = userManagementServiceParam;
    this.siteService = siteServiceParam;
    this.router = routerParam;
    this.datePipe = datePipeParam;
  }


  ngOnInit(): void {
    this.isDeleteUser = false;
    this.loadData();
  }

  /**
   * Carga los datos del usuario y los sitios asociados.
   */
  private async loadData(): Promise<void> {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      try {
        const response = await this.userManagementService.getUser(this.userId.toString()).toPromise();
        this.email = response.email;
        this.name = response.name;
        this.phone = response.phone;
      } catch (error) {
        this.router.navigate(['/sasitios']);
      }
      try {
        const response = await this.siteService.getSitesForUser(this.userId.toString()).toPromise();
        this.sites = response.sites;
      } catch (error) {
        console.error(error);
      }
    } else {
      this.router.navigate(['/sasitios']);
    }
  }


  protected deleteUser(): void {
    if (this.userId) {
      this.userManagementService.deleteUser(this.userId).subscribe(
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

  protected formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy HH:mm:ss');
    return formattedDate || '';
  }

}
