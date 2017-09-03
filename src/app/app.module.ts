import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { VideosComponent } from './videos/videos.component';
import { AnotherComponent } from './another/another.component';
import { AppRoutingModule } from './app.routing';
import { provideRoutes } from '@angular/router';
import { SafePipe } from './utilities/safe.pipe';
import { HomepageComponent } from './homepage/homepage.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HttpModule } from '@angular/http';
import { SearchComponent } from './search/search.component';
import { ResultsComponent } from './results/results.component' 
@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    AnotherComponent,
    SafePipe,
    HomepageComponent,
    SearchComponent,
    ResultsComponent
  
  ],
  imports: [
  BsDropdownModule.forRoot(),
  CarouselModule.forRoot(),
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
      AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
