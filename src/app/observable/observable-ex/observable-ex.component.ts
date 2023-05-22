import { compileClassMetadata } from '@angular/compiler';
import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { observable } from 'rxjs/internal/symbol/observable';
import { CustObservable } from '../custObservable';
import { samService } from '../sam.service';

@Component({
  selector: 'app-observable-ex',
  templateUrl: './observable-ex.component.html',
  styleUrls: ['./observable-ex.component.css'],
})
export class ObservableExComponent {
  fromSub = null;
  constructor(private samservice: samService) {
    //  https://stackoverflow.com/questions/47537934/what-is-the-difference-between-observable-and-a-subject-in-rxjs
    //     Observables

    // They are cold: Code gets executed when they have at least a single observer.

    // Creates copy of data: Observable creates copy of data for each observer.

    // Uni-directional: Observer can not assign value to observable(origin/master).

    // The code will run for each observer . If its a HTTP call, it gets called for each observer.

    // if its a service we want to share among all the components, it wont have latest result all new subscribers will still subscribe to same observable and get value from scratch

    // Unicast means can emit values from the observable not from any other component.

    // Subject

    // They are hot: code gets executed and value gets broadcast even if there is no observer.

    // Shares data: Same data get shared between all observers.

    // bi-directional: Observer can assign value to observable(origin/master).

    // If are using using subject then you miss all the values that are broadcast before creation of observer. So here comes Replay Subject

    // multicast, can cast values to multiple subscribers and can act as both subscribers and emmitter

    // Custom Observable

        // //  Normal Observable
        // //Obervable Method function
        // const test$ = new Observable((s) => {
        //   console.log('Console Start');
        //   setTimeout(() => s.next('11'), 5000);
        //   s.next('Murali');
        //   s.next('Vairamani');
        //   s.error("Occurred from Observable");
        //   s.next('Hope Tutors');
        //   s.complete();
        //   s.next('Sheik');
        //   // setTimeout(() => s.next("44"), 1000);
        // });

        // //calling observaed
        // test$.subscribe({
        //   next: (v) => {
        //     if (v == 'Murali') {
        //       console.log('Trainer', v);
        //     } else if (v == 'Vairamani') {
        //       console.log('Student');
        //     } else {
        //       console.log(v);
        //     }
        //   },
        //   error: (e) => console.error("Error:"+ e),
        //   complete: () => console.info('complete'),
        // });
        // console.log('Console End');

        // test$.subscribe(
        //     x => {
        //       console.log("2nd", x);
        //     },
        //     error => { console.log("error received 1:", error) },
        //     () => { console.log("Completed1") }
        //   );

        // test$.subscribe(
        //   x => {
        //     console.log("3rd", x);
        //   },
        //   error => { console.log("error received:", error) },
        //   () => { console.log("Completed") }
        // );


    //Observables problem statement
    // each subscription receives the different values as observables developed as unicast by design.

      //   const obs = new Observable((s) => {
      //     s.next(Math.random());
      //   });

      //  obs.subscribe(res=>{
      //    console.log('subscription a :', res); //subscription a :0.2859800202682865
      //  });

      //  obs.subscribe(res=>{
      //    console.log('subscription b :', res); //subscription b :0.694302021731573
      //  });

       //Subjects is similar to event-emitter and it does not invoke for each subscription
       //Create an Service and place below line of code
        let obs$ = new Subject();

        //Call the same component in same page
        //Component 1
        obs$.subscribe(res=>{
          console.log('subscription a :', res); // subscription a : 0.91767565496093
        });

        //Component 2
        obs$.subscribe(res=>{
          console.log('subscription b :', res);// subscription b : 0.91767565496093
        });

        //place below line of code in same Service
        //Call below method on button click
        obs$.next(Math.random());



  // //  How to create our own Observable class and method
  //   const check$ = new CustObservable(s => {
  //     s.next("112");
  //     s.next("212");
  //   });

  //   check$.subscribe(
  //     x => {
  //       console.log("lst", x);
  //     }
  //   );

  //   check$.subscribe(
  //     x => {
  //       console.log("2nd", x);
  //     }
  //   );

    //Subjects
    // var ob$: Observable<any> = of(1, 2, 3);
    // ob$.subscribe(x => console.log('From App Obs', x));

    // var sub: Subject<any> = new Subject();
    // sub.subscribe(x => console.log('From the app Sub 1', x));
    // sub.next('Krishnan');

    // //Component communication between Subject-ex and observable-ex
    // this.samservice.sub.subscribe(x => {
    //   console.log("From Observable-Ex Component", x);
    //   this.fromSub = x;
    // }
    // )

    // this.samservice.ob$.subscribe(x => {
    //   console.log("From Observable-Ex Component-1", x);
    //   this.fromSub = x;
    // }
    // )

    // this.samservice.behObs$.subscribe(x => {
    //   console.log("From Behaviour Subscription", x);

    // }
    // )

    // let obs = Observable.create((observer) => {
    //   observer.next(Math.random());
    // });

    // obs.subscribe((res) => {
    //   console.log('subscription a :', res); //subscription a :0.2859800202682865
    // });

    // obs.subscribe((res) => {
    //   console.log('subscription b :', res); //subscription b :0.694302021731573
    // });

    // let obs1 = new Subject();

    // obs1.subscribe((res) => {
    //   console.log('subscription a1 :', res); // subscription a : 0.91767565496093
    // });

    // obs1.subscribe((res) => {
    //   console.log('subscription b1 :', res); // subscription b : 0.91767565496093
    // });

    // obs1.next(Math.random());
  }
}

// function fromEvent(target, eventName) {
//   return new observable(o => {
//     const handler = e => o.next(e);
//     target.addEventListener(eventName, handler);
//     return () => {
//       console.log("Unsubsribed");
//       target.removeEventListener(eventName, handler);
//     };
//   });
// }
