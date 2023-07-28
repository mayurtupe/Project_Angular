import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';
import { CommonService } from '../common/common.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  adminForm!:FormGroup;
  adminData: any;
  endPoint!:string;
  validAdmin:boolean=false;

  constructor (private router:Router,
    private commonApiCallService:CommonApiCallService,
    private fb:FormBuilder,
    private commonService: CommonService){}

  back() {
    this.router.navigateByUrl('home')
  }
  admin(){
    console.log(this.adminForm.value);
    console.log('this.adminData',this.adminData);

    if(this.adminData) {
      this.isValidAdmin();
      if (this.validAdmin) {
        this.router.navigateByUrl('owner/ownersuccess');
      }
      else {
        this.router.navigateByUrl('home');
      }
    }
}
getAdminApiData(){
  this.commonApiCallService.getApiCall(this.endPoint).subscribe(getAdminResponse=>{
    this.adminData = getAdminResponse;
  })
}

isValidAdmin(){
  this.adminData.forEach((element:any)=>{
    if(element.userName === this.adminForm.value.userName && element.password === this.adminForm.value.password){
      this.validAdmin = true;
    }
  });
  return
}
AdminDetails() {
  this.adminForm = this.fb.group({
    Admin: ['', [Validators.required]],
    password: ['', [Validators.required]],
  })
}

submit() {
  let request = {
    Admin: this.adminForm.value.admin,
    Password: this.adminForm.value.password,

  }
}
login(){
  console.log(this.adminForm.value);
  // this.getOwnerApiData();
  console.log('this.adminData',this.adminData);
}
}