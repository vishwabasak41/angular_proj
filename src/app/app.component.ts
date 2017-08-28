import { Component } from '@angular/core';

export class Hero{
	name:string;
	age:number;
	powers:string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Heroes';
  hero: Hero = {
  name: 'Windstorm',
  age:21,
  powers:'magic stick'
};

  }

