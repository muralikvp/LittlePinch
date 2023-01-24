import { Inject, Injectable } from '@angular/core';
import { AppConfig, APP_CONFIG } from '../config.token';
import { Logger } from '../dependency-injection/logger';

@Injectable({
  providedIn: 'root'
})
export class ExperimentalLoggerService implements Logger {

  // constructor(@Inject(APP_CONFIG) private config: AppConfig) {
  //   console.log("Experimental Logger Service", config);
  // }
  prefix = "Root";
  log(message: string) {
    console.log(this.prefix + " Experimental :" + message);
  }
}
