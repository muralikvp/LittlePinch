import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  txtVal:string = "Vairam";

    //Available on ngAfterViewInit
   @ViewChild('tmplRef', { static: true }) h: ElementRef = {} as ElementRef;

  count = 5;
  ShowSub = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('my-wrapper-class');
    console.log("Parent Construtor" + this.el.nativeElement);
     console.log("Parent Inside Ng on init " + this.h.nativeElement);
  }

  ngAfterViewInit(): void {
    //  @ViewChild('tmplRef') vwChild: ElementRef = {} as ElementRef;
    // in this case Element will be available after View init
     console.log("ng After View Init " + this.h.nativeElement);
  }

  getInput(i: HTMLInputElement) {
    console.log(i);
    i.value = "Hope Tutors";
  }

  getNormalInput() {
    this.txtVal = "Arun";
  }

  ToggleShowSub() {
    this.ShowSub = !this.ShowSub;
  }
  incrementCount() {
    this.count++;
  }
}
