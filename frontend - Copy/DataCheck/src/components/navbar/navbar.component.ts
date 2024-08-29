// src/components/navbar/navbar.component.ts
import {
  Component,
  OnInit,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../app/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  private isBrowser: boolean;

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private themeService: ThemeService // Inject ThemeService here
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const dropdownButton = this.renderer.selectRootElement(
        '#dropdownMenuButton',
        true
      );
      const dropdownMenu = this.renderer.selectRootElement(
        '#dropdownMenu',
        true
      );
      const themeSwitch = this.renderer.selectRootElement('#themeSwitch', true);

      this.renderer.listen(dropdownButton, 'click', () => {
        dropdownMenu.classList.toggle('show');
      });

      // Update theme based on checkbox state using ThemeService
      this.renderer.listen(themeSwitch, 'change', (event: Event) => {
        const isChecked = (event.target as HTMLInputElement).checked;
        this.themeService.toggleTheme(!isChecked); // Pass the opposite of the checked state
      });

      // Close the dropdown if clicked outside
      this.renderer.listen('window', 'click', (event: Event) => {
        if (
          !dropdownButton.contains(event.target as Node) &&
          dropdownMenu.classList.contains('show')
        ) {
          dropdownMenu.classList.remove('show');
        }
      });
    }
  }
}
