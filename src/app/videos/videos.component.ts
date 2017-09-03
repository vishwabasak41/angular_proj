import { Component, OnInit, OnDestroy } from '@angular/core';
import { Http,HttpModule } from '@angular/http' 
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit , OnDestroy {
  private req :any;
  videolist:[any];
  name='vishwa';
  date;
  videoList: [any];

  constructor(private http: Http){}

  ngOnInit() {
    this.date = new Date();
    this.req=this.http.get('assets/json/videoslist.json').subscribe(data=>{
      this.videolist=data.json() as [any];
    })
  }
  

  ngOnDestroy(){
    this.req.unsubscibe()

  }

  getMyVideo(item){
   return "https://www.youtube.com/embed/"+item.embed 

  }


}
