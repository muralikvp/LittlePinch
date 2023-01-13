import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //Available on ngAfterViewInit
  // @ViewChild('tmplRef') vwChild: ElementRef = {} as ElementRef;

  @ViewChild('tmplRef', { static: true }) vwChild: ElementRef = {} as ElementRef;

  count = 5;
  ShowSub = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('my-wrapper-class');
    console.log(this.el.nativeElement);
    console.log("Inside Ng on init " + this.vwChild.nativeElement);
  }

  ngAfterViewInit(): void {
    //  @ViewChild('tmplRef') vwChild: ElementRef = {} as ElementRef;
    // in this case Element will be available after View init
    console.log("ng After View Init " + this.vwChild.nativeElement);
  }

  getInput(i: HTMLInputElement) {
    console.log(i);
    i.classList.add('myinput');
    i.value = "Hope Tutors";

  }

  ToggleShowSub() {
    this.ShowSub = !this.ShowSub;
  }
  incrementCount() {
    this.count++;
  }
}
