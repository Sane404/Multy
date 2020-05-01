import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MultiPage';
  showToTop:boolean = false;
  @HostListener('window:scroll')
  onScroll(){
    if (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop > 100){
      this.showToTop = true;
    }
    else{
      this.showToTop = false;
    }
  }
  goToTop(){
    window.scrollTo(0,0)
  }
}
