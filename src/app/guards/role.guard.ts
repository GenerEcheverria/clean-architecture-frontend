import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  private authService!: AuthService;
  private router!: Router;

  constructor(authServiceParam: AuthService, routerParam: Router) {
    this.authService = authServiceParam;
    this.router = routerParam;
  }

  public canActivate(route: ActivatedRouteSnapshot): boolean {
    const requiredRoles: string[] = route.data['roles'];

    for (const role of requiredRoles) {
      if (this.authService.hasRole(role)) {
        return true;
      }
    }

    this.router.navigate(['/login']);
    return false;
  }

}
