import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
search(event,formdata){
	console.log(event)
	console.log(formdata.value)
	let query=formdata.value;
	if(query){
	this.router.navigate(['/search', {q:query}])
	}

}
}
