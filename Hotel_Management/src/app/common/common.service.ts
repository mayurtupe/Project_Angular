import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  journey!:string;
  userName!:string;
  forgotPassword!:boolean;
  constructor(private toastrService:ToastrService) { }

  whiteSpaceValidator(nameField:any){
    let data = nameField.value;
    let newData = data?.trim();
    let isNotValid = data.length ! = newData.length;
    return isNotValid ? {whiteSpace: true}: null
  }

  warningToaster(title:any,msg:any){
    this.toastrService.warning('Warning, Error msg')
  }
}
// showHTMLMessage("message", "title"){
//   this.toastr.success("message", "title",{
//     enableHtml: true
//   })
// }
