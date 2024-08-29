// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
import { ProfileComponent } from './core/components/profile/profile.component';
import { LoginComponent } from './common/components/login/login.component';
import { AuthGuard } from './guard/auth.guard';
// Import other components here

export const routes: Routes = [
  { path: 'home', component: LandingComponent, canActivate: [AuthGuard] },
  {
    path: 'myprofile/about',
    component: ProfileComponent,
    canActivate: [AuthGuard],
  },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }, // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
