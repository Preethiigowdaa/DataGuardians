import { Injectable } from '@angular/core';

import { Indications, Product, Location, Speciality, Category } from '../interfaces/product';
import { Spec } from '../interfaces/spec';
import { AppConfig } from 'src/app/app.conf';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  isShowLoader = false;
  //private readonly apiUrl = 'http://localhost:3000/api/v1';
  isAbleToEdit: Boolean = false;
  selectedStep = 1;
  selectedProductId: any;
  selectedCategoryId: any;
  selectedIndicationsId: any;
  selectedProductInfo: any;
  selectedStep2Info: any;
  withoutStep2Info: any;
  selectedStep2InfoCompareData: any;
  selectedIndicationInfo: any;
  products: Product[] = [];
  specialities: Speciality[] = [];
  categories: Category[] = [];
  locations: Location[] = [];

  specs: any[] = [
    { name: 'A', value: 1 },
    { name: 'B', value: 2 },
    { name: 'C', value: 3 },
    { name: 'D', value: 4 },
  ];
  indications: Indications[] = [];
  constructor(private appConf: AppConfig) { }

  getApiUrl(): string {
    return this.appConf.apiUrl;
  }
  showLoader() {
    this.isShowLoader = true;
  }
  hideLoader() {
    this.isShowLoader = false;
  }
}
