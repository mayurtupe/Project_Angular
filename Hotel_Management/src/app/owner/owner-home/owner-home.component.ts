import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from 'src/app/common/common-api-call.service';
import { CommonService } from 'src/app/common/common.service';

@Component({
  selector: 'app-owner-home',
  templateUrl: './owner-home.component.html',
  styleUrls: ['./owner-home.component.scss']
})
export class OwnerHomeComponent {

  loginForm!: FormGroup;
  endPoint!: string;
  ownerData: any;
  validUser: boolean = false;
  forgetPasswordForm!: FormGroup;
  showForgetPasswordForm: boolean = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private commonApiCallService: CommonApiCallService,
    private commonService: CommonService,
    private http: HttpClient) { }

  ngOnInit() {
    this.endPoint = this.commonService.journey;
    console.log('endPoint...', this.endPoint);;
    this.loginFormDatails();
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
    this.getOwnerApiData();
    console.log('this.ownerData', this.ownerData);

    if (this.ownerData) {
      this.isValidUser();
      if (this.validUser) {
        this.router.navigateByUrl('owner/ownersuccess');
      }
      else {
        this.router.navigateByUrl('owner/owner-home');
      }
    }

  }
  back() {
    this.router.navigateByUrl('home')
  }

  getOwnerApiData() {
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getOwnerResponse => {
      this.ownerData = getOwnerResponse;
    })
    console.log('this.ownerData', this.ownerData);
  }

  isValidUser() {
    this.ownerData.forEach((ownerData:any) => {
      if (ownerData.UserName === this.loginForm.value.userName && ownerData.password === this.loginForm.value.password) {
        this.validUser = true;
      }
    });
    return
  }
  forgetPassword() {
    this.showForgetPasswordForm = !this.showForgetPasswordForm;
    this.forgetPasswordFormDetails();
  }
  submit() {
    if (this.ownerData) {
      this.updatePassword();
    }
    else {
      this.getOwnerApiData();
      this.updatePassword();
    }
  }
  updatePassword(){
    var user: any;
    this.ownerData.forEach((data: any) => {
      if (data.UserName === this.loginForm.value.userName) {
        user = data;
      }
      console.log('user',user);
    })
    if (user) {
      let request = {
        Password: this.forgetPasswordForm.value.newPassword
      }
      this.commonApiCallService.patchApiCall(this.endPoint,request,user.id).subscribe((respo: any) => {
        console.log('respo', respo);

      })
    }
  }
}
