import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileBannerComponent } from './mobile-banner/mobile-banner.component';
import { MobileProfileComponent } from './mobile-profile/mobile-profile.component';
import { MobileAdComponent } from './mobile-ad/mobile-ad.component';

@NgModule({
  declarations: [
    MobileBannerComponent,
    MobileProfileComponent,
    MobileAdComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MobileBannerComponent,
    MobileProfileComponent,
    MobileAdComponent
  ]
})
export class DynamicComponentModule { }
