import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upper',
  pure:true // will trigger once 
  //pure:true // will trigger whenever Change detection occured 
  
})
export class UpperPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("Inside the Pure Pipes");
    return value.toUpperCase();
  }
}
