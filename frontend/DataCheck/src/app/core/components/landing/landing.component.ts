import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  openIndices: boolean[] = [false, false, false, false, false];
  showOptions = false;
  currentTheme: string = 'light'; // Initialize with the default theme

  constructor(private themeService: ThemeService, private router: Router) {
    console.log('LandingComponent initialized');
  }

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeService.currentTheme.subscribe((isLightMode: boolean) => {
      this.currentTheme = isLightMode ? 'light' : 'dark';
    });
  }
  toggleOptions() {
    this.showOptions = !this.showOptions;
    console.log(this.showOptions);
  }
  toggleAccordion(index: number) {
    this.openIndices[index] = !this.openIndices[index];
  }
  openSourceOnboard() {
    this.router.navigate(['/source-onboard']);
  }
  openSourceLibrary() {
    this.router.navigate(['/source-library']);
  }
}
