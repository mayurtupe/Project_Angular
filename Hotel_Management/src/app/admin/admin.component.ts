import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiCallService } from '../common/common-api-call.service';
import { CommonService } from '../common/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  adminForm!: FormGroup;
  adminData: any;
  endPoint!: string;
  validAdmin: boolean = false;
  data: any;

  constructor(private router: Router,
    private commonApiCallService: CommonApiCallService,
    private fb: FormBuilder,
    private commonService: CommonService,
    private http: HttpClient) { }

  ngOnInit() {
    this.AdminDetails();
    this.endPoint = this.commonService.journey;
    this.getAdminApiData();
    console.log(this.endPoint);
  }
  back() {
    this.router.navigateByUrl('home')
  }
  admin() {

    console.log(this.adminForm.value);

    if (this.adminData) {
      this.isValidAdmin();
      if (this.validAdmin) {
        this.router.navigateByUrl('owner/ownersuccess');
      }
      else {
        this.router.navigateByUrl('home');
      }
    }
  }
  getAdminApiData() {
    this.commonApiCallService.getApiCall(this.endPoint).subscribe(getAdminResponse => {
      this.adminData = getAdminResponse;
    })
  }

  isValidAdmin() {
    this.adminData.forEach((element: any) => {
      if (element.adminName === this.adminForm.value.adminName && element.password === this.adminForm.value.password) {
        this.validAdmin = true;
      }
    });
    return
  }
  AdminDetails() {
    this.adminForm = this.fb.group({
      adminName: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }

  submit() {
    let request = {
      Admin: this.adminForm.value.admin,
      Password: this.adminForm.value.password,

    }
  }
  login() {
    this.admin();
    console.log(this.adminForm.value);
    console.log('this.adminForm', this.adminForm);
  }

}