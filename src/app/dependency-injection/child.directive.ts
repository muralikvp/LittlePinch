import { Directive } from '@angular/core';
import { LoggerService } from '../Services/logger.service';

@Directive({
  selector: '[appChild]'
})
export class ChildDirective {

  constructor(private logger: LoggerService) { 
    this.logger.log("Directive constructor");
  }

}
