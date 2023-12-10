import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { UserAccountComponent } from './pages/user-account/user-account.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { SitesComponent } from './pages/sites/sites.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { BodyElementComponent } from './pages/create-site/body-element/body-element.component';
import { TextComponent } from './pages/create-site/media-types/text/text.component';
import { ImageComponent } from './pages/create-site/media-types/image/image.component';
import { VideoComponent } from './pages/create-site/media-types/video/video.component';
import { CreateSiteComponent } from './pages/create-site/create-site.component';
import { PageCanvasComponent } from './pages/create-site/page-canvas/page-canvas.component';
import { TitleCanvasComponent } from './pages/create-site/page-canvas/title-canvas/title-canvas.component';
import { TextoLienzoComponent } from './pages/create-site/page-canvas/body-builder/text-canvas/text-canvas.component';
import { ImageCanvasComponent } from './pages/create-site/page-canvas/body-builder/image-canvas/image-canvas.component';
import { VideoLienzoComponent } from './pages/create-site/page-canvas/body-builder/video-canvas/video-canvas.component';
import { FooterCanvasComponent } from './pages/create-site/page-canvas/footer-canvas/footer-canvas.component';
import { AdminSitesComponent } from './pages/admin-sites/admin-sites.component';
import { MySitesComponent } from './pages/my-sites/my-sites.component';
import { RankingComponent } from './pages/ranking/ranking.component';
import { BodyBuilderComponent } from './pages/create-site/page-canvas/body-builder/body-builder.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminAccountComponent } from './pages/admin-account/admin-account.component';
import { DatePipe } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAccountComponent,
    MainLayoutComponent,
    SitesComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    BodyElementComponent,
    TextComponent,
    ImageComponent,
    VideoComponent,
    CreateSiteComponent,
    AdminSitesComponent,
    MySitesComponent,
    RankingComponent,
    PageCanvasComponent,
    TitleCanvasComponent,
    TextoLienzoComponent,
    ImageCanvasComponent,
    VideoLienzoComponent,
    FooterCanvasComponent,
    AdminSitesComponent,
    BodyBuilderComponent,
    RegisterComponent,
    AdminAccountComponent
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
