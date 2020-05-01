import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HttpClientModule} from '@angular/common/http'; 
import { HomePageDataBase } from './homeData';
import { GalleryLargeComponent } from './gallery-large/gallery-large.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutComponent,
    GalleryComponent,
    GalleryLargeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAeIEcenBi-YD7EyLPObJXZpFf7okIbOoQ'
    }),
    HttpClientModule
  ],
  providers: [HomePageDataBase],
  bootstrap: [AppComponent]
})
export class AppModule { }
