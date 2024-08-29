import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { AppService } from 'src/app/common/services/app.service';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private appService: AppService) {}
  // private selectedProducts: string[] = [];
  // private selectedProductInfoSubject = new BehaviorSubject<any>(null);
  // public selectedProductInfo$ = this.selectedProductInfoSubject.asObservable();
  // private selectedTherapyArea: BehaviorSubject<string> =
  //   new BehaviorSubject<string>('');
  // selectedTherapyArea$ = this.selectedTherapyArea.asObservable();

  // private searchResult$ = new BehaviorSubject<string>('');

  // setSearchValue(value: string) {
  //   this.searchResult$.next(value);
  //   this.setSelectedTherapyArea('Search');
  //   this.appService.selectedProductInfo = '';
  // }

  // getSearchValue() {
  //   this.searchResult$.asObservable();
  // }

  // getSearchBehaviorSubject() {
  //   return this.searchResult$;
  // }

  // setSelectedProductInfo(data: any) {
  //   this.selectedProductInfoSubject.next(data);
  // }

  // setSelectedTherapyArea(therapyArea: string): void {
  //   this.selectedTherapyArea.next(therapyArea);
  // }

  // getSelectedTherapyArea(): Observable<string> {
  //   return this.selectedTherapyArea.asObservable();
  // }
  // private selectedProductSubject = new BehaviorSubject<string>('Products');
  // selectedProduct$ = this.selectedProductSubject.asObservable();

  // updateSelectedProduct(productName: string) {
  //   this.selectedProductSubject.next(productName);
  // }

  // private selectedIndicationIdSource = new BehaviorSubject<number | null>(null);
  // selectedIndicationId$ = this.selectedIndicationIdSource.asObservable();

  // updateSelectedIndicationId(indicationId: number) {
  //   this.selectedIndicationIdSource.next(indicationId);
  // }
  // private selectedProductIdSource = new BehaviorSubject<number | null>(null);
  // selectedProductId1$ = this.selectedProductIdSource.asObservable();

  // updateSelectedProductId(productId: number) {
  //   this.selectedProductIdSource.next(productId);
  // }
  // private selectedproductNameSource = new BehaviorSubject<string | null>(null);
  // selectedProductName$ = this.selectedproductNameSource.asObservable();

  // updateSelectedProductName(productName: string) {
  //   this.selectedproductNameSource.next(productName);
  // }
  // private selecteddynamicLabelSource = new BehaviorSubject<string | null>(null);
  // selectedDynamicLabel$ = this.selecteddynamicLabelSource.asObservable();

  // updateDynamicLabelName(label: string) {
  //   this.selecteddynamicLabelSource.next(label);
  // }
  // public selectedIndicationNameSource = new BehaviorSubject<string | null>(
  //   null
  // );
  // selectedIndicationName$ = this.selectedIndicationNameSource.asObservable();

  // updateSelectedIndicationName(indicationName: string) {
  //   this.selectedIndicationNameSource.next(indicationName);
  // }
  // // --------------------------------------------------------------------------------
  // public selectedStep2Info = new BehaviorSubject<string | null>(null);
  // selectedStep2Info$ = this.selectedStep2Info.asObservable();

  // setSelectedStep2Info(comp: string) {
  //   this.selectedStep2Info.next(comp);
  // }

  // public selectedStep2InfoCompareData = new BehaviorSubject<string | null>(
  //   null
  // );
  // selectedStep2InfoCompareData$ =
  //   this.selectedStep2InfoCompareData.asObservable();

  // setselectedStep2InfoCompareData(indName: string) {
  //   this.selectedStep2InfoCompareData.next(indName);
  // }

  // public selectedStep2InfoCompareDataCompetitors = new BehaviorSubject<
  //   string | null
  // >(null);
  // selectedStep2InfoCompareDataCompetitors$ =
  //   this.selectedStep2InfoCompareDataCompetitors.asObservable();

  // setselectedStep2InfoCompareDataCompetitors(indName: string) {
  //   this.selectedStep2InfoCompareDataCompetitors.next(indName);
  // }

  // public selectedCustomerPortraitData = new BehaviorSubject<string | null>(
  //   null
  // );
  // selectedCustomerPortraitData$ =
  //   this.selectedCustomerPortraitData.asObservable();

  // setselectedCustomerPortraitData(custom: string) {
  //   this.selectedCustomerPortraitData.next(custom);
  // }

  // public selectedStep5Info = new BehaviorSubject<string | null>(null);
  // selectedStep5Info$ = this.selectedStep5Info.asObservable();

  // setSelectedStep5Info(comp: string) {
  //   this.selectedStep5Info.next(comp);
  // }

  // public selectedStep10Info = new BehaviorSubject<string | null>(null);
  // selectedStep10Info$ = this.selectedStep10Info.asObservable();

  // setSelectedStep10Info(comp: string) {
  //   this.selectedStep10Info.next(comp);
  // }

  // public selectedStep10bInfo = new BehaviorSubject<string | null>(null);
  // selectedStep10bInfo$ = this.selectedStep10bInfo.asObservable();

  // setSelectedStep10bInfo(comp: string) {
  //   this.selectedStep10bInfo.next(comp);
  // }

  // public selectedStep8Info = new BehaviorSubject<string | null>(null);
  // selectedStep8Info$ = this.selectedStep8Info.asObservable();

  // setSelectedStep8Info(comp: string) {
  //   this.selectedStep8Info.next(comp);
  // }

  // public selectedStepSWUDOTInfo = new BehaviorSubject<string | null>(null);
  // selectedStepSWUDOTInfo$ = this.selectedStepSWUDOTInfo.asObservable();

  // setSelectedStepSWUDOTInfo(comp: string) {
  //   this.selectedStepSWUDOTInfo.next(comp);
  // }

  // public selectedStepBrandLadder = new BehaviorSubject<string | null>(null);
  // selectedStepBrandLadder$ = this.selectedStepBrandLadder.asObservable();

  // setSelectedStepBrandLadder(comp: string) {
  //   this.selectedStepBrandLadder.next(comp);
  // }

  // private currentTabSubject = new BehaviorSubject<string>('Snapshot');
  // currentTab$ = this.currentTabSubject.asObservable();

  // setCurrentTab(tab: string) {
  //   this.currentTabSubject.next(tab);
  // }
  // private activeTabSubject = new BehaviorSubject<string>('Recommendations');
  // activeTab$ = this.activeTabSubject.asObservable();

  // setActiveTab(tab: string) {
  //   this.activeTabSubject.next(tab);
  // }
  // private imageIndexSubject = new BehaviorSubject<number>(0);
  // imageIndex$ = this.imageIndexSubject.asObservable();

  // setImageIndex(index: number) {
  //   this.imageIndexSubject.next(index);
  // }
  // private currentButtonSubject = new BehaviorSubject<string>(
  //   'Market Size & Growth'
  // );
  // currentButton$ = this.currentButtonSubject.asObservable();

  // setCurrentButton(button: string) {
  //   this.currentButtonSubject.next(button);
  // }
  // private currentTab7Subject = new BehaviorSubject<string>('BrandLadder');
  // currentTab7$ = this.currentTab7Subject.asObservable();

  // setCurrentTab7(tab: string) {
  //   this.currentTab7Subject.next(tab);
  // }
  // private currentTab2Subject = new BehaviorSubject<string>('Pathology');
  // currentTab2$ = this.currentTab2Subject.asObservable();

  // setCurrentTab2(tab: string) {
  //   this.currentTab2Subject.next(tab);
  // }
  // private currentTab10Subject = new BehaviorSubject<string>(
  //   'Messages & Engagement Solutions'
  // );
  // currentTab10$ = this.currentTab10Subject.asObservable();

  // setCurrentTab10(tab: string) {
  //   this.currentTab10Subject.next(tab);
  // }
  // private currentSubTabSubject = new BehaviorSubject<string>('Prevalence');
  // currentSubTab$ = this.currentSubTabSubject.asObservable();

  // setCurrentSubTab(tab: string) {
  //   this.currentSubTabSubject.next(tab);
  // }

  // private currentStepSubject = new BehaviorSubject<number>(1);
  // currentStep$ = this.currentStepSubject.asObservable();

  // setCurrentStep(step: number) {
  //   this.currentStepSubject.next(step);
  // }
  // // private currentStepSubject1 = new BehaviorSubject<number>(9);
  // // currentStep1$ = this.currentStepSubject1.asObservable();

  // // setCurrentStep1(step: number) {
  // //   this.currentStepSubject1.next(step);
  // // }
  // public selectedStep9Info = new BehaviorSubject<string | null>(null);
  // selectedStep9Info$ = this.selectedStep9Info.asObservable();

  // setSelectedStep9Info(comp: string) {
  //   this.selectedStep9Info.next(comp);
  // }

  // public selecteduserProfile = new BehaviorSubject<any | null>(null);
  // selecteduserProfile$ = this.selecteduserProfile.asObservable();

  // setSelectedUserProfile(userProfile: any) {
  //   // console.log(userProfile);
  //   this.selecteduserProfile.next(userProfile);
  // }
  // getSelectedUserProfile() {
  //   return this.selecteduserProfile;
  // }

  // public selectedStep9InfoDetail = new BehaviorSubject<string | null>(null);
  // selectedStep9InfoDetail$ = this.selectedStep9InfoDetail.asObservable();

  // setSelectedStep9InfoDetail(comp: string) {
  //   this.selectedStep9InfoDetail.next(comp);
  // }

  // public selectedStepImage = new BehaviorSubject<string | null>(null);
  // selectedStepImage$ = this.selectedStepImage.asObservable();

  // setSelectedStepImage(img: string) {
  //   this.selectedStepImage.next(img);
  // }

  // private currentIndex = new BehaviorSubject<number>(0);
  // currentIndex$ = this.currentIndex.asObservable();

  // setCurrentIndex(tab: number) {
  //   this.currentIndex.next(tab);
  // }

  // private currentSubIndexs = new BehaviorSubject<string>('I');
  // currentSubIndexs$ = this.currentSubIndexs.asObservable();

  // setcurrentSubIndexs(tabs: string) {
  //   this.currentSubIndexs.next(tabs);
  // }

  // private currentStepSubject1 = new BehaviorSubject<number>(9);
  // currentStep1$ = this.currentStepSubject1.asObservable();

  // setCurrentStep1(step: number) {
  //   this.currentStepSubject1.next(step);
  // }

  // private selectedCompetitorsSource = new BehaviorSubject<string[]>([]);
  // selectedCompetitors$ = this.selectedCompetitorsSource.asObservable();

  // setSelectedCompetitors(competitors: string[]): void {
  //   this.selectedCompetitorsSource.next(competitors);
  // }

  // getSelectedCompetitors(): Observable<string[]> {
  //   return this.selectedCompetitors$;
  // }

  // private dataWithoutIndication = new BehaviorSubject<string[]>([]);
  // dataWithoutIndication$ = this.dataWithoutIndication.asObservable();

  // setDataWithoutIndication(rawData: string[]): void {
  //   this.dataWithoutIndication.next(rawData);
  // }

  // private dynamicCompetitors = new BehaviorSubject<string[]>([]);
  // dynamicCompetitors$ = this.dynamicCompetitors.asObservable();

  // setDynamicCompetitors(rawData: string[]): void {
  //   this.dynamicCompetitors.next(rawData);
  // }

  // private compareAllCompetitorsData = new BehaviorSubject<string[]>([]);
  // compareAllCompetitorsData$ = this.compareAllCompetitorsData.asObservable();

  // setCompareAllCompetitorsData(rawData: string[]): void {
  //   this.compareAllCompetitorsData.next(rawData);
  // }
  // //---------------------------------------------------------------------------------------------
  // private compareAllCompetitorData = new BehaviorSubject<string[]>([]);
  // compareAllCompetitorData$ = this.compareAllCompetitorData.asObservable();

  // setCompareAllCompetitorData(rawData: string[]): void {
  //   this.compareAllCompetitorData.next(rawData);
  // }

  // private newData = new BehaviorSubject<string[]>([]);
  // newData$ = this.newData.asObservable();

  // setnewData(rawData: string[]): void {
  //   this.newData.next(rawData);
  // }

  // private graphDataInfo = new BehaviorSubject<string[]>([]);
  // graphDataInfo$ = this.graphDataInfo.asObservable();

  // setGraphDataInfo(graphData: string[]): void {
  //   this.graphDataInfo.next(graphData);
  // }

  // private exportPrevalencegraphData = new BehaviorSubject<string[]>([]);
  // exportPrevalencegraphData$ = this.exportPrevalencegraphData.asObservable();

  // setexportPrevalencegraphData(graphData: string[]): void {
  //   this.exportPrevalencegraphData.next(graphData);
  // }

  // private exporIncidencetgraphData = new BehaviorSubject<string[]>([]);
  // exporIncidencetgraphData$ = this.exporIncidencetgraphData.asObservable();

  // setexporIncidencetgraphData(graphData: string[]): void {
  //   this.exporIncidencetgraphData.next(graphData);
  // }

  // private isEditingSubject: BehaviorSubject<boolean> =
  //   new BehaviorSubject<boolean>(false);
  // isEditing$: Observable<boolean> = this.isEditingSubject.asObservable();

  // setIsEditing(isEditing: boolean): void {
  //   this.isEditingSubject.next(isEditing);
  // }
}
