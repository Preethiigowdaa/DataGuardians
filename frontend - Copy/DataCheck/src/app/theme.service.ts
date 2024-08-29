// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isLightMode = new BehaviorSubject<boolean>(true);
  currentTheme = this.isLightMode.asObservable();

  toggleTheme(isLight: boolean) {
    this.isLightMode.next(isLight);
    if (isLight) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }
}
