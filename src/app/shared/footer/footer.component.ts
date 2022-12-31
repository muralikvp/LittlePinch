import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  providers: [DatePipe]

})
export class FooterComponent {
// myDate!: string|number|Date;
myDate = new Date();
// constructor(private datePipe: DatePipe){
//     this.myDate = this.datePipe.transform(this.myDate, 'yyyy-MM-dd');
// }
}
