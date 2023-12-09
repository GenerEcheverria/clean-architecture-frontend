import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { SitesComponent } from './pages/sites/sites.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { RegisterComponent } from './pages/register/register.component';
import { AdminSitesComponent } from './pages/admin-sites/admin-sites.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';

import { MySitesComponent } from './pages/my-sites/my-sites.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'site/:url', component: SitesComponent },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'misSitios', pathMatch: 'full' },
      { path: 'crear', component: CrearSitioComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'sasitios', component: AdminSitesComponent, canActivate: [RoleGuard], data: { roles: ['superadmin'] } },
      { path: 'mi-cuenta', component: UserAccountComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'sausuarios/:id', component: AdminAccountComponent, canActivate: [RoleGuard], data: { roles: ['superadmin'] } },
      { path: 'misSitios', component: MySitesComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'ranking', component: RankingComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: '**', redirectTo: 'misSitios', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports:
    [FormsModule,
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
