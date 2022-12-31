import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[MobileHost]',
})
export class MobileDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}