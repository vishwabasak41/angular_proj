import { Component, OnInit ,OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit ,OnDestroy{
	private req:any;
	private videos:any;
	ImageList=[

// {image:"/assets/images.jpg",title:"wherever it takes",slug:'video-1'},
// {image:"/assets/another.jpg",title:"believer",slug:'video-2'},
// {image:"/assets/newer.jpg",title:"thunder",link:'video-3'}
// {image:"/assets/mages.jpg",title:"wherver it takes",link:"/videos/videos-1"}

]

prevented=false
  constructor(private router:Router,private http:Http) { }

  ngOnInit() {
  	this.req=this.http.get('assets/json/videoslist.json').subscribe(data=>{
    data.json().filter(item=> {
    	if(item.featured==true)
    		this.ImageList.push(item)
        // this.ImageList=data.json();
      	// console.log(ImageList)
    })
  })
  }

  ngOnDestroy(){
  	this.req.unsubscribe();
  }
  preventNormal(event:MouseEvent,image:any){
  	if(!image.prevented){
  	this.router.navigate(['./videos'])
  }
  }
}
