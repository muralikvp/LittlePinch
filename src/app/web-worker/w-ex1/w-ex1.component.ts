import { Component } from '@angular/core';

@Component({
  selector: 'app-w-ex1',
  templateUrl: './w-ex1.component.html',
  styleUrls: ['./w-ex1.component.css']
})
export class WEx1Component {
  result:any;

constructor(){
  
}
LoadHeavyComp(i: HTMLInputElement)
{
  console.log(i);
  // if (typeof Worker !== 'undefined') {
  //   // Create a new
  //  // src/app/web-worker/app.worker.ts
  //   const worker = new Worker(new URL('./web-worker/app.worker', import.meta.url));
  //   worker.onmessage = ({ data }) => {
  //     this.result = data.prime;
  //   };
  //   worker.postMessage(1000);
  // } else {
  //   // Web workers are not supported in this environment.
  //   // You should add a fallback so that your program still executes correctly.
  // }
}
}
