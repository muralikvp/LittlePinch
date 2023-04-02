import { Component } from '@angular/core';
import { from, interval, fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax'; // ajax function
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-obs1',
  templateUrl: './obs1.component.html',
  styleUrls: ['./obs1.component.css'],
})
export class Obs1Component {
  users: any;
  constructor(private uservice: UserService) {}

  ngOnInit(): void {
    this.uservice.getUsers().subscribe((u) => {
      this.users = u;
      console.log(u);
    });
  }
  // el = document.getElementById('obs1');
  // mouseMoves = fromEvent(this.el, 'mousemove');
  // subscription = this.mouseMoves.subscribe((e: MouseEvent) => {
  //   console.log(`Coordnitaes of mouse pointer: ${e.clientX} * ${e.clientY}`);
  //   });

  // data.subscribe({
  //  next(response) { console.log(response); },
  //  error(err) { console.error('Error: ' + err); },
  //  complete() { console.log('Completed'); }
  // });
}
