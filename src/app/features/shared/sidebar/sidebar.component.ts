import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/features/session/session.service';

/**
 * Componente de la barra lateral de la aplicación.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() role!: string | null;

  private sessionService!: SessionService;

  private router!: Router;

  constructor(sessionServiceParam: SessionService, routerParam: Router) {
    this.sessionService = sessionServiceParam;
    this.router = routerParam;
  }

  /**
   * Cierra la sesión del usuario y redirige al inicio de sesión.
   */
  protected logout() {
    this.sessionService.logout().subscribe(
      (response) => {
        console.log(response);
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        this.router.navigate(['/login']);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
