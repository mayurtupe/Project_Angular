import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

}