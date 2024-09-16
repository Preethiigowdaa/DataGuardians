import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { LoginComponent } from './common/components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
import { SourceOnboardComponent } from './core/components/source-onboard/source-onboard.component';
import { SourceLibraryComponent } from './core/components/source-library/source-library.component';

const routes: Routes = [
  { path: 'home', component: LandingComponent, canActivate: [AuthGuard] },
  {
    path: 'myprofile/about',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: 'source-onboard', component: SourceOnboardComponent },
  { path: 'source-library', component: SourceLibraryComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/login' }, // Wildcard route for 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
