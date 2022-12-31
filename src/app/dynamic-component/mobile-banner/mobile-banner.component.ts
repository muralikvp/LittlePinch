import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MobileAdComponent } from '../mobile-ad/mobile-ad.component';
import { mobileItem } from '../mobile-item';
import { MobileDirective } from '../Mobile.directive';

@Component({
  selector: 'app-mobile-banner',
  templateUrl: './mobile-banner.component.html',
  styleUrls: ['./mobile-banner.component.css']
})
export class MobileBannerComponent implements OnInit, OnDestroy {

  @Input() mobiles: mobileItem[] = [];
  currentAdIndex = -1;

  @ViewChild(MobileDirective, {static: true}) MobileHost!: MobileDirective;
  interval: NodeJS.Timer;

  
  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
  ngOnInit(): void {
    this.loadComponent();
    this.getMobiles();
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.mobiles.length;
    const adItem = this.mobiles[this.currentAdIndex];

    const viewContainerRef = this.MobileHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<MobileAdComponent>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getMobiles() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }

}
