import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import * as CONSTANTS from 'src/app/common/common-constants'

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {

  public hotelDetails: any;
  public userName!: string;
  public userHotelDetails: any[] = [];
  public showTable: any;
  public dataById: any;
  public ownerName: any;

  constructor(private router: Router,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService, public dialog: MatDialog) { }

  ngOnInit() {
    console.log('oninit calling...');
    // this.userName = this.commonService.userName;
    this.userName = 'mayur'
  }

  hotelRegistration() {
    this.router.navigateByUrl('owner/newhotelregistration')
    // Toaster Applied
    this.commonService.warningToaster('Enter the Details of the Hotel/Entity', 'Information', {
      timeOut: 1000,
      positionClass: 'toast-top-right'
    })
  }
  async myHotelDetails() {
    this.showTable = !this.showTable;
    // let endPoint = 'hotelDetails';
    let endPoint = CONSTANTS.endpoint.hotelDetails;
    // this.commonApiCallService.getApiCall(endPoint).subscribe(data => {
    //   this.hotelDetails = data;
    // })
    this.hotelDetails = await this.commonApiCallService.getApiCall(endPoint).toPromise()
    console.log('hotelDetails', this.hotelDetails);
    this.userHotelDetails = []
    if (this.hotelDetails) {
      this.hotelDetailsByOwner();
      if (this.userHotelDetails.length > 0) {
        //Toaster Applied
        this.commonService.successToaster('Operation Successful', 'Success', {
          timeOut: 1000,
          positionClass: 'toast-top-right'
        })

      }
      else {
        // Toaster Applied
        this.commonService.warningToaster('no any hotel available', 'Warning', {
          timeOut: 1000,
          positionClass: 'toast-top-right'
        })
      }

    }
  }

  hotelDetailsByOwner() {
    this.hotelDetails.forEach((element: any) => {
      if (element.ownerName === this.userName) {
        this.userHotelDetails.push(element)
        // this.commonService.successToaster('Details Displayed Successful', 'Success', {
        //   timeOut: 1000,
        //   positionClass: 'toast-top-right'
        // })
      }
      if (element.adminName === this.userName) {
        this.userHotelDetails.push(element)
        // this.commonService.successToaster('Details Displayed Successful', 'Success', {
        //   timeOut: 1000,
        //   positionClass: 'toast-top-right'
        // })
      }
    })
  }
  public delete(id: number):void {
    const dialogRef = this.dialog.open(DialogComponent, {
      panelClass: 'dialog-container',
      // width: 'fit-content',
      // height: 'fit-content',

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

