import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!: string;
  userName!: string;
  forgotPassword!: boolean;
  id!: any;
  dataById: any;

  constructor(private toastrService: ToastrService) { }

  whiteSpaceValidator(nameField: any) {
    let data = nameField.value;
    let newData = data?.trim();
    let isNotValid = data.length! = newData.length;
    return isNotValid ? { whiteSpace: true } : null
  }

  warningToaster(msg: any, title: any, configuration: any) {
    this.toastrService.warning(msg, title, configuration)
  }
  successToaster(msg: any, title: any, configuration: any) {
    this.toastrService.success(msg, title, configuration)
  }
}
