import { Component } from '@angular/core';
import { animationFrameScheduler, asapScheduler, asyncScheduler, delay, filter, interval, map, Observable, observeOn, of, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component_Rxjs {
  progress$: Observable<number>;
  progress2$: Observable<number>;
 
  ngOnInit() {
    this.progress$ = interval(1000 / 60).pipe(take(100));
    this.progress2$ = interval(0, animationFrameScheduler).pipe(take(100));

    const stream$ = of("water");
    const waterPipe$ = stream$.pipe(
      filter((water => water === "water"))) //Filter the Water 
      .subscribe((water) => console.log("Drink it", water));


    const waterPipe1$ = stream$.pipe(
      map((w) => warmup(w)))     //Heat the water
      .subscribe((x) => console.log("Take Shower", x));

    const waterPipe2$ = stream$.pipe(
      filter((water => water === "water")), //Filter the Water 
      map((water) => warmup(water))    //Heat the water 
    ).subscribe((water) => console.log("Take Shower", water));

    const waterPipe3$ = stream$.pipe(
      tap(((water) => console.log("Release Air") )), //Release air 
    ).subscribe((water) => console.log("Take Shower", water));

    const waterPipe4$ = stream$.pipe(
      // map(() =>{throw Error("Broken Pipe")}),
      filter((water => water === "water")), //Won't Execute
      map((water) => warmup(water))    //Won't Execute 
    ).subscribe((water) => console.log("Take Shower", water));

    const cityWaterPipe$ = of("Solid").pipe(
      filter((water => water === "Solid"))); //Has its own properties 
     
      const waterPipe5$ = stream$.pipe(
        switchMap(() =>cityWaterPipe$),
        filter((water => water === "Solid")),
        map((water) => warmup(water))    
      ).subscribe((water) => console.log("Take Shower", water));



    waterPipe$.unsubscribe();
    waterPipe1$.unsubscribe();
    waterPipe2$.unsubscribe();
    waterPipe3$.unsubscribe();
    waterPipe4$.unsubscribe();
    waterPipe5$.unsubscribe();

//in Promises we cant appply multiple operators like filter,map. 
// In Streams We shall able to do  multiple operators like filter,map 


  }
 
  runAsync() {
    // console.log("Regular console log");
    // requestAnimationFrame(() => console.log("animation frame callback"));
    setTimeout(() => { console.log("set timeout call back"); }, 0); // Macro task 
    Promise.resolve("Promise value").then(console.log);//Micro Task
    //of("Micro Task stream value").pipe(observeOn(asapScheduler)).subscribe(console.log); //?? Micro Task
    of("Micro Task stream value").pipe(delay(0, asyncScheduler)).subscribe(console.log); //?? Micro Task
    of("Macro Task stream value").pipe(observeOn(asyncScheduler)).subscribe(console.log); //?? Macro Task


  }
}
function warmup(water: string): any {
  return "Heat " + water ;
}

