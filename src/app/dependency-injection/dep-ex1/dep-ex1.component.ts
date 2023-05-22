import { Component, Optional, Self, SkipSelf } from '@angular/core';
import { LoggerService } from 'src/app/Services/logger.service';

@Component({
  selector: 'app-dep-ex1',
  templateUrl: './dep-ex1.component.html',
  styleUrls: ['./dep-ex1.component.css'],
   providers:[LoggerService] // uncomment if we use the self() in constructor
})
export class DepEx1Component {
  constructor(private logger:LoggerService){
    if (this.logger) {
          this.logger.log('DepEx1Component : constructor init');
        }
  }
  //Above code will throw null error because root is not declared in service

  // constructor(@Optional() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.log('constructor init');
  //   }
  // }
// Above code >> if  providedIn: 'root' is not delcared in service level
//then optional will register here itself and null error will not be thrown

 // constructor(@Optional() private logger: LoggerService) {
  //   if (this.logger) {
  //     this.logger.log('constructor init');
  //   }
  // }

  // constructor(@Self() private logger: LoggerService
  // //,@SkipSelf() private parentLogger:  LoggerService
  // ) {

  //   if (this.logger) {
  //     this.logger.prefix = "Dep Ex1 Component : ";
  //    // console.log(this.logger.prefix + "Constructor init");
  //     this.logger.log('Dep Ex1 constructor init');
  //   }
  //   // if(this.parentLogger)
  //   // {
  //   //   this.parentLogger.log('Dep Ex1 constructor init');
  //   // }
  // }
  //Self will look for declaration in dep-ex1 component itself.
  // Eventhough providedIn: 'root' is delcared. It will not consider

  title = "Resolution modifiers";
}
