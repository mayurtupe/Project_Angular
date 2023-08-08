import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {

  hotelDetails: any;
  userName!: string;
  userHotelDetails: any[] = [];
  showTable: any;
  dataById: any;
  dialog: any;

  constructor(private router: Router,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  ngOnInit() {
    console.log('oninit calling...');
    this.userName = this.commonService.userName;
  }

  hotelRegistration() {
    this.router.navigateByUrl('owner/newhotelregistration')
  }
  async myHotelDetails() {
    this.showTable = !this.showTable;
    let endPoint = 'hotelDetails';
    // this.commonApiCallService.getApiCall(endPoint).subscribe(data => {
    //   this.hotelDetails = data;
    // })
    this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails', this.hotelDetails);
    this.userHotelDetails = []
    if (this.hotelDetails) {
      this.hotelDetailsByOwner(); if (this.userHotelDetails.length > 0) {

      }
      else {
        this.commonService.warningToaster('no any hotel available', 'Warning', {
          timeOut: 10000,
          positionClass: 'toast-top-center'
        })
      }
    } else {
      alert('no owner data avaible')
    }
  }

  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element)
      }
    })
  }
  delete(id: number) {
    const dialogRef = this.dialog.open(DialogComponent, {
      // data: {id:id},
      width: '250px',
      height: '250px'
    })

    dialogRef.afterClosed().subscribe((yesValue: any) => {
      if (yesValue === 'YES') {
        this.deleteRecord(id);
        this.showTable = !this.showTable,
          this.myHotelDetails()
      }
    });

  }

  async deleteRecord(id: number) {
    await this.commonApiCallService.deleteApiCall('hotelDetails', id).toPromise();
  }


  async edit(id: number) {
    this.commonService.id = id;
    this.dataById = await this.commonApiCallService.getApiCall('hotelDetails', id).toPromise();
    this.commonService.dataById = this.dataById;
    this.router.navigateByUrl('owner/newhotelregistration')
  }
}

