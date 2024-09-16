import { Component } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-source-onboard',
  templateUrl: './source-onboard.component.html',
  styleUrls: ['./source-onboard.component.css'],
})
export class SourceOnboardComponent {
  dataProvider: string = '';
  dataSetName: string = '';
  description: string = '';
  frequency: string = '';
  fileLocation: string = '';
  currentTheme: string = 'light';
  dataProviders: any[] = []; // Store fetched providers
  // Validation flags
  fileLocationRequired: boolean = false;

  constructor(
    private themeService: ThemeService,
    private productHttpService: ProductHttpService
  ) {}

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeService.currentTheme.subscribe((isLightMode: boolean) => {
      this.currentTheme = isLightMode ? 'light' : 'dark';
    });

    // Fetch data providers from API
    this.productHttpService.getDataProvider().subscribe(
      (data: any) => {
        // Map to objects with a 'name' property
        this.dataProviders = data.data
          .map((provider: any) => ({ name: provider.ENT_PRVDR_NM }))
          .filter(
            (provider: any) =>
              provider.name !== null && provider.name.trim() !== ''
          );

        console.log('Data Providers with name:', this.dataProviders);
      },
      (error: any) => {
        console.error('Error fetching data providers:', error);
      }
    );
  }

  validateForm() {
    this.fileLocationRequired = !this.fileLocation;

    if (!this.dataProvider || !this.dataSetName || !this.frequency) {
      console.log('Please fill out all required fields');
      return false;
    }

    if (!this.fileLocation) {
      console.log('File Location is required');
      return false;
    }

    return true;
  }

  // Method to submit the form
  submitForm() {
    if (this.validateForm()) {
      // Perform the submit action, for example sending the data to an API or logging it
      const formData = {
        dataProvider: this.dataProvider,
        dataSetName: this.dataSetName,
        description: this.description,
        frequency: this.frequency,
        fileLocation: this.fileLocation,
      };

      console.log('Form submitted:', formData);

      // You can send the form data to an API service or handle it as needed
    } else {
      console.log('Form is not valid');
    }
  }
}
