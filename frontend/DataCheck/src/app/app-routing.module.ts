import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './core/components/landing/landing.component';
// import { ProductComponent } from './core/components/product/product.component';
// import { StepsComponent } from './core/components/steps/steps.component';
// import { HierarchyComponent } from './core/components/hierarchy/hierarchy.component';
// import { ProductIntroductionComponent } from './core/components/product-introduction/product-introduction.component';
// import { CustomerPortraitComponent } from './core/components/customer-portrait/customer-portrait.component';
// import { BarrierIdentificationComponent } from './core/components/barrier-identification/barrier-identification.component';
// import { KeyDifferentiationFactorsComponent } from './core/components/key-differentiation-factors/key-differentiation-factors.component';
// import { BrandLadderCompetitorComponent } from './core/components/brand-ladder-competitor/brand-ladder-competitor.component';
// import { BrandPositioningComponent } from './core/components/brand-positioning/brand-positioning.component';
// import { StrategicImperativeComponent } from './core/components/strategic-imperative/strategic-imperative.component';
// import { MultichannelEngagementComponent } from './core/components/multichannel-engagement/multichannel-engagement.component';
// import { BuyingProcessComponent } from './core/components/buying-process/buying-process.component';
// import { LandingComponent } from './core/components/landing/landing.component';
import { AuthGuard } from './guard/auth.guard';
import { ProfileComponent } from './core/components/profile/profile.component';
// import { SearchResultComponent } from './core/components/search-result/search-result.component';
// import { LogoutComponent } from './core/components/logout/logout.component';
// import { WhatsNewComponent } from './core/components/whats-new/whats-new.component';
// import { NavigatorComponent } from './core/components/navigator/navigator.component';
const routes: Routes = [
  {
    path: 'home',
    component: LandingComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'myprofile/about',
    component: ProfileComponent,
  },
  // {
  //   path: 'Home',
  //   component: HomeComponent,
  //   canActivate: [AuthGuard],
  //   children: [
  //     {
  //       path: 'Therapy/:therapyArea/ExecutiveSummary/:tabName/Product/:brandName',
  //       component: ProductComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/ProductIntroduction/:tabName/Product/:brandName',
  //       component: ProductIntroductionComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/BuyingProcess/Product/:brandName',
  //       component: BuyingProcessComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/CustomerPortrait/Product/:brandName',
  //       component: CustomerPortraitComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/BarrierIdentification/Product/:brandName',
  //       component: BarrierIdentificationComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/KeyDifferentiationFactors/Product/:brandName',
  //       component: KeyDifferentiationFactorsComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/BrandLadderCompetitor/:tabName/Product/:brandName',
  //       component: BrandLadderCompetitorComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/BrandPositioning/Product/:brandName',
  //       component: BrandPositioningComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/StrategicImperative/Product/:brandName',
  //       component: StrategicImperativeComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/MultichannelEngagement/:tabName/Product/:brandName',
  //       component: MultichannelEngagementComponent,
  //     },
  //     {
  //       path: 'Therapy/:therapyArea/MultichannelEngagement/:tabName/Product/:brandName',
  //       component: NavigatorComponent,
  //     },
  //     {
  //       path: 'steps',
  //       component: StepsComponent,
  //     },
  //     {
  //       path: 'hierarchy',
  //       component: HierarchyComponent,
  //     },
  //   ],
  // },
  // {
  //   path: 'search-result/:query',
  //   component: SearchResultComponent,
  //   canActivate: [AuthGuard],
  // },
  // // {
  // //   path: 'navigator',
  // //   component: NavigatorComponent,
  // //   canActivate: [AuthGuard],
  // // },
  // {
  //   path: 'Therapy/:therapyArea/Whats-New/:tabName/Product/:brandName',
  //   component: WhatsNewComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: '**',
  //   redirectTo: 'landing',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
