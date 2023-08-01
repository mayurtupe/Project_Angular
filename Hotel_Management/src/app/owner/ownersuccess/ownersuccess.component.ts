import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  hotelDetails: any;
  journey!:string;
  endPoint!:string;
  userName!: string;
  userHotelDetails: any[] = [];
  serchboxval: any;
  inp: any;
  inputValue: any;
  // searchboxvalue: any;

  tableHeading: any[] = [
    'hotelName',
    'hotelAddress',
    'roomsAvailable',
    'hotelMenu',
    'roomsAvailable',
  ];
  constructor(private router: Router,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  ngOnInit() {
    console.log('oninit calling...');
    this.userName = this.commonService.userName;
    this.getdata();
  }

  hotelRegistration() {
    this.router.navigateByUrl('owner/newhotelregistration')
  }
  myHotelDetails() {
    let endPoint = 'hotelDetails';
    this.commonApiCallService.getApiCall(endPoint).subscribe(data => {
      this.hotelDetails = data;
    })
    console.log('hotelDetails', this.hotelDetails);
    if (this.hotelDetails) {
      this.hotelDetailsByOwner();
    }
  }

  hotelDetailsByOwner() {
    this.userHotelDetails=[]
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element)
      }
      console.log('this.userHotelDetails', this.userHotelDetails);
    })

  }
  getdata() {
    let endpoint = 'hotelDetails';
    this.commonApiCallService.getApiCall(endpoint).subscribe((data: any) => {
      this.hotelDetails = data;
    });
    console.log('hotelDetails', this.hotelDetails);
  }

  inptVal(val: any) {
    console.log('val', val.target.value);
    console.log('inputValue', this.inputValue);

    this.inp = val.target.value;
  }
  searchBoxValue() {
    this.serchboxval = this.inp;
  }
}

