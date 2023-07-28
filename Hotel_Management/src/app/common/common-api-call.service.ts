import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonApiCallService {
  url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  postApiCall(endPoint:string, formData:any){
    let url = this.url + endPoint;
    return this.http.post(url, formData);
  }
  
  getApiCall(endPoint:string){
    let url = this.url + endPoint;
    return this.http.get(url);
  }
  patchApiCall(endPoint:any, data:any, id:number){
    let url = this.url + endPoint + '/' + id;
    return this.http.patch(url,data)
  }
}
