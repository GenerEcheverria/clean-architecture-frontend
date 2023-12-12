import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './views/shared/main-layout/main-layout.component';
import { LoginComponent } from './views/session/login/login.component';
import { FormsModule } from '@angular/forms';
import { SitesComponent } from './views/system/sites/sites.component';
import { CreateSiteComponent } from './views/system/create-site/create-site.component';
import { RegisterComponent } from './views/session/register/register.component';
import { AdminSitesComponent } from './views/admin/admin-sites-management/admin-sites-management.component';
import { UserAccountComponent } from './views/client/user-account/user-account.component';
import { AdminAccountComponent } from './views/admin/admin-user-management/admin-user-management.component';

import { MySitesComponent } from './views/client/my-sites/my-sites.component';
import { RankingComponent } from './views/system/ranking/ranking.component';
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
      { path: 'crear', component: CreateSiteComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
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
