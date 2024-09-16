import { APP_INITIALIZER, NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { ToastrModule } from 'ngx-toastr';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { NgxEchartsModule } from 'ngx-echarts';
import { MultiSelectModule } from 'primeng/multiselect';
import { RouterModule } from '@angular/router';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './core/components/landing/landing.component';
import { NavbarComponent } from './common/components/navbar/navbar.component';
import { FooterComponent } from './common/components/footer/footer.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { LoginComponent } from './common/components/login/login.component';
import { SourceOnboardComponent } from './core/components/source-onboard/source-onboard.component';
import { SourceLibraryComponent } from './core/components/source-library/source-library.component';

// function initializeKeycloak(keycloak: KeycloakService) {
//   return () =>
//     keycloak
//       .init({
//         config: {
//           clientId: 'mg-app_M4_DEV_cloud',
//           realm: 'menarini',
//           url: 'https://keycloak-dev.menarini.net/auth',
//         },
//         initOptions: {
//           onLoad: 'check-sso',
//           silentCheckSsoRedirectUri:
//             window.location.origin + '/assets/silent-check-sso.html',
//           checkLoginIframe: false,
//         },
//         loadUserProfileAtStartUp: true,
//       })
//       .then(() => {
//         localStorage.setItem('username', keycloak.getUsername());
//         // console.log('Keycloak initialized successfully', keycloak);
//       })
//       .catch((error) => console.error('Error initializing Keycloak', error));
// }

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    SourceOnboardComponent,
    SourceLibraryComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    NoopAnimationsModule,
    MultiSelectModule,
    HttpClientModule,
    // NgxEchartsModule.forRoot({ echarts: () => import('echarts') }),
    // FormsModule,
    // BrowserModule,
    // BrowserAnimationsModule,
    // HttpClientModule,
    // AppRoutingModule,
    // TabsModule,
    // ToastModule,
    // OrganizationChartModule,
    // TabViewModule,
    // TableModule,
    // MultiSelectModule,
    // KeycloakAngularModule,
    // FileSaverModule,
    // BsDropdownModule.forRoot(),
    // ToastrModule.forRoot({
    //   closeButton: true,
    //   timeOut: 3000,
    //   preventDuplicates: true,
    //   maxOpened: 1,
    //   autoDismiss: true,
    //   progressBar: true,
    //   progressAnimation: 'decreasing',
    //   positionClass: 'toast-center-center',
    // }),
    // DropdownModule,
    // ProgressSpinnerModule,
    // CarouselModule,
    // ChartModule,
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HTTPInterceptor, multi: true },
    // MessageService,
    // AuthService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService],
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
