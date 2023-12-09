import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

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

  private authService: AuthService;

  constructor(authServiceParam: AuthService) {
    this.authService = authServiceParam;
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
    this.authService.getActualUser().subscribe(data => {
      this.name = data.name;
      this.photo = data.photo;
      const image = new Image();
      image.src = this.photo;
      image.onerror = () => {
        this.photo = '../../../assets/images/default-user.png';
      };
    });
  }
}
