import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signUpForm!: FormGroup;
  journey!: string;
  postResponse: any;
  // SelectedG = new FormControl();
  // gender: string[] = [];
  whiteSpaceValidator: any | string;

  constructor(private fb: FormBuilder,
    private commonService: CommonService,
    private apicallService: CommonApiCallService,
    private router: Router) { }

  ngOnInit() {
    this.journey = this.commonService.journey;
    console.log('this.journey', this.journey);
    this.FormDetails();
  }

  FormDetails() {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(7), Validators.pattern('[a-zA-Z0-9 ]*')]],
      panCard: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],

    })
  }

  submit() {
    let request = {
      UserName: this.signUpForm.value.name,
      PanCard: this.signUpForm.value.panCard,
      City: this.signUpForm.value.city,
      Email: this.signUpForm.value.email,
      Mobile: this.signUpForm.value.mobile,
      Gender: this.signUpForm.value.gender,
      Password: this.signUpForm.value.password,
      ConfirmPassword: this.signUpForm.value.confirmPassword,
    }

    this.apicallService.postApiCall(this.journey, request).subscribe(resp => {
      console.log('response', resp);
      this.postResponse = resp;
    })
    // if(this.postResponse?.id){
    this.router.navigateByUrl('owner/ownersuccess');
    //}
  }
  back() {
    this.router.navigateByUrl('home');
  }

}
