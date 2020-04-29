import { Component, OnInit } from '@angular/core';
import { imageRequest } from '../imageRequest';
import { ContactsScrollCheckService } from '../contacts-scroll-check.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  linkedThroughContacts:boolean = false;
  tempimages:any[] = [];
  finalImages:any[] = [];
  constructor(private img:imageRequest,private service:ContactsScrollCheckService) { }
  lat = 48.688732;
  lng = -115.614623;
  ngOnInit() {
    this.img.imageRequest().subscribe((x) => x.hits.forEach(element => {
      this.tempimages.push(element.largeImageURL);
      this.finalImages = this.tempimages.slice(0,4);
    }));
    console.log(this.service.linkedThroughContacts)
    if(this.service.linkedThroughContacts == true){
      let contacts = <any>document.getElementById('contacts');
      console.log(contacts)
      contacts.scrollIntoView();
      this.service.setFalse();
      ///....
    }
  }
  grow(e){
    const pic = e.target;
    const about = e.target.parentNode.children[1];
    const card = e.target.parentNode;
    card.classList.add('fullCard');
    about.classList.add('fullAbout');
    pic.classList.add('fullPic');
    if(pic.classList.contains('fullPic')){
      return;
    }
  } 
}
