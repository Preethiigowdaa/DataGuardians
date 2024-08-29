// src/components/footer/footer.component.ts
import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'], // Note the correction: styleUrls should be an array, and it is styleUrls, not styleUrl
})
export class FooterComponent implements OnInit {
  currentTheme: string = 'light'; // Initialize with the default theme

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeService.currentTheme.subscribe((isLightMode: boolean) => {
      this.currentTheme = isLightMode ? 'light' : 'dark';
    });
  }
}
