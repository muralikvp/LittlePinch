import { Component } from '@angular/core';
import { PostsService } from '../Services/posts.service';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent {


  users:any;
  name:string;

  constructor(private uservice:UserService){}
  ngOnInit(): void {
   
      this.uservice.getUsers().subscribe((u) => {
        this.users = u;
        console.log(u);
      }); 

      this.uservice.specialName = "Shiek";
      this.name = this.uservice.specialName;
}
}
