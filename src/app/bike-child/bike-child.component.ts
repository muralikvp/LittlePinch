import { InvokeFunctionExpr } from '@angular/compiler';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bike-child',
  templateUrl: './bike-child.component.html',
  styleUrls: ['./bike-child.component.css']
})
export class BikeChildComponent {
  @Input() imageStr!: string;
}
