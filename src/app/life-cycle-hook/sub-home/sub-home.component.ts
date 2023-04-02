import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-sub-home',
  templateUrl: './sub-home.component.html',
  styleUrls: ['./sub-home.component.css']
})
export class SubHomeComponent implements OnInit, OnDestroy, OnChanges, DoCheck {

  @Input() attr1: number = 0;

  constructor() {
    //Inside Constructor we will not get the value from the parent component
    //if we need to inject some services then use the constructor
    console.log("Constructor:" + this.attr1);
  }
  ngOnChanges(arg: any): void {
    //It will not trigger whenever the variables changes inside the component
    // it will trigger whenever the input property changes
    console.log("Ng On Changes :"+ arg);
  }
  ngOnInit(): void {
    //Inside ng on init we will get the value from the parent component
    //Api calls we need ng on init
    console.log("Ng On Init:" + this.attr1);
  }

  ngDoCheck(): void {
    // // Whenever the change detection happens this events will occur
     console.log("ngDoCheck Change Detection ");
  }

  ngOnDestroy(): void {
    console.log("Destroying the Sub Home");
  }

  IncreaseCounter():void{
    this.attr1++;
    console.log("Constructor:" + this.attr1);
  }

}
