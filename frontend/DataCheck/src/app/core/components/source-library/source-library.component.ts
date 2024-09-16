import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';
import { ProductHttpService } from '../../services/product-http.service';

@Component({
  selector: 'app-source-library',
  templateUrl: './source-library.component.html',
  styleUrls: ['./source-library.component.css'],
})
export class SourceLibraryComponent implements OnInit {
  // Dropdown options
  dataProviders: any[] = [];
  dataSets = [{ name: 'Set 1' }, { name: 'Set 2' }, { name: 'Set 3' }];
  frequencies = [{ name: 'Daily' }, { name: 'Weekly' }, { name: 'Monthly' }];
  currentTheme: string = 'light';

  // Selected values
  selectedProviders: any[] = [];
  selectedSets: any[] = [];
  selectedFrequencies: any[] = [];

  // Table 1 Data
  table1Data = [
    { dataProvider: 'Provider 1', dataSet: 'Set 1', frequency: 'Daily' },
    { dataProvider: 'Provider 2', dataSet: 'Set 2', frequency: 'Weekly' },
    { dataProvider: 'Provider 3', dataSet: 'Set 3', frequency: 'Monthly' },
  ];

  // Table 2 Data
  table2Data = [
    { fieldName: 'Field 1', dataType: 'String', notNull: true, unique: false },
    { fieldName: 'Field 2', dataType: 'Number', notNull: false, unique: true },
    { fieldName: 'Field 3', dataType: 'Date', notNull: true, unique: true },
  ];

  constructor(
    private themeService: ThemeService,
    private productHttpService: ProductHttpService // Inject your service
  ) {}

  ngOnInit(): void {
    // Subscribe to theme changes
    this.themeService.currentTheme.subscribe((isLightMode: boolean) => {
      this.currentTheme = isLightMode ? 'light' : 'dark';
    });

    // Fetch data providers
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
    this.productHttpService.getDataSet().subscribe(
      (data: any) => {
        // Map to objects with a 'name' property
        this.dataSets = data.data
          .map((set: any) => ({ name: set.ENT_NM }))
          .filter((set: any) => set.name !== null && set.name.trim() !== '');

        //  console.log('Data set with name:', this.dataSets);
      },
      (error: any) => {
        console.error('Error fetching data sets:', error);
      }
    );
  }

  resetFilters() {
    this.selectedProviders = [];
    this.selectedSets = [];
    this.selectedFrequencies = [];
    console.log('Filters reset');
  }

  applyFilters() {
    console.log('Filters applied');
  }
}
