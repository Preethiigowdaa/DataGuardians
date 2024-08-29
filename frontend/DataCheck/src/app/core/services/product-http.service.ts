import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/common/services/http.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as FileSaver from 'file-saver';
import { AppConfig } from 'src/app/app.conf';
import { Feedback } from 'src/app/feeback.model';

@Injectable({
  providedIn: 'root',
})
export class ProductHttpService {
  constructor(
    private httpService: HttpService,
    private http: HttpClient,
    private appConf: AppConfig
  ) {}

  // readonly PRODUCTS_ENDPOINT: string = '/products';

  // getWhatsNewItems(
  //   productKey: string | number,
  //   indicationKey: string | number
  // ): Observable<any> {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/whatsnew' + `/${productKey}/${indicationKey}`
  //   );
  // }
  // getRecentChanges(
  //   productKey: string | number,
  //   indicationKey: string | number
  // ): Observable<any> {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/recentchanges' +
  //       `/${productKey}/${indicationKey}`
  //   );
  // }

  // getProductsList() {
  //   return this.httpService.get(this.PRODUCTS_ENDPOINT + '/list');
  // }

  // getProductsByTherapyArea(therapyArea: string, isEllipta: boolean) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/therapy/' + therapyArea + '/' + isEllipta
  //   );
  // }

  // getBarrierIdentificationData(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/barrierIdentification/' + productId
  //   );
  // }

  // getMultichannelEngagementData(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/engagementPlan/' + productId
  //   );
  // }

  // getKPIData(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/engagementKPI/' + productId
  //   );
  // }

  // getBrandPositioningData(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/brandPositioning/' + productId
  //   );
  // }

  // getProductById(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/future-financial-goals'
  //   );
  // }

  // updateProductById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/future-financial-goals',
  //     json
  //   );
  // }
  // updatePathologyById(productId: number, indicationId: number, json: any) {
  //   return this.httpService.put(
  //     '/specs' + '/' + productId + '/' + indicationId + '/pathology',
  //     json
  //   );
  // }

  // updateIncidenceById(productId: number, indicationId: number, json: any) {
  //   return this.httpService.put(
  //     '/specs' + '/' + productId + '/' + indicationId + '/incidence',
  //     json
  //   );
  // }

  // updatePrevalenceById(productId: number, indicationId: number, json: any) {
  //   return this.httpService.put(
  //     '/specs' + '/' + productId + '/' + indicationId + '/prevalence',
  //     json
  //   );
  // }

  // updateDiseaseBurdenById(productId: number, indicationId: number, json: any) {
  //   return this.httpService.put(
  //     '/specs' + '/' + productId + '/' + indicationId + '/diseaseBurden',
  //     json
  //   );
  // }

  // updateCustomerPortraitById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/customerPortrait',
  //     json
  //   );
  // }

  // updateCompetitionPresentFutureMarketById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/competitorMarket',
  //     json
  //   );
  // }

  // updateBrandLadderById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/brandLadder',
  //     json
  //   );
  // }

  // updateSwudotById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/Swudot',
  //     json
  //   );
  // }

  // putKPIByProduct(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/kpi',
  //     json
  //   );
  // }

  // updateBarrierById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/barrierIdentification',
  //     json
  //   );
  // }

  // updateBrandPositionById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/brandPositioning',
  //     json
  //   );
  // }

  // updatemsgEngById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/msgEngagement',
  //     json
  //   );
  // }

  // updateStrategicImperativeById(productId: number, json: any) {
  //   return this.httpService.put(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/strategicImp',
  //     json
  //   );
  // }

  // getProductsTree(level: number, sortOrder: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + `?level=${level}&sortOrder=${sortOrder}`
  //   );
  // }

  // getIndicationsList() {
  //   return this.httpService.get('/specs' + '/list');
  // }

  // getIndicationsListByProductId(productId: number) {
  //   return this.httpService.get('/specs' + '/' + productId + '/list');
  // }

