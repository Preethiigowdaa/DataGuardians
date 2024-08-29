import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppService } from './app.service';

@Injectable({
    providedIn: 'root',
})
export class SearchAPIService {
    apiUrl: any;

    constructor(private http: HttpClient,
        private _apiService: AppService
    ) {
        this.apiUrl = this._apiService.getApiUrl()
    }




    getSearchResult(key: string | undefined) {
        return this.http.post(`${this.apiUrl}/search`, { searchKey: key })
    }

}