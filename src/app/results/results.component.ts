import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
private routeSub:any;
query:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
  console.log(params)
  this.query=params['q']
  console.log("q"+typeof(params['q']))
  })
}

 ngOnDestroy(){

  this.routeSub.unsubscribe()
}
}