import { Component } from '@angular/core';
import { map, mergeMap, Observable, Subject, take, tap, zip } from 'rxjs';

type drum = ['Flat Bread', 'meat', 'sauce', 'tomato', 'cabbage'];
interface order {
  amount: number;
  customerId: number;
}

interface Product {
  product: drum;
  customerId: number;
}


let flatBreadCounter = 0;
let meatCounter = 0;
let sauceCounter = 0;
let tomatoCounter = 0;
let cabbageCounter = 0;
let customerId=0;
@Component({
  selector: 'app-rx-ex2',
  templateUrl: './rx-ex2.component.html',
  styleUrls: ['./rx-ex2.component.css']
})
export class RxEx2Component {
  durum$: Observable<drum>;
  delivery$: Observable<Product>;

  _order = new Subject<order>();
  _flatbread = new Subject<'Flat Bread'>();
  _meat = new Subject<'meat'>();
  _sauce = new Subject<'sauce'>();
  _tomato = new Subject<'tomato'>();
  _cabbage = new Subject<'cabbage'>();

  ngOnInit(): void {

    this.durum$ = zip(
      this._flatbread.pipe(map((ing) => `${ing}${++flatBreadCounter}`), tap(console.log)),
      this._meat.pipe(map((ing) => `${ing}${++meatCounter}`), tap(console.log)),
      this._sauce.pipe(map((ing) => `${ing}${++sauceCounter}`), tap(console.log)),
      this._tomato.pipe(map((ing) => `${ing}${++tomatoCounter}`), tap(console.log)),
      this._cabbage.pipe(map((ing) => `${ing}${++cabbageCounter}`), tap(console.log)),
    ).pipe(
      tap((drum) => console.log("Enjoy", drum))
      // After all the above 
      //Streams get emitted atleast once then tap method will be get called
      //For every five combination of above Results it will emit the value in tap
      // if one of the above get executed earlier then other four will wait to complete and then it will emit tap

    );
    
   

    this.delivery$ = this._order.pipe(
      tap(order => console.log("New Order", order)),
      mergeMap(({amount, customerId}) =>
        this.durum$.pipe(
          take(amount),
          map((drum) => ({ product: drum, customerId }))
        )
      ),
      tap(product => console.log("Delivered Product", product))
    )
   
  }

  dispatchOrder() {
    const amount =Math.floor(Math.random() * 3)+1;
    ++customerId;
  this._order.next({amount,customerId});
  }

}
