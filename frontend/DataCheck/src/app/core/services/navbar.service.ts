import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  private showNavbarSubject = new BehaviorSubject<boolean>(false);
  showNavbar$ = this.showNavbarSubject.asObservable();

  setNavbarVisibility(visible: boolean): void {
    this.showNavbarSubject.next(visible);
  }
}
