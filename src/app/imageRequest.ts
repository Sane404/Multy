import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
    providedIn: 'root'
})
export class imageRequest{
    ApiUrl:any = `https://pixabay.com/api/?key=15822856-2a52d1e0a2e7afb021ab65a54&q=forest&trees&image_type=photo&orientation=horizontal&order=popular&per_page=24`;
    constructor(private http:HttpClient){ }
    imageRequest(){
            return this.http.get<any>(this.ApiUrl);
    }
    async getAsyncData() {
        return await this.http.get(this.ApiUrl).toPromise();
    
    }
}