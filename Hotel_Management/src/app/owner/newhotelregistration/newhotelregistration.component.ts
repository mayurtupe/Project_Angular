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

  constructor(private fb: FormBuilder,
    private commonService: CommonService,
    private apicallService: CommonApiCallService,
    private router: Router) { }
  back() {
    this.router.navigateByUrl('home');
  }
  FormDetails() {
    this.hotelRegistrationForm = this.fb.group({
      hotelname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      pinCode: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],

    })
  }
  submit() {
    let request = {
      HotelName: this.hotelRegistrationForm.value.hotelName,
      Address: this.hotelRegistrationForm.value.address,
      City: this.hotelRegistrationForm.value.city,
      Email: this.hotelRegistrationForm.value.email,
      Mobile: this.hotelRegistrationForm.value.mobile,
      Pincode: this.hotelRegistrationForm.value.pinCode,
      Password: this.hotelRegistrationForm.value.password,
      ConfirmPassword: this.hotelRegistrationForm.value.confirmPassword,
    }
}
}