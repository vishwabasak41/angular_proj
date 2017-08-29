import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { provideRoutes } from '@angular/router';


import { VideosComponent } from './videos/videos.component';
import { AnotherComponent } from './another/another.component';

const appRoutes: Routes = [{
	path:"",
	component:VideosComponent
},
{
	path:"videos",
	component:VideosComponent
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