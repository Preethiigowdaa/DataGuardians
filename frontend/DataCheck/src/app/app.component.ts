import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { NavbarService } from './core/services/navbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isAuthenticated = false;
  showNavbar = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private navbarService: NavbarService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.checkAuthentication();
    this.showNavbar = this.authService.isAuthenticated();
    this.navbarService.showNavbar$.subscribe((visible) => {
      this.showNavbar = visible;
    });
  }

  checkAuthentication(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.cdr.detectChanges(); // Force change detection
    if (!this.isAuthenticated) {
      this.router.navigate(['/login']);
    }
  }

  logout(): void {
    this.authService.logout();
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }
}
