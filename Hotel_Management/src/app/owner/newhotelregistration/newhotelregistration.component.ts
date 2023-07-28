import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';

@Component({
  selector: 'app-newhotelregistration',
  templateUrl: './newhotelregistration.component.html',
  styleUrls: ['./newhotelregistration.component.scss']
})
export class NewhotelregistrationComponent {
  hotelRegistrationForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private router: Router) { }

  ngOnInit() {
    this.myOwnerRegistration();
  }
  myOwnerRegistration() {
    this.hotelRegistrationForm = this.fb.group({
      ownerName: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[A-za-z ]*$')]],
      ownerContact: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelName: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9/$@ ]*$')]],
      hotelAddress: ['', [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-z0-9 ]*$')]],
      hotelContact: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
      hotelMenu: ['', [Validators.required, Validators.minLength(2)]],
      roomsAvailable: ['', [Validators.required, Validators.pattern('[0-9]*$')]],
      ownerCheck: ['', [Validators.required,]],
      userPass: ['', [Validators.required,]],
    })
  }
  back() {
    this.router.navigateByUrl('owner/owner-home');
  }
  submit() {
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
    this.commonApiCallService.postApiCall(endpoint, request).subscribe((resp: any) => {
      console.log(resp);

    })
    this.router.navigateByUrl('owner/ownerSuccess')


  }

}