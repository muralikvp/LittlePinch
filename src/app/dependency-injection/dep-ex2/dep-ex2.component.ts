import { Component } from '@angular/core';
import { AppConfig, APP_CONFIG } from 'src/app/config.token';
import { ExperimentalLoggerService } from 'src/app/Services/experimental-logger.service';
import { LoggerService } from 'src/app/Services/logger.service';
import { LegacyLogger } from '../logger.legacy';

@Component({
  selector: 'app-dep-ex2',
  templateUrl: './dep-ex2.component.html',
  styleUrls: ['./dep-ex2.component.css'],
  providers:[{
    provide:LoggerService,
    //useClass: ExperimentalLoggerService
    //return instance of Experimental Logger Service 
    // rather than Logger service instane

//    useValue: LegacyLogger
    //We will use useValue if type is not in class.
    //IN this case LegacyLogger is constant 
    useFactory:(config:AppConfig) => {
      return config.experimentalEnabled
      ? new ExperimentalLoggerService():
       new LoggerService();

    },
   deps:[APP_CONFIG]

  }]
})
export class DepEx2Component {

   constructor(private logger: LoggerService
    // ,
    // private exp :ExperimentalLoggerService
    ) {
   
  }
  ngOnInit():void{
//    this.logger.prefix ="Ex2: ";
    this.logger.log("Dep - Ex2 component init");

    //this.exp.log("Expe"); 

  }
}
