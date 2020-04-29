import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { imageRequest } from '../imageRequest';
import { Router } from '@angular/router';
@Component({
  selector: 'app-gallery-large',
  templateUrl: './gallery-large.component.html',
  styleUrls: ['./gallery-large.component.css']
})
export class GalleryLargeComponent implements OnInit {

  constructor(private route:ActivatedRoute,private httpReq:imageRequest,private router:Router) { }
  imgArray:any[]=[];
  selectedPIC;
  URL:any;
  ngOnInit() {
    let selectedId = parseInt(this.route.snapshot.paramMap.get("id"));
    this.httpReq.imageRequest().subscribe(x => {this.imgArray = [...x.hits], this.selectedPIC = this.imgArray.find(({id}) => id == selectedId).largeImageURL});
  }
  goBack(){
    this.router.navigate(['/gallery']);
  }
}
