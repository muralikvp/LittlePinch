import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-ad',
  templateUrl: './mobile-ad.component.html',
  styleUrls: ['./mobile-ad.component.css']
})
export class MobileAdComponent {
  @Input() data: any;
}
