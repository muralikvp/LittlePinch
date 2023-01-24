import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { ObservableExComponent } from 'src/app/observable/observable-ex/observable-ex.component';


// 1.Cold Observabled start to emit values only when we subscribe to them. 
// Hot ones emit always descpite we have subscribers or not

// 2.cold observables are unicase, and hpst observables are multicase(share value between multiple subscribers)

// 3.For hot observables Data Source is created and activated outside of observable. 
// For cold ones Data Source will be Inside the observables

@Component({
  selector: 'app-hot-cold-obser',
  templateUrl: './hot-cold-obser.component.html',
  styleUrls: ['./hot-cold-obser.component.css']
})
export class HotColdObserComponent implements OnInit {
 
  post$!: Observable<any[]>;

  post1$!: Observable<any[]>;


  constructor(private httpClient:HttpClient){

  }
  ngOnInit(): void {

    this.post$ = this.httpClient.get<any>
    (`https://jsonplaceholder.typicode.com/posts`);
    
    // this.post1$ = this.httpClient.get<any>
    // (`https://jsonplaceholder.typicode.com/posts`).pipe(shareReplay());

    const obs$ = of(null).pipe(map (()=> Math.random())); 
    console.log("First Observable");
    obs$.subscribe(console.log);
    obs$.subscribe({
      next:value => console.log(value)
    });
    obs$.subscribe(console.log);
    obs$.subscribe(console.log);

    const obs1$ = fromTimeStamp();
    console.log("Second Observable");
    obs1$.subscribe(console.log);
    obs1$.subscribe({
      next:value => console.log(value)
    });
    console.log("Before Timer");

    setTimeout(() => {
      obs1$.subscribe(console.log);
      console.log("After Timer");            
    }, 2000);

  }
}

const fromTimeStamp =(): Observable<number> => {
  
  const timeStamp = Date.now();
  // This above line should be outside of Return statement.Fot Hot Observables 
  // If we placed outside then data will be cached and used multiple times.

  return new Observable((subscriber) => {
    subscriber.next(timeStamp);
  } );

  // Cold Observable
  // return new Observable((subscriber) => {
    // const timeStamp = Date.now();
  //   subscriber.next(timeStamp);
  // } );
} 
