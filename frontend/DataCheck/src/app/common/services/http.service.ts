import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppService } from './app.service';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  apiUrl: string;

  constructor(private http: HttpClient, private appService: AppService) { 
    this.apiUrl = this.appService.getApiUrl()
  }
  
  get(path: string, requestOptions?: any) {
    return this.http.get(this.apiUrl + path, requestOptions);
  }

  post(path: string, reqParams: any, requestOptions?: any) {
    const body = JSON.stringify(reqParams);
    return this.http.post(this.apiUrl + path, body, requestOptions);
}

  put(path: string, reqParams: any) {
    const body = JSON.stringify(reqParams);
    return this.http.put(this.apiUrl + path, body);
  }

  delete(path: string) {
    return this.http.delete(this.apiUrl + path);
  }

}