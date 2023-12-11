import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../infrastructure/api-v1/client.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {

  protected name!: string;
  protected photo!: string;
  protected userRole!: string | null;

  private clientService: ClientService;

  constructor(clientServiceParam: ClientService) {
    this.clientService = clientServiceParam;
  }

  ngOnInit(): void {
    this.getUserInfo();
    this.userRole = localStorage.getItem('role');
  }

  private getUserInfo() {
    this.clientService.getActualUser().subscribe((data:any) => {
      this.name = data.name;
    });
  }
}
