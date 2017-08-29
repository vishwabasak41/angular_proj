import { Component, OnInit , OnDestroy} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
	private routeSub:any;
	slug:string;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
  this.routeSub = this.route.params.subscribe(params => {
  this.slug=params['slug']
  })
  }
  ngOnDestroy(){

  this.routeSub.unsubscribe()
  }

}
