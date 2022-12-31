import { Component, OnInit } from '@angular/core';
import { BIKES } from './Bike';
import { mobileItem } from './dynamic-component/mobile-item';
import { MobileService } from './dynamic-component/mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'littlePinch';
  BikeList = BIKES;
  mobiles: mobileItem[] = [];
  constructor(private mobileService: MobileService) {}
  ngOnInit(): void {
   this.mobiles = this.mobileService.getMobiles();
  }

}
