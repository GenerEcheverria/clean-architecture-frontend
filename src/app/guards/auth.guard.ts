import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guardia de ruta para autenticación de usuario.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authService!: AuthService;
  private router!: Router;

  constructor() {}

  /**
   * Método de canActivate para determinar si el usuario está autenticado.
   * @returns Una promesa que resuelve en un valor booleano que indica si el usuario está autenticado.
   */
  public async canActivate(): Promise<boolean> {
    try {
      const response = await this.authService.isLoggedIn().toPromise();

      if (response.valid) {
        return true;
      } else {
        this.router.navigate([ '/login' ]);
        return false;
      }
    } catch (error) {
      console.error('Error occurred during authentication check:', error);
      this.router.navigate([ '/login' ]);
      return false;
    }
  }
}
