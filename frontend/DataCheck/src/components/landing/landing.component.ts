import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../app/theme.service';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
})
export class LandingComponent implements OnInit {
  openIndices: boolean[] = [false, false, false, false, false];
  showOptions = false;
  currentTheme: string = 'light'; // Initialize with the default theme

  constructor(private themeService: ThemeService) {}

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
}
