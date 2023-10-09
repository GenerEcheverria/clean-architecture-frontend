import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { TimelineComponent } from './pages/crear-sitio/media-types/timeline/timeline.component';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { SitiosComponent } from './pages/sitios/sitios.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { BodyElementComponent } from './pages/crear-sitio/body-element/body-element.component';
import { TextComponent } from './pages/crear-sitio/media-types/text/text.component';
import { ImageComponent } from './pages/crear-sitio/media-types/image/image.component';
import { VideoComponent } from './pages/crear-sitio/media-types/video/video.component';
import { CrearSitioComponent } from './pages/crear-sitio/crear-sitio.component';
import { LienzoPaginaComponent } from './pages/crear-sitio/lienzo-pagina/lienzo-pagina.component';
import { TituloLienzoComponent } from './pages/crear-sitio/lienzo-pagina/titulo-lienzo/titulo-lienzo.component';
import { TextoLienzoComponent } from './pages/crear-sitio/lienzo-pagina/body-builder/texto-lienzo/texto-lienzo.component';
import { ImagenLienzoComponent } from './pages/crear-sitio/lienzo-pagina/body-builder/imagen-lienzo/imagen-lienzo.component';
import { VideoLienzoComponent } from './pages/crear-sitio/lienzo-pagina/body-builder/video-lienzo/video-lienzo.component';
import { FooterLienzoComponent } from './pages/crear-sitio/lienzo-pagina/footer-lienzo/footer-lienzo.component';
import { SuperAdminSitiosComponent } from './pages/super-admin-sitios/super-admin-sitios.component';
import { MisSitiosComponent } from './pages/mis-sitios/mis-sitios.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { BodyBuilderComponent } from './pages/crear-sitio/lienzo-pagina/body-builder/body-builder.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { SuperadministradorCuentaUsuarioComponent } from './pages/superadministrador-cuenta-usuario/superadministrador-cuenta-usuario.component';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    LoginComponent,
    MiCuentaComponent,
    MainLayoutComponent,
    SitiosComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    BodyElementComponent,
    TextComponent,
    ImageComponent,
    VideoComponent,
    CrearSitioComponent,
    SuperAdminSitiosComponent,
    MisSitiosComponent,
    RankingComponent,
    LienzoPaginaComponent,
    TituloLienzoComponent,
    TextoLienzoComponent,
    ImagenLienzoComponent,
    VideoLienzoComponent,
    FooterLienzoComponent,
    SuperAdminSitiosComponent,
    BodyBuilderComponent,
    RegisterComponent,
    SuperadministradorCuentaUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
