import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';

@Injectable({
  providedIn: 'root',
})
export class SpecHttpService {
  constructor(private httpService: HttpService) {}

  // readonly SPECS_ENDPOINT: string = '/specs';

  // getSpecById(specId: number) {
  //   return this.httpService.get(this.SPECS_ENDPOINT + '/' + specId);
  // }

  // updateSpecById(specId: number, json: any) {
  //   return this.httpService.put(this.SPECS_ENDPOINT + '/' + specId, json);
  // }
}