  // getProductIndiById(indication_key: number, productId: number) {
  //   return this.httpService.get(
  //     '/specs' + '/' + indication_key + '?' + 'product_key=' + productId
  //     //'/specs' + '/' + indication_key + '/' + productId
  //     // `/specs/${indication_key}/${productId}`
  //     // '/specs' + '/' + indication_key + '?' + 'product_key=' + productId
  //   );
  // }

  // getPrevalenceGraphData(
  //   productId: number,
  //   indicationId: number,
  //   epidemiology_type: string
  // ) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       'PrevalenceGraph' +
  //       '/' +
  //       productId +
  //       '/' +
  //       indicationId +
  //       '/' +
  //       epidemiology_type
  //   );
  // }

  // getExportPrevalenceGraphData(productId: number, epidemiology_type: string) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       'ExportPrevalenceGraph' +
  //       '/' +
  //       productId +
  //       '/' +
  //       epidemiology_type
  //   );
  // }

  // getExportIncidenceGraphData(productId: number, epidemiology_type: string) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       'ExportIncidenceGraph' +
  //       '/' +
  //       productId +
  //       '/' +
  //       epidemiology_type
  //   );
  // }

  // getIncidenceGraphData(
  //   productId: number,
  //   indicationId: number,
  //   epidemiology_type: string
  // ) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       'IncidenceGraph' +
  //       '/' +
  //       productId +
  //       '/' +
  //       indicationId +
  //       '/' +
  //       epidemiology_type
  //   );
  // }

  // getIndicationInfoByProductId(product_key: number) {
  //   return this.httpService.get('/specs/exportdata' + '/' + product_key);
  // }
  // getCompetitionMarket(productName: string, indicationName: string) {
  //   const encodedProductName = encodeURIComponent(productName);
  //   const encodedIndicationName = encodeURIComponent(indicationName);
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       encodedProductName +
  //       '/' +
  //       encodedIndicationName +
  //       '/' +
  //       'competition_present_future_market'
  //   );
  // }

  // getCompetitionMarketExportByProduct(productName: string) {
  //   const encodedProductName = encodeURIComponent(productName);
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       encodedProductName +
  //       '/' +
  //       'competition_present_future_market_export'
  //   );
  // }

  // getProductImages(productId: number, indicationId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       productId +
  //       '/' +
  //       indicationId +
  //       '/productImages'
  //   );
  // }
  // getProductImagesFinancial(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + productId + '/productImages'
  //   );
  // }
  // getProductImagesByProduct(productId: number, tabKey: string) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       productId +
  //       '/' +
  //       tabKey +
  //       '/productImagesByProduct'
  //   );
  // }

  // getCustomerPortrait(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + 'customerPortrait' + '/' + productId
  //   );
  // }
  // getStrategicImperative(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + 'strategicImperatives' + '/' + productId
  //   );
  // }
  // getStrategicImperativeDetail(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT +
  //       '/' +
  //       'strategicImperativesDetail' +
  //       '/' +
  //       productId
  //   );
  // }
  // queryChatbot(formData: any, requestOptions: any) {
  //   return this.httpService.post(
  //     this.PRODUCTS_ENDPOINT + '/bot',
  //     formData,
  //     requestOptions
  //   );
  // }
  // getSwudotAnalysis(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + 'swudotAnalysis' + '/' + productId
  //   );
  // }
  // addUserFeedback(feedbackData: any) {
  //   return this.httpService.post('/supports/support/', feedbackData);
  // }
  // getUserFeedbacks(userEmail: string): Observable<any> {
  //   return this.httpService.get('/supports/?userEmail=' + userEmail);
  // }

