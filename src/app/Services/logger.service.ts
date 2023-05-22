import { Injectable } from '@angular/core';
import { Logger } from '../dependency-injection/logger';

// {
//   providedIn: 'root'
// }
//Comment root for testing the optional() method in component
@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class LoggerService implements Logger{
  prefix = " Root: ";
  constructor(){
    console.log(this.prefix + "Logger Service : Constructor init");
  }
  log(message: string) {
    console.log(this.prefix + message);
  }
}
