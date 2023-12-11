import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../infraestructure/api-v1/client.service';

/**
 * Componente para el diseño principal de la aplicación.
 */
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

  /**
   * Método de inicialización del componente.
   */
  ngOnInit(): void {
    this.getUserInfo();
    this.userRole = localStorage.getItem('role');
  }

  /**
  * Método privado para obtener la información del usuario.
  */
  private getUserInfo() {
    this.clientService.getActualUser().subscribe((data:any) => {
      this.name = data.name;
    });
  }
}
