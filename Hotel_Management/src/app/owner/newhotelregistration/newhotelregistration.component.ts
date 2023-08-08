import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  hotelRegistrationForm!: FormGroup;
  editId!: any;
  dataById: any;

  constructor(private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private router: Router,
    private commonService:CommonService) { }

  ngOnInit() {
    this.editId = this.commonService.id;
    this.dataById = this.commonService.dataById;
    this.myOwnerRegistration();
  }
  myOwnerRegistration() {
    this.hotelRegistrationForm = this.fb.group({
      ownerName: [this.dataById ? this.dataById.ownerName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[A-za-z ]*$')]],
      ownerContact: [this.dataById ? this.dataById.ownerContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelName: [this.dataById ? this.dataById.hotelName : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress: [this.dataById ? this.dataById.hotelAddress : '', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact: [this.dataById ? this.dataById.hotelContact : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelMenu: [this.dataById ? this.dataById.hotelMenu : '', [Validators.required, Validators.minLength(2)]],
      roomsAvailable: [this.dataById ? this.dataById.roomsAvailable : '', [Validators.required, Validators.pattern('[0-9]*$')]],
      userPass: [this.dataById ? this.dataById.password : '', [Validators.required,]],
    })
  }
  back() {
    this.router.navigateByUrl('owner/ownersuccess');
  }
  submitDetails() {
    let endpoint = 'hotelDetails';
    console.log('form data', this.hotelRegistrationForm.value);

    let request = {
      ownerName: this.hotelRegistrationForm.value.ownerName,
      ownerContact: this.hotelRegistrationForm.value.ownerContact,
      hotelName: this.hotelRegistrationForm.value.hotelName,
      hotelAddress: this.hotelRegistrationForm.value.hotelAddress,
      hotelContact: this.hotelRegistrationForm.value.hotelContact,
      hotelMenu: this.hotelRegistrationForm.value.hotelMenu,
      roomsAvailable: this.hotelRegistrationForm.value.roomsAvailable,
      ownerCheck: this.hotelRegistrationForm.value.ownerCheck,
      password: this.hotelRegistrationForm.value.userPass,
    }
    if(this.editId){
    this.commonApiCallService.patchApiCall(endpoint, request, this.editId).subscribe((resp: any) => {
      console.log(resp);
    })
    }
    else{
      this.commonApiCallService.postApiCall(endpoint, request).subscribe((resp:any)=>{
        console.log(resp);
        
      })
    }
    this.router.navigateByUrl('owner/ownerSuccess');
  }

  ngOnDestroy(){
    this.commonService.dataById = {};
    this.commonService.id = '';
  }

}