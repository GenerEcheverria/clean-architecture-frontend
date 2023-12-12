import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/infrastructure/api-v1/admin.service';
import { SiteService } from 'src/app/infrastructure/api-v1/site.service';

@Component({
  selector: 'app-admin-sites',
  templateUrl: './admin-sites-management.component.html',
  styleUrls: ['./admin-sites-management.component.css'],
})
export class AdminSitesComponent implements OnInit {

  protected userSiteCounts: { userId: string; siteCount: number }[] = [];
  protected saUsuarios: any[] = [];

  private adminService!: AdminService;
  private router: Router;
  private siteService: SiteService;

  constructor(
    adminServiceParam: AdminService,
    siteServiceParam: SiteService,
    routerParam: Router
  ) {
    this.adminService = adminServiceParam;
    this.router = routerParam;
    this.siteService = siteServiceParam;
  }


  ngOnInit() {
    this.adminService.getUsers().subscribe((data: any) => {
      this.saUsuarios = data;
      this.saUsuarios.forEach((user) => {
        const userId = user.id;
        const name = user.name;
        this.loadData(userId, name);
      });
    });
  }

  private async loadData(userId: string, name: string): Promise<void> {
    if (userId) {
      try {
        const response: any = await this.siteService.getSitesForUser(userId).toPromise();
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

