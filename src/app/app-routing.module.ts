import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './features/shared/main-layout/main-layout.component';
import { LoginComponent } from './features/session/login/login.component';
import { FormsModule } from '@angular/forms';
import { SitesComponent } from './features/system/sites/sites.component';
import { CreateSiteComponent } from './features/system/create-site/create-site.component';
import { RegisterComponent } from './features/session/register/register.component';
import { AdminSitesComponent } from './features/admin/admin-sites-management/admin-sites-management.component';
import { UserAccountComponent } from './features/client/user-account/user-account.component';
import { AdminAccountComponent } from './features/admin/admin-user-management/admin-user-management.component';

import { MySitesComponent } from './features/client/my-sites/my-sites.component';
import { RankingComponent } from './features/system/ranking/ranking.component';
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
