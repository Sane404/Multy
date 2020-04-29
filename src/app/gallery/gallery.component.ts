import { Component, OnInit } from '@angular/core';
import { imageRequest } from '../imageRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private httpReq:imageRequest,private router:Router) { }
  imageUrls:any;
  ngOnInit(){
    this.httpReq.imageRequest().subscribe((x) => {this.imageUrls = [...x.hits],console.log(this.imageUrls)}); 

  }
  imageEnter(e){
        e.target.children[0].style.display = 'block';
  }
  imageLeave(e){
    e.target.children[0].style.display = 'none';
  }
  select(pic){

    this.router.navigate(['/gallery',pic.id])
  }
}
