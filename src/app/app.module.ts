import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/session/login/login.component';
import { UserAccountComponent } from './features/client/user-account/user-account.component';
import { MainLayoutComponent } from './features/shared/main-layout/main-layout.component';
import { SitesComponent } from './features/system/sites/sites.component';
import { HeaderComponent } from './features/shared/header/header.component';
import { SidebarComponent } from './features/shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './features/shared/buttons/menu-option/menu-option.component';
import { BodyElementComponent } from './features/system/create-site/body-element/body-element.component';
import { TextComponent } from './features/system/create-site/media-types/text/text.component';
import { ImageComponent } from './features/system/create-site/media-types/image/image.component';
import { VideoComponent } from './features/system/create-site/media-types/video/video.component';
import { CreateSiteComponent } from './features/system/create-site/create-site.component';
import { PageCanvasComponent } from './features/system/create-site/page-canvas/page-canvas.component';
import { TitleCanvasComponent } from './features/system/create-site/page-canvas/title-canvas/title-canvas.component';
import { TextoLienzoComponent } from './features/system/create-site/page-canvas/body-builder/text-canvas/text-canvas.component';
import { ImageCanvasComponent } from './features/system/create-site/page-canvas/body-builder/image-canvas/image-canvas.component';
import { VideoLienzoComponent } from './features/system/create-site/page-canvas/body-builder/video-canvas/video-canvas.component';
import { FooterCanvasComponent } from './features/system/create-site/page-canvas/footer-canvas/footer-canvas.component';
import { BodyBuilderComponent } from './features/system/create-site/page-canvas/body-builder/body-builder.component';
import { AdminSitesComponent } from './features/admin/admin-sites-management/admin-sites-management.component';
import { MySitesComponent } from './features/client/my-sites/my-sites.component';
import { RankingComponent } from './features/system/ranking/ranking.component';
import { RegisterComponent } from './features/session/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminAccountComponent } from './features/admin/admin-user-management/admin-user-management.component';
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
