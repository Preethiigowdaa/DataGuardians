import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AppConfig {
  'appName' = 'Data Checker';
  'appUrl' = 'https://menarinim4.datazymes.com/';
  // 'apiUrl' = 'https://stg-m4-intellia.menarini.com/api/v1';
  'apiUrl' = 'http://localhost:3000/api/v1';
  'exportUrl' = 'https://stg-m4-intellia.menarini.com/api/pptx';
  'logoutUrl' = 'https://menarinim4.datazymes.com/#/logout';
}
