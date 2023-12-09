import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

/**
 * Componente de la barra lateral de la aplicación.
 */
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  @Input() role!: string;

  private authService!: AuthService;

  private router!: Router;

  constructor(authServiceParam: AuthService, routerParam: Router) {
    this.authService = authServiceParam;
    this.router = routerParam;
  }

  /**
   * Cierra la sesión del usuario y redirige al inicio de sesión.
   */
  protected logout() {
    this.authService.logout().subscribe(
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
