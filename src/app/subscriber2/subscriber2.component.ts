import { Component } from '@angular/core';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-subscriber2',
  templateUrl: './subscriber2.component.html',
  styleUrls: ['./subscriber2.component.css']
})
export class Subscriber2Component {

  
  users:any;
 name:string;
  constructor(private uservice:UserService){}
  ngOnInit(): void {
   
      this.uservice.getUsers().subscribe((u) => {
        this.users = u;
        console.log(u);
      }); 

      this.name = this.uservice.specialName;
}
}
