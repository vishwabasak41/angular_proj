import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser' 
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
         slug: "item-1"  ,
         embed: "rGlEZpOVjGo" 
        },
        {
         name: "Item 2",
         slug: "item-2",
         embed:"IhP3J0j9JmY"  
        },
        {
         name: "Item 3",
         slug: "item-3",
         embed:"fKopy74weus"  
        }
    ]
  constructor(private sanitizer:DomSanitizer) { 

  }

  ngOnInit() {
  }

  getMyVideo(item){
   return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+item.embed )

  }

}
