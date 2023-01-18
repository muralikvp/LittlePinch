import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigh]'
})
export class HighDirective {

  constructor(el: ElementRef) {
    console.log(el);
    el.nativeElement.style.backgroundColor = 'red';
 }
}
