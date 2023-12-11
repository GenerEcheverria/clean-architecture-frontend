import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { SiteService } from 'src/app/infraestructure/api-v1/site.service';
import { AdminService } from 'src/app/infraestructure/api-v1/admin.service';

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
  private adminService!: AdminService;
  private siteService!: SiteService;
  private router!: Router;
  private datePipe!: DatePipe;

  constructor(
    routeParam: ActivatedRoute,
    adminServiceParam: AdminService,
    siteServiceParam: SiteService,
    routerParam: Router,
    datePipeParam: DatePipe
  ) {
    this.route = routeParam;
    this.adminService = adminServiceParam;
    this.siteService = siteServiceParam;
    this.router = routerParam;
    this.datePipe = datePipeParam;
  }


  ngOnInit(): void {
    this.isDeleteUser = false;
    this.loadData();
  }

  private async loadData(): Promise<void> {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      try {
        const response = await this.adminService.getUser(this.userId.toString()).toPromise();
        this.email = response.email;
        this.name = response.name;
        this.phone = response.phone;
      } catch (error) {
        this.router.navigate(['/sasitios']);
      }
      try {
        const response : any = await this.siteService.getSitesForUser(this.userId.toString()).toPromise();
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
      this.adminService.deleteUser(this.userId).subscribe(
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
