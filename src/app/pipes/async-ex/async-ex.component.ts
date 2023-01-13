import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-async-ex',
  templateUrl: './async-ex.component.html',
  styleUrls: ['./async-ex.component.css']
})
export class AsyncExComponent {
  listOfToDos$: any = [];
  subs: any;
  constructor(private userService: UserService) {

  }
  ngOnInit(): void {
    this.listOfToDos$ = this.userService.getUsers();
  }
}
