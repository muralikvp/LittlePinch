import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobile-profile',
  templateUrl: './mobile-profile.component.html',
  styleUrls: ['./mobile-profile.component.css']
})
export class MobileProfileComponent {
  @Input() data: any;
}
