import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { provideRoutes } from '@angular/router';
import { SearchComponent} from './search/search.component';

import { HomepageComponent } from './homepage/homepage.component';
import { VideosComponent } from './videos/videos.component';
import { AnotherComponent } from './another/another.component';
import { ResultsComponent } from './results/results.component' 
const appRoutes: Routes = [{
	path:"",
	component:HomepageComponent
},
{
	path:"videos",
	component:VideosComponent
},
{
	path:"search",
	component:ResultsComponent
},
{
	path:"videos/:slug",
	component:AnotherComponent,
}
]

@NgModule({
	imports:[
	RouterModule.forRoot(
	appRoutes)],
	exports:[
	RouterModule]
	})

export class AppRoutingModule{}