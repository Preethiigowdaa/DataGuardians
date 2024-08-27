// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LandingComponent } from '../components/landing/landing.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { FooterComponent } from '../components/footer/footer.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, LandingComponent, NavbarComponent, FooterComponent],
  providers: [],
  bootstrap: [AppComponent], // Bootstrap with the root component
})
export class AppModule {}
