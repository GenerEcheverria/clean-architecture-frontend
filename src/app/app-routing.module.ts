import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { TimelineComponent } from './pages/crear-sitio/media-types/timeline/timeline.component';
import { FormsModule } from '@angular/forms';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { RegisterComponent } from './pages/register/register.component';
import { SuperAdminSitiosComponent } from "./pages/super-admin-sitios/super-admin-sitios.component";
import { MiCuentaComponent } from "./pages/mi-cuenta/mi-cuenta.component";
import { SuperadministradorCuentaUsuarioComponent } from './pages/superadministrador-cuenta-usuario/superadministrador-cuenta-usuario.component';

import { MisSitiosComponent } from './pages/mis-sitios/mis-sitios.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'site/:url', component:  SitiosComponent},
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: 'misSitios', pathMatch: 'full'},
      { path: 'crear', component: CrearSitioComponent, canActivate: [RoleGuard], data: { roles: ['admin'] }},
      { path: 'sasitios', component: SuperAdminSitiosComponent,canActivate: [RoleGuard], data: { roles: ['superadmin'] }},
      { path: 'mi-cuenta', component: MiCuentaComponent, canActivate: [RoleGuard], data: { roles: ['admin'] }},
      { path: 'sausuarios/:id', component:  SuperadministradorCuentaUsuarioComponent,canActivate: [RoleGuard], data: { roles: ['superadmin'] }},
      { path: 'misSitios', component: MisSitiosComponent, canActivate: [RoleGuard], data: { roles: ['admin'] } },
      { path: 'ranking', component: RankingComponent, canActivate: [RoleGuard], data: { roles: ['admin'] }},
      {path: '**', redirectTo: 'misSitios', pathMatch: 'full'},
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
