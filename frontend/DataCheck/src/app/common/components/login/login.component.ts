import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { NavbarService } from 'src/app/core/services/navbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage: string | null = null;
  constructor(
    private authService: AuthService,
    private router: Router,
    private navbarService: NavbarService
  ) {}

  onSubmit(): void {
    if (this.authService.login(this.email, this.password)) {
      this.navbarService.setNavbarVisibility(true);
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}
