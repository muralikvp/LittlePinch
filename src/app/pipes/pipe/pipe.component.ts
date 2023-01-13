import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
name : string = "Hope Tutors";
count:number=0;
accountBalance:number=1000;
obj ={name:'Murali' };

uppercase( s:string ){
return s.toUpperCase();
}

}
