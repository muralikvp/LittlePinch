import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent {

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
