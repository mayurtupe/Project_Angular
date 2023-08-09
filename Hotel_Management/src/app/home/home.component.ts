import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  showLogOut:boolean = false;
constructor (private router:Router,
              private commonService: CommonService){}

  journey(journey:string){
    this.showLogOut = true;
    
    if(journey === 'admin'){
      this.commonService.journey = 'admin'
      this.router.navigateByUrl('admin');
      this.commonService.successToaster('Operation successful', 'Success', {
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
    }
    else if(journey === 'owner'){
      this.commonService.journey = 'owner'
      this.router.navigateByUrl('owner');
      this.commonService.successToaster('Operation successful', 'Success', {
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
    }
    else {
      this.commonService.journey = 'user'
      this.router.navigateByUrl('user');
      this.commonService.successToaster('Operation successful', 'Success', {
        timeOut: 10000,
        positionClass: 'toast-top-right'
      })
    }
  }
}
