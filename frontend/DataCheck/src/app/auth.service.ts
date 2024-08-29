export class AuthService {
  private isLoggedIn = false;

  login(userId: string, password: string): boolean {
    // Replace this with your actual authentication logic
    if (userId === 'user' && password === 'menarini@123') {
      this.isLoggedIn = true;
      return true;
    } else {
      this.isLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
