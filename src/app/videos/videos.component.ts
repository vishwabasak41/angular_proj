import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
name='vishwa';
videoList = [
        {
         name: "Item 1",
         slug: "item-1"   
        },
        {
         name: "Item 2",
         slug: "item-2"   
        },
        {
         name: "Item 3",
         slug: "item-3"   
        }
    ]
  constructor() { }

  ngOnInit() {
  }

}
