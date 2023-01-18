import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lower',
  pure:true
})
export class LowerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    console.log("Inside the lower case Pipes");

    return value.toLowerCase();
  }

  // transform(value: number, ...args: unknown[]): unknown {
  //   console.log("Inside the lower case Pipes");
  //  if(value > 18)
  //  {
  //   return "Eligible";
  //  }
  //  else 
  //  {
  //   return "Not Eligible";
  //  } 
  //  // return value.toLowerCase();
  // }

}
