import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/session/login/login.component';
import { UserAccountComponent } from './views/client/user-account/user-account.component';
import { MainLayoutComponent } from './views/shared/main-layout/main-layout.component';
import { SitesComponent } from './views/system/sites/sites.component';
import { HeaderComponent } from './views/shared/header/header.component';
import { SidebarComponent } from './views/shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './views/shared/buttons/menu-option/menu-option.component';
import { BodyElementComponent } from './views/system/create-site/body-element/body-element.component';
import { TextComponent } from './views/system/create-site/media-types/text/text.component';
import { ImageComponent } from './views/system/create-site/media-types/image/image.component';
import { VideoComponent } from './views/system/create-site/media-types/video/video.component';
import { CreateSiteComponent } from './views/system/create-site/create-site.component';
import { PageCanvasComponent } from './views/system/create-site/page-canvas/page-canvas.component';
import { TitleCanvasComponent } from './views/system/create-site/page-canvas/title-canvas/title-canvas.component';
import { TextoLienzoComponent } from './views/system/create-site/page-canvas/body-builder/text-canvas/text-canvas.component';
import { ImageCanvasComponent } from './views/system/create-site/page-canvas/body-builder/image-canvas/image-canvas.component';
import { VideoLienzoComponent } from './views/system/create-site/page-canvas/body-builder/video-canvas/video-canvas.component';
import { FooterCanvasComponent } from './views/system/create-site/page-canvas/footer-canvas/footer-canvas.component';
import { BodyBuilderComponent } from './views/system/create-site/page-canvas/body-builder/body-builder.component';
import { AdminSitesComponent } from './views/admin/admin-sites-management/admin-sites-management.component';
import { MySitesComponent } from './views/client/my-sites/my-sites.component';
import { RankingComponent } from './views/system/ranking/ranking.component';
import { RegisterComponent } from './views/session/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AdminAccountComponent } from './views/admin/admin-user-management/admin-user-management.component';
import { DatePipe } from '@angular/common';
import { GatewayAdmin } from './domain/gateways/gateway-admin';
import { AdminService } from './infrastructure/api-v1/admin.service';
import { GatewayClient } from './domain/gateways/gateway-client';
import { ClientService } from './infrastructure/api-v1/client.service';
import { GatewaySite } from './domain/gateways/gateway-site';
import { SiteService } from './infrastructure/api-v1/site.service';


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

  providers: [
    DatePipe,
    { provide: GatewayAdmin, useClass: AdminService },
    { provide: GatewayClient, useClass: ClientService },
    { provide: GatewaySite, useClass: SiteService }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
