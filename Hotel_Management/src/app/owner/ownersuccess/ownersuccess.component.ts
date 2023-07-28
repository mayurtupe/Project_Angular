import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  hotelDetails: any;
  userName!: string;
  userHotelDetails: any[] = [];
  constructor(private router: Router,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

    ngOnInit(){
      console.log('oninit calling...');
        this.userName = this.commonService.userName;
    }

  hotelRegistration() {
    this.router.navigateByUrl('owner/newhotelregistration')
  }
  myHotelDetails() {
    let endPoint = 'hotelDetails';
    this.commonApiCallService.getApiCall(endPoint).subscribe(data=>{
      this.hotelDetails = data;
    })
    console.log('hotelDetails',this.hotelDetails);
    if(this.hotelDetails){
      this.hotelDetailsByOwner();
    }
  }

  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element)
      }
      console.log('this.userHotelDetails', this.userHotelDetails);
    })
    
  }

}
