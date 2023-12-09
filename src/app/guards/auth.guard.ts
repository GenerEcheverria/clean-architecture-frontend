import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private authService!: AuthService;
  private router!: Router;

  constructor( authServiceParam: AuthService, routerParam: Router) {
    this.authService = authServiceParam;
    this.router = routerParam;
  }

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
