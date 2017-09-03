import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http }from '@angular/http'
@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
	private routeSub:any;
  private req:any;
  videonum:any;
	slug:string;
  constructor(private route:ActivatedRoute,private http:Http) { }

  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
  this.slug=params['slug']
  this.req=this.http.get('assets/json/videoslist.json').subscribe(data=>{
    data.json().filter(item=> {
      if(this.slug===item.slug){
        this.videonum=item
      }
    })
  })
  })
  }
  ngOnDestroy(){

  this.routeSub.unsubscribe()
  this.req.subscribe()
  }

}
