import { Component, OnInit } from '@angular/core';
import { HomePageDataBase } from '../homeData';
import { Router } from '@angular/router';
import { ContactsScrollCheckService } from '../contacts-scroll-check.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  midInfo:any[];
  banners:any[];
  carouselClicked:boolean = false;
  constructor( private getHomePageData:HomePageDataBase,private router:Router,private service:ContactsScrollCheckService) {
    this.midInfo = this.getHomePageData.getMidData();
    this.banners = this.getHomePageData.getBanners();
   }

  ngOnInit() {  
    this.carouselInit();
  }
  carouselInit(){
    const banner = <any>document.querySelector('.main-banner');
    let index = 0;
    banner.style.backgroundImage = this.banners[index];
    const slideshow = setInterval(() => {
      if(this.carouselClicked){
        clearInterval(slideshow);
      }
      else{
      index++;
        if(index > 2 ){
          index = 0;
          }
      
      banner.style.backgroundImage = this.banners[index];
        
      }
      
    }, 5000);
  }
  switchBg(e){
    let id = e.target.getAttribute("data-id");
    const bg = <any>document.querySelector(".main-banner");
    bg.style.backgroundImage = this.banners[id];
    this.carouselClicked = true;
  }
  goToContacts(){
    this.router.navigate(["/about"]);
    this.service.setTrue();
  }
}
