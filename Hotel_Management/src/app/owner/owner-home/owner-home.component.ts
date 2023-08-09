import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent implements OnInit {

  loginForm!: FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser: any;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;
  forgotPassword: boolean = false;
  userName!: string;

  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService) { }

  back() {
    this.router.navigateByUrl('owner/owner-home');
  }
  ngOnInit() {
    this.endPoint = this.commonService.journey;
    this.forgotPassword = this.commonService.forgotPassword;
    this.userName = this.commonService.userName;
    console.log('endPoint', this.endPoint);
    this.loginFormDatails();
    this.getOwnerApiData();
  }


  loginFormDatails() {
    this.loginForm = this.fb.group({
      userName: [],
      password: []
    })
  }

  forgetPasswordFormDetails() {
    this.forgetPasswordForm = this.fb.group({
      newPassword: [],
      confirmPassword: []
    })
  }

  login() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.userName) {
      this.commonService.userName = this.loginForm.value.userName;
    }
    // this.getOwnerApiData();
    // console.log('this.ownerData', this.ownerData);

    if (this.ownerData) {
      this.ownerData.forEach((ownerData: any) => {
        if (ownerData.UserName === this.loginForm.value.userName && ownerData.Password === this.loginForm.value.password) {
          this.validUser = true
          // return ownerData;
        }
      });

      if (this.validUser) {
        this.router.navigateByUrl('owner/ownersuccess');
        this.commonService.successToaster('Welcome, you are logged in', 'Success',
          {
            timeOut: 10000,
            positionClass: 'toast-top-right'
          })
      }
      else {
        // alert('username or password is incorrect');
        this.commonService.warningToaster('Password is incorrect', 'Warning',
          {
            timeOut: 10000,
            positionClass: 'toast-top-left'
          })
        this.commonService.forgotPassword = true;
        this.router.navigateByUrl('owner/owner-home');
      }
    }
  }

  async getOwnerApiData() {
    // this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse => {
    //   this.ownerData = getOwnerResponse;
    // })
    this.ownerData = await this.commonApiCallService.getApiCall(this.endPoint).toPromise()
    console.log('this.ownerData', this.ownerData);
  }

  // isValidUser() {
  //   this.ownerData.forEach((ownerData: any) => {
  //     if (ownerData.UserName === this.loginForm.value.userName && ownerData.password === this.loginForm.value.password) {
  //       this.validUser = true;
  //     }
  //   });
  //   return
  // }

  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgetPasswordFormDetails();
  }

  submit() {
    this.updatePassword();
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.commonService.forgotPassword = false;
  }

  async updatePassword() {
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.UserName === this.loginForm.value.userName) {
        user = data;
      }
    })
    if (user) {
      let request = {
        Password: this.forgetPasswordForm.value.newPassword
      }
      // this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).subscribe((respo: any) => {
      //   console.log('respo', respo);
      // })
      await this.commonApiCallService.patchApiCall(this.endPoint, request, user.id).toPromise()
    }
    else {
      alert('user is not exist')
    }
  }
}