  // addquery(query: any) {
  //   return this.httpService.post('/bot/addActivity/', query);
  // }
  // getquery(): Observable<any> {
  //   return this.httpService.get('/bot');
  // }
  // updateActivity(
  //   activityId: number | undefined,
  //   updatedData: any
  // ): Observable<any> {
  //   const url = `/bot/updateActivity/${activityId}`;
  //   return this.httpService.put(url, updatedData);
  // }
  // getAnswerByQuestion(question: string): Observable<any> {
  //   const url = `/bot/getAnswerByQuestion/${encodeURIComponent(question)}`;
  //   return this.httpService.get(url);
  // }
  // searchQuestions(prefix: string): Observable<any> {
  //   const url = `/bot/questions?prefix=${prefix}`;
  //   return this.httpService.get(url);
  // }
  // getBrandLadder(productId: number) {
  //   return this.httpService.get(
  //     this.PRODUCTS_ENDPOINT + '/' + 'brandLadder' + '/' + productId
  //   );
  // }
  // getLocation(): Observable<any> {
  //   const url = `/nav/location`;
  //   return this.httpService.get(url);
  // }
  // getCategory(): Observable<any> {
  //   const url = `/nav/category`;
  //   return this.httpService.get(url);
  // }
  // getSpeciality(): Observable<any> {
  //   const url = `/nav/speciality`;
  //   return this.httpService.get(url);
  // }
  // getNavData(locId: number, specId: number, catId: number): Observable<any> {
  //   const url = `/nav/${locId}/${specId}/${catId}/navigator`;
  //   return this.httpService.get(url);
  // }
  // getCostTarget(n_key: number, product_key: number): Observable<any> {
  //   const url = `/nav/${n_key}/${product_key}/getCT`;
  //   return this.httpService.get(url);
  // }
  // // getWorldMapData(): Observable<any> {
  // //   return this.http.get<any>('assets/mapdata.json');
  // // }
  // deleteProductImage(
  //   productId: string,
  //   indicationId: string,
  //   tabKey: string,
  //   pi_key: string
  // ): Observable<any> {
  //   const url =
  //     this.appConf.apiUrl +
  //     `/products/${productId}/${indicationId}/${tabKey}/productImages`;
  //   const options = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //     }),
  //     body: { pi_key }, // Send the imagePath in the request body
  //   };

  //   return this.http.delete(url, options);
  // }

  // postDownloadPptData(
  //   jsonData: any,
  //   stepandtab: any,
  //   fileName: string
  // ): Observable<any> {
  //   // const pptxUrl = 'http://35.160.247.133:6054/api/pptx/firstTemplate';
  //   const pptxUrl = this.appConf.exportUrl + stepandtab;
  //   const headers = new HttpHeaders({
  //     // 'Content-Type': 'application/json',
  //   });
  //   const options = {
  //     headers: headers,
  //     responseType: 'blob' as 'json', // Set the response type to blob
  //   };
  //   return this.http.post(pptxUrl, jsonData, options).pipe(
  //     map((response: any) => {
  //       // console.log('API Response:', response);
  //       // Save the file using FileSaver
  //       // const fileName = 'downloadedFile.pptx';
  //       FileSaver.saveAs(response, fileName);
  //       return response;
  //     }),
  //     catchError((error) => {
  //       console.error('Error in API request', error);
  //       throw error;
  //     })
  //   );
  // }
  // // -------------------------------------------------------------------------------------------------
  // downloadMultipleSlide(payload: any, fileName: string) {
  //   const pptxUrl = this.appConf.exportUrl + '/multipleStepTemplate';
  //   const headers = new HttpHeaders({
  //     'Content-Type': 'application/json',
  //   });
  //   const options = {
  //     headers: headers,
  //     responseType: 'blob' as 'json', // Set the response type to blob
  //   };

  //   return this.http.post(pptxUrl, payload, options).pipe(
  //     map((response: any) => {
  //       // Save the file using FileSaver
  //       //const fileName = 'downloadedFile.pptx';
  //       FileSaver.saveAs(response, fileName);
  //       return response;
  //     })
  //   );
  // }

  // addCostTarget(data: any) {
  //   return this.httpService.post('/nav/costTarget', data);
  // }

  // addLogs(data: any) {
  //   return this.httpService.post('/products/postLogs', data);
  // }
  // // const stepandtab = '/multipleStepTemplate';
  // //   // Call the service method and pass the JSON data and stepandtab
  // //   this.productHttpService.postDownloadPptData(jsonData, stepandtab).subscribe(
  // //     (response) => {
  // //       // console.log('POST request successful', response);
  // //     },
  // //     (error) => {
  // //       console.error('Error in POST request', error);
  // //     }
  // //   );
}
