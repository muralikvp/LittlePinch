import { Component, ViewChild, ViewRef } from '@angular/core';
import { Ex1Component, Ex3Component } from '../ex1/ex1.component';
import { HostDirective } from '../host.directive';


@Component({
  selector: 'app-ex2',
  templateUrl: './ex2.component.html',
  styleUrls: ['./ex2.component.css']
})
export class Ex2Component {
  @ViewChild(HostDirective, { static: true }) childRef: HostDirective;
  components = [Ex1Component, Ex3Component];
  constructor() {

  }
  loadComponent(id) {
    console.log("Child Ref: "+this.childRef);//Getting the child reference
    console.log("View Ref: "+this.childRef,ViewRef);//Getting the child reference 
    this.childRef.viewRef.clear(); // Clear the existing Child reference

    //Resolve the component and create as factory
    //const resolvedFactory = this.factoryRes.resolveComponentFactory(this.components[id]);

    //Resolve the component and create as factory
    //Create component
    const compref = this.childRef.viewRef.createComponent(this.components[id]);
    compref.instance.name = id == 0? "Hope Tutors": "Training";
    console.log(compref);
  }
}
