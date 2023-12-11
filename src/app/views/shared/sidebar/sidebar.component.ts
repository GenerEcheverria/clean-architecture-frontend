import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/infraestructure/api-v1/user.service';

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

  private userService!: UserService;

  private router!: Router;

  constructor(userServiceParam: UserService, routerParam: Router) {
    this.userService = userServiceParam;
    this.router = routerParam;
  }

  /**
   * Cierra la sesión del usuario y redirige al inicio de sesión.
   */
  protected logout() {
    this.userService.logout().subscribe(
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
