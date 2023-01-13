import { Component } from '@angular/core';
import { samService } from '../sam.service';

@Component({
  selector: 'app-subject-ex',
  templateUrl: './subject-ex.component.html',
  styleUrls: ['./subject-ex.component.css']
})
export class SubjectExComponent {
  constructor(private samService: samService) {
    this.samService.sub.subscribe(x => console.log("From subject-ex component", x))
  }
  emit(){
    this.samService.sendData(Math.random());
  }
}
