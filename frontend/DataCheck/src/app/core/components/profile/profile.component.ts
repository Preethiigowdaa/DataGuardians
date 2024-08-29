// src/app/core/components/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  currentTheme: string = 'light'; // Initialize with the default theme

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeService.currentTheme.subscribe((isLightMode: boolean) => {
      this.currentTheme = isLightMode ? 'light' : 'dark';
    });
  }
}
