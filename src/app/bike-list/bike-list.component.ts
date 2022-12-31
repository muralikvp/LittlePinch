import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bike } from '../Bike';
import { PostsService } from '../Services/posts.service';


@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {
  @Input() bike: Bike;
  imageStr: string;

  constructor(private router: Router,private postsService:PostsService) {
  }
  ngOnInit(): void {
//    this.bike = { name: 'Honda', image: "https://w7.pngwing.com/pngs/145/697/png-transparent-honda-logo-honda-logo-car-honda-accord-honda-fit-motor-angle-text-logo-thumbnail.png" };
  // subscribe to the Observable to make the HTTP call
  this.postsService.getPosts().subscribe((posts) => {
    // we received our posts!
    console.log(posts);
  }); 

}

  getDetails(ev) {
    console.log(ev.srcElement.currentSrc);
    this.imageStr = ev.srcElement.currentSrc;
  }
}
