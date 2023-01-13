import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";

@Injectable()
export class samService{
  sub:Subject<number>; //// we can call the next method in client
   ob$:Observable<number>; // we cant call the next method in implementation of this
   private behSub:BehaviorSubject<number>;
   behObs$:Observable<number>;

    constructor(){
        this.sub = new Subject<number>();
        this.ob$ = this.sub.asObservable();
        this.behSub = new BehaviorSubject<number>(1000);
        this.behObs$ = this.behSub.asObservable();
    }
    sendBehData(data:number)
    {
       this.behSub.next(data);
    }
    sendData(data:number)
    {
        this.sub.next(data);
    }
}
